import { CatalogueCard } from '../CatalogueCard'
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
  className = '',
}) => {
  const colClass = colMap[columns] || colMap[3]

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
      <div className={`grid ${colClass} gap-6`}>
        {items.map((item, i) => (
          <CatalogueCard key={i} {...item} variant={item.variant || variant} />
        ))}
      </div>
    </section>
  )
}

export { CatalogueGrid }
