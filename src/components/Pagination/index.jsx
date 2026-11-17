import { Icon } from '../Icon'

const Pagination = ({ current, total, onChange, siblingCount = 1, size = 'md', className = '' }) => {
  const range = (start, end) => Array.from({ length: end - start + 1 }, (_, i) => start + i)

  const getPages = () => {
    const totalPages = Math.max(total, 1)
    const sibling = Math.max(siblingCount, 0)

    // Short ranges need no ellipsis at all; this also prevents the last page
    // being emitted twice when the window reaches it.
    if (totalPages <= 5 + sibling * 2) return range(1, totalPages)

    const leftSibling = Math.max(current - sibling, 2)
    const rightSibling = Math.min(current + sibling, totalPages - 1)
    const pages = [1]

    if (leftSibling > 2) pages.push('...')
    pages.push(...range(leftSibling, rightSibling))
    if (rightSibling < totalPages - 1) pages.push('...')
    pages.push(totalPages)

    return pages
  }

  const sizeStyles = {
    sm: 'w-7 h-7 text-xs',
    md: 'w-9 h-9 text-sm',
    lg: 'w-11 h-11 text-base',
  }

  const btnSize = sizeStyles[size] || sizeStyles.md

  return (
    <nav aria-label="Pagination" className={`flex items-center gap-1 ${className}`}>
      <button
        onClick={() => onChange(current - 1)}
        disabled={current <= 1}
        className={`inline-flex items-center justify-center rounded-lg transition-colors ${btnSize} ${current <= 1 ? 'text-gray-300 dark:text-gray-600 cursor-not-allowed' : 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'}`}
        aria-label="Previous page"
      >
        <Icon name="chevronLeft" size={size === 'sm' ? 14 : 16} />
      </button>

      {getPages().map((page, i) => {
        if (page === '...') {
          return <span key={`dots-${i}`} className={`inline-flex items-center justify-center ${btnSize} text-gray-400`}>...</span>
        }
        const isActive = page === current
        return (
          <button
            key={page}
            onClick={() => onChange(page)}
            className={`inline-flex items-center justify-center rounded-lg transition-colors font-medium ${btnSize} ${isActive ? 'bg-black text-white dark:bg-white dark:text-gray-900' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'}`}
            aria-current={isActive ? 'page' : undefined}
          >
            {page}
          </button>
        )
      })}

      <button
        onClick={() => onChange(current + 1)}
        disabled={current >= total}
        className={`inline-flex items-center justify-center rounded-lg transition-colors ${btnSize} ${current >= total ? 'text-gray-300 dark:text-gray-600 cursor-not-allowed' : 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'}`}
        aria-label="Next page"
      >
        <Icon name="chevronRight" size={size === 'sm' ? 14 : 16} />
      </button>
    </nav>
  )
}

export { Pagination }
