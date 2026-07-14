import { Icon } from '../Icon'

const stars = (rating) => {
  const full = Math.floor(rating)
  const half = rating % 1 >= 0.5
  const empty = 5 - full - (half ? 1 : 0)
  return (
    <span className="inline-flex gap-0.5">
      {Array.from({ length: full }, (_, i) => (
        <Icon key={`f${i}`} name="star" size={14} className="text-amber-400 fill-amber-400" />
      ))}
      {half && <Icon name="star" size={14} className="text-amber-400 fill-amber-400" style={{ opacity: 0.5 }} />}
      {Array.from({ length: empty }, (_, i) => (
        <Icon key={`e${i}`} name="star" size={14} className="text-gray-300 dark:text-gray-600" />
      ))}
    </span>
  )
}

const CatalogueCard = ({
  image,
  tag,
  title,
  description,
  price,
  rating,
  badge,
  icon,
  cta,
  specs,
  variants,
  includes,
  available = true,
  variant = 'product',
  className = '',
  onClick,
}) => {
  const isService = variant === 'service'

  return (
    <div className={`group relative bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 ${onClick ? 'cursor-pointer' : ''} ${className}`}>
      {badge && (
        <span className="absolute top-3 left-3 z-10 text-[11px] font-semibold tracking-wide uppercase px-2.5 py-1 rounded-full bg-black text-white dark:bg-white dark:text-black shadow-sm">
          {badge}
        </span>
      )}
      {!available && (
        <span className="absolute top-3 right-3 z-10 text-[11px] font-semibold tracking-wide uppercase px-2.5 py-1 rounded-full bg-red-500 text-white shadow-sm">
          Sold Out
        </span>
      )}

      <div onClick={onClick}>
        {isService ? (
          <div className="flex items-center justify-center h-40 sm:h-48 bg-gray-50 dark:bg-gray-800/60">
            {icon ? (
              typeof icon === 'string' ? (
                <Icon name={icon} size={48} className="text-gray-400" />
              ) : (
                icon
              )
            ) : (
              <Icon name="package" size={40} className="text-gray-300 dark:text-gray-600" />
            )}
          </div>
        ) : (
          <div className="aspect-[4/3] overflow-hidden bg-gray-100 dark:bg-gray-800">
            {image?.src ? (
              <img src={image.src} alt={image.alt || title} className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500" loading="lazy" />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <Icon name="image" size={32} className="text-gray-300 dark:text-gray-600" />
              </div>
            )}
          </div>
        )}
      </div>

      <div className="p-4 sm:p-5">
        {tag && (
          <span className="text-[11px] font-semibold tracking-widest uppercase text-gray-500 dark:text-gray-500">{tag}</span>
        )}
        <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mt-0.5 leading-snug">{title}</h3>
        {description && (
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1.5 line-clamp-2 leading-relaxed">{description}</p>
        )}
        {price && (
          <p className="text-lg font-bold text-gray-900 dark:text-white mt-2">{price}</p>
        )}
        {rating && (
          <div className="mt-2">{stars(rating)}</div>
        )}

        {specs && specs.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-3">
            {specs.slice(0, 4).map((spec, i) => (
              <span key={i} className="text-[11px] px-2 py-0.5 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 font-medium">
                {typeof spec === 'string' ? spec : spec.label || spec}
              </span>
            ))}
            {specs.length > 4 && (
              <span className="text-[11px] px-2 py-0.5 rounded-md text-gray-400 dark:text-gray-500">
                +{specs.length - 4}
              </span>
            )}
          </div>
        )}

        {variants && variants.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-3">
            {variants.slice(0, 6).map((v, i) => {
              if (v.color) {
                return (
                  <span
                    key={i}
                    className="w-4 h-4 rounded-full border border-gray-300 dark:border-gray-600"
                    style={{ backgroundColor: v.color }}
                    title={v.label || v.color}
                  />
                )
              }
              return (
                <span key={i} className="text-[11px] px-2 py-0.5 rounded-md border border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400">
                  {v.label || v.value || v}
                </span>
              )
            })}
          </div>
        )}

        {includes && includes.length > 0 && (
          <div className="mt-3 space-y-1">
            {includes.slice(0, 3).map((item, i) => (
              <div key={i} className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400">
                <Icon name="check" size={12} className="text-emerald-500 flex-shrink-0" />
                <span>{typeof item === 'string' ? item : item.label || item}</span>
              </div>
            ))}
          </div>
        )}

        {cta && (
          <div className="mt-4">
            {cta.href ? (
              <a href={cta.href} target={cta.external ? '_blank' : undefined} rel={cta.external ? 'noopener noreferrer' : undefined} className="inline-flex items-center justify-center text-sm font-medium bg-black text-white dark:bg-white dark:text-gray-900 rounded-lg px-4 py-2 hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors">
                {cta.icon && <Icon name={cta.icon} size={14} className="mr-1.5" />}
                {cta.label}
                <Icon name="arrowRight" size={14} className="ml-1.5" />
              </a>
            ) : (
              <button onClick={cta.onClick} className="inline-flex items-center justify-center text-sm font-medium bg-black text-white dark:bg-white dark:text-gray-900 rounded-lg px-4 py-2 hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors">
                {cta.icon && <Icon name={cta.icon} size={14} className="mr-1.5" />}
                {cta.label}
                <Icon name="arrowRight" size={14} className="ml-1.5" />
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export { CatalogueCard }
