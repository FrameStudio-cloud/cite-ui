import { useEffect, useRef } from 'react'
import { Icon } from './Icon'

const sizeMap = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
  '2xl': 'max-w-2xl',
  '3xl': 'max-w-3xl',
  full: 'max-w-[90vw]',
}

const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  footer,
  size = 'md',
  closeOnOverlay = true,
  showClose = true,
}) => {
  const overlayRef = useRef(null)

  useEffect(() => {
    if (!isOpen) return
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={(e) => { if (closeOnOverlay && e.target === overlayRef.current) onClose() }}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      <div
        className={`relative bg-white dark:bg-gray-900 rounded-2xl shadow-xl w-full ${sizeMap[size]} max-h-[85vh] flex flex-col animate-[fadeScaleIn_0.2s_ease-out]`}
        onClick={(e) => e.stopPropagation()}
      >
        {showClose && (
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-1.5 rounded-lg text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Close modal"
          >
            <Icon name="x" size={18} />
          </button>
        )}
        {title && (
          <div className="flex-shrink-0 px-6 pt-6 pb-0">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white">{title}</h2>
          </div>
        )}
        {children && (
          <div className="flex-1 overflow-y-auto px-6 py-6">
            {children}
          </div>
        )}
        {footer && (
          <div className="flex-shrink-0 px-6 pb-6 pt-0">
            {footer}
          </div>
        )}
      </div>
    </div>
  )
}

export default Modal
