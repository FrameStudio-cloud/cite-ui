import { Icon } from '../Icon'

const Checkbox = ({
  label,
  name,
  checked = false,
  onChange,
  error,
  disabled = false,
  indeterminate = false,
  className = '',
  ...props
}) => {
  return (
    <label className={`inline-flex items-start gap-3 cursor-pointer ${disabled ? 'opacity-60 cursor-not-allowed' : ''} ${className}`}>
      <div className="relative flex-shrink-0 mt-0.5">
        <input
          type="checkbox"
          name={name}
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          className="sr-only"
          {...props}
        />
        <div className={`w-4 h-4 border-2 rounded transition-all duration-150 flex items-center justify-center ${
          checked || indeterminate
            ? 'bg-black border-black dark:bg-white dark:border-white'
            : error ? 'border-red-400' : 'border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500'
        }`}>
          {indeterminate ? (
            <div className="w-2 h-0.5 bg-white dark:bg-gray-900 rounded-full" />
          ) : checked ? (
            <Icon name="check" size={12} strokeWidth={3} className="text-white dark:text-gray-900" />
          ) : null}
        </div>
      </div>
      {label && <span className="text-sm text-gray-700 dark:text-gray-300 select-none">{label}</span>}
    </label>
  )
}

export { Checkbox }
