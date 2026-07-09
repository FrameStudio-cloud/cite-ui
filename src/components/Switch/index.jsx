const Switch = ({
  label,
  name,
  checked = false,
  onChange,
  disabled = false,
  size = 'md',
  className = '',
  ...props
}) => {
  const sizes = {
    sm: { track: 'w-8 h-4', thumb: 'w-3 h-3', translate: 'translate-x-4' },
    md: { track: 'w-10 h-5', thumb: 'w-4 h-4', translate: 'translate-x-5' },
    lg: { track: 'w-12 h-6', thumb: 'w-5 h-5', translate: 'translate-x-6' },
  }

  const s = sizes[size] || sizes.md

  return (
    <label className={`inline-flex items-center gap-3 cursor-pointer ${disabled ? 'opacity-60 cursor-not-allowed' : ''} ${className}`}>
      <div className="relative">
        <input
          type="checkbox"
          name={name}
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          className="sr-only"
          role="switch"
          aria-checked={checked}
          {...props}
        />
        <div className={`${s.track} rounded-full transition-colors duration-200 ${checked ? 'bg-black dark:bg-white' : 'bg-gray-300 dark:bg-gray-600'}`}>
          <div className={`${s.thumb} bg-white rounded-full shadow-sm transform transition-transform duration-200 ${checked ? s.translate : 'translate-x-0'} mt-0.5 ml-0.5`} />
        </div>
      </div>
      {label && <span className="text-sm text-gray-700 dark:text-gray-300 select-none">{label}</span>}
    </label>
  )
}

export { Switch }
