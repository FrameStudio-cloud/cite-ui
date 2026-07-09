import { Icon } from '../Icon'
import Button from '../Button'

const EmptyState = ({ icon = 'inbox', title, message, actionLabel, onAction, className = '' }) => {
  return (
    <div className={`flex flex-col items-center justify-center text-center py-12 px-6 ${className}`}>
      <div className="w-14 h-14 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center mb-4">
        <Icon name={icon} size={24} className="text-gray-400" />
      </div>
      {title && <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-1">{title}</h3>}
      {message && <p className="text-sm text-gray-500 dark:text-gray-400 max-w-xs">{message}</p>}
      {actionLabel && onAction && (
        <Button variant="primary" size="sm" label={actionLabel} onClick={onAction} className="mt-4" />
      )}
    </div>
  )
}

export { EmptyState }
