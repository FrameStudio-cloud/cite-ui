import { useState, useEffect, useCallback } from 'react'

const colMap = {
  1: 'lg:grid-cols-1',
  2: 'lg:grid-cols-2',
  3: 'lg:grid-cols-3',
  4: 'lg:grid-cols-4',
  5: 'lg:grid-cols-5',
  6: 'lg:grid-cols-6',
}

const Gallery = ({ images = [], columns = 3, gap = 4, lightbox = true }) => {
  const [selected, setSelected] = useState(null)

  const close = useCallback(() => setSelected(null), [])

  useEffect(() => {
    if (!selected) return
    const handler = (e) => { if (e.key === 'Escape') close() }
    document.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [selected, close])

  return (
    <>
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 ${colMap[Math.min(columns, 6)] || ''}`}
        style={{ gap: `${Math.max(gap, 0) * 0.25}rem` }}
      >
        {images.map((img, i) => (
          <div key={i} className="overflow-hidden rounded-lg">
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="w-full h-64 object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
              onClick={() => lightbox && setSelected(img)}
            />
          </div>
        ))}
      </div>

      {selected && lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={close}
        >
          <button
            className="absolute top-4 right-4 text-white/70 hover:text-white text-3xl leading-none p-2 z-10"
            onClick={close}
            aria-label="Close lightbox"
          >
            &times;
          </button>
          <img
            src={selected.src}
            alt={selected.alt}
            className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  )
}

export default Gallery
