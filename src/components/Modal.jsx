import { useEffect, useId, useRef } from 'react'
import { createPortal } from 'react-dom'
import { Icon } from './Icon'
import { useFocusTrap } from '../hooks/useFocusTrap'
import { isTopDialog, lockScroll, unlockScroll } from '../utils/overlay'

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
  const panelRef = useFocusTrap(isOpen)
  const titleId = useId()

  useEffect(() => {
    if (!isOpen) return undefined
    const handler = (e) => {
      if (e.key === 'Escape' && isTopDialog(panelRef.current)) onClose()
    }
    document.addEventListener('keydown', handler)
    lockScroll()
    return () => {
      document.removeEventListener('keydown', handler)
      unlockScroll()
    }
  }, [isOpen, onClose, panelRef])

  if (!isOpen || typeof document === 'undefined') return null

  return createPortal(
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[60] flex items-center justify-center p-4"
      onClick={(e) => { if (closeOnOverlay && e.target === overlayRef.current) onClose() }}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? titleId : undefined}
        aria-label={title ? undefined : 'Dialog'}
        tabIndex={-1}
        className={`relative bg-white dark:bg-gray-900 rounded-2xl shadow-xl w-full ${sizeMap[size]} max-h-[85vh] flex flex-col animate-[fadeScaleIn_0.2s_ease-out] outline-none`}
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
            <h2 id={titleId} className="text-lg font-bold text-gray-900 dark:text-white">{title}</h2>
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
    </div>,
    document.body
  )
}

export default Modal
