import { Link } from 'react-router-dom'
import { Icon } from '../../index'
import { CATEGORIES, byId, componentCount, groups, version } from '../lib/registry'
import { usePageMeta } from '../lib/meta'
import CodePanel from '../CodePanel'
import ComponentCard from '../ComponentCard'

const REPO = 'https://github.com/FrameStudio-cloud/cite-ui'

const FEATURED = ['button', 'card', 'textfield', 'tabs', 'modal', 'toast', 'table', 'icon']

const STATS = [
  { value: componentCount, label: 'Components', hint: 'Ready to drop in', icon: 'package' },
  { value: '0', label: 'Runtime deps', hint: 'Only React peers', icon: 'check' },
  { value: '22.5 kB', label: 'Gzip, ESM', hint: 'Whole library', icon: 'arrowDown' },
  { value: 'MIT', label: 'License', hint: 'Use it anywhere', icon: 'star' },
]

const CHECKS = [
  'React 18+ as a peer dependency',
  'Tailwind CSS v3 content glob',
  'Nothing else to install or configure',
]

export default function Home() {
  usePageMeta(
    'Overview',
    'Dashboard for cite-ui: 40 React components for Tailwind CSS, zero runtime dependencies, MIT licensed.'
  )

  const featured = FEATURED.map((id) => byId[id]).filter(Boolean)

  return (
    <div>
      <header className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-ink/40">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
            Overview
          </p>
          <h1 className="mt-2 font-display text-[2rem] font-semibold leading-[1.04] tracking-[-0.035em] text-ink sm:text-[2.5rem]">
            Everything you need to ship.
          </h1>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink-soft">
            The studio&rsquo;s React component library for Tailwind — browse the catalogue, open a
            component and copy the code.
          </p>
        </div>
        <Link
          to="/components"
          className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-[13px] font-semibold text-paper transition-colors hover:bg-accent hover:text-ink"
        >
          Browse library
          <Icon name="arrowRight" size={14} />
        </Link>
      </header>

      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        <section className="relative overflow-hidden rounded-[26px] bg-ink p-7 text-paper sm:p-9 lg:col-span-2">
          <div className="pointer-events-none absolute -left-20 -top-24 h-64 w-64 rounded-full bg-accent/25 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-24 right-0 h-64 w-64 rounded-full bg-[#8b6cf0]/20 blur-[100px]" />

          <p className="relative flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.2em] text-accent sm:text-[10px]">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
            FrameStudio · open source · v{version}
          </p>
          <h2 className="relative mt-4 max-w-lg font-display text-[2rem] font-semibold leading-[1.02] tracking-[-0.04em] sm:text-[2.7rem]">
            Build it once.{' '}
            <span className="font-serif italic text-accent">Use it everywhere.</span>
          </h2>
          <p className="relative mt-4 max-w-md text-sm leading-relaxed text-paper/55">
            {componentCount} components, zero runtime dependencies, and the same design language
            behind everything we make at FrameStudio.
          </p>
          <div className="relative mt-7 flex flex-wrap items-center gap-3">
            <Link
              to="/components"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-[13px] font-semibold text-ink transition-colors hover:bg-accent-deep"
            >
              Browse components
              <Icon name="arrowRight" size={14} />
            </Link>
            <Link
              to="/guide/installation"
              className="inline-flex items-center gap-2 rounded-full border border-paper/20 px-5 py-2.5 text-[13px] font-semibold text-paper transition-colors hover:border-accent/60 hover:text-accent"
            >
              Installation
            </Link>
            <a
              href={REPO}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-paper/50 transition-colors hover:text-paper"
            >
              GitHub
              <Icon name="externalLink" size={11} />
            </a>
          </div>
        </section>

        <section className="flex flex-col rounded-[26px] border border-ink/10 bg-white p-6">
          <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-ink/40">Quick start</p>
          <h2 className="mt-2 font-display text-xl font-semibold tracking-[-0.02em] text-ink">
            Add it to your project
          </h2>
          <div className="mt-4">
            <CodePanel code="npm install cite-ui" compact />
          </div>
          <ul className="mt-5 space-y-2.5">
            {CHECKS.map((line) => (
              <li key={line} className="flex items-start gap-2.5 text-[12.5px] leading-relaxed text-ink-soft">
                <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-accent/15 text-accent">
                  <Icon name="check" size={9} strokeWidth={2.5} />
                </span>
                {line}
              </li>
            ))}
          </ul>
          <Link
            to="/guide/installation"
            className="mt-auto inline-flex items-center gap-1.5 pt-5 text-[12.5px] font-semibold text-ink transition-colors hover:text-accent"
          >
            Read the installation guide
            <Icon name="arrowRight" size={13} />
          </Link>
        </section>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {STATS.map((stat) => (
          <div key={stat.label} className="rounded-2xl border border-ink/10 bg-white p-5">
            <div className="flex items-center justify-between gap-2">
              <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-ink/40">
                {stat.label}
              </span>
              <span className="grid h-7 w-7 place-items-center rounded-lg bg-ink/5 text-ink/50">
                <Icon name={stat.icon} size={13} />
              </span>
            </div>
            <p className="mt-3 font-display text-[26px] font-semibold leading-none tracking-[-0.03em] text-ink">
              {stat.value}
            </p>
            <p className="mt-1.5 text-[11px] text-ink/40">{stat.hint}</p>
          </div>
        ))}
      </div>

      <section className="mt-10">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-ink/40">Library</p>
            <h2 className="mt-1 font-display text-2xl font-semibold tracking-[-0.025em] text-ink">
              Browse by category
            </h2>
          </div>
          <Link
            to="/components"
            className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-ink/50 transition-colors hover:text-ink"
          >
            View all {componentCount} components
            <Icon name="arrowRight" size={13} />
          </Link>
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((category) => {
            const group = groups.find((item) => item.name === category.group)
            if (!group) return null
            return (
              <Link
                key={category.group}
                to={`/components?group=${encodeURIComponent(category.group)}`}
                className="group flex flex-col rounded-2xl border border-ink/10 bg-white p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-ink/25 hover:shadow-[0_18px_36px_-30px_rgba(11,11,11,0.5)]"
              >
                <div className="flex items-center justify-between">
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-ink/5 text-ink/60 transition-colors group-hover:bg-accent/15 group-hover:text-accent">
                    <Icon name={category.icon} size={17} />
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-ink/35">
                    {group.items.length} {group.items.length === 1 ? 'item' : 'items'}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-[15px] font-semibold text-ink">
                  {category.title}
                </h3>
                <p className="mt-1 text-[12px] leading-relaxed text-ink-soft">{category.blurb}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-[11px] font-medium text-ink/35 transition-colors group-hover:text-accent">
                  Open
                  <Icon name="arrowRight" size={11} />
                </span>
              </Link>
            )
          })}
        </div>
      </section>

      <section className="mt-10">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-ink/40">Shortcuts</p>
            <h2 className="mt-1 font-display text-2xl font-semibold tracking-[-0.025em] text-ink">
              Featured components
            </h2>
          </div>
          <Link
            to="/components"
            className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-ink/50 transition-colors hover:text-ink"
          >
            Open the full index
            <Icon name="arrowRight" size={13} />
          </Link>
        </div>

        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {featured.map((entry, index) => (
            <ComponentCard key={entry.id} entry={entry} index={index} />
          ))}
        </div>
      </section>
    </div>
  )
}
