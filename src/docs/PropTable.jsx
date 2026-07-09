const PropTable = ({ props = [] }) => {
  if (!props || props.length === 0) return null
  return (
    <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-800">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
            <th className="text-left px-4 py-2.5 font-semibold text-gray-800 dark:text-gray-200 text-xs uppercase tracking-wider">Prop</th>
            <th className="text-left px-4 py-2.5 font-semibold text-gray-800 dark:text-gray-200 text-xs uppercase tracking-wider">Type</th>
            <th className="text-left px-4 py-2.5 font-semibold text-gray-800 dark:text-gray-200 text-xs uppercase tracking-wider">Default</th>
            <th className="text-left px-4 py-2.5 font-semibold text-gray-800 dark:text-gray-200 text-xs uppercase tracking-wider">Description</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 dark:divide-gray-800/60">
          {props.map((prop, i) => (
            <tr key={i} className="even:bg-gray-50/50 dark:even:bg-gray-900/30">
              <td className="px-4 py-2.5 font-mono text-xs font-semibold text-violet-700 dark:text-violet-400 whitespace-nowrap">{prop.name}</td>
              <td className="px-4 py-2.5 font-mono text-xs text-gray-600 dark:text-gray-400 max-w-[260px]">
                <code className="text-[11px] bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded leading-relaxed break-words inline-block">{prop.type}</code>
              </td>
              <td className="px-4 py-2.5 font-mono text-xs text-gray-500 dark:text-gray-500 whitespace-nowrap">{prop.default}</td>
              <td className="px-4 py-2.5 text-xs text-gray-600 dark:text-gray-400">{prop.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default PropTable
