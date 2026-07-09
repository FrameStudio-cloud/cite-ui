import { Container } from '../Container'
import { Icon } from '../Icon'

const Stats = ({ title, stats = [], variant = 'grid', className = '' }) => {
  return (
    <section className={`py-16 lg:py-24 ${className}`}>
      <Container>
        {title && (
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h2>
          </div>
        )}
        {variant === 'row' ? (
          <div className="flex flex-wrap justify-center gap-8 lg:gap-16">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="text-center p-6 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800">
                {stat.icon && (
                  <div className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center mx-auto mb-3">
                    {typeof stat.icon === 'string' ? <Icon name={stat.icon} size={20} className="text-gray-700 dark:text-gray-300" /> : stat.icon}
                  </div>
                )}
                <p className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        )}
      </Container>
    </section>
  )
}

export { Stats }
