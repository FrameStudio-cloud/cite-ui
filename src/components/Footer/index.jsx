import { Icon } from '../Icon'
import { Container } from '../Container'

const Footer = ({
  brand,
  description,
  links = [],
  social = [],
  contact,
  businessHours,
  developerCredit,
  copyright,
  columns = 4,
  className = '',
}) => {
  const colSpan = columns === 3 ? 'md:grid-cols-4' : columns === 2 ? 'md:grid-cols-3' : 'md:grid-cols-5'

  const contactSection = (contact || businessHours) && (
    <div>
      {contact && contact.length > 0 && (
        <div className="space-y-3 mb-4">
          {contact.map((item, i) => (
            <div key={i} className="flex items-start gap-2.5">
              {item.icon && (
                <Icon name={item.icon} size={14} className="text-gray-500 mt-0.5 flex-shrink-0" />
              )}
              <div className="text-sm">
                <p className="text-gray-400">{item.label}</p>
                {item.href ? (
                  <a href={item.href} className="text-white hover:text-gray-300 transition-colors">{item.value}</a>
                ) : (
                  <p className="text-white">{item.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
      {businessHours && (
        <div>
          <h4 className="text-xs font-semibold tracking-wider text-gray-500 uppercase mb-3">Hours</h4>
          <div className="space-y-1.5">
            {businessHours.map((item, i) => (
              <div key={i} className="flex justify-between text-sm">
                <span className="text-gray-400">{item.day}</span>
                <span className="text-white">{item.hours}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )

  return (
    <footer className={`bg-gray-950 text-gray-400 ${className}`}>
      <Container>
        <div className={`py-12 lg:py-16 grid grid-cols-1 ${colSpan} gap-8 lg:gap-12`}>
          <div className={columns === 3 ? 'md:col-span-1' : columns === 2 ? 'md:col-span-1' : 'md:col-span-2'}>
            {brand && (
              <h3 className="text-lg font-bold text-white mb-3">{brand}</h3>
            )}
            {description && (
              <p className="text-sm leading-relaxed max-w-sm">{description}</p>
            )}
            {social.length > 0 && (
              <div className="flex gap-3 mt-5">
                {social.map((s, i) => (
                  <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors" aria-label={s.label}>
                    {typeof s.icon === 'string' ? <Icon name={s.icon} size={16} className="text-gray-400" /> : s.icon}
                  </a>
                ))}
              </div>
            )}
          </div>
          {links.map((group, i) => (
            <div key={i}>
              <h4 className="text-xs font-semibold tracking-wider text-gray-500 uppercase mb-4">{group.title}</h4>
              <ul className="space-y-2.5">
                {group.items.map((link, j) => (
                  <li key={j}>
                    <a href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          {contactSection && (
            <div>
              <h4 className="text-xs font-semibold tracking-wider text-gray-500 uppercase mb-4">Contact</h4>
              {contactSection}
            </div>
          )}
        </div>
        {(copyright || developerCredit) && (
          <div className="border-t border-gray-800 py-6 flex flex-col sm:flex-row items-center justify-between gap-2">
            {copyright && <p className="text-xs text-gray-500">{copyright}</p>}
            {developerCredit && (
              <p className="text-xs text-gray-600">
                Built by{' '}
                <a
                  href={developerCredit.whatsapp ? `https://wa.me/${developerCredit.whatsapp}` : '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {developerCredit.name}
                </a>
              </p>
            )}
          </div>
        )}
      </Container>
    </footer>
  )
}

export { Footer }
