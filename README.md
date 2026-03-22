# @vanthdev/aiwind

**AIwind** — React UI primitives for **Tailwind CSS v4**: typed, composable components with **MUI- and shadcn-style** ergonomics (`variant` / `size`, `forwardRef`, `className` + **`cn`**). Designed so **humans and AI assistants** can ship consistent UIs without fighting the API.

- **No runtime CSS bundle** — utilities live in source; your app’s Tailwind build scans the package `dist`.
- **Accessible defaults** — focus rings, roles, and label/control patterns where it matters.
- **Next.js App Router** — interactive pieces use `'use client'` where required.

**Repository:** [github.com/vanthieu97/aiwind](https://github.com/vanthieu97/aiwind) · **Contributing & releases:** [CONTRIBUTING.md](./CONTRIBUTING.md) · **AI / agent hints for your app:** [AGENTS.md](./AGENTS.md)

---

## Install

```bash
npm install @vanthdev/aiwind
```

**Peer dependencies:** `react` and `react-dom` (18.2+ or 19).

---

## Tailwind v4 (required)

This package does **not** ship a CSS file. Your app must run **Tailwind v4** and **scan** the installed package so class names are generated.

In your global CSS (paths are relative to **this CSS file**):

```css
@import "tailwindcss";
@source "../node_modules/@vanthdev/aiwind/dist";
```

Examples:

| Layout | `@source` line (adjust to your file tree) |
|--------|---------------------------------------------|
| `app/globals.css` at project root | `@source "../node_modules/@vanthdev/aiwind/dist";` |
| `src/styles/app.css` | `@source "../../node_modules/@vanthdev/aiwind/dist";` |

**pnpm:** dependency paths still live under `node_modules`; fix the relative segment if your hoisting layout differs.

**Local git clone** next to your app: `@source` can point at `../your-clone/dist` after `npm run build` in the clone. See [CONTRIBUTING.md](./CONTRIBUTING.md).

---

## Dark mode

Components use Tailwind **`dark:`** variants. Add a **`.dark`** class on an ancestor (commonly `<html className="dark">`) so dark styles apply.

---

## Usage

### Layout

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

### Form row

```tsx
import { Input, Label } from '@vanthdev/aiwind';

export function Field() {
  return (
    <div className="flex max-w-sm flex-col gap-2">
      <Label htmlFor="email">Email</Label>
      <Input id="email" type="email" placeholder="you@example.com" />
    </div>
  );
}
```

### Overrides

Pass **`className`**; it is merged with **`tailwind-merge`** via **`cn`** on primitives.

```tsx
<Button variant="secondary" className="w-full">
  Full width
</Button>
```

---

## Exports

| Export | Notes |
|--------|--------|
| `Button`, `buttonVariants` | `variant`: primary, secondary, ghost, link · `size`: sm, md, lg, icon |
| `Card`, `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `CardFooter` | Composable shells |
| `Label` | Works with `htmlFor` / `id` and `peer-*` on controls |
| `Input`, `Textarea` | Accent focus ring |
| `Badge`, `badgeVariants` | default, secondary, accent, outline, success, warning, destructive |
| `Alert`, `AlertTitle`, `AlertDescription`, `alertVariants` | default, info, success, warning, destructive |
| `Separator` | `orientation`: horizontal \| vertical |
| `Skeleton` | Pulse placeholder |
| `Switch` | Client component; `aria-checked` |
| `Spinner` | `role="status"` |
| `Progress` | `role="progressbar"`, `value` 0–100 |
| `cn` | `clsx` + `tailwind-merge` |

Types are exported as `ButtonProps`, `InputProps`, etc., for your own wrappers.

---

## Storybook (this repo)

After cloning: `npm install` → `npm run storybook` (port **6006**). Theme toolbar toggles light/dark; **a11y** addon included.

---

## Changelog

See [CHANGELOG.md](./CHANGELOG.md).

## License

MIT
