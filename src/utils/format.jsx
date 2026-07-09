const formatKES = (amount, options = {}) => {
  const { compact = false, withSymbol = true } = options
  const num = typeof amount === 'string' ? parseFloat(amount) : amount
  if (isNaN(num)) return amount

  const formatted = compact
    ? num >= 1000000
      ? (num / 1000000).toFixed(1) + 'M'
      : num >= 1000
        ? (num / 1000).toFixed(0) + 'K'
        : num.toLocaleString('en-KE')
    : num.toLocaleString('en-KE', { minimumFractionDigits: 0, maximumFractionDigits: 2 })

  return withSymbol ? `KES ${formatted}` : formatted
}

const formatDate = (date, options = {}) => {
  const { style = 'medium', locale = 'en-KE' } = options
  const d = typeof date === 'string' ? new Date(date) : date
  if (isNaN(d.getTime())) return date

  const dateOpts = {
    short: { day: 'numeric', month: 'short', year: 'numeric' },
    medium: { day: 'numeric', month: 'long', year: 'numeric' },
    long: { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' },
  }

  return d.toLocaleDateString(locale, dateOpts[style] || dateOpts.medium)
}

const slugify = (text) =>
  text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_]+/g, '-')
    .replace(/^-+|-+$/g, '')

const truncate = (text, maxLength = 100) =>
  text.length > maxLength ? text.slice(0, maxLength).trimEnd() + '...' : text

const generateId = () =>
  Math.random().toString(36).substring(2, 11)

export { formatKES, formatDate, slugify, truncate, generateId }
