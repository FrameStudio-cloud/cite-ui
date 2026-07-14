import { useState, useEffect } from 'react'
import { Icon } from '../Icon'

const BackToTop = ({
  threshold = 300,
  size = 'md',
  className = '',
}) => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > threshold)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [threshold])

  const sizeClasses = {
    sm: 'w-9 h-9',
    md: 'w-11 h-11',
    lg: 'w-12 h-12',
  }

  const iconSizes = { sm: 16, md: 18, lg: 22 }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`fixed bottom-6 right-6 z-40 flex items-center justify-center rounded-full bg-black text-white dark:bg-white dark:text-gray-900 shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 ${sizeClasses[size] || sizeClasses.md} ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
    >
      <Icon name="arrowUp" size={iconSizes[size] || iconSizes.md} />
    </button>
  )
}

export { BackToTop }
