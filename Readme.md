<p align="center">
  <h1 align="center">cite-ui</h1>
  <p align="center">React components for Tailwind CSS - 40 components, hooks and utilities.</p>
  <p align="center">Zero runtime dependencies. Class-based dark mode. MIT licensed.</p>
</p>

<p align="center">
  <a href="https://cite-ui.framestudio.co.ke">Documentation</a> ·
  <a href="#installation">Installation</a> ·
  <a href="#components">Components</a> ·
  <a href="#hooks">Hooks</a> ·
  <a href="#utilities">Utilities</a> ·
  <a href="#dark-mode">Dark mode</a> ·
  <a href="#license">License</a>
</p>

---

## Installation

```bash
npm install cite-ui
```

React 18+ and Tailwind CSS v3 are peer dependencies:

```bash
npm install react react-dom
npm install -D tailwindcss postcss autoprefixer
```

Add the library source to your Tailwind content array so its classes are not purged:

```js
// tailwind.config.js
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/cite-ui/src/**/*.{js,jsx}',
  ],
}
```

There is no stylesheet to import. Components are plain Tailwind classes.

## Quick start

```jsx
import { Button, Card, Badge } from 'cite-ui'

export default function Product() {
  return (
    <Card variant="outlined">
      <div className="flex items-center justify-between gap-3">
        <h3 className="font-semibold">Wireless Headphones</h3>
        <Badge color="green" size="sm">In stock</Badge>
      </div>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
        KES 12,500 · Nairobi delivery in 24 hours.
      </p>
      <Button className="mt-4" label="Add to cart" />
    </Card>
  )
}
```

Toasts need a provider at the root:

```jsx
import { ToastProvider, useToast } from 'cite-ui'

function App() {
  return (
    <ToastProvider position="top-right">
      <Checkout />
    </ToastProvider>
  )
}

function Checkout() {
  const { toast } = useToast()
  return (
    <button onClick={() => toast.promise(pay(), {
      loading: 'Waiting for M-Pesa…',
      success: 'Payment confirmed',
      error: 'Could not verify payment',
    })}>
      Pay
    </button>
  )
}
```

## Components

