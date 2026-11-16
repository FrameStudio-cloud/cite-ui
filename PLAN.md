# cite-ui docs — rebuild plan

**Status:** planned · **Owner:** Lewis · **Started:** 2026-11-16
**Domain:** https://cite-ui.framestudio.co.ke
**Repo:** https://github.com/FrameStudio-cloud/cite-ui
**Marketing page:** https://www.framestudio.co.ke/developers

---

## Why

cite-ui finally has its own domain, and the docs are the product now — not a
by-product. A developer judges a library in about ninety seconds: install line,
one component page, one prop table. The current docs pass that test but don't
win it: everything sits on one long page, every component gets one example, and
the chrome looks like a different product from the landing site that sent them.

Goals:

1. Look like FrameStudio — same colours, fonts, spacing, voice.
2. Show components better than a preview card followed by a wall of props.
3. Make each component a real page: shareable, searchable, linkable.
4. Stay honest: version, counts and examples match the package.

Non-goals: no marketing hero, no auth, no analytics, no CMS, no new runtime
dependency in the published package.

---

## TODO / known gaps

Fix these regardless of the redesign. The first one is a legal claim, not polish.

- [ ] **Add `LICENSE` (MIT, © 2026 Lewis Irungu) to the repo.** The readme and
      `framestudio.co.ke/developers` both advertise MIT; GitHub reports
      `license: null`, so the grant is not actually published.
- [ ] **Add `"license": "MIT"` to `package.json`** and bump to `1.2.1`, then
      publish so the npm page shows it.
- [ ] Point `package.json` `homepage`, readme links and the GitHub repo homepage
      at `https://cite-ui.framestudio.co.ke` (today they point at
      `cite-ui.vercel.app`).
- [ ] Redirect `cite-ui.vercel.app` to the custom domain in Vercel (both serve
      200 today; duplicate hosts split links and SEO).
- [ ] **Bump the docs version from `v1.0.0` to the real package version, read from
      `package.json` at build time so it cannot drift again.** *(Done in Phase 0:
      header/footer now read `pkg.version`.)*
- [ ] Fix the count: docs say **54+**; `src/index.jsx` exports **57** components
      (plus 4 hooks, 6 utilities, 45 icons). *(Phase 0 sets 57; the prune below
      will change it again — update once, after pruning.)*
- [ ] Add docs entries for components that survive the prune. Do **not** document
      the four storefront components unless they are kept (see prune below).
- [ ] Replace the Toast "see playground" note with a real live example
      (`ToastProvider` + buttons), and do the same for the four hooks.
- [ ] Add GitHub repo topics (`react`, `tailwindcss`, `component-library`,
      `kenya`) and a real description (currently `"npm library "`).

---

## Current state (audit)

| Fact | Now |
|---|---|
| Pages | One long page, 62 anchors |
| Entries | 62 (57 components + hooks/utils + installation), 4 components missing |
| Example per component | 1 live example + 1 usage string |
| Rendering | 62-branch `if` chain in `src/docs/main.jsx` (495 lines) |
| Content | `src/docs/data.js` (924 lines), hand-written props |
| Chrome | System fonts, white/grey, violet links, 56px sidebar |
| Routing | Hash only (`/#toast`); no per-component URL |
| SEO | One `<title>`, no description, no sitemap, no OG |
| Search | None |
| Dark mode | Half-wired `dark:` classes, no control |
| Playground link | Points at `/`, which Vercel rewrites back to the docs |

Painful parts to remove: the `if` chain (adding a component means editing two
files and 3 places), one-example-per-component, and the giant single page.

---

## Component portfolio — proposed prune

Evidence: `cite-ui` is imported in only a few places — `pomodoro` (Toast,
`useLocalStorage`) and `framestudio-dashboard` (`Alert`). The catalogue
components are **copied into** each catalogue project, and the Keel storefront
has its own template components; nothing imports these from the package.

### Delete — superseded, no consumers

| Component | Why |
|---|---|
| `CatalogueCard` | Keel storefront has its own copy; template-specific props |
| `CatalogueGrid` | Same; the storefront renderer composes its own grid |
| `TrustBar` | Marketing logo strip; used by one catalogue, local copy |
| `AnnouncementBar` | Marketing strip; local copies in catalogues/mistari |
| `LocationMap` | Google Maps embed with a hard-coded embed URL |
| `ImageWithFallback` | Storefront-only |
| `VariantPicker` | Storefront-only |
| `CategoryFilter` | Storefront-only |
| `ProductDetail` | Storefront-only; Keel owns this page type |
| `WhatsAppFloat` | Marketing widget, 100% inline styles, re-implemented everywhere |
| `Hero` | Page section, not a primitive |
| `Features` | Page section |
| `FAQ` | Page section |
| `Pricing` | Page section |
| `Footer` | Page section |
| `Stats` | Page section |
| `Testimonials` | Page section |
| `ContactSection` | Page section; depends on `useForm` |

