import { Link } from 'react-router-dom'
import { componentCount, groups, pathFor, version } from '../lib/registry'
import { usePageMeta } from '../lib/meta'
import CodePanel from '../CodePanel'

const REPO = 'https://github.com/FrameStudio-cloud/cite-ui'
const NPM = 'https://www.npmjs.com/package/cite-ui'

export default function Home() {
  usePageMeta(
    'React components for Tailwind CSS',
    'Documentation for cite-ui: 39 React components for Tailwind CSS, zero runtime dependencies, MIT licensed.'
  )

  return (
    <div className="max-w-[900px]">
      <p className="flex items-center gap-2.5 font-mono text-[10px] uppercase tracking-[0.22em] text-ink/45">
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
        cite-ui docs · v{version}
      </p>

      <h1 className="mt-5 font-display text-[2.4rem] font-semibold leading-[1.02] tracking-[-0.03em] text-ink sm:text-5xl">
        Every component, <span className="font-serif italic">documented.</span>
      </h1>

      <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-soft">
        A React component library for Tailwind CSS — {componentCount} components, zero runtime
        dependencies, MIT licensed. Built in Nairobi.
      </p>

      <div className="mt-8 max-w-xl">
        <CodePanel code="npm install cite-ui" filename="terminal" />
      </div>

      <dl className="mt-10 grid grid-cols-2 gap-x-8 gap-y-5 border-t border-ink/10 pt-6 sm:grid-cols-4">
        {[
          { value: componentCount, label: 'components' },
          { value: '0', label: 'runtime deps' },
          { value: '21 kB', label: 'gzip, ESM' },
          { value: 'MIT', label: 'license' },
        ].map((stat) => (
          <div key={stat.label}>
            <dd className="font-display text-2xl font-semibold text-ink">{stat.value}</dd>
            <dt className="mt-1 font-mono text-[9px] uppercase tracking-[0.16em] text-ink/45">
              {stat.label}
            </dt>
          </div>
        ))}
      </dl>

      <div className="mt-8 flex flex-wrap items-center gap-4 text-sm">
        <Link
          to="/guide/installation"
          className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 font-semibold text-paper transition-colors hover:bg-accent hover:text-ink"
        >
          Installation
        </Link>
        <a
          href={REPO}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-ink/60 underline decoration-ink/20 underline-offset-4 transition-colors hover:text-ink hover:decoration-accent"
        >
          GitHub
        </a>
        <a
          href={NPM}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-ink/60 underline decoration-ink/20 underline-offset-4 transition-colors hover:text-ink hover:decoration-accent"
        >
          npm
        </a>
      </div>

      <section className="mt-16">
        <div className="flex items-baseline justify-between gap-4">
          <h2 className="font-display text-xl font-semibold tracking-[-0.02em] text-ink">
            All components
          </h2>
          <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink/35">
            {componentCount} exports
          </span>
        </div>

        <div className="mt-6 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {groups
            .filter((group) => group.name !== 'Getting Started')
            .map((group) => (
              <section key={group.name}>
                <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/35">
                  {group.name}
                </h3>
                <ul className="mt-2 space-y-1">
                  {group.items.map((item) => (
                    <li key={item.id}>
                      <Link
                        to={pathFor(item)}
                        className="text-sm text-ink-soft transition-colors hover:text-accent"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
        </div>
      </section>
    </div>
  )
}