Every component has a page with live examples, a light/dark surface toggle, prop tables and copyable code at **[cite-ui.framestudio.co.ke](https://cite-ui.framestudio.co.ke)**.

### Base

| Component | Description |
|---|---|
| [Navbar](https://cite-ui.framestudio.co.ke/components/navbar) | Sticky navigation, glass/transparent variants, cart badge, mobile menu |
| [Button](https://cite-ui.framestudio.co.ke/components/button) | 6 variants, 5 sizes, loading, icons, link mode |
| [Gallery](https://cite-ui.framestudio.co.ke/components/gallery) | Responsive image grid with keyboard-accessible lightbox |
| [Modal](https://cite-ui.framestudio.co.ke/components/modal) | Dialog with sizes, focus handling, Escape and backdrop close |
| [Toast](https://cite-ui.framestudio.co.ke/components/toast) | Context provider with success/error/warning/info and promise states |

### Layout

| Component | Description |
|---|---|
| [Container](https://cite-ui.framestudio.co.ke/components/container) | Max-width wrapper with responsive padding |
| [Stack](https://cite-ui.framestudio.co.ke/components/stack) | Flex layout with direction, gap and alignment |
| [Grid](https://cite-ui.framestudio.co.ke/components/grid) | Responsive CSS grid with breakpoint-aware columns |
| [Section](https://cite-ui.framestudio.co.ke/components/section) | Vertical rhythm and background for page sections |
| [Divider](https://cite-ui.framestudio.co.ke/components/divider) | Horizontal or vertical rule with an optional label |

### UI

| Component | Description |
|---|---|
| [Card](https://cite-ui.framestudio.co.ke/components/card) | Four surfaces, padding sizes, hover and link behaviour |
| [Badge](https://cite-ui.framestudio.co.ke/components/badge) | Status label in eight colour schemes |
| [Chip](https://cite-ui.framestudio.co.ke/components/chip) | Removable or clickable tag |
| [Avatar](https://cite-ui.framestudio.co.ke/components/avatar) | Image or initials, six sizes |
| [Alert](https://cite-ui.framestudio.co.ke/components/alert) | Inline info/success/warning/error banner |
| [Spinner](https://cite-ui.framestudio.co.ke/components/spinner) | Loading indicator in five sizes |
| [Skeleton](https://cite-ui.framestudio.co.ke/components/skeleton) | Text, title, avatar, image, button and card placeholders |
| [Progress](https://cite-ui.framestudio.co.ke/components/progress) | Progress bar with optional percentage |
| [EmptyState](https://cite-ui.framestudio.co.ke/components/empty-state) | Empty view with icon, message and action |

### Forms

| Component | Description |
|---|---|
| [TextField](https://cite-ui.framestudio.co.ke/components/textfield) | Input with label, icon, error, helper, clearable, password toggle |
| [Textarea](https://cite-ui.framestudio.co.ke/components/textarea) | Multi-line input with character count |
| [Select](https://cite-ui.framestudio.co.ke/components/select) | Styled native select with error and disabled states |
| [Checkbox](https://cite-ui.framestudio.co.ke/components/checkbox) | Checkbox with indeterminate and disabled states |
| [Switch](https://cite-ui.framestudio.co.ke/components/switch) | Toggle in three sizes |

### Navigation

| Component | Description |
|---|---|
| [Tabs](https://cite-ui.framestudio.co.ke/components/tabs) | Underline, pill and button variants, with `TabPanel` |
| [Accordion](https://cite-ui.framestudio.co.ke/components/accordion) | Collapsible panels, single or multiple open |
| [Drawer](https://cite-ui.framestudio.co.ke/components/drawer) | Slide-in panel from any side, with footer slot |
| [DropdownMenu](https://cite-ui.framestudio.co.ke/components/dropdown-menu) | Contextual menu with separators and shortcuts |
| [Breadcrumbs](https://cite-ui.framestudio.co.ke/components/breadcrumbs) | Navigation trail with chevron or slash separator |
| [Pagination](https://cite-ui.framestudio.co.ke/components/pagination) | Page navigation with ellipsis |
| [Tooltip](https://cite-ui.framestudio.co.ke/components/tooltip) | Hover/focus tooltip in four positions |
| [Table](https://cite-ui.framestudio.co.ke/components/table) | Data table with sorting, renderers, striping, row clicks |
| [SearchBar](https://cite-ui.framestudio.co.ke/components/search-bar) | Search input with loading state and filter dropdowns |
| [BottomNav](https://cite-ui.framestudio.co.ke/components/bottom-nav) | Mobile bottom navigation with labels, badges and an action tile |
| [BackToTop](https://cite-ui.framestudio.co.ke/components/back-to-top) | Floating scroll-to-top button |

### Animation

| Component | Description |
|---|---|
| [Animate](https://cite-ui.framestudio.co.ke/components/animate) | Eight entrance types, mount or viewport triggered |
| [Motion](https://cite-ui.framestudio.co.ke/components/motion) | Imperative x/y/rotate/scale/opacity transitions |

### Icons

`Icon` ships 49 glyphs: `x`, `check`, `chevronDown`, `chevronRight`, `menu`, `cart`,
`alertCircle`, `info`, `alertTriangle`, `search`, `user`, `mail`, `phone`, `mapPin`,
`star`, `heart`, `arrowRight`, `arrowLeft`, `arrowUp`, `arrowDown`, `upload`,
`download`, `image`, `externalLink`, `globe`, `clock`, `trash`, `plus`, `minus`,
`settings`, `edit`, `share`, `sun`, `moon`, `eye`, `eyeOff`, `copy`, `link`,
`refreshCw`, `filter`, `slash`, `messageCircle`, `package`, `home`, `bell`,
`compass`, `layers`.

```jsx
import { Icon } from 'cite-ui'

<Icon name="search" size={18} className="text-gray-500" />
```

## Hooks

| Hook | Description |
|---|---|
| [useForm](https://cite-ui.framestudio.co.ke/components/use-form) | Form state with required/email/phone rules and custom validators |
| [useLocalStorage](https://cite-ui.framestudio.co.ke/components/use-local-storage) | `useState` synced to localStorage, with remove |
| [useMediaQuery](https://cite-ui.framestudio.co.ke/components/use-media-query) | Reactive media query result |
| [useFetch](https://cite-ui.framestudio.co.ke/components/use-fetch) | Fetch with abort, loading/error states and refetch |

## Utilities

| Utility | Description |
|---|---|
| [`cn`](https://cite-ui.framestudio.co.ke/components/cn) | Join class names, dropping falsy values |
| [`formatKES`](https://cite-ui.framestudio.co.ke/components/format-kes) | Kenyan shilling formatting, compact mode |
| [`formatDate`](https://cite-ui.framestudio.co.ke/components/format-date) | Date formatting with short/medium/long styles |
| [`slugify`](https://cite-ui.framestudio.co.ke/components/slugify) | URL-friendly slug |
| [`truncate`](https://cite-ui.framestudio.co.ke/components/truncate) | Truncate at a character limit with an ellipsis |
| [`generateId`](https://cite-ui.framestudio.co.ke/components/generate-id) | Short random alphanumeric id |

## Dark mode

Components use Tailwind's class strategy:

```js
// tailwind.config.js
export default { darkMode: 'class' }
```

Then toggle `dark` on `<html>` or a wrapper. Every example in the docs has a
light/dark switch that does exactly this.

## Styling

Components ship neutral Tailwind defaults. Pass `className` to override:

```jsx
<Button label="Brand" className="!bg-[#FF5A36] !text-[#0B0B0B]" />
```

Multi-part components also take a `classNames` slot map — `bar`, `activeItem`,
`action` and so on — for surfaces that carry a brand colour or gradient.
Components with an accent read the optional `--cite-accent` variable, with the
FrameStudio vermilion as a fallback; leave it unset and nothing changes.

There is no stylesheet to import. See the
[theming guide](https://cite-ui.framestudio.co.ke/guide/theming) and
[THEMING.md](https://github.com/FrameStudio-cloud/cite-ui/blob/main/THEMING.md)
for the full convention.

## Requirements

- React 18+ (peer)
- React DOM 18+ (peer)
- Tailwind CSS v3
- No runtime dependencies

## License

MIT © 2026 [FrameStudio](https://www.framestudio.co.ke). See [LICENSE](./LICENSE).

The icon paths are derived from [Feather](https://feathericons.com) and the
documentation loads fonts under their own licences. Both are recorded in
[THIRD-PARTY-NOTICES.md](./THIRD-PARTY-NOTICES.md).
