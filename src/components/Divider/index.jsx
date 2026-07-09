const Divider = ({ orientation = 'horizontal', label, className = '' }) => {
  if (orientation === 'vertical') {
    return (
      <div className={`w-px bg-gray-200 dark:bg-gray-700 self-stretch ${className}`} />
    )
  }

  if (label) {
    return (
      <div className={`flex items-center gap-4 ${className}`}>
        <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700" />
        <span className="text-xs font-medium text-gray-400 uppercase tracking-wider whitespace-nowrap">{label}</span>
        <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700" />
      </div>
    )
  }

  return <hr className={`border-t border-gray-200 dark:border-gray-700 ${className}`} />
}

export { Divider }
