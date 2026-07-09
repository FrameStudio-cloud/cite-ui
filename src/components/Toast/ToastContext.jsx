import { createContext, useContext, useState, useCallback, useRef } from 'react'
import { Icon } from '../Icon'

const ToastContext = createContext(null)

const ICONS = {
  success: <Icon name="check" size={18} className="text-emerald-500" />,
  error: <Icon name="x" size={18} className="text-red-500" />,
  warning: <Icon name="alertTriangle" size={18} className="text-amber-500" />,
  info: <Icon name="info" size={18} className="text-blue-500" />,
}

const BORDER_CLASSES = {
  success: 'border-l-emerald-500',
  error: 'border-l-red-500',
  warning: 'border-l-amber-500',
  info: 'border-l-blue-500',
}

const POSITION_CLASSES = {
  'top-right': 'top-5 right-5 items-end',
  'top-left': 'top-5 left-5 items-start',
  'top-center': 'top-5 left-1/2 -translate-x-1/2 items-center',
  'bottom-right': 'bottom-5 right-5 items-end',
  'bottom-left': 'bottom-5 left-5 items-start',
  'bottom-center': 'bottom-5 left-1/2 -translate-x-1/2 items-center',
}

const DEFAULT_DURATIONS = {
  success: 4000,
  error: 6000,
  warning: 4000,
  info: 4000,
}

let toastId = 0

export const useToast = () => {
  const ctx = useContext(ToastContext)
  if (!ctx) throw new Error('useToast must be used within a ToastProvider')
  return ctx
}

export const ToastProvider = ({ children, position = 'top-right' }) => {
  const [toasts, setToasts] = useState([])
  const timersRef = useRef({})
  const isTop = position.startsWith('top')

  const dismiss = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id))
    if (timersRef.current[id]) {
      clearTimeout(timersRef.current[id])
      delete timersRef.current[id]
    }
  }, [])

  const addToast = useCallback((type, message, options = {}) => {
    const id = ++toastId
    const duration = options.duration ?? DEFAULT_DURATIONS[type]
    setToasts((prev) =>
      isTop
        ? [...prev, { id, type, message }]
        : [{ id, type, message }, ...prev]
    )
    if (duration !== Infinity) {
      timersRef.current[id] = setTimeout(() => dismiss(id), duration)
    }
    return id
  }, [dismiss, isTop])

  const toast = {
    success: (message, options) => addToast('success', message, options),
    error: (message, options) => addToast('error', message, options),
    warning: (message, options) => addToast('warning', message, options),
    info: (message, options) => addToast('info', message, options),
    promise: (promise, { loading, success, error }) => {
      const id = addToast('info', loading, { duration: Infinity })
      promise
        .then((res) => {
          dismiss(id)
          toast.success(typeof success === 'function' ? success(res) : success)
        })
        .catch((err) => {
          dismiss(id)
          toast.error(typeof error === 'function' ? error(err) : error)
        })
    },
  }

  return (
    <ToastContext.Provider value={{ toast, dismiss }}>
      {children}
      <div className={`fixed z-[9999] flex flex-col gap-2 max-w-sm ${POSITION_CLASSES[position]}`}>
        {toasts.map((t) => (
          <div
            key={t.id}
            className={`flex items-start gap-3 bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-100 dark:border-gray-800 border-l-4 ${BORDER_CLASSES[t.type]} p-4 animate-[slideIn_0.25s_ease-out]`}
          >
            <span className="flex-shrink-0 mt-0.5">{ICONS[t.type]}</span>
            <p className="flex-1 text-sm text-gray-800 dark:text-gray-200">{t.message}</p>
            <button onClick={() => dismiss(t.id)} className="flex-shrink-0 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
              <Icon name="x" size={14} />
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  )
}
