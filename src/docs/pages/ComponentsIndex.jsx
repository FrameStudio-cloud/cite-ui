import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Icon } from '../../index'
import { groupLabel, groups } from '../lib/registry'
import { usePageMeta } from '../lib/meta'
import ComponentCard from '../ComponentCard'

const CATEGORIES = groups.filter((group) => group.name !== 'Getting Started')
const TOTAL = CATEGORIES.reduce((count, group) => count + group.items.length, 0)

export default function ComponentsIndex() {
  usePageMeta(
    'Components',
    'The full cite-ui catalogue: React components for Tailwind CSS with live examples and prop tables.'
  )

  const [params, setParams] = useSearchParams()
  const active = params.get('group') || 'All'
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const category = CATEGORIES.find((group) => group.name === active)
    const pool = category ? category.items : CATEGORIES.flatMap((group) => group.items)
    const needle = query.trim().toLowerCase()
    if (!needle) return pool
    return pool.filter(
      (entry) =>
        entry.name.toLowerCase().includes(needle) ||
        groupLabel(entry.group).toLowerCase().includes(needle)
    )
  }, [active, query])

  const selectGroup = (name) => {
    setParams(name === 'All' ? {} : { group: name })
  }

  return (
    <div>
      <header className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-ink/40">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
            Library
          </p>
          <h1 className="mt-2 font-display text-[2rem] font-semibold leading-[1.04] tracking-[-0.035em] text-ink sm:text-[2.5rem]">
            Components
          </h1>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink-soft">
            Every component in the catalogue, with live examples, prop tables and copyable code.
          </p>
        </div>
        <span className="rounded-full border border-ink/10 bg-white px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.14em] text-ink/40">
          {TOTAL} components
        </span>
      </header>

      <div className="mt-6 rounded-2xl border border-ink/10 bg-white p-4 sm:p-5">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div className="relative w-full lg:max-w-sm">
            <label htmlFor="component-filter" className="sr-only">
              Search components
            </label>
            <Icon
              name="search"
              size={15}
              className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-ink/35"
            />
            <input
              id="component-filter"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search components or categories"
              className="w-full rounded-xl border border-ink/15 bg-paper py-2.5 pl-9 pr-4 text-sm text-ink outline-none transition-colors placeholder:text-ink/30 focus:border-accent focus:ring-1 focus:ring-accent/30"
            />
          </div>
          <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-ink/35">
            {filtered.length} {filtered.length === 1 ? 'result' : 'results'}
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-1.5">
          <button
            type="button"
            onClick={() => selectGroup('All')}
            aria-pressed={active === 'All'}
            className={`rounded-full px-3 py-1.5 text-[11px] font-medium transition-colors ${
              active === 'All' ? 'bg-ink text-paper' : 'bg-ink/5 text-ink/55 hover:bg-ink/10 hover:text-ink'
            }`}
          >
            All
          </button>
          {CATEGORIES.map((group) => (
            <button
              key={group.name}
              type="button"
              onClick={() => selectGroup(group.name)}
              aria-pressed={active === group.name}
              className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] font-medium transition-colors ${
                active === group.name
                  ? 'bg-ink text-paper'
                  : 'bg-ink/5 text-ink/55 hover:bg-ink/10 hover:text-ink'
              }`}
            >
              {groupLabel(group.name)}
              <span className={active === group.name ? 'text-paper/50' : 'text-ink/35'}>
                {group.items.length}
              </span>
            </button>
          ))}
        </div>
      </div>

      {filtered.length > 0 ? (
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((entry, index) => (
            <ComponentCard key={entry.id} entry={entry} index={index} />
          ))}
        </div>
      ) : (
        <div className="mt-6 rounded-2xl border border-dashed border-ink/20 bg-white px-6 py-16 text-center">
          <p className="font-display text-lg font-semibold text-ink">Nothing matches yet</p>
          <p className="mx-auto mt-1 max-w-sm text-sm text-ink-soft">
            No component or category matches &ldquo;{query}&rdquo;. Try a shorter search, or clear
            the filter.
          </p>
          <button
            type="button"
            onClick={() => {
              setQuery('')
              selectGroup('All')
            }}
            className="mt-5 inline-flex rounded-full bg-ink px-4 py-2 text-[12px] font-semibold text-paper transition-colors hover:bg-accent hover:text-ink"
          >
            Reset filters
          </button>
        </div>
      )}
    </div>
  )
}
