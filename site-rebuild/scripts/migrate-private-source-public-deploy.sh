#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
SITE_DIR="$(cd -- "$SCRIPT_DIR/.." && pwd)"
REPO_ROOT="$(git -C "$SITE_DIR" rev-parse --show-toplevel)"
OWNER="FilipeGCB"
SOURCE_ORIGINAL="$OWNER/blog-filipe-guardia"
SOURCE_PRIVATE="$OWNER/blog-filipe-guardia-source"
STAGE_REPO="$OWNER/blog-filipe-guardia-public-stage"
FINAL_PUBLIC="$OWNER/blog-filipe-guardia"
SITE_URL="https://filipegcb.github.io/blog-filipe-guardia/"
SOURCE_SHA="$(git -C "$REPO_ROOT" rev-parse HEAD)"
CUTOVER_STARTED=0
CUTOVER_COMPLETE=0
SOURCE_WAS_PRIVATIZED=0

need() {
  command -v "$1" >/dev/null 2>&1 || {
    echo "ERROR: required command not found: $1" >&2
    exit 1
  }
}

repo_exists() {
  gh repo view "$1" >/dev/null 2>&1
}

rename_repo() {
  local from="$1" new_name="$2"
  gh api --method PATCH "repos/$from" -f "name=$new_name" >/dev/null
}

rollback() {
  local rc=$?
  [[ "$CUTOVER_COMPLETE" == "1" ]] && return 0
  [[ "$CUTOVER_STARTED" == "1" ]] || return "$rc"

  echo "migration: cutover failed; attempting rollback" >&2

  if [[ "$SOURCE_WAS_PRIVATIZED" == "1" ]] && repo_exists "$SOURCE_PRIVATE"; then
    gh repo edit "$SOURCE_PRIVATE" --visibility public --accept-visibility-change-consequences >/dev/null 2>&1 || true
  fi

  if repo_exists "$FINAL_PUBLIC" && ! repo_exists "$STAGE_REPO"; then
    rename_repo "$FINAL_PUBLIC" "blog-filipe-guardia-public-stage" >/dev/null 2>&1 || true
  fi

  if repo_exists "$SOURCE_PRIVATE" && ! repo_exists "$SOURCE_ORIGINAL"; then
    rename_repo "$SOURCE_PRIVATE" "blog-filipe-guardia" >/dev/null 2>&1 || true
    local origin
    origin="$(git -C "$REPO_ROOT" remote get-url origin 2>/dev/null || true)"
    if [[ -n "$origin" ]]; then
      git -C "$REPO_ROOT" remote set-url origin "${origin/blog-filipe-guardia-source/blog-filipe-guardia}" || true
    fi
  fi

  echo "migration: rollback attempted; source was not intentionally left private" >&2
  return "$rc"
}
trap rollback EXIT

for cmd in git gh npm curl base64; do
  need "$cmd"
done

gh auth status >/dev/null

[[ "$(git -C "$REPO_ROOT" branch --show-current)" == "main" ]] || {
  echo "ERROR: migration must run from main" >&2
  exit 1
}
git -C "$REPO_ROOT" diff --quiet
git -C "$REPO_ROOT" diff --cached --quiet
git -C "$REPO_ROOT" fetch origin main >/dev/null
[[ "$(git -C "$REPO_ROOT" rev-parse HEAD)" == "$(git -C "$REPO_ROOT" rev-parse origin/main)" ]] || {
  echo "ERROR: local main must match origin/main before migration" >&2
  exit 1
}

repo_exists "$SOURCE_ORIGINAL" || {
  echo "ERROR: expected source repository not found: $SOURCE_ORIGINAL" >&2
  exit 1
}

if repo_exists "$SOURCE_PRIVATE"; then
  echo "ERROR: target private source name already exists: $SOURCE_PRIVATE" >&2
  exit 1
fi

if ! repo_exists "$STAGE_REPO"; then
  gh repo create "$STAGE_REPO" \
    --public \
    --description "Generated static deployment for Filipe Guardia's blog. Source lives in a private repository." \
    --disable-issues \
    --disable-wiki >/dev/null
fi

# Build, validate and publish the exact current source to a disposable public
# staging repository before any repository rename or visibility change.
PUBLIC_REPO="$STAGE_REPO" "$SCRIPT_DIR/publish-public-site.sh"

STAGE_META="$(gh api "repos/$STAGE_REPO/contents/.deploy-meta.json?ref=main" --jq '.content' | tr -d '\n' | base64 -d)"
grep -q "\"source_sha\": \"$SOURCE_SHA\"" <<<"$STAGE_META" || {
  echo "ERROR: staged deploy-meta does not match source SHA $SOURCE_SHA" >&2
  exit 1
}

echo "migration: public staging verified at $STAGE_REPO"
CUTOVER_STARTED=1

# Preserve the public URL by moving source out of the way and moving the
# generated repository into the original project-repository name.
rename_repo "$SOURCE_ORIGINAL" "blog-filipe-guardia-source"
origin="$(git -C "$REPO_ROOT" remote get-url origin)"
git -C "$REPO_ROOT" remote set-url origin "${origin/blog-filipe-guardia/blog-filipe-guardia-source}"

rename_repo "$STAGE_REPO" "blog-filipe-guardia"

# Publish GitHub Pages directly from the public generated repository's main
# branch. Public Pages builds do not consume the private source Actions quota.
if gh api "repos/$FINAL_PUBLIC/pages" >/dev/null 2>&1; then
  gh api --method PUT "repos/$FINAL_PUBLIC/pages" --input - >/dev/null <<'JSON'
{"build_type":"legacy","source":{"branch":"main","path":"/"}}
JSON
else
  gh api --method POST "repos/$FINAL_PUBLIC/pages" --input - >/dev/null <<'JSON'
{"build_type":"legacy","source":{"branch":"main","path":"/"}}
JSON
fi

pages_ready=0
for _ in $(seq 1 60); do
  status="$(gh api "repos/$FINAL_PUBLIC/pages" --jq '.status' 2>/dev/null || true)"
  if [[ "$status" == "built" ]]; then
    pages_ready=1
    break
  fi
  sleep 5
done
[[ "$pages_ready" == "1" ]] || {
  echo "ERROR: public Pages site did not reach built state" >&2
  exit 1
}

live_ready=0
for _ in $(seq 1 60); do
  live_meta="$(curl -fsS "${SITE_URL}.deploy-meta.json" 2>/dev/null || true)"
  if grep -q "\"source_sha\": \"$SOURCE_SHA\"" <<<"$live_meta"; then
    live_ready=1
    break
  fi
  sleep 5
done
[[ "$live_ready" == "1" ]] || {
  echo "ERROR: final public URL did not expose deploy-meta for $SOURCE_SHA" >&2
  exit 1
}

echo "migration: final public deployment verified at $SITE_URL"

# Privacy is deliberately the final mutation, after generated output and the
# live public URL have both been verified.
gh repo edit "$SOURCE_PRIVATE" --visibility private --accept-visibility-change-consequences >/dev/null
SOURCE_WAS_PRIVATIZED=1
visibility="$(gh repo view "$SOURCE_PRIVATE" --json visibility --jq '.visibility')"
[[ "$visibility" == "PRIVATE" ]] || {
  echo "ERROR: source repository visibility is $visibility, expected PRIVATE" >&2
  exit 1
}

CUTOVER_COMPLETE=1
trap - EXIT

echo "migration: COMPLETE"
echo "  private source: $SOURCE_PRIVATE"
echo "  public generated deploy: $FINAL_PUBLIC"
echo "  public URL: $SITE_URL"
echo "  source SHA: $SOURCE_SHA"
