import { useState, useEffect } from 'react'
import { Icon } from '../Icon'

const Navbar = ({
  logo,
  links = [],
  ctaLabel,
  ctaHref,
  ctaVariant = 'primary',
  variant = 'default',
  cartCount = 0,
  onCartClick,
  whatsapp,
  className = '',
}) => {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
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
  const linkColor = isTransparent && !scrolled ? 'text-white/80 hover:text-white' : 'text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white'
  const bgClass = isGlass ? '' : isTransparent ? '' : scrolled ? 'bg-white/95 backdrop-blur-sm border-b border-gray-200' : 'bg-white border-b border-gray-200'

  const navLinks = (
    <>
      {links.map((link, i) => (
        <a key={i} href={link.href} className={`text-sm transition-colors whitespace-nowrap ${linkColor}`}>
          {link.label}
        </a>
      ))}
    </>
  )

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${bgClass} ${className}`} style={{ ...glassStyles, ...transparentStyles }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className={`flex-shrink-0 text-xl font-bold tracking-tight transition-colors ${textColor}`}>
            {typeof logo === 'string' ? logo : logo}
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navLinks}
          </div>

          <div className="flex items-center gap-3">
            {onCartClick && (
              <button onClick={onCartClick} className={`relative p-2 transition-colors ${linkColor}`} aria-label="Cart">
                <Icon name="cart" size={20} />
                {cartCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 bg-red-500 text-white text-[10px] w-4.5 h-4.5 rounded-full flex items-center justify-center font-medium min-w-[18px] min-h-[18px] text-xs">
                    {cartCount > 99 ? '99+' : cartCount}
                  </span>
                )}
              </button>
            )}

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

            {ctaLabel && ctaHref && (
              <a href={ctaHref} className={`hidden md:inline-flex items-center justify-center font-medium rounded-lg transition-all duration-150 ${ctaVariant === 'primary' ? 'bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200' : 'border border-gray-300 text-gray-900 hover:bg-gray-100 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-800'} text-sm px-4 py-2`}>
                {ctaLabel}
              </a>
            )}

            <button onClick={() => setOpen(!open)} className={`md:hidden p-2 rounded-lg transition-colors ${linkColor} hover:bg-white/10`} aria-label="Toggle menu">
              <Icon name={open ? 'x' : 'menu'} size={20} />
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-4 pb-4 pt-2 space-y-2">
          {links.map((link, i) => (
            <a key={i} href={link.href} className="block px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors">
              {link.label}
            </a>
          ))}
          {whatsapp && (
            <a href={`https://wa.me/${whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 py-2 text-sm text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 rounded-lg transition-colors">
              <Icon name="messageCircle" size={16} />
              WhatsApp
            </a>
          )}
          {ctaLabel && ctaHref && (
            <a href={ctaHref} className="block text-center bg-black text-white dark:bg-white dark:text-gray-900 rounded-lg px-5 py-2 text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors mt-2">
              {ctaLabel}
            </a>
          )}
        </div>
      )}
    </nav>
  )
}

export default Navbar
