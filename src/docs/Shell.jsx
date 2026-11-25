import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom'
import { Icon } from '../index'
import { GUIDES, componentEntries, groupLabel, pathFor, version } from './lib/registry'

const REPO = 'https://github.com/FrameStudio-cloud/cite-ui'
const NPM = 'https://www.npmjs.com/package/cite-ui'

const NAV_ITEMS = [
  { label: 'Overview', to: '/', match: (path) => path === '/' },
  { label: 'Components', to: '/components', match: (path) => path.startsWith('/components') },
  { label: 'Guides', to: '/guide/installation', match: (path) => path.startsWith('/guide') },
]

const SEARCH_POOL = [
  ...GUIDES.map((guide) => ({ id: guide.id, name: guide.name, path: guide.path, kind: 'Guide' })),
  ...componentEntries.map((entry) => ({
    id: entry.id,
    name: entry.name,
    path: pathFor(entry),
    kind: groupLabel(entry.group),
  })),
]

function GitHubIcon({ size = 16 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  )
}

function SearchPalette({ open, onClose }) {
  const [query, setQuery] = useState('')
  const [cursor, setCursor] = useState(0)
  const inputRef = useRef(null)
  const navigate = useNavigate()

  useEffect(() => {
    if (!open) return undefined
    setQuery('')
    setCursor(0)
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const timer = window.setTimeout(() => inputRef.current?.focus(), 30)
    return () => {
      window.clearTimeout(timer)
      document.body.style.overflow = previous
    }
  }, [open])

  const results = useMemo(() => {
    const needle = query.trim().toLowerCase()
    const pool = needle
      ? SEARCH_POOL.filter(
          (item) =>
            item.name.toLowerCase().includes(needle) || item.kind.toLowerCase().includes(needle)
        )
      : SEARCH_POOL
    return pool.slice(0, 9)
  }, [query])

  if (!open) return null

  const go = (item) => {
    onClose()
    navigate(item.path)
  }

  const onKeyDown = (event) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault()
      setCursor((value) => Math.min(value + 1, results.length - 1))
    } else if (event.key === 'ArrowUp') {
      event.preventDefault()
      setCursor((value) => Math.max(value - 1, 0))
    } else if (event.key === 'Enter') {
      event.preventDefault()
      const item = results[cursor]
      if (item) go(item)
    } else if (event.key === 'Escape') {
      onClose()
    }
  }

  return (
    <div className="fixed inset-0 z-[60]">
      <div
        aria-hidden="true"
        onClick={onClose}
        className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Search documentation"
        className="relative mx-auto mt-[12vh] w-[calc(100%-2rem)] max-w-xl overflow-hidden rounded-2xl border border-ink/10 bg-[#fffdf9] shadow-2xl"
      >
        <div className="flex items-center gap-3 border-b border-ink/10 px-4">
          <Icon name="search" size={16} className="shrink-0 text-ink/40" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(event) => {
              setQuery(event.target.value)
              setCursor(0)
            }}
            onKeyDown={onKeyDown}
            placeholder="Search components and guides…"
            className="h-14 w-full bg-transparent text-sm text-ink outline-none placeholder:text-ink/30"
          />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close search"
            className="shrink-0 rounded-full p-1.5 text-ink/40 transition-colors hover:text-ink"
          >
            <Icon name="x" size={16} />
          </button>
        </div>

        <ul className="max-h-[52vh] overflow-y-auto p-2">
          {results.length === 0 && (
            <li className="px-3 py-8 text-center text-sm text-ink/45">
              No result for &ldquo;{query}&rdquo;.
            </li>
          )}
          {results.map((item, index) => (
            <li key={`${item.kind}-${item.id}`}>
              <button
                type="button"
                onMouseEnter={() => setCursor(index)}
                onClick={() => go(item)}
                className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-colors ${
                  index === cursor ? 'bg-ink/5' : ''
                }`}
              >
                <span
                  className={`grid h-8 w-8 shrink-0 place-items-center rounded-lg ${
                    item.kind === 'Guide' ? 'bg-accent/15 text-accent' : 'bg-ink/5 text-ink/60'
                  }`}
                >
                  <Icon name={item.kind === 'Guide' ? 'compass' : 'package'} size={14} />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-[13px] font-medium text-ink">{item.name}</span>
                  <span className="block font-mono text-[9px] uppercase tracking-[0.14em] text-ink/35">
                    {item.kind}
                  </span>
                </span>
                <Icon name="arrowRight" size={13} className="shrink-0 text-ink/25" />
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-between border-t border-ink/10 px-4 py-2.5 font-mono text-[9px] uppercase tracking-[0.12em] text-ink/35">
          <span>↑↓ to move</span>
          <span>Enter to open · Esc to close</span>
        </div>
      </div>
    </div>
  )
}

function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-[#F7F4ED]">
      <div className="mx-auto flex max-w-[1320px] flex-wrap items-center justify-between gap-x-6 gap-y-2 px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 font-display text-xs font-semibold tracking-[-0.01em] text-ink">
          <span className="grid h-4 w-4 place-items-center rounded bg-ink text-accent">
            <Icon name="package" size={9} />
          </span>
          cite<span className="text-ink/40">ui</span>
          <span className="ml-1 font-mono text-[9px] font-normal uppercase tracking-[0.14em] text-ink/35">
            v{version} ·{' '}
            <Link to="/guide/license" className="underline-offset-2 transition-colors hover:text-ink hover:underline">
              MIT
            </Link>
          </span>
        </div>
        <p className="flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.14em] text-ink/40">
          Built by
          <a
            href="https://www.framestudio.co.ke"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-semibold text-ink underline decoration-accent decoration-2 underline-offset-4 transition-colors hover:text-accent"
          >
            FrameStudio
            <svg viewBox="0 0 24 24" width="10" height="10" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M6 18L18 6M9 6h9v9" />
            </svg>
          </a>
        </p>
      </div>
    </footer>
  )
}

export default function Shell() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    if (!menuOpen) return undefined
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previous
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [menuOpen])

  useEffect(() => {
    const onKeyDown = (event) => {
      const target = event.target
      const typing =
        target instanceof HTMLElement &&
        (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable)
      if (event.key !== '/' || typing) return
      event.preventDefault()
      setSearchOpen(true)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  return (
    <div className="min-h-screen bg-[#F5F2EA] font-sans text-ink">
      <a
        href="#docs-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-paper"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-40 border-b border-ink/10 bg-[#F7F4ED]/85 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-[1320px] items-center gap-3 px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="flex shrink-0 items-center gap-2 font-display text-[17px] font-semibold tracking-[-0.02em] text-ink"
          >
            <span className="grid h-7 w-7 place-items-center rounded-lg bg-ink text-accent">
              <Icon name="package" size={15} />
            </span>
            cite<span className="text-ink/40">ui</span>
          </Link>
          <span className="hidden rounded-full border border-ink/10 px-2 py-0.5 font-mono text-[8px] uppercase tracking-[0.14em] text-ink/35 sm:inline">
            docs
          </span>

          <nav
            aria-label="Primary"
            className="ml-2 hidden items-center gap-0.5 rounded-full border border-ink/10 bg-white/70 p-1 md:flex"
          >
            {NAV_ITEMS.map((item) => {
              const active = item.match(location.pathname)
              return (
                <Link
                  key={item.label}
                  to={item.to}
                  className={`rounded-full px-3.5 py-1.5 text-[13px] font-medium transition-colors ${
                    active ? 'bg-ink text-paper' : 'text-ink/55 hover:text-ink'
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>

          <div className="ml-auto flex items-center gap-2">
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/70 px-3 py-1.5 text-[13px] text-ink/45 transition-colors hover:border-ink/25 hover:text-ink"
            >
              <Icon name="search" size={14} />
              <span className="hidden sm:inline">Search</span>
              <kbd className="hidden rounded border border-ink/10 px-1.5 font-mono text-[9px] sm:inline">
                /
              </kbd>
            </button>

            <a
              href={REPO}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub repository"
              className="hidden h-9 w-9 place-items-center rounded-full border border-ink/10 bg-white/70 text-ink/55 transition-colors hover:text-ink sm:grid"
            >
              <GitHubIcon size={15} />
            </a>

            <span className="hidden rounded-full border border-ink/10 bg-white/70 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.14em] text-ink/40 lg:inline">
              v{version}
            </span>

            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open navigation"
              aria-expanded={menuOpen}
              className="-mr-2 p-2 text-ink/60 transition-colors hover:text-ink md:hidden"
            >
              <Icon name="menu" size={20} />
            </button>
          </div>
        </div>
      </header>

      <main id="docs-content" className="mx-auto max-w-[1320px] px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
        <Outlet />
      </main>

      <Footer />

      <SearchPalette open={searchOpen} onClose={() => setSearchOpen(false)} />

      {menuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            aria-hidden="true"
            onClick={() => setMenuOpen(false)}
            className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
          />
          <div className="absolute inset-x-0 top-0 rounded-b-3xl border-b border-ink/10 bg-[#F7F4ED] p-5 shadow-2xl">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2 font-display text-base font-semibold tracking-[-0.02em]">
                <span className="grid h-6 w-6 place-items-center rounded-md bg-ink text-accent">
                  <Icon name="package" size={12} />
                </span>
                cite<span className="text-ink/40">ui</span>
              </span>
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                aria-label="Close navigation"
                className="rounded-full p-1.5 text-ink/50 hover:text-ink"
              >
                <Icon name="x" size={18} />
              </button>
            </div>

            <button
              type="button"
              onClick={() => {
                setMenuOpen(false)
                setSearchOpen(true)
              }}
              className="mt-4 flex w-full items-center gap-2 rounded-xl border border-ink/10 bg-white px-3 py-3 text-sm text-ink/45"
            >
              <Icon name="search" size={15} />
              Search components and guides…
            </button>

            <nav className="mt-3 space-y-1" aria-label="Mobile">
              {NAV_ITEMS.map((item) => {
                const active = item.match(location.pathname)
                return (
                  <Link
                    key={item.label}
                    to={item.to}
                    className={`flex items-center justify-between rounded-xl px-3 py-3 text-[15px] font-medium transition-colors ${
                      active ? 'bg-ink text-paper' : 'text-ink/60 hover:bg-ink/5 hover:text-ink'
                    }`}
                  >
                    {item.label}
                    <Icon name="chevronRight" size={15} />
                  </Link>
                )
              })}
            </nav>

            <div className="mt-4 flex items-center gap-5 border-t border-ink/10 pt-4">
              <a
                href={REPO}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-ink/50 transition-colors hover:text-ink"
              >
                <GitHubIcon size={13} />
                GitHub
              </a>
              <a
                href={NPM}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-ink/50 transition-colors hover:text-ink"
              >
                npm
                <Icon name="externalLink" size={12} />
              </a>
              <a
                href="https://www.framestudio.co.ke/developers"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-ink/50 transition-colors hover:text-ink"
              >
                Studio
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
