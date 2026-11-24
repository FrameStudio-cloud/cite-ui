# cite-ui — audit and upgrade plan

**Status:** not started · **Raised:** 2026-11-24 · **Owner:** Lewis
**Source:** building `clients/keel-stack-test`, a real site against the live Keel
stack, using this library end to end.

> [!info] Why this exists
> Everything below was found by *using* the library, not by reading it. Where an item
> says **verified**, the mechanism is quoted from the source or was observed at
> runtime. Items marked *judgement* are calls I would make, not facts.

This is a **code and API** plan. `PLAN.md` is the docs-site rebuild and stays separate;
the two should cross-link but not merge.

---

## 1. Defects

### 1.1 `EmptyState`'s default icon renders nothing — verified, P0

```jsx
// src/components/EmptyState/index.jsx
const EmptyState = ({ icon = 'inbox', … }) => <Icon name={icon} />

// src/components/Icon/index.jsx
const path = icons[name]
if (!path) return null          // unknown name → renders NOTHING, no warning
```

`inbox` is **not** in the 49-name icon set, so the component's own default draws nothing.
Using it from the outside is worse: `icon="box"` is also not a name, and the result is a
gap where an illustration should be — with no error anywhere.

**Fix**

- add `inbox`, `box`, `package`, `filter`, `search` to the icon set (two already exist),
- `Icon` warns in development on an unknown name and renders a neutral dot instead.

⚠️ This is the failure mode this library's consumers keep hitting elsewhere: **a control
that looks fine and does nothing.** An icon component is where it hides.

### 1.2 `Badge` falls back silently — verified, P1

```js
colors[color] || colors.gray
sizeStyles[size] || sizeStyles.md
```

The fallback is right (no crash), but an unknown value renders the default with no
signal. Warn in development. Also document the closed vocabulary —
`gray · red · green · blue · amber · black` — because `amber` and `green` are not the
obvious guesses.

### 1.3 No types — verified, P0

`package.json` has no `types` field and no `.d.ts` ships. For 40 components with
non-obvious prop shapes (`Tabs` takes an index, `Badge` a closed colour set) this is the
single biggest friction for a new consumer.

Hand-written is fine and needs no toolchain. Cover the twelve that carry real usage:
`Button`, `Card`, `Badge`, `Alert`, `TextField`, `Textarea`, `Select`, `Tabs`, `Icon`,
`EmptyState`, `Grid`, `Stack`, `Container`.

### 1.4 React peer pinned to 18 — verified, P0

```json
"peerDependencies": { "react": "^18.0.0", "react-dom": "^18.0.0" }
```

Keel runs **React 19**. `keel-stack-test` had to pin 18 purely because of this range, so
it does not exercise the stack the library will actually be used inside.

Nothing in `src/components` needs 18 specifically — they are function components with
hooks. Widen to `^18.0.0 || ^19.0.0`, then move the test site to 19.

### 1.5 Tailwind is a silent requirement — verified, P1

Components are class names, so a consumer must add
`node_modules/cite-ui/dist/**/*.js` to Tailwind's `content`. Miss it and every component
renders **unstyled with no error** — which reads as "the library is broken".

Ship a Tailwind preset (v3) and an `@source` note for v4, or at minimum put the line at
the very top of the README under "before anything else".

### 1.6 `Tabs` is index-based — verified, P1

```jsx
<Tabs tabs={[{ label: 'Shop' }, { label: 'Developer' }]} activeTab={0} onChange={setTab} />
```

`activeTab` is a number and tabs carry no `id`. Inserting a tab at the front silently
changes the selection, and a `?tab=` deep link has to map a name to an index by hand. A
`value`/`id` API with `aria-controls` removes both.

### 1.7 No tests — verified, P2

No `*.test.*` in the repo. Several components are pure and trivially testable, and 1.1
and 1.2 would each be caught by one test. See §5.

---

## 2. Components to add

The evidence, not a wish list: each of these was written by hand inside the conformance
site because the library had nothing.

