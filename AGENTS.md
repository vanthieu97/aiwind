# AGENTS.md — using `@vanthdev/aiwind` in an application

Use this file in **your app repo** (copy the section below into `.cursorrules`, **AGENTS.md**, or team docs) so humans and coding agents apply the same rules when generating UI.

---

## Package

- **Name:** `@vanthdev/aiwind`
- **Import:** `import { … } from '@vanthdev/aiwind'` (barrel export from package root).
- **Peers:** `react`, `react-dom` (18.2+ or 19).

## Tailwind v4 (mandatory)

The library ships **no CSS file**. The app **must** include Tailwind and **`@source`** the package **`dist`** so utilities are generated.

```css
@import "tailwindcss";
@source "../node_modules/@vanthdev/aiwind/dist";
```

Adjust the path relative to **your** global CSS file. If styles look missing, **`@source` is wrong or missing**.

## Conventions

- **Variants:** use `variant`, `size`, and other props from TypeScript types; prefer **named exports** (`Button`, `Card`, `Input`, …).
- **Layout / spacing:** pass **`className`**; use **`cn`** from `@vanthdev/aiwind` when merging with conditional classes.
- **Dark mode:** components expect a **`.dark`** ancestor (e.g. on `<html>`).
- **Next.js App Router:** use **`'use client'`** in the **app** file when it imports client components (`Switch`, or pages that use event state). Re-exporting from a client wrapper is fine.
- **Forms:** pair **`Label`** with **`htmlFor`** and control **`id`**.
- **Do not** rely on inline `style={{}}` for theme or spacing that should match the design system; use Tailwind + `className`.

## Quick reference (common imports)

```tsx
import {
  cn,
  Button,
  Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter,
  Label,
  Input,
  Textarea,
  Badge,
  Alert, AlertTitle, AlertDescription,
  Separator,
  Skeleton,
  Switch,
  Spinner,
  Progress,
} from '@vanthdev/aiwind';
```

## When unsure

Prefer **composition** (Card + Button + Label + Input) over one-off custom markup. Mirror **Storybook** examples in the [aiwind repo](https://github.com/vanthieu97/aiwind) if you have it cloned.
