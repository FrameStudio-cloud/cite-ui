import { useState } from 'react'

const Textarea = ({
  label,
  name,
  value,
  onChange,
  onBlur,
  placeholder,
  error,
  helperText,
  rows = 4,
  disabled = false,
  required = false,
  maxLength,
  showCount = false,
  className = '',
  ...props
}) => {
  const [focused, setFocused] = useState(false)
  const len = typeof value === 'string' ? value.length : 0

  return (
    <div className={className}>
      {label && (
        <label htmlFor={name} className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
          {label}
          {required && <span className="text-red-500 ml-0.5">*</span>}
        </label>
      )}
      <div className={`relative border rounded-lg transition-all duration-150 ${error ? 'border-red-400' : focused ? 'border-black dark:border-white' : 'border-gray-300 dark:border-gray-600'} ${disabled ? 'bg-gray-50 dark:bg-gray-800 opacity-60' : 'bg-white dark:bg-gray-900'}`}>
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={(e) => { setFocused(false); onBlur?.(e) }}
          onFocus={() => setFocused(true)}
          placeholder={placeholder}
          rows={rows}
          disabled={disabled}
          required={required}
          maxLength={maxLength}
          className="w-full bg-transparent text-sm text-gray-900 dark:text-gray-100 placeholder-gray-400 outline-none p-3 resize-y min-h-[80px]"
          {...props}
        />
      </div>
      <div className="flex items-center justify-between mt-1">
        {error ? (
          <p className="text-xs text-red-500">{error}</p>
        ) : helperText ? (
          <p className="text-xs text-gray-400">{helperText}</p>
        ) : <span />}
        {showCount && (
          <span className="text-xs text-gray-400 tabular-nums">{len}{maxLength ? ` / ${maxLength}` : ''}</span>
        )}
      </div>
    </div>
  )
}

export { Textarea }
