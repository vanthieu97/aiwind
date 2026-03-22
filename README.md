# @vanthdev/aiwind

**AIwind** — React primitives styled with **Tailwind** utility classes, with APIs shaped for **AI-assisted** app code (familiar props, strong types, `className` + `cn`). Visual language matches the vanthdev palette (warm light shell, red accent, dark navy mode).

Repository root: **`vanthdev-ui`** (sibling to the vanthdev site app under `Coding/`).

## Install

```bash
npm install @vanthdev/aiwind
```

Peer dependencies: `react`, `react-dom` (18.2+ or 19).

## Tailwind v4 (required)

The package ships **no CSS file**. Consumers must run Tailwind so classes inside `@vanthdev/aiwind` are generated.

In your global CSS (after `@import "tailwindcss";`), point Tailwind at the installed package:

```css
@import "tailwindcss";
@source "../node_modules/@vanthdev/aiwind/dist";
```

Adjust the relative path from your CSS file to `node_modules` as needed.

For local development against a **git clone** of this repo (e.g. next to your app), use a path to this package’s `dist` after `npm run build`, or `file:` / `npm link` (see below).

Ensure your app uses the same **dark mode** strategy as these components: a `.dark` ancestor (e.g. on `<html>`) for `dark:` variants.

## Usage

```tsx
import { Button, Card, CardContent, CardHeader, CardTitle, cn } from '@vanthdev/aiwind';

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

## Components

| Export | Notes |
|--------|--------|
| `Button`, `buttonVariants` | Primary / secondary / ghost / link; sizes `sm`–`lg`, `icon` |
| `Card`, `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `CardFooter` | Editorial / form shells |
| `Label` | Pairs with form controls (`peer-*` friendly) |
| `Input`, `Textarea` | Focus ring uses accent `#c41e3a` |
| `Badge`, `badgeVariants` | Status chips: default, secondary, accent, outline, success, warning, destructive |
| `Alert`, `AlertTitle`, `AlertDescription` | Callouts: default, info, success, warning, destructive |
| `Separator` | Horizontal or vertical divider |
| `Skeleton` | Loading placeholders (`animate-pulse`) |
| `Switch` | Toggle with `aria-checked` (client) |
| `Spinner` | Inline loading indicator |
| `Progress` | `role="progressbar"`, accent fill |
| `cn` | `clsx` + `tailwind-merge` |

## Storybook (review & playground)

Local dev server (port 6006):

```bash
npm run storybook
```

Static build (output in `storybook-static/`):

```bash
npm run build-storybook
```

Use the **Theme** toolbar control to switch **Light** / **Dark** (matches vanthdev: `#faf8f5` surface vs `#0a0f1a` + `.dark`). **Accessibility** checks run via `@storybook/addon-a11y`.

## Develop

```bash
cd vanthdev-ui
npm install
npm run build
```

## Use from vanthdev (local)

In `vanthdev/package.json`:

```json
"@vanthdev/aiwind": "file:../vanthdev-ui"
```

Run `npm run build` in `vanthdev-ui` whenever sources change, then reinstall or link as needed. In `vanthdev` global CSS, `@source` can target `../vanthdev-ui/dist` during local work.

Alternatively:

```bash
cd /path/to/vanthdev-ui && npm link
cd /path/to/vanthdev && npm link @vanthdev/aiwind
```

## Publishing

`package.json` is already set up for a **public** scoped package (`publishConfig.access` is `public`, `private` is `false`).

1. **npm org `vanthdev`**: the published name is **`@vanthdev/aiwind`**. Create or join the **`vanthdev`** organization on [npmjs.com](https://www.npmjs.com/org/create) and ensure your user can **publish** to that scope.
2. **Log in**: `npm login` (token with publish rights if you use 2FA).
3. **Publish**: from the repo root, `npm publish` (or `npm publish --access public`). `prepublishOnly` runs `npm run build` automatically.

A **404** on publish usually means the **`vanthdev`** org isn’t set up yet, your account lacks publish access to it, or you’re not logged in.
