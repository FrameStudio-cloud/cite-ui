const gapMap = { 0: 'gap-0', 1: 'gap-1', 2: 'gap-2', 3: 'gap-3', 4: 'gap-4', 5: 'gap-5', 6: 'gap-6', 8: 'gap-8', 10: 'gap-10', 12: 'gap-12', 16: 'gap-16' }

const Grid = ({ children, columns = { default: 1, sm: 2, lg: 3 }, gap = 6, className = '' }) => {
  const cols = typeof columns === 'number' ? { default: columns } : columns
  const colClass = [
    cols.default && `grid-cols-${cols.default}`,
    cols.sm && `sm:grid-cols-${cols.sm}`,
    cols.md && `md:grid-cols-${cols.md}`,
    cols.lg && `lg:grid-cols-${cols.lg}`,
    cols.xl && `xl:grid-cols-${cols.xl}`,
  ].filter(Boolean).join(' ')

  return (
    <div className={`grid ${colClass} ${gapMap[gap] || 'gap-6'} ${className}`}>
      {children}
    </div>
  )
}

export { Grid }
