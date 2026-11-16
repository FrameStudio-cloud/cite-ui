import { useEffect, useRef, useState } from 'react'
import { Icon } from '../index'
import { CodeText } from './lib/code'

export default function CodePanel({ code, filename = 'usage', compact = false }) {
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

  const control = (
    <button
      type="button"
      onClick={copy}
      aria-label={copied ? 'Copied to clipboard' : 'Copy code'}
      className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-paper/15 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.14em] text-paper/55 transition-colors hover:border-accent/50 hover:text-accent"
    >
      <Icon name={copied ? 'check' : 'copy'} size={11} />
      <span aria-hidden="true">{copied ? 'Copied' : 'Copy'}</span>
    </button>
  )

  if (compact) {
    return (
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-ink/10 bg-ink px-4 py-3">
        <code className="min-w-0 overflow-x-auto font-mono text-[12px] text-paper/80">{code}</code>
        {control}
        <span role="status" className="sr-only">
          {copied ? 'Copied to clipboard' : ''}
        </span>
      </div>
    )
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-ink/10 bg-ink">
      <div className="flex items-center justify-between gap-3 border-b border-paper/10 px-4 py-2.5">
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-paper/40">
          {filename}
        </span>
        {control}
      </div>
      <pre className="overflow-x-auto px-4 py-4 font-mono text-[12px] leading-[1.8] text-paper/80">
        <code>
          <CodeText code={code} />
        </code>
      </pre>
      <span role="status" className="sr-only">
        {copied ? 'Copied to clipboard' : ''}
      </span>
    </div>
  )
}
