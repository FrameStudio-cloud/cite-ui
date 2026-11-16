import { useEffect, useRef, useState } from 'react'
import { Icon } from '../index'
import { CodeText } from './lib/code'

/**
 * One example, with its own preview surface and code.
 *
 * The surface toggle adds `dark` to a wrapper around the canvas, which is how
 * the library's class-based dark variants are meant to be exercised. The docs
 * chrome itself stays light; only the specimen flips.
 */
export default function Specimen({ id, title, description, code, children }) {
  const [view, setView] = useState('preview')
  const [surface, setSurface] = useState('light')
  const [copied, setCopied] = useState(false)
  const timer = useRef(null)

  useEffect(() => () => clearTimeout(timer.current), [])

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code)
    } catch {
      return
    }
    setCopied(true)
    clearTimeout(timer.current)
    timer.current = setTimeout(() => setCopied(false), 1600)
  }

  const tabId = (name) => `specimen-${id}-${name}`
  const panelId = `specimen-${id}-panel`

  return (
    <section
      id={`example-${id}`}
      className="scroll-mt-24 overflow-hidden rounded-2xl border border-ink/10 bg-paper"
    >
      <div className="flex flex-wrap items-start justify-between gap-3 px-4 py-3.5 sm:px-5">
        <div className="min-w-0">
          <h3 className="font-display text-[15px] font-semibold tracking-[-0.01em] text-ink">{title}</h3>
          {description && (
            <p className="mt-1 max-w-xl text-[12px] leading-relaxed text-ink-soft">{description}</p>
          )}
        </div>

        <div className="flex items-center gap-1.5">
          <a
            href={`#example-${id}`}
            aria-label={`Link to the ${title} example`}
            className="rounded-full p-1.5 text-ink/30 transition-colors hover:text-ink"
          >
            <Icon name="link" size={13} />
          </a>
          <div
            role="group"
            aria-label="Preview surface"
            className="flex rounded-full border border-ink/10 p-0.5"
          >
            {[
              { id: 'light', label: 'Light' },
              { id: 'dark', label: 'Dark' },
            ].map((option) => (
              <button
                key={option.id}
                type="button"
                onClick={() => setSurface(option.id)}
                aria-pressed={surface === option.id}
                aria-label={`${option.label} preview`}
                className={`rounded-full px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.12em] transition-colors ${
                  surface === option.id ? 'bg-ink text-paper' : 'text-ink/45 hover:text-ink'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2 border-y border-ink/10 bg-cream/50 px-3 py-2">
        <div role="tablist" aria-label={`${title} view`} className="flex gap-1">
          {[
            { id: 'preview', label: 'Preview' },
            { id: 'code', label: 'Code' },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              id={tabId(tab.id)}
              aria-selected={view === tab.id}
              aria-controls={panelId}
              onClick={() => setView(tab.id)}
              className={`rounded-full px-3 py-1 text-[11px] font-medium transition-colors ${
                view === tab.id ? 'bg-ink text-paper' : 'text-ink/50 hover:text-ink'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={copy}
          aria-label={copied ? 'Copied example code' : 'Copy example code'}
          className="inline-flex items-center gap-1.5 rounded-full border border-ink/10 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.14em] text-ink/45 transition-colors hover:border-ink/30 hover:text-ink"
        >
          <Icon name={copied ? 'check' : 'copy'} size={11} />
          <span aria-hidden="true">{copied ? 'Copied' : 'Copy'}</span>
        </button>
      </div>

      <div id={panelId} role="tabpanel" aria-labelledby={tabId(view)}>
        {view === 'preview' ? (
          <div className={surface === 'dark' ? 'dark' : undefined}>
            <div className="flex min-h-[180px] items-center bg-white px-5 py-8 dark:bg-gray-950 sm:px-8">
              <div className="w-full">{children}</div>
            </div>
          </div>
        ) : (
          <pre className="max-h-[440px] overflow-auto bg-ink px-4 py-4 font-mono text-[12px] leading-[1.8] text-paper/80">
            <code>
              <CodeText code={code} />
            </code>
          </pre>
        )}
      </div>

      <span role="status" className="sr-only">
        {copied ? 'Copied example code' : ''}
      </span>
    </section>
  )
}
