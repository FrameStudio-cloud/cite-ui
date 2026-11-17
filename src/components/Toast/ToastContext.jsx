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

export const ToastProvider = ({
  children,
  position = 'top-right',
  offset = 20,
  pauseOnHover = true,
}) => {
  const [toasts, setToasts] = useState([])
  const timersRef = useRef({})
  const isTop = position.startsWith('top')

  const dismiss = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id))
    const entry = timersRef.current[id]
    if (entry) {
      clearTimeout(entry.timer)
      delete timersRef.current[id]
    }
  }, [])

  const startTimer = useCallback((id, duration) => {
    if (duration === Infinity) return
    const entry = timersRef.current[id]
    if (entry) clearTimeout(entry.timer)
    timersRef.current[id] = {
      duration,
      timer: setTimeout(() => dismiss(id), duration),
    }
  }, [dismiss])

  const pause = useCallback((id) => {
    const entry = timersRef.current[id]
    if (!entry) return
    clearTimeout(entry.timer)
    entry.timer = null
  }, [])

  const resume = useCallback((id) => {
    const entry = timersRef.current[id]
    if (!entry || entry.timer) return
    entry.timer = setTimeout(() => dismiss(id), entry.duration)
  }, [dismiss])

  const addToast = useCallback((type, message, options = {}) => {
    const id = ++toastId
    const duration = options.duration ?? DEFAULT_DURATIONS[type]
    const item = { id, type, message, duration, action: options.action }
    setToasts((prev) => (isTop ? [...prev, item] : [item, ...prev]))
    startTimer(id, duration)
    return id
  }, [isTop, startTimer])

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
      <div
        role="region"
        aria-live="polite"
        aria-label="Notifications"
        style={{ [isTop ? 'top' : 'bottom']: offset }}
        className={`fixed z-[70] flex w-[calc(100%-2rem)] max-w-sm flex-col gap-2 sm:w-auto ${POSITION_CLASSES[position]}`}
      >
        {toasts.map((t) => (
          <div
            key={t.id}
            onMouseEnter={() => pauseOnHover && pause(t.id)}
            onMouseLeave={() => pauseOnHover && resume(t.id)}
            className={`flex w-full items-start gap-3 bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-100 dark:border-gray-800 border-l-4 ${BORDER_CLASSES[t.type]} p-4 animate-[slideIn_0.25s_ease-out]`}
          >
            <span className="flex-shrink-0 mt-0.5">{ICONS[t.type]}</span>
            <div className="flex-1">
              <p className="text-sm text-gray-800 dark:text-gray-200">{t.message}</p>
              {t.action && (
                <button
                  type="button"
                  onClick={() => {
                    t.action.onClick?.()
                    dismiss(t.id)
                  }}
                  className="mt-1.5 text-xs font-semibold text-gray-900 dark:text-white underline underline-offset-2 hover:no-underline"
                >
                  {t.action.label}
                </button>
              )}
            </div>
            <button
              type="button"
              onClick={() => dismiss(t.id)}
              aria-label="Dismiss notification"
              className="flex-shrink-0 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            >
              <Icon name="x" size={14} />
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  )
}
