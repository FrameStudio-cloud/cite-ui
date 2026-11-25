import { Link } from 'react-router-dom'
import CodePanel from '../CodePanel'
import { usePageMeta } from '../lib/meta'

const REPO = 'https://github.com/FrameStudio-cloud/cite-ui'

const ALLOWED = [
  'Use it in commercial products, client work and paid templates.',
  'Modify, remix and rename your copy.',
  'Ship it inside a private or public repository.',
  'Redistribute it, including inside a larger application.',
]

const REQUIRED = [
  'Keep the copyright line and the permission notice with any copy or substantial portion of the code.',
  'Do not hold FrameStudio liable if something breaks.',
  'Do not imply endorsement — a credit line is not a partnership.',
]

export default function LicensePage() {
  usePageMeta(
    'License',
    'cite-ui is MIT licensed. What that allows, what it requires, and the third-party notices for Feather icons and the documentation fonts.'
  )

  return (
    <article className="mx-auto max-w-[900px]">
      <nav aria-label="Breadcrumb" className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink/35">
        <Link to="/" className="transition-colors hover:text-ink">Overview</Link>
        <span className="mx-2">/</span>
        <Link to="/guide/installation" className="transition-colors hover:text-ink">Guides</Link>
        <span className="mx-2">/</span>
        <span>License</span>
      </nav>

      <header className="mt-5 border-b border-ink/10 pb-8">
        <h1 className="font-display text-[2.2rem] font-semibold leading-[1.05] tracking-[-0.03em] text-ink sm:text-[2.6rem]">
          License
        </h1>
        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-ink-soft">
          cite-ui is released under the MIT License, copyright © 2026 FrameStudio. It is a
          permissive licence: use the components anywhere, for free, without asking.
        </p>
        <p className="mt-3 max-w-2xl text-[13px] leading-relaxed text-ink/50">
          The full text lives in{' '}
          <a
            href={`${REPO}/blob/main/LICENSE`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-ink underline decoration-ink/25 underline-offset-4 hover:decoration-accent"
          >
            LICENSE
          </a>{' '}
          in the repository. This page is a summary, not a substitute for it.
        </p>
      </header>

      <section className="mt-8">
        <h2 className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/35">What you can do</h2>
        <ul className="mt-3 space-y-2.5 text-[15px] leading-relaxed text-ink-soft">
          {ALLOWED.map((line) => (
            <li key={line} className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              {line}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/35">What it asks</h2>
        <ul className="mt-3 space-y-2.5 text-[15px] leading-relaxed text-ink-soft">
          {REQUIRED.map((line) => (
            <li key={line} className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ink/25" />
              {line}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-[13px] leading-relaxed text-ink/50">
          In practice, keeping the licence file in your dependency tree — which npm does for you —
          satisfies the attribution requirement. Nothing needs to appear in your UI.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/35">Optional credit line</h2>
        <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-ink-soft">
          If you would like to credit the library — in a README, a footer or an about page — this
          is the line we use:
        </p>
        <div className="mt-3">
          <CodePanel
            filename="CREDITS.md"
            code={`Built with cite-ui — MIT © 2026 FrameStudio\nhttps://cite-ui.framestudio.co.ke`}
          />
        </div>
      </section>

      <section className="mt-10">
        <h2 className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/35">Third-party work</h2>
        <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-ink-soft">
          The icon paths are derived from{' '}
          <a
            href="https://feathericons.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-ink underline decoration-ink/25 underline-offset-4 hover:decoration-accent"
          >
            Feather
          </a>{' '}
          by Cole Bemis, also MIT. The documentation loads General Sans, Bricolage Grotesque,
          Instrument Serif and Space Mono under their own licences; the fonts are not shipped in
          the npm package.
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <a
            href={`${REPO}/blob/main/THIRD-PARTY-NOTICES.md`}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border border-ink/10 p-4 transition-colors hover:border-ink/30"
          >
            <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-ink/35">Attributions</span>
            <span className="mt-1 block font-display text-base font-semibold text-ink group-hover:text-accent">
              THIRD-PARTY-NOTICES.md
            </span>
          </a>
          <a
            href={`${REPO}/blob/main/LICENSE`}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border border-ink/10 p-4 transition-colors hover:border-ink/30"
          >
            <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-ink/35">Full text</span>
            <span className="mt-1 block font-display text-base font-semibold text-ink group-hover:text-accent">
              LICENSE
            </span>
          </a>
        </div>
      </section>

      <section className="mt-10 border-t border-ink/10 pt-6">
        <p className="max-w-2xl text-[13px] leading-relaxed text-ink/50">
          Questions about using cite-ui in a commercial product, or about a licence that is not
          covered here, belong in an{' '}
          <a
            href={`${REPO}/issues`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-ink underline decoration-ink/25 underline-offset-4 hover:decoration-accent"
          >
            issue
          </a>
          . The software is provided “as is”, without warranty of any kind.
        </p>
      </section>
    </article>
  )
}
