import { useState } from 'react'
import { Icon } from '../Icon'

const styles = {
  info: {
    container: 'bg-blue-50 border-blue-200 dark:bg-blue-900/20 dark:border-blue-800',
    icon: 'text-blue-500',
    title: 'text-blue-800 dark:text-blue-200',
    message: 'text-blue-700 dark:text-blue-300',
    close: 'text-blue-400 hover:text-blue-600 dark:hover:text-blue-200',
  },
  success: {
    container: 'bg-emerald-50 border-emerald-200 dark:bg-emerald-900/20 dark:border-emerald-800',
    icon: 'text-emerald-500',
    title: 'text-emerald-800 dark:text-emerald-200',
    message: 'text-emerald-700 dark:text-emerald-300',
    close: 'text-emerald-400 hover:text-emerald-600 dark:hover:text-emerald-200',
  },
  warning: {
    container: 'bg-amber-50 border-amber-200 dark:bg-amber-900/20 dark:border-amber-800',
    icon: 'text-amber-500',
    title: 'text-amber-800 dark:text-amber-200',
    message: 'text-amber-700 dark:text-amber-300',
    close: 'text-amber-400 hover:text-amber-600 dark:hover:text-amber-200',
  },
  error: {
    container: 'bg-red-50 border-red-200 dark:bg-red-900/20 dark:border-red-800',
    icon: 'text-red-500',
    title: 'text-red-800 dark:text-red-200',
    message: 'text-red-700 dark:text-red-300',
    close: 'text-red-400 hover:text-red-600 dark:hover:text-red-200',
  },
}

const iconMap = {
  info: 'info',
  success: 'check',
  warning: 'alertTriangle',
  error: 'alertCircle',
}

const Alert = ({ type = 'info', title, message, children, dismissible = false, onClose, className = '' }) => {
  const [dismissed, setDismissed] = useState(false)
  if (dismissed) return null

  const s = styles[type]

  const handleClose = () => {
    setDismissed(true)
    onClose?.()
  }

  return (
    <div className={`flex items-start gap-3 border rounded-xl p-4 ${s.container} ${className}`}>
      <span className={`flex-shrink-0 mt-0.5 ${s.icon}`}>
        <Icon name={iconMap[type]} size={18} />
      </span>
      <div className="flex-1 min-w-0">
        {title && <p className={`text-sm font-semibold ${s.title}`}>{title}</p>}
        {message && <p className={`text-sm ${s.message} ${title ? 'mt-1' : ''}`}>{message}</p>}
        {children}
      </div>
      {dismissible && (
        <button onClick={handleClose} className={`flex-shrink-0 ${s.close}`} aria-label="Dismiss">
          <Icon name="x" size={16} />
        </button>
      )}
    </div>
  )
}

export { Alert }
