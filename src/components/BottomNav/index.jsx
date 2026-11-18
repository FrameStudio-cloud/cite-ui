import { isValidElement, useState } from 'react'
import { Icon } from '../Icon'

const sizes = {
  sm: {
    bar: 'p-1 gap-0.5',
    segmentedBar: 'gap-1.5',
    item: 'h-9 min-w-9 px-2.5',
    icon: 16,
    action: 'h-9 w-9',
    detached: 'h-11 w-11',
    label: 'text-[12px]',
    cap: 'text-[10px]',
  },
  md: {
    bar: 'p-1.5 gap-1',
    segmentedBar: 'gap-1.5',
    item: 'h-11 min-w-11 px-3',
    icon: 19,
    action: 'h-11 w-11',
    detached: 'h-14 w-14',
    label: 'text-[13px]',
    cap: 'text-[11px]',
  },
  lg: {
    bar: 'p-2 gap-1.5',
    segmentedBar: 'gap-2',
    item: 'h-12 min-w-12 px-3.5',
    icon: 22,
    action: 'h-12 w-12',
    detached: 'h-16 w-16',
    label: 'text-sm',
    cap: 'text-xs',
  },
}

function ActionNode({ action, placement, segmented, size, className = '' }) {
  const { icon, label, href, onClick, className: actionClassName = '', style } = action
  const Tag = href ? 'a' : 'button'
  const shape = placement === 'detached' || !segmented ? 'rounded-full' : 'rounded-2xl'
  const dims = placement === 'detached' ? size.detached : size.action

  return (
    <Tag
      href={href}
      type={href ? undefined : 'button'}
      onClick={onClick}
      aria-label={label}
      style={style}
      className={`group relative inline-flex shrink-0 items-center justify-center overflow-hidden bg-[var(--cite-accent,#FF5A36)] text-[#0B0B0B] shadow-[0_10px_24px_-14px_rgba(11,11,11,0.8)] transition-transform duration-150 hover:scale-[1.03] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--cite-accent,#FF5A36)] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent motion-reduce:transition-none ${dims} ${shape} ${className} ${actionClassName}`}
    >
      <span
        aria-hidden="true"
        className="absolute inset-0 bg-black/0 transition-colors duration-150 group-hover:bg-black/10 motion-reduce:transition-none"
      />
      <span className="relative z-10 flex items-center justify-center">
        {typeof icon === 'string' || icon === undefined ? (
          <Icon name={icon || 'plus'} size={size.icon + 3} strokeWidth={2} />
        ) : (
          icon
        )}
      </span>
    </Tag>
  )
}

const BottomNav = ({
  items = [],
  active,
  defaultActive = 0,
  onChange,
  variant = 'pill',
  activeStyle = 'dot',
  size = 'md',
  action = null,
  actionPlacement = 'inline',
  fixed = false,
  ariaLabel = 'Bottom navigation',
  classNames = {},
  className = '',
  style,
}) => {
  const [internal, setInternal] = useState(defaultActive)
  const current = active !== undefined ? active : internal
  const setCurrent = onChange || setInternal

  const scale = sizes[size] || sizes.md
  const segmented = variant === 'segmented'
  const detached = Boolean(action) && actionPlacement === 'detached'
  const customAction = isValidElement(action)

  const select = (event, index, item) => {
    if (item.disabled) {
      event.preventDefault()
      return
    }
    setCurrent(index)
    item.onClick?.(event)
  }

  const renderItem = (item, index) => {
    const isActive = index === current
    const showLabel = isActive && activeStyle !== 'dot'
    const Tag = item.href ? 'a' : 'button'

    const itemClasses = [
      'group relative inline-flex shrink-0 items-center justify-center font-medium',
      'transition-[background-color,color,box-shadow] duration-200 motion-reduce:transition-none',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--cite-accent,#FF5A36)] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent',
      'disabled:cursor-not-allowed disabled:opacity-40',
      segmented ? 'rounded-2xl' : 'rounded-full',
      scale.item,
      isActive
        ? 'bg-white/15'
        : segmented
          ? 'bg-ink ring-1 ring-black/5 dark:ring-white/15'
          : '',
      classNames.item || '',
      isActive ? classNames.activeItem || '' : '',
    ].join(' ')

    const labelClasses = [
      'overflow-hidden whitespace-nowrap text-left',
      'transition-[max-width,opacity,margin-left] duration-300 ease-out motion-reduce:transition-none',
      showLabel ? 'ml-2 max-w-[8rem] opacity-100' : 'ml-0 max-w-0 opacity-0',
      activeStyle === 'cap' ? `${scale.cap} font-semibold uppercase tracking-[0.1em]` : scale.label,
      classNames.label || '',
    ].join(' ')

    return (
      <Tag
        key={item.id ?? item.label ?? index}
        href={item.href}
        type={item.href ? undefined : 'button'}
        aria-label={item.label}
        aria-current={isActive ? 'page' : undefined}
        aria-disabled={item.disabled || undefined}
        disabled={item.href ? undefined : item.disabled}
        onClick={(event) => select(event, index, item)}
        className={itemClasses}
      >
        <span
          className={`relative flex shrink-0 items-center transition-opacity duration-200 motion-reduce:transition-none ${
            isActive ? 'opacity-100' : 'opacity-60 group-hover:opacity-100'
          }`}
        >
          {typeof item.icon === 'string' ? (
            <Icon name={item.icon} size={scale.icon} strokeWidth={isActive ? 2 : 1.7} />
          ) : (
            item.icon
          )}

          {item.badge ? (
            <span
              aria-hidden="true"
              className={`absolute -top-1 -right-1.5 flex items-center justify-center rounded-full bg-[var(--cite-accent,#FF5A36)] font-bold leading-none text-[#0B0B0B] ${
                item.badge === true ? 'h-2 w-2' : 'h-4 min-w-4 px-1 text-[9px]'
              } ${classNames.badge || ''}`}
            >
              {item.badge === true ? '' : item.badge}
            </span>
          ) : null}
        </span>

        <span className={labelClasses}>{item.label}</span>
      </Tag>
    )
  }

  const actionElement = customAction ? (
    action
  ) : action ? (
    <ActionNode
      action={action}
      placement={detached ? 'detached' : 'inline'}
      segmented={segmented}
      size={scale}
      className={classNames.action}
    />
  ) : null

  return (
    <nav
      aria-label={ariaLabel}
      style={style}
      className={[
        'flex w-full items-center gap-3',
        detached ? 'justify-between' : 'justify-center',
        fixed ? 'fixed inset-x-0 bottom-0 z-40 px-4 pb-[max(1rem,env(safe-area-inset-bottom))]' : '',
        classNames.root || '',
        className,
      ].join(' ')}
    >
      <div
        className={[
          'inline-flex items-center text-white',
          segmented
            ? scale.segmentedBar
            : `rounded-full bg-ink ring-1 ring-black/5 dark:ring-white/15 ${scale.bar}`,
          classNames.bar || '',
        ].join(' ')}
      >
        {items.map(renderItem)}
        {!detached ? actionElement : null}
      </div>

      {detached ? actionElement : null}
    </nav>
  )
}

export { BottomNav }
