# The FrameStudio theme

The visual system the docs share with `framestudio.co.ke` (and any other
FrameStudio project). If a tool looks like this, it reads as ours.

Component API conventions — class slots, `currentColor` state, the optional
`--cite-accent` variable — live in `THEMING.md`. This file is the palette; that
one is the contract.

Source of truth:

- `tailwind.config.js` — colours and font families
- `src/docs/docs.css` — selection, focus ring, scroll behaviour
- `src/docs/LogoReveal.jsx` — the portal mark animation
- Landing equivalent: `framestudio-landing/src/index.css` and `LogoReveal.jsx`

## Colour

| Token | Value | Use |
|---|---|---|
| `ink` | `#0B0B0B` | Text, dark surfaces, code panels |
| `ink-2` | `#171716` | Raised dark surfaces |
| `ink-soft` | `#52524B` | Body copy on light |
| `ink-faint` | `#8A8A80` | Tertiary text |
| `paper` | `#FBF8F0` | Default page surface |
| `cream` | `#F3EDDF` | Alternating warm band, preview canvas |
| `accent` | `#FF5A36` (vermilion) | Actions, active states, one italic word |
| `accent-deep` | `#E8461F` | Hover / pressed |

Rules:

- The accent is action and emphasis only — never body copy, never a large fill.
- On cream or paper, don't set small text in the accent (it fails contrast);
  use `ink`, and keep the accent for dots, rules and buttons.
- Dark mode is class-based (`darkMode: 'class'`). Components carry their own
  `dark:` variants; the page adds `dark` on `<html>` or a wrapper.

## Type

Four fonts, four jobs. Do not borrow one for another.

| Role | Font | Tailwind | Use |
|---|---|---|---|
| Display | Bricolage Grotesque 600 | `font-display` | Headlines, card titles, wordmark |
| Editorial | Instrument Serif italic | `font-serif italic` | One word inside a headline |
| Body/UI | General Sans | `font-sans` | Paragraphs, buttons, forms, tables |
| Labels/data | Space Mono | `font-mono` | Eyebrows, stats, code, versions |

Headline recipe: `font-display font-semibold tracking-[-0.03em] leading-[1.02]`
with one `<span className="font-serif italic">word</span>`. One per headline.

Labels: mono, uppercase, `tracking-[0.16em]`–`[0.22em]`, 9–11px, low-contrast ink.

## Surfaces and shape

- Cards: `rounded-2xl`/`rounded-3xl`, 1px `ink/10` border, paper background.
- Preview canvases: cream at 40–50% with a 16px dot grid at 10% ink.
- Code: ink panel, paper text at 80%, strings in accent, 12px mono.
- Shadows are soft and low: `0 18px 40px -30px rgba(11,11,11,.45)`.
- Full pills for actions; 8–12px radius for small controls.

## Logo

The mark is two filled polygons in `currentColor`, drawn with a stroke dash and
then filled. Copy `LogoReveal.jsx` and use `text-accent/30` as a background
watermark, or full accent for a focal mark.

The animation is written so the final state is the default: reduced motion and
no-JS visitors see the finished mark. Keep that property if you change timings.

## Applying it to another project

1. Copy the `colors` and `fontFamily` blocks from `tailwind.config.js`.
2. Load the fonts:

```html
<link href="https://api.fontshare.com/v2/css?f[]=general-sans@400,500,600,700&display=swap" rel="stylesheet" />
<link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400..800&family=Instrument+Serif:ital@0;1&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet" />
```

3. Copy `docs.css` (selection, focus ring) or the landing equivalent.
4. Set `darkMode: 'class'` and let each component own its `dark:` variants.
5. For docs or dashboards, copy `LogoReveal.jsx` and the page shell patterns in
   `src/docs/Shell.jsx`.

That is the theme: warm paper, near-black ink, one vermilion accent, Bricolage
for display, Instrument Serif for one italic word, General Sans for reading,
Space Mono for labels and code.
