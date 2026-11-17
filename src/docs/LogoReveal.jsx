import { useEffect, useRef } from 'react'

/**
 * The FrameStudio portal mark, drawn once when it enters view.
 *
 * Lifted from the landing page so the docs use the same motion; the final state
 * is the default, so reduced motion and no-JS still see the finished mark.
 */
const CSS = `
.docs-logo {
  --docs-logo-draw: cubic-bezier(.6, 0, .2, 1);
  --docs-logo-door: cubic-bezier(.2, .8, .2, 1);
  display: block;
}
.docs-logo__mark { display: block; width: 100%; height: auto; overflow: visible; }
.docs-logo__shape {
  fill: currentColor;
  stroke: currentColor;
  stroke-width: 5;
  stroke-linejoin: miter;
  stroke-linecap: butt;
  stroke-miterlimit: 4;
  stroke-dasharray: 1;
  stroke-dashoffset: 0;
  fill-opacity: 1;
}
@keyframes docs-logo-draw { from { stroke-dashoffset: 1; } to { stroke-dashoffset: 0; } }
@keyframes docs-logo-fill { from { fill-opacity: 0; } to { fill-opacity: 1; } }
@keyframes docs-logo-slide { from { transform: translateX(-90px); } to { transform: translateX(0); } }
.docs-logo--play .docs-logo__shape--main {
  animation: docs-logo-draw 1.5s var(--docs-logo-draw) .2s both,
             docs-logo-fill .7s ease-out 1.2s both;
}
.docs-logo--play .docs-logo__shape--panel {
  animation: docs-logo-draw 1.2s var(--docs-logo-draw) .7s both,
             docs-logo-fill .6s ease-out 1.7s both,
             docs-logo-slide 1s var(--docs-logo-door) 1.4s both;
}
@media (prefers-reduced-motion: reduce) {
  .docs-logo--play .docs-logo__shape { animation: none; }
}
`

export default function LogoReveal({ className = '' }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return undefined

    const draw = () => {
      el.classList.remove('docs-logo--play')
      void el.offsetWidth
      el.classList.add('docs-logo--play')
    }

    if (typeof IntersectionObserver === 'undefined') {
      draw()
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          observer.disconnect()
          draw()
        }
      },
      { threshold: 0.2 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <style>{CSS}</style>
      <div ref={ref} className={`docs-logo ${className}`}>
        <svg viewBox="250 140 750 1050" className="docs-logo__mark" aria-hidden="true" focusable="false">
          <polygon
            className="docs-logo__shape docs-logo__shape--panel"
            pathLength="1"
            points="770,500 983,398 987,959 770,850"
          />
          <polygon
            className="docs-logo__shape docs-logo__shape--main"
            pathLength="1"
            points="269,421 907,157 909,332 443,523 445,1011 760,899 933,985 479,1168 269,1060"
          />
        </svg>
      </div>
    </>
  )
}
