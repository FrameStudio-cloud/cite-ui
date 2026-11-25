import { Link } from 'react-router-dom'
import { Icon } from '../../index'
import { groups, pathFor } from '../lib/registry'
import { usePageMeta } from '../lib/meta'
import Hero from '../Hero'
import { Preview } from '../previews'

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
      <Hero />

      <div id="components" className="mt-16 scroll-mt-20 space-y-14">
        {sections.map((group) => {
          const copy = SECTION_COPY[group.name] || { title: group.name, desc: '' }
          return (
            <section key={group.name}>
              <div className="flex flex-col gap-2 border-b border-ink/10 pb-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h2 className="font-display text-[26px] font-semibold tracking-[-0.025em] text-ink">
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

              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
                {group.items.map((entry, index) => (
                  <Link
                    key={entry.id}
                    to={pathFor(entry)}
                    className="group relative flex flex-col overflow-hidden rounded-[22px] border border-ink/10 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-ink/25 hover:shadow-[0_26px_50px_-30px_rgba(11,11,11,0.5)]"
                  >
                    <div className="relative flex h-44 items-center justify-center overflow-hidden bg-cream/40 p-5 sm:h-48">
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 opacity-60 [background-image:radial-gradient(circle_at_1px_1px,rgba(11,11,11,0.10)_1px,transparent_0)] [background-size:18px_18px]"
                      />
                      <span className="absolute left-4 top-3 font-mono text-[9px] uppercase tracking-[0.16em] text-ink/30">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="absolute right-3 top-3 grid h-7 w-7 place-items-center rounded-full border border-ink/10 bg-white/80 text-ink/40 opacity-0 transition-all group-hover:opacity-100 group-hover:text-accent">
                        <Icon name="arrowUp" size={12} className="rotate-45" />
                      </span>
                      <div className="relative h-full w-full">
                        <Preview id={entry.id} />
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col border-t border-ink/10 px-4 py-3.5">
                      <h3 className="font-display text-[15px] font-semibold tracking-[-0.01em] text-ink">
                        {entry.name}
                      </h3>
                      <p className="mt-0.5 font-mono text-[9px] uppercase tracking-[0.14em] text-ink/40">
                        {meta(entry)}
                      </p>
                      <span className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-medium text-ink/40 transition-colors group-hover:text-accent">
                        Open component
                        <Icon name="arrowRight" size={12} />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )
        })}
      </div>

      <p className="mt-14 border-t border-ink/10 pt-6 font-mono text-[9px] uppercase tracking-[0.16em] text-ink/35">
        <a href={NPM} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-ink">
          npm i cite-ui
        </a>{' '}
        · MIT · built by{' '}
        <a
          href="https://www.framestudio.co.ke"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-ink"
        >
          FrameStudio
        </a>
      </p>
    </div>
  )
}
