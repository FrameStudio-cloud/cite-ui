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
    <div className={`grid ${colClass} gap-${gap} ${className}`}>
      {children}
    </div>
  )
}

export { Grid }
