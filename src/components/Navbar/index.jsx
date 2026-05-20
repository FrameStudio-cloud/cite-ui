import { useState } from 'react'

const Navbar = ({
  logo,
  links = [],
  ctaLabel,
  ctaHref,
  variant = 'default',
  cartCount = 0,
  onCartClick,
}) => {
  const [open, setOpen] = useState(false)
  const isGlass = variant === 'glass'

  const glassStyles = isGlass
    ? {
        background: 'rgba(255,255,255,0.7)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(255,255,255,0.3)',
      }
    : {}

  return (
    <nav
      className={`sticky top-0 z-50 ${isGlass ? '' : 'bg-white border-b border-gray-200'}`}
      style={glassStyles}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 relative">
          <div className="flex-shrink-0 text-xl font-bold tracking-tight">{logo}</div>

          <div
            className={`items-center gap-8 ${
              isGlass
                ? 'absolute left-1/2 -translate-x-1/2 hidden md:flex'
                : 'hidden md:flex'
            }`}
          >
            {links.map((link, i) => (
              <a
                key={i}
                href={link.href}
                className="text-gray-600 hover:text-black transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            {isGlass ? (
              <button
                onClick={onCartClick}
                className="relative p-2 text-gray-600 hover:text-black transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z"
                  />
                </svg>
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-medium">
                    {cartCount}
                  </span>
                )}
              </button>
            ) : (
              ctaLabel &&
              ctaHref && (
                <a
                  href={ctaHref}
                  className="hidden md:inline-block bg-black text-white rounded-lg px-5 py-2 text-sm font-medium hover:bg-gray-800 transition-colors"
                >
                  {ctaLabel}
                </a>
              )
            )}

            <button
              onClick={() => setOpen((v) => !v)}
              className="md:hidden p-2 rounded-md text-gray-600 hover:text-black transition-colors"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {open ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div
          className="md:hidden border-t px-4 pb-4 pt-2 space-y-3"
          style={{
            borderColor: isGlass ? 'rgba(255,255,255,0.3)' : '#e5e7eb',
          }}
        >
          {links.map((link, i) => (
            <a
              key={i}
              href={link.href}
              className="block text-gray-600 hover:text-black transition-colors"
            >
              {link.label}
            </a>
          ))}
          {!isGlass && ctaLabel && ctaHref && (
            <a
              href={ctaHref}
              className="block text-center bg-black text-white rounded-lg px-5 py-2 text-sm font-medium hover:bg-gray-800 transition-colors"
            >
              {ctaLabel}
            </a>
          )}
        </div>
      )}
    </nav>
  )
}

export default Navbar
