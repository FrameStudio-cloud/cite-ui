const variantStyles = {
  elevated: 'bg-white dark:bg-gray-900 shadow-md hover:shadow-lg',
  outlined: 'bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700',
  flat: 'bg-gray-50 dark:bg-gray-800/50',
  bordered: 'bg-white dark:bg-gray-900 border-l-4 border-black dark:border-white',
}

const paddingStyles = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
}

const Card = ({
  variant = 'elevated',
  padding = 'md',
  className = '',
  children,
  onClick,
  href,
  hover = false,
}) => {
  const base = `rounded-xl transition-all duration-200 ${variantStyles[variant]} ${paddingStyles[padding]}`
  const interactive = onClick || href ? 'cursor-pointer' : ''
  const hoverClass = hover ? 'hover:-translate-y-0.5' : ''

  const classes = `${base} ${interactive} ${hoverClass} ${className}`

  if (href) {
    return <a href={href} className={classes}>{children}</a>
  }

  if (onClick) {
    return <button type="button" onClick={onClick} className={`${classes} text-left w-full`}>{children}</button>
  }

  return <div className={classes}>{children}</div>
}

export { Card }
