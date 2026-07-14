import { useState } from 'react'
import { Icon } from '../Icon'
import { ImageWithFallback } from '../ImageWithFallback'
import { VariantPicker } from '../VariantPicker'

const ProductDetail = ({
  product,
  onBack,
  onWhatsApp,
  currency = '',
  className = '',
}) => {
  const [selectedVariant, setSelectedVariant] = useState(null)
  const [selectedOption, setSelectedOption] = useState(null)
  const [imageError, setImageError] = useState(false)

  if (!product) {
    return (
      <div className="text-center py-16 text-gray-500 dark:text-gray-400">
        <p>Product not found.</p>
        {onBack && (
          <button onClick={onBack} className="mt-4 text-sm text-black dark:text-white underline hover:no-underline">
            Back to catalogue
          </button>
        )}
      </div>
    )
  }

  const hasVariants = product.variants && product.variants.length > 0
  const hasSpecs = product.specs && product.specs.length > 0
  const hasIncludes = product.includes && product.includes.length > 0

  const whatsappMessage = product.title
    ? encodeURIComponent(`Hi, I'd like to order ${product.title}${currency ? ` — ${currency}` : ''}${product.price ? ` ${product.price}` : ''}`)
    : ''

  return (
    <div className={className}>
      {onBack && (
        <button
          onClick={onBack}
          className="inline-flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors mb-6"
        >
          <Icon name="arrowLeft" size={16} />
          Back to catalogue
        </button>
      )}

      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
        <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800">
          <ImageWithFallback
            src={product.image?.src || product.image}
            alt={product.title || product.name}
            category={product.category}
            className="w-full h-full"
          />
        </div>

        <div className="flex flex-col">
          {product.tag && (
            <span className="text-xs font-semibold tracking-widest uppercase text-gray-500 dark:text-gray-500 mb-1">
              {product.tag}
            </span>
          )}
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white leading-tight">
            {product.title || product.name}
          </h1>
          {product.price && (
            <p className="text-2xl font-bold text-gray-900 dark:text-white mt-3">
              {currency ? `${currency} ` : ''}{product.price}
            </p>
          )}

          {product.description && (
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-4 leading-relaxed">
              {product.description}
            </p>
          )}

          {hasVariants && (
            <div className="mt-6">
              <VariantPicker
                variants={product.variants}
                selected={selectedVariant}
                onChange={setSelectedVariant}
                label="Variant"
              />
            </div>
          )}

          {hasSpecs && (
            <div className="mt-6">
              <p className="text-sm font-medium text-gray-900 dark:text-white mb-2">Specifications</p>
              <div className="flex flex-wrap gap-1.5">
                {product.specs.map((spec, i) => (
                  <span
                    key={i}
                    className="text-xs px-2.5 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium"
                  >
                    {typeof spec === 'string' ? spec : spec.label || spec}
                  </span>
                ))}
              </div>
            </div>
          )}

          {hasIncludes && (
            <div className="mt-6">
              <p className="text-sm font-medium text-gray-900 dark:text-white mb-2">What&apos;s Included</p>
              <ul className="space-y-1.5">
                {product.includes.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <Icon name="check" size={14} className="text-emerald-500 flex-shrink-0" />
                    {typeof item === 'string' ? item : item.label || item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            {(onWhatsApp || product.whatsapp) && (
              <a
                href={`https://wa.me/${onWhatsApp || product.whatsapp}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-medium rounded-lg px-6 py-3 hover:bg-[#1ebe5d] transition-colors"
              >
                <Icon name="messageCircle" size={18} />
                Order via WhatsApp
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export { ProductDetail }