**18 removed → 39 components.** These are the ones the user meant by "will never
serve": a storefront template frozen into a library, plus a marketing page's
sections.

### Decide (Tier B)

| Component | Case for keeping | Case for cutting |
|---|---|---|
| `SearchBar` | Genuinely useful search input with filters | Props are catalogue-shaped; one consumer, local copy |
| `BackToTop` | 20 lines, every long page wants it | Trivial; belongs in a recipe, not a library |

Recommendation: **keep both**, move them out of "Mini Catalogue" into
`Navigation` / `UI`, and drop the group entirely.

### Keep

`Button`, `Navbar`, `Gallery`, `Modal`, `Toast`/`useToast`, the 5 layout
primitives, 10 UI, 5 form, 9 navigation, `Animate`, `Motion`, 4 hooks, 6
utilities, `Icon` (45 glyphs).

### Release implications

- Deletions are **breaking**: publish as **2.0.0**, not 1.2.1.
- 1.2.1 carries only the licence/metadata fix and can ship now.
- After the prune, update the numbers in **three** places: readme, docs home,
  and `framestudio-landing/src/pages/Developers.jsx` (hero stats, docs band,
  meta description, JSON-LD) plus recapture `public/developers/cite-ui-docs.png`.
- Remove the `mini-catalogue` and `sections` sections from the readme with the
  components, and drop their docs groups.

---

## Design direction

Adopt the landing token set exactly. The docs should feel like FrameStudio
turned down for reading, not like a different template.

| Token | Value | Use in docs |
|---|---|---|
| `ink` | `#0B0B0B` | Text, code panels, dark surfaces |
| `ink-soft` | `#52524B` | Body copy, descriptions |
| `ink-faint` | `#8A8A80` | Metadata, captions |
| `paper` | `#FBF8F0` | Default page surface |
| `cream` | `#F3EDDF` | Sidebar, alternating blocks, preview canvas |
| `accent` | `#FF5A36` | Actions, active nav, one italic word per heading |
| `accent-deep` | `#E8461F` | Hover/pressed |

Type roles, same four fonts as the landing site:

| Role | Font | Use |
|---|---|---|
| Display | Bricolage Grotesque 600 | Page titles, component names |
| Editorial | Instrument Serif italic | One word inside a title, pull quotes |
| Body/UI | General Sans | Prose, nav, buttons, tables |
| Mono | Space Mono | Eyebrows, props, code, versions, counts |

Rules:

- Accent is for action and emphasis. Never body copy, never a large fill, never
  inside a component example.
- Component previews render the library's **real defaults** (white/grey/blue).
  The docs chrome is branded; the specimens are neutral. Do not restyle shipped
  components in the docs or the site stops being documentation.
- No site-wide dark mode. Instead, a **preview surface toggle** (light/dark) on
  each specimen to show the `dark:` variants the library actually ships. The
  docs chrome stays light.
- Motion: one reveal on page mount, hover transitions under 200ms, no infinite
  animation. Respect `prefers-reduced-motion`.

---

## Information architecture

| Route | Content |
|---|---|
| `/` | Docs home: install command, counts, category grid, search, start-here |
| `/components/:id` | One component: examples, props, usage, prev/next |
| `/guide/installation` | Install, Tailwind setup, peer deps, troubleshooting |
| `/guide/theming` | Tokens, dark mode, overriding classes |
| `/guide/motion` | `Animate`, `Motion`, reduced motion |
| `/guide/utilities` | `cn`, `formatKES`, `formatDate`, `slugify`, `truncate`, `generateId` |
| `/guide/icons` | The 45-glyph icon set, copyable names |
| `/playground` | The existing `src/main.jsx` demo, kept behind a real route |
| `*` | 404 with search |

Compatibility: `/#toast`, `/#button` and the other 62 old anchors must keep
working. On boot, map `location.hash` to `/components/<id>` and replace the URL.
No dead links from old tweets, readmes or issues.

---

## Component display model (the core of the rebuild)

One component page = header + one or more **specimens** + props + page nav.

### 1. Page header

- Breadcrumb `Docs / UI / Toast`
- Display name, one-sentence description, `since vX` badge
- Right side: source link (GitHub blob), copy-import button
  (`import { ToastProvider, useToast } from 'cite-ui'`)
- Optional "View in playground" link

### 2. Specimen (replaces "Live Example")

Each component gets 1–4 specimens, each with its own title and code:

