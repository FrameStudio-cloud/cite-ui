import { Link } from 'react-router-dom'
import { Button } from '../../index'
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
          The components ship neutral Tailwind defaults. There are no CSS variables to learn and no
          stylesheet to import — your Tailwind config and the classes you pass are the theme.
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
        <h2 className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/35">What not to do</h2>
        <ul className="mt-3 space-y-2.5 text-[15px] leading-relaxed text-ink-soft">
          <li className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            Do not reach into component internals with descendant selectors. Pass a class instead.
          </li>
          <li className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            Do not fork a component to change a colour; the variant plus <code className="rounded bg-ink/5 px-1.5 py-0.5 font-mono text-[12px] text-ink">className</code> covers it.
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
