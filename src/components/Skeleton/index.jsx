const Skeleton = ({ variant = 'text', width, height, rounded = 'md', className = '' }) => {
  const roundMap = {
    none: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    full: 'rounded-full',
  }

  const base = `animate-pulse bg-gray-200 dark:bg-gray-700 ${roundMap[rounded] || roundMap.md}`

  const variants = {
    text: 'h-4 w-full',
    title: 'h-6 w-3/4',
    avatar: 'h-10 w-10 rounded-full',
    button: 'h-10 w-24 rounded-lg',
    image: 'h-48 w-full rounded-lg',
    card: 'h-64 w-full rounded-xl',
    circle: 'h-10 w-10 rounded-full',
  }

  const variantClass = variants[variant] || variants.text

  return (
    <div
      className={`${base} ${variantClass} ${className}`}
      style={{ width, height }}
      aria-hidden="true"
    />
  )
}

const SkeletonGroup = ({ count = 3, variant = 'text', direction = 'vertical', gap = 3, className = '' }) => {
  const dir = direction === 'horizontal' ? 'flex-row' : 'flex-col'
  return (
    <div className={`flex ${dir} gap-${gap} ${className}`} aria-label="Loading">
      {Array.from({ length: count }, (_, i) => (
        <Skeleton key={i} variant={variant} />
      ))}
    </div>
  )
}

export { Skeleton, SkeletonGroup }
