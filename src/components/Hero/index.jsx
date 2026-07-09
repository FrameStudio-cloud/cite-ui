import { useState, useEffect, useCallback } from 'react'
import Button from '../Button'
import { Container } from '../Container'
import { Animate } from '../Animate'

const Hero = ({
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  image,
  imagePosition = 'right',
  variant = 'default',
  slides,
  className = '',
}) => {
  const [current, setCurrent] = useState(0)
  const slideCount = slides?.length || 0

  const next = useCallback(() => {
    setCurrent((i) => (i + 1) % slideCount)
  }, [slideCount])

  useEffect(() => {
    if (variant !== 'slideshow' || slideCount < 2) return
    const interval = setInterval(next, 5000)
    return () => clearInterval(interval)
  }, [variant, slideCount, next])

  const textContent = (
    <div className={`max-w-xl ${image ? (imagePosition === 'left' ? 'lg:order-2' : 'lg:order-1') : 'mx-auto text-center'}`}>
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white leading-none mb-4">
        {title}
      </h1>
      {subtitle && (
        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-[65ch] mb-8">
          {subtitle}
        </p>
      )}
      {(primaryCta || secondaryCta) && (
        <div className="flex flex-wrap gap-3">
          {primaryCta && (
            <Button variant={primaryCta.variant || 'primary'} size={primaryCta.size || 'lg'} label={primaryCta.label} onClick={primaryCta.onClick} href={primaryCta.href} />
          )}
          {secondaryCta && (
            <Button variant={secondaryCta.variant || 'outline'} size={secondaryCta.size || 'lg'} label={secondaryCta.label} onClick={secondaryCta.onClick} href={secondaryCta.href} />
          )}
        </div>
      )}
    </div>
  )

  const imageContent = image && (
    <div className={`${imagePosition === 'left' ? 'lg:order-1' : 'lg:order-2'} flex items-center justify-center`}>
      <img src={image.src} alt={image.alt || ''} className="w-full max-w-lg rounded-2xl object-cover" style={{ maxHeight: 500 }} />
    </div>
  )

  if (variant === 'slideshow' && slides?.length > 0) {
    const s = slides[current]
    return (
      <section className={`relative h-screen min-h-[600px] overflow-hidden ${className}`}>
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ${i === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          >
            <img src={slide.image} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/50" />
          </div>
        ))}
        <div className="relative z-20 h-full flex items-center">
          <Container>
            <Animate type="fadeSlideUp" duration={600} key={current}>
              <div className="max-w-2xl">
                {s.tag && (
                  <span className="inline-block text-xs font-semibold tracking-widest uppercase bg-white/20 text-white backdrop-blur-sm px-3 py-1 rounded-full mb-4">
                    {s.tag}
                  </span>
                )}
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-white leading-none mb-4">
                  {s.title}{s.titleAccent && <span className="text-white/60"> {s.titleAccent}</span>}
                </h1>
                {s.description && (
                  <p className="text-base sm:text-lg text-gray-200 leading-relaxed max-w-[65ch] mb-8">
                    {s.description}
                  </p>
                )}
                <div className="flex flex-wrap gap-3">
                  {s.buttonText && (
                    <Button variant="primary" size="lg" label={s.buttonText} href={s.buttonLink} className="bg-white text-gray-900 hover:bg-gray-200" />
                  )}
                  {s.secondaryText && (
                    <Button variant="outline" size="lg" label={s.secondaryText} href={s.secondaryLink} className="border-white/30 text-white hover:bg-white/10" />
                  )}
                </div>
              </div>
            </Animate>
          </Container>
        </div>
        {slideCount > 1 && (
          <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === current ? 'bg-white w-8' : 'bg-white/40 hover:bg-white/60'}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        )}
      </section>
    )
  }

  if (variant === 'split' && image) {
    return (
      <section className={`py-16 lg:py-24 ${className}`}>
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {textContent}
            {imageContent}
          </div>
        </Container>
      </section>
    )
  }

  if (variant === 'centered') {
    return (
      <section className={`py-20 lg:py-32 ${className}`}>
        <Container maxWidth="lg" padding>
          <div className="text-center">{textContent}</div>
        </Container>
      </section>
    )
  }

  if (variant === 'bg-dark') {
    return (
      <section className={`py-20 lg:py-32 bg-gray-950 text-white ${className}`}>
        <Container maxWidth="lg" padding>
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-none mb-4">{title}</h1>
            {subtitle && <p className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-[65ch] mx-auto mb-8">{subtitle}</p>}
            {(primaryCta || secondaryCta) && (
              <div className="flex flex-wrap gap-3 justify-center">
                {primaryCta && <Button variant={primaryCta.variant || 'primary'} size={primaryCta.size || 'lg'} label={primaryCta.label} onClick={primaryCta.onClick} href={primaryCta.href} className={primaryCta.variant === 'primary' ? 'bg-white text-gray-900 hover:bg-gray-200' : ''} />}
                {secondaryCta && <Button variant={secondaryCta.variant || 'outline'} size={secondaryCta.size || 'lg'} label={secondaryCta.label} onClick={secondaryCta.onClick} href={secondaryCta.href} className="border-white/30 text-white hover:bg-white/10" />}
              </div>
            )}
          </div>
        </Container>
      </section>
    )
  }

  return (
    <section className={`py-16 lg:py-24 ${className}`}>
      <Container>
        <div className={`grid lg:grid-cols-2 gap-12 items-center`}>
          {textContent}
          {imageContent}
        </div>
      </Container>
    </section>
  )
}

export { Hero }
