export default function PropTable({ props = [], name = 'Component' }) {
  if (!props || props.length === 0) return null

  const isRequired = (prop) => String(prop.default).includes('required')

  return (
    <div>
      {/* Mobile: one card per prop, no horizontal scroll for prose columns. */}
      <div className="space-y-2 sm:hidden">
        {props.map((prop) => (
          <div key={prop.name} className="rounded-xl border border-ink/10 p-3">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <code className="font-mono text-[12px] font-bold text-ink">
                {prop.name}
                {isRequired(prop) && <span className="ml-1 text-accent">*</span>}
              </code>
              <code className="font-mono text-[10px] text-ink/45">{prop.default}</code>
            </div>
            <p className="mt-1.5 text-[12px] leading-relaxed text-ink-soft">{prop.description}</p>
            <code className="mt-2 inline-block rounded bg-ink/5 px-1.5 py-0.5 font-mono text-[10px] text-ink-soft">
              {prop.type}
            </code>
          </div>
        ))}
      </div>

      <div className="hidden overflow-x-auto rounded-2xl border border-ink/10 sm:block">
        <table className="w-full min-w-[560px] border-collapse text-left">
          <caption className="sr-only">{name} props</caption>
          <thead>
            <tr className="border-b border-ink/10 bg-cream/60">
              {['Prop', 'Type', 'Default', 'Description'].map((heading) => (
                <th
                  key={heading}
                  scope="col"
                  className="px-4 py-2.5 font-mono text-[9px] uppercase tracking-[0.18em] text-ink/40"
                >
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {props.map((prop) => (
              <tr key={prop.name} className="border-b border-ink/5 last:border-0">
                <td className="whitespace-nowrap px-4 py-3 align-top">
                  <span className="font-mono text-[12px] font-bold text-ink">
                    {prop.name}
                    {isRequired(prop) && <span className="ml-1 text-accent">*</span>}
                  </span>
                </td>
                <td className="px-4 py-3 align-top">
                  <code className="inline-block rounded-md bg-ink/5 px-1.5 py-0.5 font-mono text-[11px] leading-relaxed text-ink-soft">
                    {prop.type}
                  </code>
                </td>
                <td className="whitespace-nowrap px-4 py-3 align-top font-mono text-[11px] text-ink/50">
                  {prop.default}
                </td>
                <td className="px-4 py-3 align-top text-[12px] leading-relaxed text-ink-soft">
                  {prop.description}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
