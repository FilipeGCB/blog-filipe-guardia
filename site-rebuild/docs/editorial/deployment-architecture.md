# Deployment architecture — private source, public generated site

## Objective

Keep the blog source private without paying GitHub Actions minutes for routine editing, while keeping the public URL unchanged:

`https://filipegcb.github.io/blog-filipe-guardia/`

The source repository contains Astro, editorial sources, tests, image masters, scripts, specs and history. The public repository contains generated static output only.

## Final topology

- Private source: `FilipeGCB/blog-filipe-guardia-source`
- Public generated deploy: `FilipeGCB/blog-filipe-guardia`
- GitHub Pages source: public deploy repository, `main` branch, `/`
- Public URL: `https://filipegcb.github.io/blog-filipe-guardia/`

Keeping the generated repository under the original repository name preserves the existing Astro `site`/`base` path and avoids changing public links.

## Cost policy

Routine work runs locally. The private source repository has no automatic push or pull-request GitHub Actions triggers.

The remaining source workflow is `workflow_dispatch` only and exists solely as an explicit emergency validation gate. It consumes private Actions minutes only when somebody manually starts it.

GitHub Pages publishes from the public generated repository. Any GitHub-managed public Pages build belongs to the public repository rather than the private source repository.

## Normal release

From `site-rebuild/` in the private source repository:

```bash
npm run release:public
```

The release script performs the full local gates before publishing:

1. dependency install;
2. deterministic `check` suite;
3. Astro production build;
4. legacy preservation and route audit;
5. Playwright multi-viewport visual QA;
6. copy of `dist/` only into the public repository;
7. `.deploy-meta.json` recording the exact private source commit;
8. push to public `main`;
9. GitHub API verification that the public commit carries the expected source SHA.

No source tree, tests, image masters, specs, package metadata, scripts or `.github` workflow files are intentionally copied into the public deployment repository.

## One-time migration

Run once from a clean, synchronized `main`:

```bash
npm run release:migrate-private
```

The migration is deliberately ordered to minimize risk:

1. create `FilipeGCB/blog-filipe-guardia-public-stage` as a public repository;
2. run all local release gates and publish generated output there;
3. verify `.deploy-meta.json` against the exact source SHA;
4. rename the source repository to `blog-filipe-guardia-source`;
5. rename the staged generated repository to `blog-filipe-guardia`;
6. enable GitHub Pages from public `main` `/`;
7. wait for Pages to report `built`;
8. verify the live public URL exposes the expected deploy metadata;
9. only then change the source visibility to private.

If cutover fails after repository renames but before completion, the script attempts rollback of repository names and source visibility.

## Required local tooling

The release path expects:

- `git`
- GitHub CLI `gh`, authenticated for `FilipeGCB`
- Node/npm
- Chromium support for Playwright
- `curl`
- `base64`

The migration requires repository administration rights because it creates and renames repositories, configures Pages, and changes source visibility.

## Operational rule

Do not reintroduce automatic Actions triggers into the private source repository merely to deploy the blog. Validation and build belong local; the public repository is a generated publication target.
