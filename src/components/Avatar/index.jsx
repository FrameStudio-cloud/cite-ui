import { Icon } from '../Icon'

const sizeMap = {
  xs: 'w-6 h-6 text-[10px]',
  sm: 'w-8 h-8 text-xs',
  md: 'w-10 h-10 text-sm',
  lg: 'w-12 h-12 text-base',
  xl: 'w-16 h-16 text-lg',
  '2xl': 'w-20 h-20 text-xl',
}

const Avatar = ({ src, alt, name, size = 'md', color = 'gray', className = '' }) => {
  const initials = name
    ? name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)
    : ''

  const bgColors = {
    gray: 'bg-gray-200 text-gray-600 dark:bg-gray-700 dark:text-gray-300',
    blue: 'bg-blue-100 text-blue-600 dark:bg-blue-900/50 dark:text-blue-300',
    green: 'bg-emerald-100 text-emerald-600 dark:bg-emerald-900/50 dark:text-emerald-300',
    red: 'bg-red-100 text-red-600 dark:bg-red-900/50 dark:text-red-300',
    purple: 'bg-purple-100 text-purple-600 dark:bg-purple-900/50 dark:text-purple-300',
    amber: 'bg-amber-100 text-amber-600 dark:bg-amber-900/50 dark:text-amber-300',
  }

  if (src) {
    return (
      <img
        src={src}
        alt={alt || name || 'Avatar'}
        className={`rounded-full object-cover ${sizeMap[size]} ${className}`}
      />
    )
  }

  return (
    <div className={`rounded-full inline-flex items-center justify-center font-semibold ${sizeMap[size]} ${bgColors[color] || bgColors.gray} ${className}`}>
      {initials || <Icon name="user" size={size === 'xs' ? 10 : size === 'sm' ? 14 : size === 'lg' ? 20 : 16} />}
    </div>
  )
}

export { Avatar }