```
┌──────────────────────────────────────────────────────────┐
│  Success and error toasts                    [light][dark]│
│  ┌──────────────────────────────────────────────────────┐ │
│  │  preview canvas (cream + dot grid, padded)           │ │
│  │  [ Show success ] [ Show error ]                     │ │
│  └──────────────────────────────────────────────────────┘ │
│  ┌ Preview ─ Code ─────────────────────────── [Copy] ──┐ │
│  │  toast.success("Saved")                             │ │
│  └──────────────────────────────────────────────────────┘ │
└──────────────────────────────────────────────────────────┘
```

- Preview and Code are tabs; Code is the default collapsed state on mobile.
- Copy button writes the snippet and confirms for 1.5s.
- Surface toggle: light/dark, implemented by toggling `dark` on the canvas
  wrapper (the library is class-based), not by changing the docs theme.
- Optional viewport toggle (full/mobile) for layout components: fixed-width
  canvas with `overflow-x: auto`, never a real iframe.
- Canvas has no max-height for dialogs/overlays; those get `min-h-[420px]` and a
  note that the overlay covers the canvas, not the page.

### 3. Props table

- Sticky header, zebra rows, mono prop names, type as a chip.
- Required props marked with a small accent dot and `required` in the default
  column.
- Mobile: table collapses into `dl` cards, one per prop. No horizontal scroll
  for four columns of prose.
- Add `ref`/events sections only where the component forwards them.

### 4. Page rail

- Desktop: "On this page" (Specimens, Props, Usage) with scroll-spy.
- Footer: previous / next component in registry order.
- Every specimen gets an `id` so it can be linked (`#example-promise`).

### 5. Sidebar

- Grouped exactly like `src/index.jsx`, not like the current mixed list.
- Search input at top; filters names and groups, `/` or `⌘K` focuses it.
- Active state: accent rule + ink text, not a filled pill.
- Collapsible groups on mobile, slide-over panel under `lg`.
- Version + npm link pinned at the bottom.

---

## Content model change

The single `example` string plus 62-branch renderer becomes one module per
component:

```
src/docs/
  registry.js            # id, name, group, since, description, props, import
  examples/
    toast.jsx            # export const examples = [{ id, title, code, Demo }]
    button.jsx
    ...
  components/            # shell: Layout, Sidebar, Specimen, PropTable, CodePanel
  pages/                 # Home, ComponentPage, GuidePage, Playground, NotFound
  lib/
    search.js            # index + scoring
```

Rules:

- `registry.js` is the source of truth for names, groups, descriptions and
  props. Sidebar, search, prev/next and the landing page's links all read it.
- Each example exports a `Demo` component and a `code` string. The duplication
  is deliberate: the demo must be genuinely interactive, the string must be
  copy-paste correct.
- A build check (`scripts/check-docs.mjs`) fails if:
  - an export in `src/index.jsx` has no registry entry, or
  - a registry entry has no example, or
  - the version/count strings disagree with `package.json` / `src/index.jsx`.
  This is what stops the current drift from happening again.

---

## Tech plan

- Keep Vite + React + Tailwind v3. No new runtime dependency in the published
  package.
- `react-router-dom` as a **devDependency only**, for the docs build. It never
  enters `dist/cite-ui.es.js`.
- Fonts in `docs.html`: General Sans (Fontshare), Bricolage Grotesque,
  Instrument Serif, Space Mono (Google), same as the landing site.
- Extend `tailwind.config.js` with the landing colours, fonts and the code-block
  keyframes. Additive; consumers are unaffected because they import compiled
  component classes, not this config.
- `vite.docs.config.js` keeps `dist-docs`; `vercel.json` keeps the rewrite, so
  client routes resolve on refresh.
- Read `version` and the export count at build time via Vite `define`, so the
  footer and home stats cannot go stale.
- Code splitting: lazy-load component pages by route; the JSON-ish registry is
  small, the example modules are not.
- Syntax highlighting: hand-rolled tokenizer (strings, comments, keywords) in
  the site's palette. No Prism/Shiki dependency, no bundle weight.

---

## SEO / metadata

- Per page: `<title>`, `meta description`, canonical, OG/Twitter tags with the
  FrameStudio OG image until a docs-specific card exists.
- `public/sitemap.xml` generated from the registry at build time.
- `public/robots.txt`.
- JSON-LD `SoftwareApplication` on `/`, `TechArticle` on component pages.
- 404 returns the SPA with `noindex`.

---

## Accessibility

- Skip link to content; one `h1` per page; landmarks (`header`, `nav`, `main`).
- Search combobox follows the ARIA pattern: `aria-expanded`, `aria-activedescendant`,
  arrow keys, Escape, Enter.
- Tabs (Preview/Code) with roving tabindex.
- Copy buttons announce success via a live region, not a label swap alone.
- Accent on paper is not used for text under 18px (fails contrast).
- Focus ring: 2px accent, 3px offset, never removed.
- Every example keyboard-reachable; overlays close on Escape and return focus.
- `prefers-reduced-motion` disables page reveals and specimen transitions.

