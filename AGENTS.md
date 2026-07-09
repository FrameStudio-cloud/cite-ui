# cite-ui

React component library — Vite library mode + Tailwind CSS v3.

## Commands

- `npm run dev` — starts Vite dev playground (`index.html` → `src/main.jsx`) + docs page at `/docs.html`
- `npm run build` — builds library to `dist/cite-ui.es.js` + `dist/cite-ui.umd.js`
- `npm run preview` — preview the built bundle
- `npm run docs:dev` — starts dev server, opens `/docs.html`
- `npm run docs:build` — builds standalone docs page to `dist-docs/`

No tests, linters, or typecheckers are configured.

## Entrypoints

- **Public API** — `src/index.jsx` (re-exports all components)
- **Dev playground** — `src/main.jsx` (development only, not shipped)
- **Docs page** — `src/docs/main.jsx` via `docs.html` (development + buildable standalone)

## File extensions

All components use `.jsx`, including ones without JSX.

## Component directory structure

Each component lives in `src/components/<Name>/index.jsx`. Flat files (`src/components/Modal.jsx`) are exceptions from the legacy set.

| Category | Components |
|----------|-----------|
| **Existing (enhanced)** | Navbar, Button, Gallery, WhatsAppFloat, Modal, Toast |
| **Layout** | Container, Stack, Grid, Section, Divider |
| **UI** | Card, Badge, Chip, Avatar, Alert, Spinner, Skeleton, Progress, EmptyState |
| **Form** | TextField, Textarea, Select, Checkbox, Switch |
| **Navigation** | Tabs, Accordion, Drawer, DropdownMenu, Breadcrumbs, Pagination, Tooltip, Table |
| **Sections** | Hero, Features, FAQ, Pricing, Footer, Stats, Testimonials, ContactSection |
| **Animation** | Animate, Motion |
| **Mini Catalogue** | CatalogueCard, CatalogueGrid, SearchBar, BackToTop, TrustBar, AnnouncementBar, LocationMap |
| **Hooks** | useForm, useLocalStorage, useMediaQuery, useFetch, useInView (internal) |
| **Utils** | cn, formatKES, formatDate, slugify, truncate, generateId |
| **Icons** | Icon component (45 icons) |

## Dynamic Tailwind classes

Gallery uses a `colMap` object mapping numbers to complete class strings. Template literals with dynamic grid values get purged by JIT — always use a lookup object.

## Inline styles

WhatsAppFloat uses 100% inline styles (zero Tailwind). Navbar `variant="glass"` uses inline styles for `backdrop-filter`. Gallery uses inline `style` for dynamic `gap`.

## Consumer setup

Additive Tailwind consumers must include this library's source in their `content` array:

```js
content: [
  './node_modules/cite-ui/src/**/*.{js,jsx}',
]
```

## Dependencies

React 18+ is a peerDependency and devDependency only — never a runtime dependency. New dependencies must follow the same pattern.

## Dev playground

`src/main.jsx` has a sidebar layout with scroll-spy, dark/light mode, and collapsible code blocks for every export.

## Animation system

Built-in animation components with zero runtime dependencies:
- **Animate** — entrance animations (8 types, mount/viewport/exit triggers, CSS keyframes)
- **Motion** — imperative Motion.div via Proxy (x/y/rotate/scale/opacity, CSS transitions)

## Mini Catalogue

Components designed for template-based catalogue sites for small businesses:
- **CatalogueCard** — product/service card with image, price, rating, badge, CTA
- **CatalogueGrid** — grid of CatalogueCards with loading skeletons and empty state
- **SearchBar** — search input with loading spinner and filter dropdown
- **BackToTop** — floating scroll-to-top button
- **TrustBar** — social proof logo bar (grid or carousel)
- **AnnouncementBar** — dismissible top announcement bar (4 variants)
- **LocationMap** — Google Maps embed with address display

## Docs page

`docs.html` + `src/docs/` — standalone documentation page with:
- Prop tables for every component
- Live interactive examples
- Copyable code snippets
- Sidebar navigation with scroll-spy
- Dark mode support
