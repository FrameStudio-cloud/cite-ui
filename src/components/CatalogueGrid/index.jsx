import { useState, useMemo } from 'react'
import { CatalogueCard } from '../CatalogueCard'
import { SearchBar } from '../SearchBar'
import { Skeleton } from '../Skeleton'

const colMap = {
  2: 'grid-cols-1 sm:grid-cols-2',
  3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
  4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
}

const SkeletonCard = () => (
  <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden">
    <Skeleton className="aspect-[4/3] rounded-none" />
    <div className="p-4 sm:p-5 space-y-3">
      <Skeleton className="h-3 w-16" />
      <Skeleton className="h-5 w-3/4" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-1/2" />
      <Skeleton className="h-4 w-2/5" />
      <Skeleton className="h-9 w-28 rounded-lg" />
    </div>
  </div>
)

const CatalogueGrid = ({
  items = [],
  columns = 3,
  variant = 'product',
  title,
  description,
  loading = false,
  empty,
  searchable = false,
  searchPlaceholder = 'Search...',
  onSearch,
  searchValue,
  onSearchChange,
  categoryFilter,
  selectedCategory,
  onCategoryChange,
  className = '',
  onItemClick,
}) => {
  const colClass = colMap[columns] || colMap[3]

  const [internalSearch, setInternalSearch] = useState('')
  const [internalCategory, setInternalCategory] = useState('')

  const search = onSearchChange !== undefined ? (searchValue || '') : internalSearch
  const setSearch = onSearchChange || setInternalSearch
  const category = onCategoryChange !== undefined ? (selectedCategory || '') : internalCategory
  const setCategory = onCategoryChange || setInternalCategory

  const categories = useMemo(() => {
    if (categoryFilter) return categoryFilter
    const cats = [...new Set(items.map((item) => item.category).filter(Boolean))]
    return cats.length > 0 ? cats : null
  }, [items, categoryFilter])

  const filtered = useMemo(() => {
    let result = items
    if (search) {
      const q = search.toLowerCase()
      result = result.filter((item) => {
        const name = (item.title || item.name || '').toLowerCase()
        const desc = (item.description || '').toLowerCase()
        const tag = (item.tag || item.category || '').toLowerCase()
        return name.includes(q) || desc.includes(q) || tag.includes(q)
      })
    }
    if (category) {
      result = result.filter((item) => (item.category || item.tag) === category)
    }
    return result
  }, [items, search, category])

  const showSearch = searchable || categories

  if (loading) {
    return (
      <section className={className}>
        {title && <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">{title}</h2>}
        {description && <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-2xl">{description}</p>}
        <div className={`grid ${colClass} gap-6`}>
          {Array.from({ length: columns * 2 }, (_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      </section>
    )
  }

  if (!items || items.length === 0) {
    return (
      <section className={className}>
        {title && <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">{title}</h2>}
        {empty || (
          <div className="text-center py-16 text-gray-500 dark:text-gray-400">
            <p>No items available yet.</p>
          </div>
        )}
      </section>
    )
  }

  return (
    <section className={className}>
      {title && <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">{title}</h2>}
      {description && <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-2xl">{description}</p>}

      {showSearch && (
        <div className="mb-6 flex flex-col sm:flex-row gap-3">
          {searchable && (
            <div className="flex-1">
              <SearchBar
                placeholder={searchPlaceholder}
                value={search}
                onChange={setSearch}
              />
            </div>
          )}
          {categories && (
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setCategory('')}
                className={`text-sm px-3 py-1.5 rounded-lg border transition-colors ${
                  !category
                    ? 'bg-black text-white dark:bg-white dark:text-gray-900 border-black dark:border-white'
                    : 'bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400 border-gray-200 dark:border-gray-700 hover:border-gray-400'
                }`}
              >
                All
              </button>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`text-sm px-3 py-1.5 rounded-lg border transition-colors ${
                    category === cat
                      ? 'bg-black text-white dark:bg-white dark:text-gray-900 border-black dark:border-white'
                      : 'bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400 border-gray-200 dark:border-gray-700 hover:border-gray-400'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {filtered.length === 0 ? (
        <div className="text-center py-16 text-gray-500 dark:text-gray-400">
          <p>No items match your search.</p>
        </div>
      ) : (
        <div className={`grid ${colClass} gap-6`}>
          {filtered.map((item, i) => (
            <CatalogueCard
              key={item.id || i}
              {...item}
              variant={item.variant || variant}
              onClick={onItemClick ? () => onItemClick(item) : undefined}
            />
          ))}
        </div>
      )}
    </section>
  )
}

export { CatalogueGrid }
