import { Link } from 'react-router-dom'
import { Icon } from '../../index'
import { componentCount, groups, pathFor, version } from '../lib/registry'
import { usePageMeta } from '../lib/meta'
import CodePanel from '../CodePanel'
import LogoReveal from '../LogoReveal'
import { Preview } from '../previews'

const REPO = 'https://github.com/FrameStudio-cloud/cite-ui'
const NPM = 'https://www.npmjs.com/package/cite-ui'

const SECTION_COPY = {
  'Legacy / Enhanced': {
    title: 'Base components',
    desc: 'Buttons, navigation, dialogs and notifications — the pieces every page starts with.',
  },
  Layout: {
    title: 'Layout primitives',
    desc: 'Containers, stacks and grids. The scaffolding you compose everything else inside.',
  },
  UI: {
    title: 'UI components',
    desc: 'Cards, badges, avatars, alerts and loading states — the small parts that carry a page.',
  },
  Form: {
    title: 'Forms',
    desc: 'Inputs, selects and toggles that behave on a keyboard and validate with useForm.',
  },
  Navigation: {
    title: 'Navigation & overlays',
    desc: 'Tabs, tables, drawers, menus and pagination. The parts that open, close and sort.',
  },
  Animation: {
    title: 'Motion',
    desc: 'Entrances and imperative transitions with zero animation dependencies.',
  },
  Hooks: {
    title: 'Hooks',
    desc: 'Form state, storage, media queries and fetching — the logic behind the components.',
  },
  Utilities: {
    title: 'Utilities',
    desc: 'Class joining, Kenyan shilling and date formatting, slugs, truncation and ids.',
  },
  Icons: {
    title: 'Icons',
    desc: 'One Icon component, 49 stroke glyphs, no icon package.',
  },
}

function meta(entry) {
  if (entry.props.length > 0) {
    return `${entry.props.length} prop${entry.props.length === 1 ? '' : 's'}`
  }
  return entry.group === 'Hooks' || entry.group === 'Utilities' ? 'API' : 'Live demo'
}

export default function Home() {
  usePageMeta(
    'React components for Tailwind CSS',
    'Documentation for cite-ui: 40 React components for Tailwind CSS, zero runtime dependencies, MIT licensed.'
  )

  const sections = groups.filter((group) => group.name !== 'Getting Started')

  return (
    <div className="max-w-[1200px]">
      <section className="relative overflow-hidden rounded-[28px] bg-ink px-6 py-12 sm:px-10 sm:py-14">
        <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-accent/20 blur-[110px]" />
        <div className="pointer-events-none absolute -right-2 top-1/2 hidden h-[420px] w-[320px] -translate-y-1/2 text-accent/30 sm:block lg:w-[360px]">
          <LogoReveal className="h-full" />
        </div>

        <div className="relative max-w-2xl">
          <p className="flex items-center gap-2.5 font-mono text-[10px] uppercase tracking-[0.22em] text-accent">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
            FrameStudio · open source · v{version}
          </p>

          <h1 className="mt-5 font-display text-[2.4rem] font-semibold leading-[1.02] tracking-[-0.035em] text-paper sm:text-5xl lg:text-[3.4rem]">
            Build it once.{' '}
            <span className="font-serif italic text-accent">Use it everywhere.</span>
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-paper/55">
            cite-ui is our React component library for Tailwind — {componentCount} components,
            zero runtime dependencies, and the same colours and type as the studio that builds it.
          </p>

          <div className="mt-8 max-w-sm">
            <CodePanel code="npm install cite-ui" compact />
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <a
              href="#components"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-accent-deep"
            >
              Browse components
              <Icon name="arrowDown" size={14} />
            </a>
            <Link
              to="/guide/installation"
              className="inline-flex items-center gap-2 rounded-full border border-paper/20 px-5 py-2.5 text-sm font-semibold text-paper transition-colors hover:border-accent/60 hover:text-accent"
            >
              Installation
            </Link>
            <a
              href={REPO}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-paper/50 transition-colors hover:text-paper"
            >
              GitHub
              <Icon name="externalLink" size={12} />
            </a>
          </div>

          <dl className="mt-10 grid max-w-lg grid-cols-2 gap-x-8 gap-y-4 border-t border-paper/10 pt-6 sm:grid-cols-4">
            {[
              { value: componentCount, label: 'components' },
              { value: '0', label: 'runtime deps' },
              { value: '22.5 kB', label: 'gzip, ESM' },
              { value: 'MIT', label: 'license' },
            ].map((stat) => (
              <div key={stat.label}>
                <dd className="font-display text-xl font-semibold text-paper">{stat.value}</dd>
                <dt className="mt-0.5 font-mono text-[8px] uppercase tracking-[0.16em] text-paper/45">
                  {stat.label}
                </dt>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <div id="components" className="mt-14 scroll-mt-20 space-y-12">
        {sections.map((group) => {
          const copy = SECTION_COPY[group.name] || { title: group.name, desc: '' }
          return (
            <section key={group.name}>
              <div className="flex flex-col gap-2 border-b border-ink/10 pb-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h2 className="font-display text-2xl font-semibold tracking-[-0.02em] text-ink">
                    {copy.title}
                  </h2>
                  {copy.desc && (
                    <p className="mt-1 max-w-2xl text-sm leading-relaxed text-ink-soft">{copy.desc}</p>
                  )}
                </div>
                <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-ink/35">
                  {group.items.length} {group.items.length === 1 ? 'component' : 'components'}
                </span>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-5">
                {group.items.map((entry) => (
                  <Link
                    key={entry.id}
                    to={pathFor(entry)}
                    className="group flex flex-col overflow-hidden rounded-2xl border border-ink/10 bg-paper transition-all duration-200 hover:-translate-y-0.5 hover:border-ink/25 hover:shadow-[0_18px_40px_-30px_rgba(11,11,11,0.45)]"
                  >
                    <div className="relative flex h-32 items-center justify-center overflow-hidden bg-cream/40 p-3">
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 opacity-50 [background-image:radial-gradient(circle_at_1px_1px,rgba(11,11,11,0.10)_1px,transparent_0)] [background-size:16px_16px]"
                      />
                      <div className="relative h-full w-full">
                        <Preview id={entry.id} />
                      </div>
                    </div>
                    <div className="flex items-center justify-between gap-2 border-t border-ink/10 px-3 py-2.5">
                      <div className="min-w-0">
                        <h3 className="truncate font-display text-[13px] font-semibold text-ink">
                          {entry.name}
                        </h3>
                        <p className="font-mono text-[8px] uppercase tracking-[0.14em] text-ink/40">
                          {meta(entry)}
                        </p>
                      </div>
                      <Icon
                        name="arrowRight"
                        size={12}
                        className="shrink-0 text-ink/25 transition-all group-hover:translate-x-0.5 group-hover:text-accent"
                      />
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )
        })}
      </div>

      <p className="mt-12 border-t border-ink/10 pt-6 font-mono text-[9px] uppercase tracking-[0.16em] text-ink/35">
        <a href={NPM} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-ink">
          npm i cite-ui
        </a>{' '}
        · MIT · built in Nairobi
      </p>
    </div>
  )
}
