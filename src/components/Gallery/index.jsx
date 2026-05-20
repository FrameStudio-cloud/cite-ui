import { useState } from 'react'

const colMap = {
  1: 'lg:grid-cols-1',
  2: 'lg:grid-cols-2',
  3: 'lg:grid-cols-3',
  4: 'lg:grid-cols-4',
  5: 'lg:grid-cols-5',
  6: 'lg:grid-cols-6',
}

const Gallery = ({ images = [], columns = 3, gap = 4 }) => {
  const [selected, setSelected] = useState(null)

  return (
    <>
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 ${colMap[columns] || ''}`}
        style={{ gap: `${gap * 0.25}rem` }}
      >
        {images.map((img, i) => (
          <img
            key={i}
            src={img.src}
            alt={img.alt}
            className="w-full h-64 object-cover rounded-lg cursor-pointer"
            onClick={() => setSelected(img)}
          />
        ))}
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
          onClick={() => setSelected(null)}
        >
          <button
            className="absolute top-4 right-4 text-white text-4xl leading-none hover:opacity-70"
            onClick={() => setSelected(null)}
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
