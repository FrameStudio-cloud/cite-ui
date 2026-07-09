import { useState } from 'react'
import PropTable from './PropTable'

const CodeBlock = ({ code, id }) => {
  const [copied, setCopied] = useState(false)
  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }
  return (
    <div className="relative group">
      <pre className="bg-gray-950 text-gray-100 text-xs leading-relaxed overflow-x-auto p-4 rounded-xl border border-gray-800" id={id}>
        <code>{code}</code>
      </pre>
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 text-[11px] px-2 py-1 rounded-lg bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white transition-all opacity-0 group-hover:opacity-100"
      >
        {copied ? 'Copied!' : 'Copy'}
      </button>
    </div>
  )
}

const Section = ({ data, children }) => {
  return (
    <section id={data.id} className="scroll-mt-20 mb-16">
      <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden shadow-sm">
        <div className="px-6 py-5">
          <p className="text-[10px] font-semibold tracking-widest text-gray-500 uppercase mb-1">{data.group}</p>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">{data.name}</h2>
          <p
            className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-6"
            dangerouslySetInnerHTML={{ __html: data.description }}
          />

          {data.props.length > 0 && (
            <div className="mb-6">
              <p className="text-[11px] font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">Props</p>
              <PropTable props={data.props} />
            </div>
          )}

          {children && (
            <div className="mb-6">
              <p className="text-[11px] font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">Live Example</p>
              <div className="p-6 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-100 dark:border-gray-800">
                {children}
              </div>
            </div>
          )}

          <div>
            <p className="text-[11px] font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">Usage</p>
            <CodeBlock code={data.example} />
          </div>
        </div>
      </div>
    </section>
  )
}

export { CodeBlock }
export default Section
