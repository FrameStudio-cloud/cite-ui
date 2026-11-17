import { useEffect, useId, useState } from 'react'
import { Icon } from '../Icon'

const Navbar = ({
  logo,
  brand,
  logoHref,
  links = [],
  activeHref,
  actions,
  ctaLabel,
  ctaHref,
  onCtaClick,
  ctaVariant = 'primary',
  variant = 'default',
  whatsapp,
  className = '',
}) => {
  const resolvedLogo = logo || brand
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const menuId = useId()
  const isGlass = variant === 'glass'
  const isTransparent = variant === 'transparent'

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const glassStyles = isGlass ? {
    background: scrolled ? 'rgba(255,255,255,0.85)' : 'rgba(255,255,255,0.6)',
    backdropFilter: 'blur(16px)',
    WebkitBackdropFilter: 'blur(16px)',
    borderBottom: scrolled ? '1px solid rgba(255,255,255,0.3)' : '1px solid transparent',
  } : {}

  const transparentStyles = isTransparent ? {
    background: scrolled ? 'rgba(255,255,255,0.95)' : 'transparent',
    borderBottom: scrolled ? '1px solid rgba(0,0,0,0.08)' : '1px solid transparent',
  } : {}

  const textColor = isTransparent && !scrolled ? 'text-white' : 'text-gray-900 dark:text-white'
  const linkColor = isTransparent && !scrolled
    ? 'text-white/80 hover:text-white'
    : 'text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white'
  const activeColor = isTransparent && !scrolled ? 'text-white' : 'text-gray-900 dark:text-white'
  const bgClass = isGlass || isTransparent
    ? ''
    : scrolled
      ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800'
      : 'bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800'

  const badge = (link) => (activeHref && activeHref === link.href ? activeColor + ' font-medium' : linkColor)

  const ctaClasses = `hidden md:inline-flex items-center justify-center font-medium rounded-lg transition-all duration-150 whitespace-nowrap ${
    ctaVariant === 'primary'
      ? 'bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200'
      : 'border border-gray-300 text-gray-900 hover:bg-gray-100 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-800'
  } text-sm px-4 py-2`

  const cta = ctaLabel && (ctaHref || onCtaClick)
    ? (ctaHref
        ? <a href={ctaHref} className={ctaClasses}>{ctaLabel}</a>
        : <button type="button" onClick={onCtaClick} className={ctaClasses}>{ctaLabel}</button>)
    : null

  const logoNode = typeof resolvedLogo === 'string' ? resolvedLogo : resolvedLogo
  const brandNode = (
    <div className={`flex-shrink-0 text-xl font-bold tracking-tight transition-colors ${textColor}`}>
      {logoNode}
    </div>
  )

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${bgClass} ${className}`} style={{ ...glassStyles, ...transparentStyles }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {logoHref ? <a href={logoHref} className="inline-flex">{brandNode}</a> : brandNode}

          <div className="hidden md:flex items-center gap-8">
            {links.map((link, i) => (
              <a
                key={i}
                href={link.href}
                aria-current={activeHref && activeHref === link.href ? 'page' : undefined}
                className={`text-sm transition-colors whitespace-nowrap ${badge(link)}`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {actions && <div className="hidden md:flex items-center gap-2">{actions}</div>}

            {whatsapp && (
              <a
                href={`https://wa.me/${whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`hidden md:flex items-center gap-1.5 text-sm transition-colors ${linkColor}`}
              >
                <Icon name="messageCircle" size={16} />
                <span>WhatsApp</span>
              </a>
            )}

            {cta}

            <button
              type="button"
              onClick={() => setOpen(!open)}
              className={`md:hidden p-2 rounded-lg transition-colors ${linkColor} hover:bg-white/10`}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls={menuId}
            >
              <Icon name={open ? 'x' : 'menu'} size={20} />
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div id={menuId} className="md:hidden border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-4 pb-4 pt-2 space-y-2">
          {links.map((link, i) => (
            <a
              key={i}
              href={link.href}
              aria-current={activeHref && activeHref === link.href ? 'page' : undefined}
              className={`block px-3 py-2 text-sm rounded-lg transition-colors ${
                activeHref && activeHref === link.href
                  ? 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white font-medium'
                  : 'text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800'
              }`}
            >
              {link.label}
            </a>
          ))}
          {actions && <div className="flex flex-wrap items-center gap-2 px-3 pt-2">{actions}</div>}
          {whatsapp && (
            <a href={`https://wa.me/${whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 py-2 text-sm text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 rounded-lg transition-colors">
              <Icon name="messageCircle" size={16} />
              WhatsApp
            </a>
          )}
          {ctaLabel && (ctaHref || onCtaClick) && (
            ctaHref
              ? <a href={ctaHref} className="block text-center bg-black text-white dark:bg-white dark:text-gray-900 rounded-lg px-5 py-2 text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors mt-2">{ctaLabel}</a>
              : <button type="button" onClick={onCtaClick} className="block w-full text-center bg-black text-white dark:bg-white dark:text-gray-900 rounded-lg px-5 py-2 text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors mt-2">{ctaLabel}</button>
          )}
        </div>
      )}
    </nav>
  )
}

export default Navbar
