import { Link } from 'react-router-dom'
import { Icon } from '../index'
import { pathFor } from './lib/registry'
import { Preview } from './previews'

function meta(entry) {
  if (entry.props.length > 0) {
    return `${entry.props.length} prop${entry.props.length === 1 ? '' : 's'}`
  }
  return entry.group === 'Hooks' || entry.group === 'Utilities' ? 'API' : 'Live demo'
}

/** One catalogue tile, shared by the dashboard and the full component index. */
export default function ComponentCard({ entry, index }) {
  return (
    <Link
      to={pathFor(entry)}
      className="group relative flex flex-col overflow-hidden rounded-[22px] border border-ink/10 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-ink/25 hover:shadow-[0_26px_50px_-30px_rgba(11,11,11,0.5)]"
    >
      <div className="relative flex h-44 items-center justify-center overflow-hidden bg-cream/40 p-5 sm:h-48">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-60 [background-image:radial-gradient(circle_at_1px_1px,rgba(11,11,11,0.10)_1px,transparent_0)] [background-size:18px_18px]"
        />
        {typeof index === 'number' && (
          <span className="absolute left-4 top-3 font-mono text-[9px] uppercase tracking-[0.16em] text-ink/30">
            {String(index + 1).padStart(2, '0')}
          </span>
        )}
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
  )
}
