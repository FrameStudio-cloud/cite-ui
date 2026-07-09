import { Container } from '../Container'
import { Icon } from '../Icon'
import { Card } from '../Card'

const Features = ({
  title,
  subtitle,
  features = [],
  columns = 3,
  variant = 'card',
  className = '',
}) => {
  const gridCols = {
    1: 'sm:grid-cols-1',
    2: 'sm:grid-cols-2',
    3: 'sm:grid-cols-2 lg:grid-cols-3',
    4: 'sm:grid-cols-2 lg:grid-cols-4',
  }

  return (
    <section className={`py-16 lg:py-24 ${className}`}>
      <Container>
        {(title || subtitle) && (
          <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
            {title && <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">{title}</h2>}
            {subtitle && <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">{subtitle}</p>}
          </div>
        )}
        <div className={`grid grid-cols-1 ${gridCols[columns] || gridCols[3]} gap-6 lg:gap-8`}>
          {features.map((feature, i) => (
            variant === 'card' ? (
              <Card key={i} variant="outlined" hover>
                {feature.icon && (
                  <div className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center mb-4">
                    {typeof feature.icon === 'string' ? <Icon name={feature.icon} size={20} className="text-gray-700 dark:text-gray-300" /> : feature.icon}
                  </div>
                )}
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{feature.description}</p>
              </Card>
            ) : (
              <div key={i} className="flex gap-4">
                {feature.icon && (
                  <div className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center flex-shrink-0 mt-1">
                    {typeof feature.icon === 'string' ? <Icon name={feature.icon} size={20} className="text-gray-700 dark:text-gray-300" /> : feature.icon}
                  </div>
                )}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{feature.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            )
          ))}
        </div>
      </Container>
    </section>
  )
}

export { Features }