---

## Phases

### Phase 0 — Truth (half a day)

- [x] Add `LICENSE` (MIT, © 2026 Lewis Irungu)
- [x] Add `license`, `homepage`, `repository`, `bugs`, `keywords` and a real
      `description` to `package.json`
- [x] Docs header/footer read `pkg.version`; docs count `54+` → `57`
- [x] **Prune 18 components** (see above); version is now **2.0.0**
- [ ] Publish `2.0.0` after the readme and docs no longer mention removed
      components (`npm login` first — this machine is `E401`)
- [ ] Vercel: redirect `cite-ui.vercel.app` → `cite-ui.framestudio.co.ke`
- [ ] GitHub: set repo homepage + topics in Settings
- [ ] After the prune, update the count in readme, docs and the landing page
      (landing currently advertises 57 components / 26 kB for npm `1.2.0`; change
      it when `2.0.0` ships: 39 components / 18 kB)

### Phase 1 — Shell (1–2 days)

- [x] Fonts, tokens, Tailwind config (landing colours + four fonts)
- [x] Router + routes + 404 + hash→route redirects
- [x] Branded header, sidebar, search (filters live), footer
- [x] Docs home: install block, counts, category grid, full component index
- [x] Local dev mirrors the production SPA rewrite (`vite.docs.config.js`)

**Done when:** every old anchor lands on the right page, the site is navigable
without JS errors, and it looks like the landing site at 390/768/1440.

### Phase 2 — Specimen system (2–3 days)

- [x] `Specimen`: preview canvas, light/dark surface toggle, Preview/Code tabs,
      copy, per-specimen anchors
- [x] `PropTable` redesign + mobile cards
- [x] Page header with import and source links
- [x] Migrate the 10 most-used components first: Button, Toast, TextField,
      Table, Tabs, Drawer, Modal, Card, Badge, Select
- [x] Dark-surface pass caught two library bugs and fixed them: Button had no
      dark variants for primary/secondary/outline/ghost, and Card children
      inherited `text-gray-900` on a dark surface

**Done when:** those 10 pages are at least as informative as the old docs and
noticeably better to use on a phone.

### Phase 3 — Content (3–5 days)

- [x] Every component page now renders through the specimen shell; the 10 curated
      components keep their multi-example content, the rest fall back to their
      existing demo + code until upgraded
- [x] Theming and Motion guides (Utilities and Icons stay as indexed pages)
- [x] Page rail, prev/next, registry-backed search
- [x] **Rewrite `Readme.md`** to the 39-component set, linking every component
      to its docs page
- [ ] Curate multi-example content for the remaining 27 pages (Phase 3b)
- [ ] Real examples for `use-fetch`, `cn` and the formatting helpers where the
      current demo is still a text note

**Done when:** `check-docs.mjs` passes with zero missing entries and no page has
a "see playground" placeholder.

### Phase 4 — Ship (half a day)

- [ ] Sitemap, robots, metadata, JSON-LD
- [ ] Lighthouse pass (perf ≥ 90 on a component page, a11y 100)
- [ ] Visual pass at 390/768/1024/1440, keyboard-only pass, reduced-motion pass
- [ ] Point `framestudio.co.ke/developers` docs links at the new pages
- [ ] Re-capture `public/developers/cite-ui-docs.png` with `npm run docs:shot`

---

## Success criteria

- A dev can go from landing page → component page → copied snippet in under
  a minute, on a phone.
- Every export in `src/index.jsx` has a page; the build fails if not.
- No page says "see playground" instead of showing the thing.
- The version and count on the site are the version and count on npm.
- Old `/#component` links still resolve.
- The page looks like it belongs to FrameStudio without copying the marketing
  page's density.

---

## Open questions

1. Per-component routes (`/components/toast`) vs keeping one page? **Plan assumes
   routes**, with hash redirects. Confirm before Phase 1.
2. Should the docs get their own OG image (1200×630) or reuse the FrameStudio
   one for now?
3. Keep `/playground` (the current dev playground) public, or remove the link?
4. Dark mode for the docs chrome itself — skip for v1 as planned, or wanted?
5. Domain: keep `cite-ui.framestudio.co.ke`; no wildcard needed unless versioned
   docs (`v1.`, `v2.`) are planned later.

---

## Reference

- Landing design system: `framestudio-landing/AGENTS.md`, `src/index.css`,
  `tailwind.config.js`
- Landing developers page: `framestudio-landing/src/pages/Developers.jsx`
- Package exports: `src/index.jsx`
- Current docs: `src/docs/{main.jsx,DocsLayout.jsx,Section.jsx,PropTable.jsx,data.js}`
- Keel's domain/wildcard pattern: `keel-ecosystem/keel-storefront-studio/src/lib/domain.js`
