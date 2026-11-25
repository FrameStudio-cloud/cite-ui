import { Link } from 'react-router-dom'
import CodePanel from '../CodePanel'
import { usePageMeta } from '../lib/meta'
import { byId, entries } from '../lib/registry'

const firstComponent = entries.find((entry) => entry.id === 'button')

export default function GuidePage() {
  const entry = byId['getting-started']

  usePageMeta(
    'Installation',
    'Install cite-ui in a React project with Tailwind CSS v3: package, peer dependencies and the Tailwind content entry.'
  )

  return (
    <article className="mx-auto max-w-[900px]">
      <nav aria-label="Breadcrumb" className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink/35">
        <Link to="/" className="transition-colors hover:text-ink">Overview</Link>
        <span className="mx-2">/</span>
        <Link to="/guide/installation" className="transition-colors hover:text-ink">Guides</Link>
        <span className="mx-2">/</span>
        <span>Installation</span>
      </nav>

      <header className="mt-5 border-b border-ink/10 pb-8">
        <h1 className="font-display text-[2.2rem] font-semibold leading-[1.05] tracking-[-0.03em] text-ink sm:text-[2.6rem]">
          Installation
        </h1>
        <p
          className="mt-4 max-w-2xl text-[15px] leading-relaxed text-ink-soft [&_code]:rounded [&_code]:bg-ink/5 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-[12.5px] [&_code]:text-ink"
          dangerouslySetInnerHTML={{ __html: entry.description }}
        />
      </header>

      <section className="mt-8">
        <h2 className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/35">Install</h2>
        <div className="mt-3">
          <CodePanel code={entry.example} filename="terminal" />
        </div>
      </section>

      <section className="mt-10">
        <h2 className="font-display text-xl font-semibold tracking-[-0.02em] text-ink">
          What you need
        </h2>
        <ul className="mt-4 space-y-3 text-[15px] leading-relaxed text-ink-soft">
          <li className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong className="text-ink">React 18 or newer.</strong> React and React DOM are peer
              dependencies, never bundled.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong className="text-ink">Tailwind CSS v3.</strong> Components are styled with
              utility classes, so the source directory must be in your Tailwind content array.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong className="text-ink">No CSS import.</strong> There is no stylesheet to load —
              zero runtime dependencies, and nothing to keep in sync.
            </span>
          </li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/35">Next</h2>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          {firstComponent && (
            <Link
              to={`/components/${firstComponent.id}`}
              className="group rounded-2xl border border-ink/10 p-4 transition-colors hover:border-ink/30"
            >
              <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-ink/35">Start with</span>
              <span className="mt-1 block font-display text-base font-semibold text-ink group-hover:text-accent">
                {firstComponent.name}
              </span>
            </Link>
          )}
          <a
            href="https://github.com/FrameStudio-cloud/cite-ui"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border border-ink/10 p-4 transition-colors hover:border-ink/30"
          >
            <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-ink/35">Read the source</span>
            <span className="mt-1 block font-display text-base font-semibold text-ink">
              GitHub repository
            </span>
          </a>
        </div>
      </section>
    </article>
  )
}
