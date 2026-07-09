import { useState } from 'react'
import { Icon } from '../Icon'

const Accordion = ({ items = [], allowMultiple = false, defaultOpen = [], className = '' }) => {
  const [openItems, setOpenItems] = useState(defaultOpen)

  const toggle = (i) => {
    if (allowMultiple) {
      setOpenItems(prev => prev.includes(i) ? prev.filter(x => x !== i) : [...prev, i])
    } else {
      setOpenItems(prev => prev.includes(i) ? [] : [i])
    }
  }

  return (
    <div className={`divide-y divide-gray-200 dark:divide-gray-700 border-t border-b border-gray-200 dark:border-gray-700 ${className}`}>
      {items.map((item, i) => {
        const isOpen = openItems.includes(i)
        return (
          <div key={i}>
            <button
              onClick={() => toggle(i)}
              className="flex items-center justify-between w-full text-left py-4 px-0 text-sm font-medium text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors gap-4"
            >
              <span>{item.title}</span>
              <Icon
                name="chevronDown"
                size={16}
                className={`text-gray-400 transition-transform duration-200 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}
              />
            </button>
            <div className={`overflow-hidden transition-all duration-200 ${isOpen ? 'max-h-[1000px] pb-4' : 'max-h-0 pb-0'}`}>
              <div className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {item.content}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export { Accordion }
