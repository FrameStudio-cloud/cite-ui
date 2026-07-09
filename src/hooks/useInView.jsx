import { useState, useEffect, useRef } from 'react'

const useInView = ({ threshold = 0.1, triggerOnce = true } = {}) => {
  const ref = useRef(null)
  const [isInView, setIsInView] = useState(false)
  const triggered = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el || (triggerOnce && triggered.current)) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          triggered.current = true
          if (triggerOnce) observer.unobserve(el)
        } else if (!triggerOnce) {
          setIsInView(false)
        }
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, triggerOnce])

  return { ref, isInView }
}

export { useInView }
