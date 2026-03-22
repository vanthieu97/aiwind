# Contributing to AIwind

## Clone and develop

```bash
git clone https://github.com/vanthieu97/aiwind.git
cd aiwind   # or your local folder name, e.g. vanthdev-ui
npm install
npm run build
```

- **`npm run storybook`** — component playground (port 6006).
- **`npm run build-storybook`** — static output in `storybook-static/`.

Match patterns in `src/<component>/<component>.tsx` and colocated `*.stories.tsx`. Public API must be re-exported from `src/index.ts`.

---

## Link a local build into another app

**Option A — `file:` dependency** (in the consuming app’s `package.json`):

```json
"@vanthdev/aiwind": "file:../path/to/aiwind"
```

Run `npm run build` in this repo when sources change; reinstall or refresh the app as needed.

**Option B — `npm link`**

```bash
cd /path/to/aiwind && npm run build && npm link
cd /path/to/your-app && npm link @vanthdev/aiwind
```

In the app’s global CSS, point `@source` at the local **`dist`** (e.g. `../aiwind/dist`) instead of `node_modules` while developing.

---

## Publish to npm

The package name is **`@vanthdev/aiwind`**. Publishing requires **npm organization `vanthdev`** with **publish** access for your user.

1. [Create or join the org](https://www.npmjs.com/org/create) **`vanthdev`**.
2. **`npm login`**
3. From the repo root: **`npm publish --access public`**  
   `prepublishOnly` runs **`npm run build`** automatically.

A **404** on `PUT …/@vanthdev/aiwind` usually means the org is missing or your account cannot publish to that scope.

### GitHub Actions (npm publish)

The workflow file is **not** stored in git by default so `git push` works with a GitHub PAT that lacks the **`workflow`** scope. Add it once via the **GitHub website** (uses your browser session):

1. Repo → **Add file** → **Create new file** → path: `.github/workflows/publish-npm.yml`
2. Paste the YAML below, **Commit changes**.
3. npm: [Automation token](https://www.npmjs.com/settings/~/tokens) (or granular token with publish to `@vanthdev/aiwind`).
4. **Settings → Secrets and variables → Actions** → **`NPM_TOKEN`**.
5. **Actions → Publish to npm → Run workflow**, or publish a **GitHub Release** (`release: published`).

**Alternative:** keep workflows in git and use a PAT with **`workflow`** scope (or SSH) so `git push` can update `.github/workflows/`.

```yaml
name: Publish to npm

on:
  workflow_dispatch:
  release:
    types: [published]

jobs:
  publish:
    runs-on: ubuntu-latest
    permissions:
      contents: read
    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          registry-url: 'https://registry.npmjs.org'

      - run: npm ci

      - run: npm publish --access public
        env:
          NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
```

---

## Issues and PRs

Use [GitHub Issues](https://github.com/vanthieu97/aiwind/issues) for bugs and ideas. Keep changes focused; follow existing TypeScript and Storybook conventions.
