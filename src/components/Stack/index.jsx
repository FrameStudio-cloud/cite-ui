const Stack = ({ children, direction = 'vertical', gap = 4, align, justify, className = '', as: Tag = 'div', wrap = false }) => {
  const dirClass = direction === 'horizontal' ? 'flex-row' : 'flex-col'
  const gapMap = { 0: 'gap-0', 1: 'gap-1', 2: 'gap-2', 3: 'gap-3', 4: 'gap-4', 5: 'gap-5', 6: 'gap-6', 8: 'gap-8', 10: 'gap-10', 12: 'gap-12', 16: 'gap-16' }
  const gapClass = gapMap[gap] || `gap-${gap}`
  const alignClass = align ? `items-${align}` : ''
  const justifyClass = justify ? `justify-${justify}` : ''

  return (
    <Tag className={`flex ${dirClass} ${gapClass} ${alignClass} ${justifyClass} ${wrap ? 'flex-wrap' : ''} ${className}`}>
      {children}
    </Tag>
  )
}

export { Stack }
