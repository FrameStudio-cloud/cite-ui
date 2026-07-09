import { useEffect } from 'react'
import { Icon } from '../Icon'

const sideMap = {
  left: 'left-0',
  right: 'right-0',
  top: 'top-0 left-0 right-0',
  bottom: 'bottom-0 left-0 right-0',
}

const sizeMap = {
  sm: 'w-72',
  md: 'w-80',
  lg: 'w-96',
  xl: 'w-[480px]',
  full: 'w-full',
}

const Drawer = ({
  isOpen,
  onClose,
  title,
  children,
  side = 'right',
  size = 'md',
  closeOnOverlay = true,
  showClose = true,
  footer,
  className = '',
}) => {
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

  const isHorizontal = side === 'left' || side === 'right'
  const slideClass = isOpen
    ? (isHorizontal ? 'translate-x-0' : 'translate-y-0')
    : side === 'left' ? '-translate-x-full'
    : side === 'right' ? 'translate-x-full'
    : side === 'top' ? '-translate-y-full'
    : 'translate-y-full'

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-black/40" onClick={() => { if (closeOnOverlay) onClose() }} />
      )}
      <div
        className={`fixed z-50 bg-white dark:bg-gray-900 shadow-xl transition-transform duration-300 ease-in-out ${isHorizontal ? `${sideMap[side]} top-0 h-full ${sizeMap[size] || sizeMap.md} max-w-[90vw]` : `${sideMap[side]} ${sizeMap.full} h-80 max-h-[70vh]`} ${slideClass} ${className}`}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-base font-bold text-gray-900 dark:text-white">{title}</h2>
          {showClose && (
            <button onClick={onClose} className="p-1.5 rounded-lg text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" aria-label="Close drawer">
              <Icon name="x" size={18} />
            </button>
          )}
        </div>
        <div className="overflow-y-auto p-5 flex-1" style={{ height: footer ? 'calc(100% - 120px)' : 'calc(100% - 60px)' }}>
          {children}
        </div>
        {footer && (
          <div className="absolute bottom-0 left-0 right-0 px-5 py-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
            {footer}
          </div>
        )}
      </div>
    </>
  )
}

export { Drawer }
