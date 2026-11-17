import { Link, useParams } from 'react-router-dom'
import Demo from '../Demo'
import Specimen from '../Specimen'
import CodePanel from '../CodePanel'
import PropTable from '../PropTable'
import { Icon } from '../../index'
import { examplesById } from '../examples'
import { usePageMeta } from '../lib/meta'
import { byId, groupLabel, importStatement, neighbors, pathFor, sourceFor } from '../lib/registry'

function plainText(html) {
  return html.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim()
}

export default function ComponentPage() {
  const { id } = useParams()
  const entry = byId[id]

  usePageMeta(entry?.name ?? 'Not found', entry ? plainText(entry.description) : undefined)

  if (!entry) {
    return (
      <div className="max-w-xl">
        <h1 className="font-display text-3xl font-semibold text-ink">No such component</h1>
        <p className="mt-3 text-ink-soft">
          Nothing lives at <code className="font-mono text-sm">{id}</code>. It may have been removed
          in 2.0.0.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex rounded-full bg-ink px-4 py-2 text-sm font-semibold text-paper"
        >
          Back to all components
        </Link>
      </div>
    )
  }

  const { prev, next } = neighbors(entry.id)
  const statement = importStatement(entry)
  const source = sourceFor(entry)
  const custom = examplesById[entry.id]
  const railItems = custom
    ? custom.map((specimen) => ({ id: specimen.id, title: specimen.title }))
    : [{ id: entry.id, title: 'Example' }]

  return (
    <div className="xl:grid xl:grid-cols-[minmax(0,1fr)_150px] xl:gap-8">
      <article className="min-w-0 max-w-[860px]">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <nav aria-label="Breadcrumb" className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink/35">
            <Link to="/" className="transition-colors hover:text-ink">Docs</Link>
            <span className="mx-2">/</span>
            <span>{groupLabel(entry.group)}</span>
          </nav>
          {source && (
            <a
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-ink/40 transition-colors hover:text-ink"
            >
              <Icon name="externalLink" size={11} />
              Source
            </a>
          )}
        </div>

        <header className="mt-5 border-b border-ink/10 pb-8">
          <h1 className="font-display text-[2.2rem] font-semibold leading-[1.05] tracking-[-0.03em] text-ink sm:text-[2.6rem]">
            {entry.name}
          </h1>
          <p
            className="mt-4 max-w-2xl text-[15px] leading-relaxed text-ink-soft [&_code]:rounded [&_code]:bg-ink/5 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-[12.5px] [&_code]:text-ink"
            dangerouslySetInnerHTML={{ __html: entry.description }}
          />

          {statement && (
            <div className="mt-6 max-w-xl">
              <CodePanel code={statement} compact />
            </div>
          )}
        </header>

        <section className="mt-8">
          <div className="flex items-baseline justify-between gap-4">
            <h2 className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/35">Examples</h2>
            <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-ink/30">
              {custom ? `${custom.length} example${custom.length === 1 ? '' : 's'}` : 'Default example'}
            </span>
          </div>
          <div className="mt-3 space-y-4">
            {custom ? (
              custom.map((specimen) => {
                const SpecimenDemo = specimen.Demo
                return (
                  <Specimen
                    key={specimen.id}
                    id={specimen.id}
                    title={specimen.title}
                    description={specimen.description}
                    code={specimen.code}
                  >
                    <SpecimenDemo />
                  </Specimen>
                )
              })
            ) : (
              <Specimen id={entry.id} title={`${entry.name} example`} code={entry.example}>
                <Demo id={entry.id} />
              </Specimen>
            )}
          </div>
        </section>

        {entry.props.length > 0 && (
          <section id="props" className="mt-10 scroll-mt-24">
            <div className="flex items-baseline justify-between gap-4">
              <h2 className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/35">Props</h2>
              <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-ink/30">
                {entry.props.length} prop{entry.props.length === 1 ? '' : 's'}
              </span>
            </div>
            <div className="mt-3">
              <PropTable props={entry.props} name={entry.name} />
            </div>
          </section>
        )}

        <nav className="mt-14 grid gap-3 border-t border-ink/10 pt-6 sm:grid-cols-2" aria-label="Component pagination">
          {prev ? (
            <Link
              to={pathFor(prev)}
              className="group rounded-2xl border border-ink/10 p-4 transition-colors hover:border-ink/30"
            >
              <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-ink/35">Previous</span>
              <span className="mt-1 block font-display text-base font-semibold text-ink group-hover:text-accent">
                {prev.name}
              </span>
            </Link>
          ) : (
            <span />
          )}
          {next && (
            <Link
              to={pathFor(next)}
              className="group rounded-2xl border border-ink/10 p-4 text-right transition-colors hover:border-ink/30 sm:col-start-2"
            >
              <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-ink/35">Next</span>
              <span className="mt-1 block font-display text-base font-semibold text-ink group-hover:text-accent">
                {next.name}
              </span>
            </Link>
          )}
        </nav>
      </article>

      <aside className="hidden xl:block">
        <div className="sticky top-20">
          <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-ink/35">On this page</p>
          <ul className="mt-3 space-y-2 border-l border-ink/10 pl-3">
            {railItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#example-${item.id}`}
                  className="block text-[12px] leading-snug text-ink/50 transition-colors hover:text-ink"
                >
                  {item.title}
                </a>
              </li>
            ))}
            {entry.props.length > 0 && (
              <li>
                <a href="#props" className="block text-[12px] text-ink/50 transition-colors hover:text-ink">
                  Props
                </a>
              </li>
            )}
          </ul>
        </div>
      </aside>
    </div>
  )
}
