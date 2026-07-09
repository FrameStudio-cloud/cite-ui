const colorMap = {
  black: 'bg-black dark:bg-white',
  blue: 'bg-blue-500',
  green: 'bg-emerald-500',
  red: 'bg-red-500',
  amber: 'bg-amber-500',
  purple: 'bg-purple-500',
}

const Progress = ({ value = 0, max = 100, color = 'black', size = 'md', showLabel = false, className = '' }) => {
  const pct = Math.min(Math.max((value / max) * 100, 0), 100)
  const sizes = { sm: 'h-1', md: 'h-2', lg: 'h-3', xl: 'h-4' }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className={`flex-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden ${sizes[size] || sizes.md}`}>
        <div
          className={`${colorMap[color] || colorMap.black} h-full rounded-full transition-all duration-500 ease-out`}
          style={{ width: `${pct}%` }}
        />
      </div>
      {showLabel && (
        <span className="text-xs font-medium text-gray-500 dark:text-gray-400 tabular-nums">{Math.round(pct)}%</span>
      )}
    </div>
  )
}

export { Progress }
