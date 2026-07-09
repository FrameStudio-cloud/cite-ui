const Container = ({ children, as: Tag = 'div', maxWidth = '7xl', className = '', padding = true }) => {
  const sizes = {
    sm: 'max-w-3xl',
    md: 'max-w-5xl',
    lg: 'max-w-7xl',
    xl: 'max-w-[1400px]',
    full: 'max-w-full',
    '7xl': 'max-w-7xl',
  }

  return (
    <Tag className={`mx-auto ${sizes[maxWidth] || sizes['7xl']} ${padding ? 'px-4 sm:px-6 lg:px-8' : ''} ${className}`}>
      {children}
    </Tag>
  )
}

export { Container }
