# CI/CD: GitHub Actions to GoDaddy cPanel (FTPS)

## Intent
Pushing to `main` updates https://www.vvkfoundation.in automatically, replacing
manual FileZilla uploads. Modelled on the HungundaFPO project's `deploy.yml`.

## Goals
- Deploy on push to `main`, plus a manual run with an optional dry run.
- Upload only changed files (the action keeps a sync-state file on the server).
- Never touch other sites in the shared `public_html`.

## Non-goals
- No build step: the site is plain static HTML/CSS/JS.
- No staging environment, no rollbacks beyond redeploying an earlier commit.
- The HungundaFPO `sync-commodities.yml` and its secrets step are not carried over.

## Approaches considered
1. **FTPS via `SamKirkland/FTP-Deploy-Action` (chosen).** Works with the FTP
   account already used in FileZilla; same pattern as HungundaFPO.
2. cPanel Git Version Control: needs cPanel setup and a deploy file in the repo.
3. rsync over SSH: SSH is often disabled on shared hosting.

## Design
- Workflow: `.github/workflows/deploy.yml`.
- Target dir: `./`, because the dedicated cPanel FTP account is locked to
  `/home/<user>/public_html/vvkfoundation.in` (no subfolder). With a broader
  account, set the repo variable `FTP_SERVER_DIR` to `/public_html/vvkfoundation.in/`.
- Secrets (set by the owner in GitHub, never committed): `FTP_SERVER`,
  `FTP_USERNAME`, `FTP_PASSWORD`. A dedicated cPanel FTP account restricted to
  the site folder is recommended.
- Manual runs default to dry run; pushes to `main` deploy for real.
- Excluded from upload: git/CI files, `Backup_19_nov/`, `*.zip`, `.ftpquota`,
  `server.py`, `serve.json`, `Code.gs`, `docs/`, `README*`, `.well-known/`, `cgi-bin/`.
- `.htaccess` is excluded for now: the server's copy is kept. Remove it from the
  `exclude` list in `deploy.yml` once the repo copy has been reviewed against the server's.
- The report PDFs stay in the deploy; `assets/js/pages/reports.js` links to them.

## Rollout
1. Add the three secrets in GitHub (Settings > Secrets and variables > Actions).
2. Run the workflow manually with dry run on; read the file list in the log.
3. Run it again with dry run off, or push to `main`.
