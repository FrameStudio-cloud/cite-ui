import Button from './Button'

const Modal = ({ isOpen, onClose, product, actionLabel = 'View Details', onAction }) => {
  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-xl w-full max-w-md mx-4 p-6 overflow-y-auto max-h-[90vh] relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <img
          src={product.image}
          alt={product.name}
          className="w-full h-56 object-cover rounded-xl mb-4"
        />

        <h2 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h2>
        <p className="text-gray-600 text-sm mb-4">{product.description}</p>
        <p className="text-lg font-semibold text-gray-900 mb-6">{product.price}</p>

        <Button variant="primary" label={actionLabel} onClick={onAction} className="w-full" />
      </div>
    </div>
  )
}

export default Modal
