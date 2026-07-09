import { useState } from 'react'
import { Icon } from '../Icon'

const variantStyles = {
  default: 'bg-gray-950 text-white',
  sale: 'bg-red-500 text-white',
  info: 'bg-blue-600 text-white',
  premium: 'bg-amber-900 text-amber-100',
}

const AnnouncementBar = ({
  text,
  href,
  variant = 'default',
  dismissible = true,
  onDismiss,
  cta,
  className = '',
}) => {
  const [dismissed, setDismissed] = useState(false)

  if (dismissed) return null

  const handleDismiss = () => {
    setDismissed(true)
    if (onDismiss) onDismiss()
  }

  const content = (
    <div className={`flex items-center justify-center gap-2 sm:gap-3 px-4 py-2.5 text-sm font-medium ${variantStyles[variant] || variantStyles.default} ${className}`}>
      {href ? (
        <a href={href} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <span>{text}</span>
          {cta && <span className="font-semibold underline underline-offset-2">{cta.label}</span>}
        </a>
      ) : (
        <span className="flex items-center gap-2">
          <span>{text}</span>
          {cta && <span className="font-semibold underline underline-offset-2 cursor-pointer">{cta.label}</span>}
        </span>
      )}
      {dismissible && (
        <button onClick={handleDismiss} className="ml-2 p-0.5 hover:opacity-70 transition-opacity flex-shrink-0" aria-label="Dismiss announcement">
          <Icon name="x" size={14} />
        </button>
      )}
    </div>
  )

  return content
}

export { AnnouncementBar }
