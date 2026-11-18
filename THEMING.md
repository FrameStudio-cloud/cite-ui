# Component theming

How colour reaches a cite-ui component, and how it stays out of the consumer's
way. `THEME.md` describes the FrameStudio visual brand (paper, ink, vermilion);
this file is the **API contract** every component follows so any brand — solid
colours, palettes, gradients — can use it without forking.

The short version: **neutral by default, `currentColor` for state, class slots
for brand surfaces, `style`/nodes for anything exotic, one optional accent
variable.** No theme provider, no stylesheet to import.

## The ladder

Every new component should support these four levels, in this order.

| Level | Mechanism | Use for |
|---|---|---|
| 1. Defaults | Neutral Tailwind utilities (`bg-black`, `text-gray-600`, `border-gray-200`) plus `dark:` variants | Everything. A component that looks right with no props should look right in any brand. |
| 2. Inherited colour | `currentColor`, alpha utilities (`bg-current/10` where supported, otherwise `opacity-*` on an inner wrapper) | Icons, labels, hover states, active chips. One `text-*` from the consumer flows through the whole component. |
| 3. Class slots | `classNames={{ root, item, activeItem, action, badge, … }}` | Surfaces that genuinely carry the brand: nav bars, switch tracks, progress fills, tab indicators, toast accents. |
| 4. Escape hatch | `style` on the root and on the action node; node-typed props (`action`, `icon`, `trigger`) | Gradients, images, patterns, fully custom sub-elements. |

If a component only ever colours itself with levels 1–2, it does not need slots.
Do not invent a prop for a one-off.

## API rules

1. **`className` always applies to the root and is appended last.** This is the
   existing contract; keep it.
2. **Multi-part components take a `classNames` object, not named props.** Use
   the same shape everywhere so the API is predictable:

   ```jsx
   <BottomNav classNames={{ root, bar, item, activeItem, label, action, badge }} />
   ```

   Document the available keys in the component's props table. A slot is a
   full class string from the consumer; the component appends it after its
   defaults.
3. **`style` passes through to the root.** Nodes that carry a gradient take
   their own `style` (for example `action.style`).
4. **Node-typed props stay node-typed.** If a consumer can pass JSX for a part,
   gradients and images are their problem to solve, not ours to model.
5. **Do not add a `theme`/`tone` provider or context.** Theme selection belongs
   to the consumer's Tailwind config.

## Colour rules

- **Never depend on FrameStudio tokens.** `bg-accent`, `text-ink`, `bg-paper`
  only exist in this repo's docs config. Ship `gray`/`black`/`white` instead.
- **One optional accent variable**, for the few places that need a brand hue
  (active indicators, focus rings, action tiles, badges):

  ```jsx
  className="bg-[var(--cite-accent,#FF5A36)] focus-visible:ring-[var(--cite-accent,#FF5A36)]"
  ```

  The fallback is the FrameStudio vermilion, so the component looks finished
  with no CSS at all. Consumers opt in with one declaration:

  ```css
  :root {
    --cite-accent: #7c3aed;
  }
  ```

- **No per-component variables.** `--cite-nav-bar`, `--cite-switch-track`,
  `--cite-progress-fill`… does not scale across 40 components. Per-surface
  control is what class slots are for.
- **Semantic colours are variants, not props.** Danger red and WhatsApp green
  are meanings, not themes; expose them as `variant="danger"` and leave them
  alone.
- **Dark mode is class-based** (`darkMode: 'class'`). Components carry their own
  `dark:` variants. A consumer's slot override must carry its own `dark:` class
  if it differs by mode.

## Gradients

A gradient is `background-image`, not a colour. It cannot be passed through a
`color`-shaped prop or derived into hover/focus states automatically.

- **Surfaces:** pass a slot class, or `style.backgroundImage` for the action node.

  ```jsx
  <BottomNav
    action={{ icon: 'plus', label: 'New' }}
    classNames={{ action: 'bg-gradient-to-br from-amber-300 to-orange-500' }}
  />
  ```

  Or, when the gradient is not expressible as utilities:

  ```jsx
  <BottomNav action={{ label: 'New', style: { backgroundImage: 'linear-gradient(...)' } }} />
  ```

- **Hover/press:** derive it with an overlay, not a colour change. A
  `bg-black/10` overlay darkens a solid, a gradient or an image alike.
- **Do not accept a `gradient` prop.** It becomes a mini CSS API and only
  covers the cases you thought of.

## The override caveat

"Applied last" does not beat Tailwind. When a consumer overrides the *same*
property (`bg-black` → `bg-purple-600`), the winner is decided by the order
Tailwind writes utilities into the stylesheet, not by the order of classes on
the element. That is why the Theming guide recommends `!` for same-property
overrides.

We accept this rather than add `tailwind-merge` as a runtime dependency:

- Make defaults neutral enough that same-property overrides are rare.
- Expose a slot for any surface where a brand override is *expected*, so the
  consumer passes one class from the start instead of fighting a default.
- Use `currentColor` and alpha so most overrides are a `text-*`, not a `bg-*`.

## Components with slots

| Component | Slots |
|---|---|
| `BottomNav` | `root`, `bar`, `item`, `activeItem`, `label`, `action`, `badge` |
| `Tabs` | `root`, `tab`, `activeTab`, `icon` |
| `Switch` | `root`, `track`, `thumb`, `label` |
| `Progress` | `root`, `track`, `bar`, `label` |
| `Alert` | `root`, `icon`, `content`, `title`, `message`, `close` |

Anything not on this list either has no brand surface or is a single element, where
`className` already is the slot.

## Portals and multi-root components

`className` reaches the root only. For Toast, Modal, Drawer and anything else
that renders through a portal, the slot map must be explicit and reach into the
portal. A `className` on the trigger is not a theming API.

## Checklist for a new component

- [ ] Looks correct with no props, in light and dark.
- [ ] `className` appended to the root, last.
- [ ] Internal states use `currentColor`/alpha, not fixed hues.
- [ ] Brand surfaces exposed through `classNames`, documented in the props table.
- [ ] Accent, if any, is `var(--cite-accent, #FF5A36)`.
- [ ] `style` passes to the root; node-typed parts accept `style` where needed.
- [ ] No new runtime dependencies, no global stylesheet, no theme context.
- [ ] Same-property override path is at least documented, ideally avoided.
