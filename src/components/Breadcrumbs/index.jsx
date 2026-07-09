import { Icon } from '../Icon'

const Breadcrumbs = ({ items = [], separator = 'chevronRight', className = '' }) => {
  return (
    <nav aria-label="Breadcrumb" className={`flex items-center gap-1.5 text-sm ${className}`}>
      {items.map((item, i) => {
        const isLast = i === items.length - 1
        return (
          <span key={i} className="flex items-center gap-1.5">
            {i > 0 && (
              <span className="text-gray-400">
                {separator === 'slash' ? (
                  <span className="text-gray-300 dark:text-gray-600">/</span>
                ) : (
                  <Icon name={separator === 'chevronRight' ? 'chevronRight' : separator} size={14} />
                )}
              </span>
            )}
            {isLast ? (
              <span className="text-gray-900 dark:text-white font-medium" aria-current="page">{item.label}</span>
            ) : item.href ? (
              <a href={item.href} className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors">{item.label}</a>
            ) : (
              <span className="text-gray-500 dark:text-gray-400">{item.label}</span>
            )}
          </span>
        )
      })}
    </nav>
  )
}

export { Breadcrumbs }
