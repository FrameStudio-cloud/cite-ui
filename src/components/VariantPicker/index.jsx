import { useState } from 'react'

const VariantPicker = ({
  variants = [],
  selected,
  onChange,
  label = 'Options',
  className = '',
}) => {
  if (!variants || variants.length === 0) return null

  const isColor = variants.some((v) => v.color)
  const isSize = variants.some((v) => v.size)
  const isLabeled = variants.some((v) => v.label)

  if (isColor) {
    return (
      <div className={className}>
        {label && <p className="text-sm font-medium text-gray-900 dark:text-white mb-2">{label}</p>}
        <div className="flex flex-wrap gap-2">
          {variants.map((v, i) => {
            const val = v.value || v.color || v.label || v
            const isSelected = selected === val
            return (
              <button
                key={i}
                onClick={() => onChange(val)}
                className={`w-8 h-8 rounded-full border-2 transition-all ${
                  isSelected ? 'border-black dark:border-white scale-110' : 'border-gray-300 dark:border-gray-600 hover:scale-105'
                }`}
                style={{ backgroundColor: v.color || '#ccc' }}
                title={v.label || v.color || val}
                aria-label={v.label || v.color || val}
              />
            )
          })}
        </div>
      </div>
    )
  }

  if (isSize) {
    return (
      <div className={className}>
        {label && <p className="text-sm font-medium text-gray-900 dark:text-white mb-2">{label}</p>}
        <div className="flex flex-wrap gap-2">
          {variants.map((v, i) => {
            const val = v.value || v.size || v.label || v
            const isSelected = selected === val
            return (
              <button
                key={i}
                onClick={() => onChange(val)}
                className={`min-w-[36px] h-9 px-3 text-sm font-medium rounded-lg border transition-all ${
                  isSelected
                    ? 'bg-black text-white dark:bg-white dark:text-gray-900 border-black dark:border-white'
                    : 'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-gray-400'
                }`}
              >
                {v.label || v.size || v.value || v}
              </button>
            )
          })}
        </div>
      </div>
    )
  }

  return (
    <div className={className}>
      {label && <p className="text-sm font-medium text-gray-900 dark:text-white mb-2">{label}</p>}
      <div className="flex flex-wrap gap-2">
        {variants.map((v, i) => {
          const val = v.value || v.label || v
          const isSelected = selected === val
          return (
            <button
              key={i}
              onClick={() => onChange(val)}
              className={`px-3 py-1.5 text-sm rounded-lg border transition-all ${
                isSelected
                  ? 'bg-black text-white dark:bg-white dark:text-gray-900 border-black dark:border-white'
                  : 'bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400 border-gray-200 dark:border-gray-700 hover:border-gray-400'
              }`}
            >
              {v.label || v.value || v}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export { VariantPicker }
