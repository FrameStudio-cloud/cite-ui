import { Link } from 'react-router-dom'
import { usePageMeta } from '../lib/meta'

export default function NotFound() {
  usePageMeta('Page not found', 'That page does not exist in the cite-ui documentation.')

  return (
    <div className="mx-auto max-w-xl py-16 text-center">
      <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink/40">404</p>
      <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.05] tracking-[-0.03em] text-ink">
        That page <span className="font-serif italic">moved on.</span>
      </h1>
      <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
        Try the search — press <kbd className="rounded border border-ink/15 bg-white px-1.5 py-0.5 font-mono text-[11px]">/</kbd>{' '}
        anywhere — or start from the full component index.
      </p>
      <Link
        to="/components"
        className="mt-6 inline-flex rounded-full bg-ink px-4 py-2 text-sm font-semibold text-paper transition-colors hover:bg-accent hover:text-ink"
      >
        All components
      </Link>
    </div>
  )
}
