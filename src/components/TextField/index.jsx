import { useState } from 'react'
import { Icon } from '../Icon'

const TextField = ({
  label,
  name,
  type = 'text',
  value,
  onChange,
  onBlur,
  placeholder,
  error,
  helperText,
  icon,
  clearable = false,
  disabled = false,
  required = false,
  className = '',
  ...props
}) => {
  const [focused, setFocused] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const isPassword = type === 'password'
  const inputType = isPassword && showPassword ? 'text' : type

  return (
    <div className={className}>
      {label && (
        <label htmlFor={name} className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
          {label}
          {required && <span className="text-red-500 ml-0.5">*</span>}
        </label>
      )}
      <div className={`relative flex items-center border rounded-lg transition-all duration-150 ${error ? 'border-red-400' : focused ? 'border-black dark:border-white' : 'border-gray-300 dark:border-gray-600'} ${disabled ? 'bg-gray-50 dark:bg-gray-800 opacity-60' : 'bg-white dark:bg-gray-900'}`}>
        {icon && (
          <span className="absolute left-3 text-gray-400 pointer-events-none">
            {typeof icon === 'string' ? <Icon name={icon} size={16} /> : icon}
          </span>
        )}
        <input
          id={name}
          name={name}
          type={inputType}
          value={value}
          onChange={onChange}
          onBlur={(e) => { setFocused(false); onBlur?.(e) }}
          onFocus={() => setFocused(true)}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          className={`w-full bg-transparent text-sm text-gray-900 dark:text-gray-100 placeholder-gray-400 outline-none py-2.5 ${icon ? 'pl-10' : 'pl-3'} ${clearable || isPassword ? 'pr-10' : 'pr-3'}`}
          {...props}
        />
        {clearable && value && !disabled && (
          <button onClick={() => onChange?.({ target: { name, value: '' } })} className="absolute right-3 text-gray-400 hover:text-gray-600" tabIndex={-1} type="button" aria-label="Clear">
            <Icon name="x" size={14} />
          </button>
        )}
        {isPassword && (
          <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 text-gray-400 hover:text-gray-600" tabIndex={-1} aria-label={showPassword ? 'Hide password' : 'Show password'}>
            <Icon name={showPassword ? 'eyeOff' : 'eye'} size={16} />
          </button>
        )}
      </div>
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
      {helperText && !error && <p className="mt-1 text-xs text-gray-400">{helperText}</p>}
    </div>
  )
}

export { TextField }
