import { Container } from '../Container'
import { Avatar } from '../Avatar'
import { Icon } from '../Icon'

const Testimonials = ({ title, subtitle, testimonials = [], variant = 'grid', className = '' }) => {
  return (
    <section className={`py-16 lg:py-24 ${className}`}>
      <Container>
        {(title || subtitle) && (
          <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
            {title && <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">{title}</h2>}
            {subtitle && <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">{subtitle}</p>}
          </div>
        )}
        {variant === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-6 flex flex-col">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: 5 }, (_, j) => (
                    <Icon key={j} name="star" size={14} className={j < (t.rating || 5) ? 'text-amber-400' : 'text-gray-200 dark:text-gray-700'} />
                  ))}
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed flex-1 mb-4">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100 dark:border-gray-800">
                  <Avatar src={t.avatar} name={t.name} size="sm" />
                  <div>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">{t.name}</p>
                    {t.role && <p className="text-xs text-gray-500 dark:text-gray-400">{t.role}{t.company ? `, ${t.company}` : ''}</p>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-6 max-w-3xl mx-auto">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8">
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: 5 }, (_, j) => (
                    <Icon key={j} name="star" size={14} className={j < (t.rating || 5) ? 'text-amber-400' : 'text-gray-200 dark:text-gray-700'} />
                  ))}
                </div>
                <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-6">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <Avatar src={t.avatar} name={t.name} size="sm" />
                  <div>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">{t.name}</p>
                    {t.role && <p className="text-xs text-gray-500 dark:text-gray-400">{t.role}{t.company ? `, ${t.company}` : ''}</p>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </Container>
    </section>
  )
}

export { Testimonials }
