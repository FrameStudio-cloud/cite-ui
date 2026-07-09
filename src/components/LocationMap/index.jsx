import { Container } from '../Container'
import { Icon } from '../Icon'

const LocationMap = ({
  address,
  coords,
  mapLink,
  embedUrl,
  label = 'Find us',
  className = '',
}) => {
  const googleMapsLink = mapLink || (coords ? `https://www.google.com/maps?q=${coords.lat},${coords.lng}` : '#')

  return (
    <section className={`py-12 lg:py-16 ${className}`}>
      <Container>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-gray-500 mb-1">{label}</p>
            {address && (
              <div className="flex items-start gap-3 mt-2">
                <Icon name="mapPin" size={18} className="text-gray-400 mt-0.5 flex-shrink-0" />
                <div>
                  {address.split('\n').map((line, i) => (
                    <p key={i} className="text-gray-900 dark:text-white leading-relaxed">{line}</p>
                  ))}
                </div>
              </div>
            )}
            {coords && (
              <a
                href={googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 mt-4 text-sm font-medium text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
              >
                <Icon name="externalLink" size={14} />
                Open in Google Maps
              </a>
            )}
          </div>
          {embedUrl && (
            <div className="w-full h-64 sm:h-80 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800">
              <iframe
                src={embedUrl}
                title="Map"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          )}
        </div>
      </Container>
    </section>
  )
}

export { LocationMap }
