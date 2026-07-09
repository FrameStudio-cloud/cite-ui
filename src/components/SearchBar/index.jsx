import { useState, useRef, useEffect } from 'react'
import { Icon } from '../Icon'

const SearchBar = ({
  placeholder = 'Search...',
  value = '',
  onChange,
  onSubmit,
  filters,
  loading = false,
  className = '',
}) => {
  const [open, setOpen] = useState(false)
  const [activeFilter, setActiveFilter] = useState(null)
  const ref = useRef(null)

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (onSubmit) onSubmit(value)
  }

  return (
    <div ref={ref} className={`relative ${className}`}>
      <form onSubmit={handleSubmit} className="relative flex items-center">
        <div className="relative flex-1">
          <Icon name="search" size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
          <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            className="w-full pl-9 pr-3 py-2.5 text-sm bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/10 dark:focus:ring-white/10 focus:border-gray-400 dark:focus:border-gray-500 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-colors"
          />
          {loading && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2">
              <div className="w-4 h-4 border-2 border-gray-300 dark:border-gray-600 border-t-black dark:border-t-white rounded-full animate-spin" />
            </div>
          )}
        </div>
        {filters && filters.length > 0 && (
          <div className="relative ml-2">
            <button
              type="button"
              onClick={() => setOpen(!open)}
              className="flex items-center gap-1.5 px-3 py-2.5 text-sm bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition-colors whitespace-nowrap"
            >
              <Icon name="filter" size={14} />
              <span className="hidden sm:inline">Filters</span>
              <Icon name="chevronDown" size={12} />
            </button>
            {open && (
              <div className="absolute right-0 top-full mt-1 w-56 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg z-40 p-3 space-y-3">
                {filters.map((filter, i) => (
                  <div key={i}>
                    <p className="text-[11px] font-semibold tracking-wide uppercase text-gray-500 mb-1.5">{filter.label}</p>
                    <div className="space-y-1">
                      {filter.options.map((opt, j) => (
                        <button
                          key={j}
                          type="button"
                          onClick={() => {
                            setActiveFilter(opt.value === activeFilter ? null : opt.value)
                            setOpen(false)
                          }}
                          className={`block w-full text-left text-sm px-2.5 py-1.5 rounded-lg transition-colors ${opt.value === activeFilter ? 'bg-black text-white dark:bg-white dark:text-gray-900' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'}`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </form>
    </div>
  )
}

export { SearchBar }
