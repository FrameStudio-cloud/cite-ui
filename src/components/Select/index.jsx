import { useState } from 'react'
import { Icon } from '../Icon'

const Select = ({
  label,
  name,
  value,
  onChange,
  onBlur,
  options = [],
  placeholder,
  error,
  helperText,
  disabled = false,
  required = false,
  className = '',
  ...props
}) => {
  const [focused, setFocused] = useState(false)

  return (
    <div className={className}>
      {label && (
        <label htmlFor={name} className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
          {label}
          {required && <span className="text-red-500 ml-0.5">*</span>}
        </label>
      )}
      <div className={`relative border rounded-lg transition-all duration-150 ${error ? 'border-red-400' : focused ? 'border-black dark:border-white' : 'border-gray-300 dark:border-gray-600'} ${disabled ? 'bg-gray-50 dark:bg-gray-800 opacity-60' : 'bg-white dark:bg-gray-900'}`}>
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={(e) => { setFocused(false); onBlur?.(e) }}
          onFocus={() => setFocused(true)}
          disabled={disabled}
          required={required}
          className="w-full bg-transparent text-sm text-gray-900 dark:text-gray-100 outline-none py-2.5 pl-3 pr-10 appearance-none cursor-pointer"
          {...props}
        >
          {placeholder && <option value="" disabled>{placeholder}</option>}
          {options.map((opt) => {
            const optValue = typeof opt === 'string' ? opt : opt.value
            const optLabel = typeof opt === 'string' ? opt : opt.label
            return <option key={optValue} value={optValue}>{optLabel}</option>
          })}
        </select>
        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
          <Icon name="chevronDown" size={16} />
        </span>
      </div>
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
      {helperText && !error && <p className="mt-1 text-xs text-gray-400">{helperText}</p>}
    </div>
  )
}

export { Select }
