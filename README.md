# @vanthdev/ui

React primitives styled with Tailwind utility classes, aligned with the vanthdev palette (warm light shell, red accent, dark navy mode).

Repository root: **`vanthdev-ui`** (sibling to the vanthdev site app under `Coding/`).

## Install

```bash
npm install @vanthdev/ui
```

Peer dependencies: `react`, `react-dom` (18.2+ or 19).

## Tailwind v4 (required)

The package ships **no CSS file**. Consumers must run Tailwind so classes inside `@vanthdev/ui` are generated.

In your global CSS (after `@import "tailwindcss";`), point Tailwind at the installed package:

```css
@import "tailwindcss";
@source "../node_modules/@vanthdev/ui/dist";
```

Adjust the relative path from your CSS file to `node_modules` as needed.

For local development against a **git clone** of this repo (e.g. next to your app), use a path to this package’s `dist` after `npm run build`, or `file:` / `npm link` (see below).

Ensure your app uses the same **dark mode** strategy as these components: a `.dark` ancestor (e.g. on `<html>`) for `dark:` variants.

## Usage

```tsx
import { Button, Card, CardContent, CardHeader, CardTitle, cn } from '@vanthdev/ui';

export function Example() {
  return (
    <Card className={cn('max-w-md')}>
      <CardHeader>
        <CardTitle>Hello</CardTitle>
      </CardHeader>
      <CardContent>
        <Button variant="primary">Action</Button>
      </CardContent>
    </Card>
  );
}
```

Interactive components are marked with `'use client'` for Next.js App Router.

## Develop

```bash
cd vanthdev-ui
npm install
npm run build
```

## Use from vanthdev (local)

In `vanthdev/package.json`:

```json
"@vanthdev/ui": "file:../vanthdev-ui"
```

Run `npm run build` in `vanthdev-ui` whenever sources change, then reinstall or link as needed. In `vanthdev` global CSS, `@source` can target `../vanthdev-ui/dist` during local work.

Alternatively:

```bash
cd /path/to/vanthdev-ui && npm link
cd /path/to/vanthdev && npm link @vanthdev/ui
```

## Publishing

1. Set `"private": false` in `package.json`.
2. `npm run build`
3. `npm publish` (scoped public package: `publishConfig.access` is `public`).
