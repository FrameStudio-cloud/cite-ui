const CategoryFilter = ({
  categories = [],
  selected,
  onChange,
  allLabel = 'All',
  className = '',
}) => {
  if (!categories || categories.length === 0) return null

  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      <button
        onClick={() => onChange('')}
        className={`text-sm px-3 py-1.5 rounded-lg border transition-colors ${
          !selected
            ? 'bg-black text-white dark:bg-white dark:text-gray-900 border-black dark:border-white'
            : 'bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400 border-gray-200 dark:border-gray-700 hover:border-gray-400'
        }`}
      >
        {allLabel}
      </button>
      {categories.map((cat) => {
        const label = typeof cat === 'string' ? cat : cat.label || cat.name || cat
        const value = typeof cat === 'string' ? cat : cat.value || cat.id || cat
        return (
          <button
            key={value}
            onClick={() => onChange(selected === value ? '' : value)}
            className={`text-sm px-3 py-1.5 rounded-lg border transition-colors ${
              selected === value
                ? 'bg-black text-white dark:bg-white dark:text-gray-900 border-black dark:border-white'
                : 'bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400 border-gray-200 dark:border-gray-700 hover:border-gray-400'
            }`}
          >
            {label}
          </button>
        )
      })}
    </div>
  )
}

export { CategoryFilter }
