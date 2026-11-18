import { Link } from 'react-router-dom'
import { Button, Progress, Switch } from '../../index'
import Specimen from '../Specimen'
import CodePanel from '../CodePanel'
import { usePageMeta } from '../lib/meta'

function OverrideDemo() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button label="Default primary" />
      <Button
        label="Brand override"
        className="!bg-[#FF5A36] !text-[#0B0B0B] hover:!bg-[#E8461F]"
      />
      <Button variant="outline" label="Rounded full" className="!rounded-full" />
    </div>
  )
}

function SlotsDemo() {
  return (
    <div className="w-full max-w-md space-y-6">
      <Progress
        value={68}
        showLabel
        classNames={{
          track: 'bg-ink/10',
          bar: 'bg-gradient-to-r from-[#FF5A36] to-[#F5A94A]',
          label: 'text-ink',
        }}
      />
      <Switch
        checked
        label="Notifications"
        onChange={() => {}}
        classNames={{ track: '!bg-[#7C3AED]' }}
      />
    </div>
  )
}

export default function ThemingGuide() {
  usePageMeta(
    'Theming',
    'How to theme cite-ui: overrides with className, class-based dark mode and Tailwind setup.'
  )

  return (
    <article className="max-w-[860px]">
      <nav aria-label="Breadcrumb" className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink/35">
        <Link to="/" className="transition-colors hover:text-ink">Docs</Link>
        <span className="mx-2">/</span>
        <span>Getting started</span>
      </nav>

      <header className="mt-5 border-b border-ink/10 pb-8">
        <h1 className="font-display text-[2.2rem] font-semibold leading-[1.05] tracking-[-0.03em] text-ink sm:text-[2.6rem]">
          Theming
        </h1>
        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-ink-soft">
          The components ship neutral Tailwind defaults. There is no theme provider and no
          stylesheet to import — your Tailwind config and the classes you pass are the theme. One
          optional CSS variable, <code className="rounded bg-ink/5 px-1.5 py-0.5 font-mono text-[12px] text-ink">--cite-accent</code>,
          re-skins the accent surfaces.
        </p>
      </header>

      <section className="mt-8">
        <h2 className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/35">Override with className</h2>
        <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-ink-soft">
          Every component appends <code className="rounded bg-ink/5 px-1.5 py-0.5 font-mono text-[12px] text-ink">className</code>{' '}
          last, so a utility in your class list wins. Use <code className="rounded bg-ink/5 px-1.5 py-0.5 font-mono text-[12px] text-ink">!important</code>{' '}
          only when a variant class is equally specific.
        </p>
        <div className="mt-3">
          <Specimen
            id="override"
            title="One component, three looks"
            description="The accent override uses the FrameStudio token; the third removes the radius."
            code={`<Button label="Default primary" />

<Button
  label="Brand override"
  className="!bg-[#FF5A36] !text-[#0B0B0B] hover:!bg-[#E8461F]"
/>

<Button variant="outline" label="Rounded full" className="!rounded-full" />`}
          >
            <OverrideDemo />
          </Specimen>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/35">Dark mode</h2>
        <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-ink-soft">
          Components use Tailwind&rsquo;s class strategy. Set{' '}
          <code className="rounded bg-ink/5 px-1.5 py-0.5 font-mono text-[12px] text-ink">darkMode: &apos;class&apos;</code>{' '}
          and add <code className="rounded bg-ink/5 px-1.5 py-0.5 font-mono text-[12px] text-ink">dark</code>{' '}
          to <code className="rounded bg-ink/5 px-1.5 py-0.5 font-mono text-[12px] text-ink">html</code>{' '}
          or any wrapper. The light/dark control on every example above is exactly that: a wrapper
          with the class toggled.
        </p>
        <div className="mt-3">
          <CodePanel
            filename="tailwind.config.js"
            code={`export default {
  darkMode: 'class',
  content: [
    './src/**/*.{js,jsx}',
    './node_modules/cite-ui/src/**/*.{js,jsx}',
  ],
}`}
          />
        </div>
        <p className="mt-4 text-[13px] leading-relaxed text-ink/50">
          The second content entry is required so Tailwind does not purge the library&rsquo;s own
          classes. See{' '}
          <Link to="/guide/installation" className="font-semibold text-ink underline decoration-ink/25 underline-offset-4 hover:decoration-accent">
            Installation
          </Link>
          .
        </p>
      </section>

      <section className="mt-10">
        <h2 className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/35">One accent variable</h2>
        <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-ink-soft">
          Components with a brand accent — like BottomNav&rsquo;s action tile, badge and focus ring —
          read <code className="rounded bg-ink/5 px-1.5 py-0.5 font-mono text-[12px] text-ink">--cite-accent</code>{' '}
          with the FrameStudio vermilion as a fallback. Leave it unset and nothing changes; set it
          once and every accent surface follows.
        </p>
        <div className="mt-3">
          <CodePanel
            filename="styles.css"
            code={`:root {\n  --cite-accent: #7c3aed;\n}`}
          />
        </div>
        <p className="mt-4 text-[13px] leading-relaxed text-ink/50">
          There are no per-component variables. A surface that needs its own colour takes a class
          slot instead.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/35">Slots for brand surfaces</h2>
        <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-ink-soft">
          BottomNav, Tabs, Switch, Progress and Alert accept a{' '}
          <code className="rounded bg-ink/5 px-1.5 py-0.5 font-mono text-[12px] text-ink">classNames</code>{' '}
          object. Slots are appended after the defaults, so a gradient, an image or a brand colour
          can be passed without a new prop:
        </p>
        <div className="mt-3">
          <CodePanel
            filename="BrandNav.jsx"
            code={`<BottomNav\n  items={items}\n  action={{ icon: "plus", label: "New" }}\n  classNames={{\n    bar: "bg-gradient-to-br from-gray-900 to-purple-950",\n    activeItem: "bg-white/20",\n    action: "bg-gradient-to-br from-amber-300 to-orange-500",\n  }}\n/>`}
          />
        </div>
        <div className="mt-4">
          <Specimen
            id="slots"
            title="The same slots on a progress bar and a switch"
            description="A gradient fill and a brand track. The ! is only needed because the switch's on-colour is a bg utility too."
            code={`<Progress
  value={68}
  showLabel
  classNames={{
    track: "bg-ink/10",
    bar: "bg-gradient-to-r from-[#FF5A36] to-[#F5A94A]",
    label: "text-ink",
  }}
/>

<Switch
  checked
  label="Notifications"
  onChange={() => {}}
  classNames={{ track: "!bg-[#7C3AED]" }}
/>`}
          >
            <SlotsDemo />
          </Specimen>
        </div>
        <p className="mt-4 text-[13px] leading-relaxed text-ink/50">
          The full convention — <code className="font-mono">currentColor</code> state colours, the
          gradient hover overlay, and what not to add — lives in{' '}
          <a
            href="https://github.com/FrameStudio-cloud/cite-ui/blob/main/THEMING.md"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-ink underline decoration-ink/25 underline-offset-4 hover:decoration-accent"
          >
            THEMING.md
          </a>
          .
        </p>
      </section>

      <section className="mt-10">
        <h2 className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/35">What not to do</h2>
        <ul className="mt-3 space-y-2.5 text-[15px] leading-relaxed text-ink-soft">
          <li className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            Do not reach into component internals with descendant selectors. Pass a class instead.
          </li>
          <li className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            Do not fork a component to change a colour; a variant, a class slot or <code className="rounded bg-ink/5 px-1.5 py-0.5 font-mono text-[12px] text-ink">className</code> covers it.
          </li>
          <li className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            Do not ship a second global stylesheet; there is nothing in the package that needs one.
          </li>
        </ul>
      </section>
    </article>
  )
}
