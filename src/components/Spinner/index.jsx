const sizeMap = {
  xs: 'w-3 h-3',
  sm: 'w-4 h-4',
  md: 'w-6 h-6',
  lg: 'w-8 h-8',
  xl: 'w-10 h-10',
}

const Spinner = ({ size = 'md', color = 'currentColor', className = '' }) => {
  return (
    <svg
      className={`animate-spin ${sizeMap[size] || sizeMap.md} ${className}`}
      viewBox="0 0 24 24"
      fill="none"
    >
      <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="4" opacity="0.15" />
      <path d="M12 2a10 10 0 019.95 9" stroke={color} strokeWidth="4" strokeLinecap="round" />
    </svg>
  )
}

export { Spinner }
