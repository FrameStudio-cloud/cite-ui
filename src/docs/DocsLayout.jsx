import { useState, useEffect } from 'react'

const groupOrder = [
  'Getting Started',
  'Legacy / Enhanced',
  'Layout',
  'UI',
  'Form',
  'Navigation',
  'Sections',
  'Animation',
  'Mini Catalogue',
  'Hooks',
  'Utilities',
  'Icons',
]

const DocsLayout = ({ sections, children }) => {
  const [active, setActive] = useState(sections[0]?.id || '')
  const [menuOpen, setMenuOpen] = useState(false)

  const grouped = {}
  sections.forEach((s) => {
    if (!grouped[s.group]) grouped[s.group] = []
    grouped[s.group].push(s)
  })

  useEffect(() => {
    const ids = sections.map((s) => s.id)
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting)
        if (visible.length > 0) {
          const top = visible.reduce((prev, curr) =>
            curr.boundingClientRect.top < prev.boundingClientRect.top ? curr : prev
          )
          setActive(top.target.id)
        }
      },
      { rootMargin: '-80px 0px -60% 0px' }
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [sections])

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <header className="sticky top-0 z-50 bg-white/95 dark:bg-gray-950/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-14">
          <a href="#" className="text-lg font-bold tracking-tight">cite-ui docs</a>
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <span className="hidden sm:inline">v1.0.0</span>
            <a href="/" className="hover:text-gray-900 dark:hover:text-white transition-colors">Playground</a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="sm:hidden p-1"
              aria-label="Toggle navigation"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex">
        <aside className={`w-56 flex-shrink-0 hidden lg:block sticky top-14 max-h-[calc(100vh-3.5rem)] overflow-y-auto ${menuOpen ? 'block fixed inset-0 z-50 bg-white dark:bg-gray-950 p-6' : ''}`}>
          <nav className="space-y-6 py-8">
            {groupOrder.filter((g) => grouped[g]).map((group) => (
              <div key={group}>
                <p className="text-[10px] font-semibold tracking-widest text-gray-500 uppercase mb-2">{group}</p>
                <ul className="space-y-0.5">
                  {grouped[group].map((s) => (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        onClick={() => { setMenuOpen(false) }}
                        className={`block text-sm py-1 transition-colors ${active === s.id ? 'text-gray-900 dark:text-white font-medium' : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'}`}
                      >
                        {s.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </aside>

        <main className="flex-1 min-w-0 py-8 lg:pl-12">
          {children}
        </main>
      </div>

      <footer className="border-t border-gray-200 dark:border-gray-800 py-6 text-center text-xs text-gray-500">
        <p>cite-ui v1.0.0 &mdash; Zero runtime dependencies &mdash; React + Tailwind CSS</p>
      </footer>
    </div>
  )
}

export default DocsLayout
