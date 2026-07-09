const Section = ({ children, as: Tag = 'section', padding = 'lg', bg, className = '', id }) => {
  const paddingMap = {
    none: 'py-0',
    sm: 'py-8',
    md: 'py-12 lg:py-16',
    lg: 'py-16 lg:py-24',
    xl: 'py-20 lg:py-32',
  }

  return (
    <Tag id={id} className={`${paddingMap[padding] || paddingMap.lg} ${bg || ''} ${className}`}>
      {children}
    </Tag>
  )
}

export { Section }
