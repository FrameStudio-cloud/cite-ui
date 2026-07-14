import { useState } from 'react'
import { Icon } from '../Icon'

const categoryGradients = {
  clothing: 'from-pink-400 via-rose-400 to-purple-500',
  electronics: 'from-blue-400 via-cyan-400 to-teal-500',
  electricals: 'from-amber-400 via-orange-400 to-red-500',
  general: 'from-gray-300 via-gray-200 to-gray-400',
  default: 'from-gray-200 via-gray-300 to-gray-400',
}

const categoryIcons = {
  clothing: 'heart',
  electronics: 'settings',
  electricals: 'alertCircle',
  general: 'package',
}

const ImageWithFallback = ({
  src,
  alt = '',
  category,
  className = '',
  width,
  height,
  loading = 'lazy',
}) => {
  const [hasError, setHasError] = useState(false)
  const [loaded, setLoaded] = useState(false)

  if (!src || hasError) {
    const gradient = categoryGradients[category] || categoryGradients.default
    const icon = categoryIcons[category] || 'image'
    return (
      <div
        className={`flex items-center justify-center bg-gradient-to-br ${gradient} ${className}`}
        style={{ width, height }}
      >
        <Icon name={icon} size={28} className="text-white/60" />
      </div>
    )
  }

  return (
    <div className={`relative overflow-hidden ${className}`} style={{ width, height }}>
      <img
        src={src}
        alt={alt}
        loading={loading}
        onError={() => setHasError(true)}
        onLoad={() => setLoaded(true)}
        className={`w-full h-full object-cover transition-opacity duration-300 ${loaded ? 'opacity-100' : 'opacity-0'}`}
      />
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800">
          <div className="w-6 h-6 border-2 border-gray-300 dark:border-gray-600 border-t-black dark:border-t-white rounded-full animate-spin" />
        </div>
      )}
    </div>
  )
}

export { ImageWithFallback }
