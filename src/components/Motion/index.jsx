import { useState, useEffect, useRef, createElement } from 'react'

function resolveStyle(vals = {}) {
  const transforms = []
  if (vals.x !== undefined) transforms.push(`translateX(${vals.x}px)`)
  if (vals.y !== undefined) transforms.push(`translateY(${vals.y}px)`)
  if (vals.rotate !== undefined) transforms.push(`rotate(${vals.rotate}deg)`)
  if (vals.scale !== undefined) transforms.push(`scale(${vals.scale})`)
  return {
    opacity: vals.opacity !== undefined ? vals.opacity : 1,
    transform: transforms.length > 0 ? transforms.join(' ') : undefined,
  }
}

const MotionComponent = ({
  as: Tag = 'div',
  animate = {},
  transition = {},
  initial,
  children,
  className = '',
}) => {
  const [targetStyle, setTargetStyle] = useState(() =>
    resolveStyle(initial !== undefined ? initial : animate)
  )
  const ready = useRef(initial === undefined)

  useEffect(() => {
    if (!ready.current) {
      ready.current = true
      const raf = requestAnimationFrame(() => {
        setTargetStyle(resolveStyle(animate))
      })
      return () => cancelAnimationFrame(raf)
    } else {
      setTargetStyle(resolveStyle(animate))
    }
  }, [animate.x, animate.y, animate.rotate, animate.scale, animate.opacity])

  const dur = transition.duration ?? 300
  const del = transition.delay ?? 0
  const ease = transition.ease ?? 'ease'

  return createElement(Tag, {
    className,
    style: {
      ...targetStyle,
      transition: ready.current
        ? `all ${dur}ms ${ease} ${del}ms`
        : 'none',
    },
  }, children)
}

const tags = ['div', 'span', 'p', 'h1', 'h2', 'h3', 'section', 'article', 'header', 'footer', 'nav', 'main', 'aside', 'ul', 'ol', 'li', 'a', 'button', 'label', 'figure', 'figcaption', 'blockquote']

const Motion = new Proxy(MotionComponent, {
  get(_, tag) {
    if (tags.includes(tag)) {
      return (props) => <MotionComponent {...props} as={tag} />
    }
    return undefined
  },
})

export { Motion, MotionComponent }
