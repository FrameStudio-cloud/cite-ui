import { useState } from 'react'
import { Icon } from '../Icon'

const Table = ({
  columns = [],
  data = [],
  sortable = false,
  onRowClick,
  striped = false,
  compact = false,
  className = '',
}) => {
  const [sortKey, setSortKey] = useState(null)
  const [sortDir, setSortDir] = useState('asc')

  const handleSort = (key) => {
    if (!sortable) return
    if (sortKey === key) {
      setSortDir(d => d === 'asc' ? 'desc' : 'asc')
    } else {
      setSortKey(key)
      setSortDir('asc')
    }
  }

  const sorted = [...data].sort((a, b) => {
    if (!sortKey) return 0
    const aVal = a[sortKey]
    const bVal = b[sortKey]
    if (aVal == null) return 1
    if (bVal == null) return -1
    const cmp = typeof aVal === 'number' ? aVal - bVal : String(aVal).localeCompare(String(bVal))
    return sortDir === 'asc' ? cmp : -cmp
  })

  return (
    <div className={`overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700 ${className}`}>
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-gray-50 dark:bg-gray-800/50">
            {columns.map((col, i) => {
              const sortActive = sortKey === col.key
              return (
                <th
                  key={col.key || i}
                  onClick={() => col.sortable !== false && handleSort(col.key)}
                  className={`text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider ${compact ? 'px-3 py-2.5' : 'px-4 py-3'} ${col.sortable !== false && sortable ? 'cursor-pointer select-none hover:text-gray-700 dark:hover:text-gray-200' : ''}`}
                >
                  <span className="inline-flex items-center gap-1.5">
                    {col.label}
                    {sortable && col.sortable !== false && sortActive && (
                      <Icon name={sortDir === 'asc' ? 'chevronUp' : 'chevronDown'} size={12} className="text-gray-400" />
                    )}
                  </span>
                </th>
              )
            })}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
          {sorted.length === 0 ? (
            <tr>
              <td colSpan={columns.length} className="text-center py-12 text-sm text-gray-400">
                No data
              </td>
            </tr>
          ) : (
            sorted.map((row, i) => (
              <tr
                key={row.id || i}
                onClick={() => onRowClick?.(row)}
                className={`transition-colors ${onRowClick ? 'cursor-pointer' : ''} ${striped && i % 2 === 1 ? 'bg-gray-50 dark:bg-gray-800/30' : 'bg-white dark:bg-gray-900'} hover:bg-gray-50 dark:hover:bg-gray-800/50`}
              >
                {columns.map((col, j) => (
                  <td key={col.key || j} className={`${compact ? 'px-3 py-2.5' : 'px-4 py-3'} text-gray-700 dark:text-gray-300`}>
                    {col.render ? col.render(row[col.key], row) : row[col.key]}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}

export { Table }