| Needed | Where it was hand-written | Why the library should own it |
|---|---|---|
| **CopyButton** | site key, snippet | Copy + a confirmed state + the clipboard-blocked failure is 20 lines everybody gets wrong. Used twice already. |
| **CodeBlock** | webhook URL, snippet | `<pre>` with copy, horizontal scroll and a max-height. Same reasoning. |
| **Stat** | the eight connection checks | Label + state badge + meta + timing, aligned across rows. Built by hand twice. |
| **FormField** | the enquiry form | Label + hint + error wrapper. `TextField` has the parts, but grouping and error placement are hand-written every time. |

Order: **CopyButton → CodeBlock → Stat → FormField.**

**Do not add** `ProductCard`, `PriceTag`, cart or quantity stepper. 2.0 removed the
storefront set deliberately because the Keel storefront owns it; that decision holds.

---

## 3. Documentation

- The Tailwind `content` line, first thing in the README (1.5).
- A **closed list** per component: `Badge` colours, `Icon` names, `Skeleton` sizes.
  A closed set that is only discoverable by reading the source is why 1.1 happened.
- One sentence per component saying what it *does not* do, where that is surprising
  (`Icon` renders nothing for an unknown name — until 1.1 is fixed).

---

## 4. API changes worth making alongside

- **Named exports stay named.** `src/index.jsx` re-exports everything; keep that, but a
  test should pin the list (see §5) so a removal is a decision rather than an accident.
- **`Icon` accepts nothing unknown, loudly.** Covered by 1.1.
- **No new props that change defaults.** `EmptyState`'s `icon` default changes only if
  the icon is added; otherwise leave the signature alone.

---

## 5. Tests

There are none, and the two defects above are the argument for them. Minimum:

| Test | Proves |
|---|---|
| `Badge` resolves every documented colour and falls back for an unknown one | 1.2 stays fixed |
| `Icon` renders a fallback for an unknown name and warns in dev | 1.1 stays fixed |
| `Tabs` selects by value, and reordering does not change the selection | 1.6 |
| every name in `src/index.jsx` is exported and non-null | the surface cannot shrink silently |
| `EmptyState` renders its default icon | the default actually exists |

Stack: `node --test` or vitest with jsdom. This repo has no test tooling at all yet, so
pick the smaller one — the components are mostly render-only.

---

## 6. Order of work

**P0**
1. `Icon` icon-set additions + dev warning (1.1)
2. `index.d.ts` for the twelve components (1.3)
3. React peer `^18 || ^19`, then move `keel-stack-test` to React 19 (1.4)
4. The five tests in §5 — they guard the two fixes above

**P1**
5. `CopyButton`, `CodeBlock`, `Stat` (2)
6. `Badge` dev warning + documented colour list (1.2)
7. Tailwind requirement documented first (1.5)
8. `Tabs` value API (1.6)

**P2**
`FormField`, `Skeleton` discoverability, a v4 Tailwind note.

---

## 7. Not doing

- Storefront components (reversed in 2.0, for a reason).
- A build step or TS source. The no-build shape is why the library is easy to consume;
  hand-written types get the benefit without the toolchain.
- Conditional content components (`Hero`, `Pricing`, `FAQ`…). Removed in 2.0 as page
  furniture; every app already has its own.

---

## 8. Verification per fix

| Fix | Proof |
|---|---|
| Icon fallback | render an unknown name in dev → visible dot **and** a console warning |
| Types | `tsc --noEmit` on a file importing all twelve, `skipLibCheck` off |
| React 19 | `keel-stack-test` on `^19`, `npm ls react` clean, its build green |
| Badge warning | unknown colour → warning, default classes still applied |
| Tabs value API | reorder the tabs array → selection follows the value, not the position |
| New components | used in `keel-stack-test` in place of the hand-written version |

---

## Reference

- Conformance site: `C:\Users\Administrator\projects\clients\keel-stack-test`
  (its own `AUDIT.md` covers that site's gaps, not this library's)
- Consuming system: vault → `Features/Custom Site Integration`
- Docs-site rebuild: `PLAN.md`
