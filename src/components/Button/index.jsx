import { Icon } from '../Icon'

const variantStyles = {
  primary: 'bg-black text-white shadow-sm hover:bg-gray-800 active:scale-[0.98] transition-all duration-150 rounded-lg',
  secondary: 'bg-transparent border border-gray-300 text-gray-900 hover:bg-gray-100 active:scale-[0.98] transition-all duration-150 rounded-lg',
  outline: 'bg-transparent border border-black text-black hover:bg-black hover:text-white active:scale-[0.98] transition-all duration-150 rounded-lg',
  ghost: 'bg-transparent text-gray-600 hover:text-black hover:bg-gray-100 active:scale-[0.98] transition-all duration-150 rounded-lg',
  danger: 'bg-red-600 text-white shadow-sm hover:bg-red-700 active:scale-[0.98] transition-all duration-150 rounded-lg',
  whatsapp: 'bg-[#25D366] text-white shadow-sm hover:bg-[#1ebe5d] active:scale-[0.98] transition-all duration-150 rounded-lg',
}

const sizeStyles = {
  xs: 'text-xs px-3 py-1.5 gap-1.5',
  sm: 'text-sm px-4 py-2 gap-2',
  md: 'text-base px-5 py-2.5 gap-2',
  lg: 'text-lg px-6 py-3 gap-2.5',
  xl: 'text-xl px-8 py-4 gap-3',
}

const SpinnerIcon = () => (
  <svg className="animate-spin" width="1em" height="1em" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" opacity="0.25" />
    <path d="M12 2a10 10 0 019.95 9" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
  </svg>
)

const Button = ({
  variant = 'primary',
  size = 'md',
  label,
  onClick,
  type = 'button',
  disabled = false,
  loading = false,
  icon,
  iconPosition = 'left',
  href,
  className = '',
  children,
}) => {
  const classes = `inline-flex items-center justify-center font-medium ${variantStyles[variant] || variantStyles.primary} ${sizeStyles[size] || sizeStyles.md} ${disabled || loading ? 'opacity-50 cursor-not-allowed pointer-events-none' : 'cursor-pointer'} ${className}`

  const content = (
    <>
      {loading ? (
        <SpinnerIcon />
      ) : icon && iconPosition === 'left' ? (
        typeof icon === 'string' ? <Icon name={icon} size={size === 'xs' ? 14 : size === 'sm' ? 16 : size === 'lg' ? 20 : 18} /> : icon
      ) : null}
      {(label || children) && <span>{label || children}</span>}
      {!loading && icon && iconPosition === 'right' ? (
        typeof icon === 'string' ? <Icon name={icon} size={size === 'xs' ? 14 : size === 'sm' ? 16 : size === 'lg' ? 20 : 18} /> : icon
      ) : null}
    </>
  )

  if (href) {
    return <a href={href} className={classes}>{content}</a>
  }

  return <button type={type} onClick={onClick} disabled={disabled || loading} className={classes}>{content}</button>
}

export default Button
