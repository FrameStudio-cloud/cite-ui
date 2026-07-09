import { Container } from '../Container'
import { Accordion } from '../Accordion'

const FAQ = ({ title, subtitle, items = [], className = '' }) => {
  return (
    <section className={`py-16 lg:py-24 ${className}`}>
      <Container maxWidth="lg">
        {(title || subtitle) && (
          <div className="text-center max-w-2xl mx-auto mb-12">
            {title && <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">{title}</h2>}
            {subtitle && <p className="text-base text-gray-600 dark:text-gray-400">{subtitle}</p>}
          </div>
        )}
        <Accordion items={items} />
      </Container>
    </section>
  )
}

export { FAQ }
