import Button from '../Button'
import { Container } from '../Container'
import { Icon } from '../Icon'

const Pricing = ({ title, subtitle, plans = [], className = '' }) => {
  return (
    <section className={`py-16 lg:py-24 ${className}`}>
      <Container>
        {(title || subtitle) && (
          <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
            {title && <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">{title}</h2>}
            {subtitle && <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">{subtitle}</p>}
          </div>
        )}
        <div className={`grid grid-cols-1 ${plans.length === 2 ? 'md:grid-cols-2' : plans.length === 4 ? 'md:grid-cols-2 lg:grid-cols-4' : 'md:grid-cols-2 lg:grid-cols-3'} gap-6 lg:gap-8 items-start`}>
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`rounded-2xl p-6 lg:p-8 border-2 transition-all duration-200 ${plan.highlighted ? 'border-black dark:border-white bg-gray-50 dark:bg-gray-800/50 shadow-lg scale-105 lg:scale-110' : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900'}`}
            >
              {plan.badge && (
                <span className="inline-block text-[10px] font-semibold tracking-widest uppercase px-2 py-0.5 rounded-full bg-gray-900 text-white dark:bg-white dark:text-gray-900 mb-4">
                  {plan.badge}
                </span>
              )}
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{plan.name}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{plan.description}</p>
              <div className="mb-6">
                <span className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">{plan.price}</span>
                {plan.period && <span className="text-sm text-gray-500 dark:text-gray-400 ml-1">{plan.period}</span>}
              </div>
              <Button
                variant={plan.highlighted ? 'primary' : 'outline'}
                label={plan.cta || 'Get Started'}
                onClick={plan.onClick}
                href={plan.href}
                className="w-full"
              />
              <ul className="mt-6 space-y-3">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm">
                    <span className={`flex-shrink-0 mt-0.5 ${feature.included !== false ? 'text-emerald-500' : 'text-gray-300 dark:text-gray-600'}`}>
                      {feature.included !== false ? (
                        <Icon name="check" size={16} strokeWidth={2.5} />
                      ) : (
                        <Icon name="x" size={16} />
                      )}
                    </span>
                    <span className={feature.included !== false ? 'text-gray-700 dark:text-gray-300' : 'text-gray-400 dark:text-gray-500'}>{feature.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export { Pricing }
