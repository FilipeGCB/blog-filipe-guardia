#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
SITE_DIR="$(cd -- "$SCRIPT_DIR/.." && pwd)"
REPO_ROOT="$(git -C "$SITE_DIR" rev-parse --show-toplevel)"
DIST_DIR="$SITE_DIR/dist"
DEPLOY_REPO="${PUBLIC_REPO:-FilipeGCB/blog-filipe-guardia}"
SOURCE_SHA="$(git -C "$REPO_ROOT" rev-parse HEAD)"
SOURCE_BRANCH="$(git -C "$REPO_ROOT" branch --show-current)"

need() {
  command -v "$1" >/dev/null 2>&1 || {
    echo "ERROR: required command not found: $1" >&2
    exit 1
  }
}

for cmd in git gh npm curl base64; do
  need "$cmd"
done

gh auth status >/dev/null

if [[ "${ALLOW_DIRTY:-0}" != "1" ]]; then
  git -C "$REPO_ROOT" diff --quiet
  git -C "$REPO_ROOT" diff --cached --quiet
fi

if [[ "${SKIP_RELEASE_GATES:-0}" != "1" ]]; then
  cd "$SITE_DIR"
  npm ci
  npm run check
  npm run build:ci
  npm run preserve:legacy
  npm run audit:routes
  npx playwright install chromium
  npm run test:visual
fi

[[ -f "$DIST_DIR/index.html" ]] || {
  echo "ERROR: generated site missing: $DIST_DIR/index.html" >&2
  exit 1
}

gh repo view "$DEPLOY_REPO" >/dev/null 2>&1 || {
  echo "ERROR: public deploy repository does not exist: $DEPLOY_REPO" >&2
  echo "Run npm run release:migrate-private for the first migration." >&2
  exit 1
}

TMP_DIR="$(mktemp -d)"
cleanup() { rm -rf "$TMP_DIR"; }
trap cleanup EXIT

PUBLIC_DIR="$TMP_DIR/public-site"
gh repo clone "$DEPLOY_REPO" "$PUBLIC_DIR" -- --depth=1 >/dev/null 2>&1 || {
  mkdir -p "$PUBLIC_DIR"
  git -C "$PUBLIC_DIR" init -b main >/dev/null
  git -C "$PUBLIC_DIR" remote add origin "https://github.com/$DEPLOY_REPO.git"
}

cd "$PUBLIC_DIR"
git checkout -B main >/dev/null 2>&1 || true
find . -mindepth 1 -maxdepth 1 ! -name .git -exec rm -rf {} +
cp -a "$DIST_DIR"/. .
touch .nojekyll
cat > .deploy-meta.json <<EOF
{
  "source_repository": "FilipeGCB/blog-filipe-guardia-source",
  "source_sha": "$SOURCE_SHA",
  "source_branch": "$SOURCE_BRANCH",
  "generated_only": true
}
EOF

# The public repository is intentionally generated output only.
rm -rf .github node_modules package.json package-lock.json assets-source src tests scripts docs 2>/dev/null || true

git add -A
if git diff --cached --quiet; then
  echo "public-release: no generated changes for $SOURCE_SHA"
else
  git config user.name "Filipe Guardia"
  git config user.email "filipeguardia@gmail.com"
  git commit -m "deploy: blog source $SOURCE_SHA" >/dev/null
  git push -u origin main >/dev/null
fi

META_CONTENT="$(gh api "repos/$DEPLOY_REPO/contents/.deploy-meta.json?ref=main" --jq '.content' | tr -d '\n' | base64 -d)"
grep -q "\"source_sha\": \"$SOURCE_SHA\"" <<<"$META_CONTENT" || {
  echo "ERROR: public deploy metadata does not match source SHA $SOURCE_SHA" >&2
  exit 1
}

echo "public-release: $DEPLOY_REPO <- $SOURCE_SHA"
