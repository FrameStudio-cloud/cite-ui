import { Container } from '../Container'

const TrustBar = ({
  logos = [],
  title,
  variant = 'grid',
  className = '',
}) => {
  if (variant === 'carousel') {
    return (
      <section className={`py-10 overflow-hidden ${className}`}>
        <Container>
          {title && <p className="text-center text-xs font-semibold tracking-widest uppercase text-gray-500 dark:text-gray-500 mb-6">{title}</p>}
          <div className="flex overflow-hidden">
            <div className="flex gap-10 sm:gap-16 items-center animate-[slideIn_20s_linear_infinite]">
              {[...logos, ...logos].map((logo, i) => (
                <div key={i} className="flex-shrink-0 flex items-center justify-center h-8 sm:h-10">
                  {logo.href ? (
                    <a href={logo.href} target="_blank" rel="noopener noreferrer">
                      <img src={logo.src} alt={logo.alt} className="h-full max-w-[120px] object-contain opacity-50 grayscale hover:opacity-70 hover:grayscale-0 transition-all duration-300" />
                    </a>
                  ) : (
                    <img src={logo.src} alt={logo.alt} className="h-full max-w-[120px] object-contain opacity-50 grayscale" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    )
  }

  return (
    <section className={`py-10 ${className}`}>
      <Container>
        {title && <p className="text-center text-xs font-semibold tracking-widest uppercase text-gray-500 mb-6">{title}</p>}
        <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12">
          {logos.map((logo, i) => (
            <div key={i} className="flex items-center justify-center h-8 sm:h-10">
              {logo.href ? (
                <a href={logo.href} target="_blank" rel="noopener noreferrer">
                  <img src={logo.src} alt={logo.alt} className="h-full max-w-[120px] object-contain opacity-40 hover:opacity-60 transition-opacity" />
                </a>
              ) : (
                <img src={logo.src} alt={logo.alt} className="h-full max-w-[120px] object-contain opacity-40" />
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export { TrustBar }
