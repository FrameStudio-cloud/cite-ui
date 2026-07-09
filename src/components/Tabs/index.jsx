import { useState } from 'react'
import { Icon } from '../Icon'

const Tabs = ({ tabs = [], activeTab, onChange, variant = 'underline', size = 'md', className = '' }) => {
  const [internalTab, setInternalTab] = useState(0)
  const active = activeTab !== undefined ? activeTab : internalTab
  const setActive = onChange || setInternalTab

  const sizeStyles = {
    sm: 'text-xs px-3 py-1.5',
    md: 'text-sm px-4 py-2',
    lg: 'text-base px-5 py-2.5',
  }

  const variants = {
    underline: (isActive) => isActive
      ? 'border-b-2 border-black dark:border-white text-black dark:text-white font-medium'
      : 'border-b-2 border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300',
    pill: (isActive) => isActive
      ? 'bg-black text-white dark:bg-white dark:text-gray-900 font-medium shadow-sm'
      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800',
    buttons: (isActive) => isActive
      ? 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 font-medium'
      : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300',
  }

  const styleFn = variants[variant] || variants.underline

  return (
    <div className={`flex ${variant === 'underline' ? 'border-b border-gray-200 dark:border-gray-700' : 'gap-1'} ${className}`} role="tablist">
      {tabs.map((tab, i) => {
        const isActive = i === active
        const disabled = tab.disabled
        return (
          <button
            key={i}
            role="tab"
            aria-selected={isActive}
            disabled={disabled}
            onClick={() => setActive(i)}
            className={`inline-flex items-center gap-2 whitespace-nowrap transition-all duration-150 ${sizeStyles[size] || sizeStyles.md} ${styleFn(isActive)} ${variant !== 'underline' ? 'rounded-lg' : ''} ${disabled ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'}`}
          >
            {tab.icon && (typeof tab.icon === 'string' ? <Icon name={tab.icon} size={14} /> : tab.icon)}
            {tab.label}
          </button>
        )
      })}
    </div>
  )
}

const TabPanel = ({ children, active, index, className = '' }) => {
  if (active !== index) return null
  return <div role="tabpanel" className={className}>{children}</div>
}

export { Tabs, TabPanel }
