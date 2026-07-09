import { Icon } from '../Icon'

const colors = {
  gray: 'bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700',
  blue: 'bg-blue-100 text-blue-700 border-blue-200 hover:bg-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-800',
  green: 'bg-emerald-100 text-emerald-700 border-emerald-200 hover:bg-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-300 dark:border-emerald-800',
  red: 'bg-red-100 text-red-700 border-red-200 hover:bg-red-200 dark:bg-red-900/30 dark:text-red-300 dark:border-red-800',
  amber: 'bg-amber-100 text-amber-700 border-amber-200 hover:bg-amber-200 dark:bg-amber-900/30 dark:text-amber-300 dark:border-amber-800',
}

const Chip = ({ children, color = 'gray', onRemove, onClick, className = '', size = 'md' }) => {
  const sizeClass = size === 'sm' ? 'text-xs px-2 py-0.5 gap-1' : 'text-sm px-3 py-1 gap-1.5'
  const interactive = onClick ? 'cursor-pointer' : ''

  return (
    <span className={`inline-flex items-center border rounded-full transition-colors ${colors[color] || colors.gray} ${sizeClass} ${interactive} ${className}`} onClick={onClick}>
      {children}
      {onRemove && (
        <button onClick={(e) => { e.stopPropagation(); onRemove() }} className="ml-0.5 hover:opacity-70" aria-label="Remove">
          <Icon name="x" size={12} strokeWidth={2} />
        </button>
      )}
    </span>
  )
}

export { Chip }
