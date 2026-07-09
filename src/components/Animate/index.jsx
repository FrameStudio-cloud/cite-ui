import { useState, useEffect } from 'react'
import { useInView } from '../../hooks/useInView'

const FROM_STYLES = {
  fadeIn:       { opacity: 0 },
  fadeScaleIn:  { opacity: 0, transform: 'scale(0.95)' },
  slideIn:      { opacity: 0, transform: 'translateX(1rem)' },
  slideUp:      { opacity: 0, transform: 'translateY(20px)' },
  slideDown:    { opacity: 0, transform: 'translateY(-20px)' },
  slideLeft:    { opacity: 0, transform: 'translateX(20px)' },
  slideRight:   { opacity: 0, transform: 'translateX(-20px)' },
  scaleIn:      { opacity: 0, transform: 'scale(0.9)' },
}

const Animate = ({
  type = 'fadeIn',
  duration = 400,
  delay = 0,
  trigger = 'mount',
  threshold = 0.1,
  once = true,
  animateIn = true,
  onAnimateOut,
  as: Tag = 'div',
  className = '',
  children,
}) => {
  const [state, setState] = useState(() => {
    if (trigger === 'viewport') return 'idle'
    return animateIn ? 'entering' : 'idle'
  })
  const { ref, isInView } = useInView({ threshold, triggerOnce: once })

  useEffect(() => {
    if (trigger === 'viewport' && isInView && state === 'idle') {
      setState('entering')
    }
  }, [trigger, isInView, state])

  useEffect(() => {
    if (animateIn && state === 'idle') setState('entering')
    if (!animateIn && (state === 'entering' || state === 'entered')) {
      setState('exiting')
    }
  }, [animateIn])

  const handleEnd = () => {
    if (state === 'entering') setState('entered')
    if (state === 'exiting') {
      onAnimateOut?.()
      setState('idle')
    }
  }

  const getStyle = () => {
    switch (state) {
      case 'idle':
        return FROM_STYLES[type] || FROM_STYLES.fadeIn
      case 'entering':
        return {
          animation: `${type} ${duration}ms ease ${delay}ms forwards`,
        }
      case 'entered':
        return {
          animation: `${type} ${duration}ms ease ${delay}ms forwards`,
        }
      case 'exiting':
        return {
          animation: `${type} ${duration}ms ease 0ms reverse forwards`,
        }
    }
  }

  return (
    <Tag
      ref={ref}
      className={className}
      style={getStyle()}
      onAnimationEnd={handleEnd}
    >
      {children}
    </Tag>
  )
}

export { Animate }
