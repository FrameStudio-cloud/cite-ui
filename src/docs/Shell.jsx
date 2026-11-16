import { useEffect, useMemo, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { Icon } from '../index'
import { navGroups, version } from './lib/registry'

const REPO = 'https://github.com/FrameStudio-cloud/cite-ui'
const NPM = 'https://www.npmjs.com/package/cite-ui'

function GitHubIcon({ size = 16 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  )
}

function SidebarContent({ query, setQuery, onNavigate }) {
  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase()
    return navGroups
      .map((group) => ({
        ...group,
        items: needle
          ? group.items.filter(
              (item) =>
                item.name.toLowerCase().includes(needle) ||
                group.name.toLowerCase().includes(needle)
            )
          : group.items,
      }))
      .filter((group) => group.items.length > 0)
  }, [query])

  return (
    <div className="flex h-full flex-col">
      <div className="pb-4">
        <label htmlFor="docs-search" className="sr-only">Search components</label>
        <div className="relative">
          <Icon
            name="search"
            size={15}
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-ink/35"
          />
          <input
            id="docs-search"
            data-docs-search
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search components"
            className="w-full rounded-xl border border-ink/15 bg-paper py-2 pl-9 pr-10 text-sm text-ink outline-none transition-colors placeholder:text-ink/30 focus:border-accent focus:ring-1 focus:ring-accent/30"
          />
          <kbd className="pointer-events-none absolute right-2.5 top-1/2 hidden -translate-y-1/2 rounded border border-ink/10 px-1.5 py-0.5 font-mono text-[9px] text-ink/35 sm:block">
            /
          </kbd>
        </div>
      </div>

      <nav aria-label="Documentation" className="flex-1 overflow-y-auto">
        {filtered.map((group) => (
          <div key={group.name} className="mb-6">
            <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-ink/35">
              {group.name}
            </p>
            <ul className="space-y-0.5">
              {group.items.map((item) => (
                <li key={item.id}>
                  <NavLink
                    to={item.path}
                    onClick={onNavigate}
                    className={({ isActive }) =>
                      isActive
                        ? 'block rounded-lg bg-accent/10 px-3 py-1.5 text-sm font-medium text-ink'
                        : 'block rounded-lg px-3 py-1.5 text-sm text-ink/55 transition-colors hover:bg-ink/5 hover:text-ink'
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {filtered.length === 0 && (
          <p className="px-3 py-6 text-sm text-ink/45">
            No component matches &ldquo;{query}&rdquo;.
          </p>
        )}
      </nav>

      <div className="space-y-2 border-t border-ink/10 pt-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink/35">
          v{version} · MIT
        </p>
        <div className="flex items-center gap-4">
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
        </div>
      </div>
    </div>
  )
}

function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-paper">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-4 px-4 py-8 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-10">
        <div className="flex items-center gap-2 font-display text-sm font-semibold tracking-[-0.02em] text-ink">
          <span className="grid h-5 w-5 place-items-center rounded-md bg-ink text-accent">
            <Icon name="package" size={11} />
          </span>
          cite<span className="text-ink/40">ui</span>
          <span className="ml-1 font-mono text-[10px] font-normal uppercase tracking-[0.16em] text-ink/35">
            v{version}
          </span>
        </div>
        <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink/35">
          MIT · built in Nairobi ·{' '}
          <a
            href="https://www.framestudio.co.ke"
            target="_blank"
            rel="noopener noreferrer"
            className="underline-offset-4 transition-colors hover:text-ink hover:underline"
          >
            FrameStudio
          </a>
        </p>
      </div>
    </footer>
  )
}

export default function Shell() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [query, setQuery] = useState('')
  const location = useLocation()
  const inComponents = location.pathname.startsWith('/components')

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
      const input = document.querySelector('[data-docs-search]')
      if (input) {
        event.preventDefault()
        input.focus()
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  return (
    <div className="min-h-screen bg-paper font-sans text-ink">
      <a
        href="#docs-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-paper"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-40 border-b border-ink/10 bg-paper/90 backdrop-blur">
        <div className="mx-auto flex h-14 max-w-[1400px] items-center gap-3 px-4 sm:gap-5 sm:px-6 lg:px-10">
          <Link
            to="/"
            className="flex shrink-0 items-center gap-2 font-display text-lg font-semibold tracking-[-0.02em] text-ink"
          >
            <span className="grid h-6 w-6 place-items-center rounded-lg bg-ink text-accent">
              <Icon name="package" size={13} />
            </span>
            cite<span className="text-ink/40">ui</span>
          </Link>
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.18em] text-ink/35 sm:inline">
            docs
          </span>

          <nav className="ml-auto hidden items-center gap-5 text-sm md:flex" aria-label="Primary">
            <Link
              to="/components/button"
              className={`transition-colors ${inComponents ? 'font-medium text-ink' : 'text-ink/55 hover:text-ink'}`}
            >
              Components
            </Link>
            <Link
              to="/guide/installation"
              className={`transition-colors ${location.pathname.startsWith('/guide') ? 'font-medium text-ink' : 'text-ink/55 hover:text-ink'}`}
            >
              Guides
            </Link>
            <a
              href={REPO}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-ink/55 transition-colors hover:text-ink"
            >
              <GitHubIcon size={14} />
              GitHub
            </a>
            <a
              href="https://www.framestudio.co.ke/developers"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink/55 transition-colors hover:text-ink"
            >
              Studio
            </a>
          </nav>

          <span className="ml-auto rounded-full border border-ink/10 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.14em] text-ink/40 md:ml-0">
            v{version}
          </span>

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open navigation"
            aria-expanded={menuOpen}
            className="-mr-2 p-2 text-ink/60 transition-colors hover:text-ink lg:hidden"
          >
            <Icon name="menu" size={20} />
          </button>
        </div>
      </header>

      <div className="mx-auto flex max-w-[1400px] gap-10 px-4 sm:px-6 lg:px-10">
        <aside className="hidden w-[232px] shrink-0 lg:block">
          <div className="sticky top-14 h-[calc(100vh-3.5rem)] overflow-y-auto py-8 pr-1">
            <SidebarContent query={query} setQuery={setQuery} />
          </div>
        </aside>

        <main id="docs-content" className="min-w-0 flex-1 py-8 lg:py-12">
          <Outlet />
        </main>
      </div>

      <Footer />

      {menuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            aria-hidden="true"
            onClick={() => setMenuOpen(false)}
            className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
          />
          <div className="absolute inset-y-0 left-0 flex w-[86%] max-w-[320px] flex-col bg-paper p-4 shadow-2xl">
            <div className="mb-4 flex items-center justify-between">
              <span className="font-display text-base font-semibold">cite-ui docs</span>
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                aria-label="Close navigation"
                className="rounded-full p-1.5 text-ink/50 hover:text-ink"
              >
                <Icon name="x" size={18} />
              </button>
            </div>
            <div className="min-h-0 flex-1">
              <SidebarContent query={query} setQuery={setQuery} onNavigate={() => setMenuOpen(false)} />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
