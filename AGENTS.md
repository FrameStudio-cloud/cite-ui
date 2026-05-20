# cite-ui

React component library — Vite library mode + Tailwind CSS v3.

## Commands

- `npm run dev` — starts Vite dev playground (`index.html` → `src/main.jsx`)
- `npm run build` — builds library to `dist/cite-ui.es.js` + `dist/cite-ui.umd.js`
- `npm run preview` — preview the built bundle

No tests, linters, or typecheckers are configured.

## Entrypoints

- **Public API** — `src/index.jsx` (re-exports all components, what consumers import)
- **Dev playground** — `src/main.jsx` (development only, not shipped)

## File extensions

All components use `.jsx`, including ones without JSX. The library entry and vite config both reference `.jsx`.

## Dynamic Tailwind classes

Gallery uses a `colMap` object mapping numbers to complete class strings (`3: 'lg:grid-cols-3'`). Template literals like `lg:grid-cols-${n}` get purged by JIT — always use a lookup object.

## Inline styles

WhatsAppFloat uses 100% inline styles (zero Tailwind). Navbar `variant="glass"` uses inline styles for `backdrop-filter`. Gallery uses inline `style` for dynamic `gap`. Don't force Tailwind for effects it cannot handle.

## Consumer setup

Additive Tailwind consumers must include this library's source in their `content` array:

```js
content: [
  './node_modules/cite-ui/src/**/*.{js,jsx}',
]
```

Otherwise library styles are purged.

## Build output

`npm run build` produces `dist/cite-ui.es.js` (ESM) and `dist/cite-ui.umd.js` (CJS). `package.json` `exports` map both. The `files` field ships `["dist", "src"]`.

## Dependencies

React 18+ is a peerDependency and devDependency only — never a runtime dependency. New dependencies must follow the same pattern.
