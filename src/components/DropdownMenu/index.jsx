import { useState, useRef, useEffect } from 'react'
import { Icon } from '../Icon'

const DropdownMenu = ({ trigger, items = [], align = 'left', className = '' }) => {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false) }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const alignClass = align === 'right' ? 'right-0' : 'left-0'

  return (
    <div ref={ref} className={`relative inline-block ${className}`}>
      <div onClick={() => setOpen(!open)} className="cursor-pointer">
        {trigger}
      </div>
      {open && (
        <div className={`absolute z-50 mt-1 min-w-[180px] bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg py-1 ${alignClass} animate-[fadeScaleIn_0.15s_ease-out]`}>
          {items.map((item, i) => {
            if (item.separator) {
              return <div key={i} className="my-1 border-t border-gray-100 dark:border-gray-800" />
            }
            return (
              <button
                key={i}
                onClick={() => { item.onClick?.(); setOpen(false) }}
                disabled={item.disabled}
                className={`flex items-center gap-3 w-full px-3 py-2 text-sm transition-colors ${item.disabled ? 'opacity-40 cursor-not-allowed' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'}`}
              >
                {item.icon && (typeof item.icon === 'string' ? <Icon name={item.icon} size={16} className="text-gray-400" /> : item.icon)}
                {item.label}
                {item.shortcut && (
                  <span className="ml-auto text-xs text-gray-400">{item.shortcut}</span>
                )}
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}

export { DropdownMenu }
