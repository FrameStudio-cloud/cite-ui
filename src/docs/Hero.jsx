import { Link } from 'react-router-dom'
import { Icon } from '../index'
import { componentCount, version } from './lib/registry'

const NAV = [
  { label: 'Docs', to: '/' },
  { label: 'Components', to: '/components/button' },
  { label: 'Guides', to: '/guide/installation' },
]

const STACK = ['React', 'Tailwind CSS', 'Vite', 'react-router', 'MIT']

function DiagonalArrow({ size = 14, className = '' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M6 18L18 6M9 6h9v9" />
    </svg>
  )
}

/** The little switch that sits inside the word "everywhere". */
function Toggle() {
  return (
    <span className="relative mx-[0.02em] inline-block h-[0.6em] w-[1.4em] translate-y-[0.03em] rounded-full bg-gradient-to-r from-[#ff9c72] via-[#ff7850] to-[#ff5a36] shadow-[inset_0_1px_2px_rgba(0,0,0,0.2),0_6px_16px_-6px_rgba(255,90,54,0.95)]">
      <span className="absolute right-[0.09em] top-1/2 h-[0.8em] w-[0.8em] -translate-y-1/2 rounded-full bg-white shadow-[0_2px_5px_rgba(0,0,0,0.28)]" />
    </span>
  )
}

function OrbitBadge() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute bottom-6 right-7 hidden h-[104px] w-[104px] md:block"
    >
      <svg viewBox="0 0 100 100" className="h-full w-full animate-[spin_22s_linear_infinite] motion-reduce:animate-none">
        <defs>
          <path id="cite-orbit" d="M50 50 m-38 0 a38 38 0 1 1 76 0 a38 38 0 1 1 -76 0" />
        </defs>
        <text className="fill-ink/45 font-mono text-[8px] uppercase">
          <textPath href="#cite-orbit" textLength="235" lengthAdjust="spacing">
            BUILD · SHIP · REPEAT · BUILD · SHIP · REPEAT ·
          </textPath>
        </text>
      </svg>
      <span className="absolute inset-0 grid place-items-center text-ink/50">
        <DiagonalArrow size={20} />
      </span>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="relative rounded-[28px] bg-gradient-to-br from-[#e8e1fb] via-[#fbf8f0] to-[#ffd9c4] p-2.5 shadow-[0_36px_90px_-60px_rgba(11,11,11,0.6)] sm:p-3.5">
      <div className="relative isolate overflow-hidden rounded-[20px] bg-[#fffdf9] px-5 pb-14 pt-6 sm:rounded-[22px] sm:px-10 sm:pb-20 sm:pt-8">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 opacity-80"
          style={{
            backgroundImage:
              'repeating-linear-gradient(to right, rgba(11,11,11,0.045) 0 1px, transparent 1px 84px)',
          }}
        />
        <span aria-hidden="true" className="absolute left-[13%] top-[44%] hidden h-4 w-px bg-accent/60 md:block" />
        <span aria-hidden="true" className="absolute right-[17%] top-[37%] hidden h-4 w-px bg-[#8b6cf0]/50 md:block" />
        <span aria-hidden="true" className="absolute bottom-[26%] left-[21%] hidden h-3 w-px bg-accent/40 md:block" />

        <div className="relative flex items-center justify-between gap-4">
          <nav aria-label="Hero" className="hidden items-center gap-6 text-[11px] font-medium text-ink/50 sm:flex">
            {NAV.map((link) => (
              <Link key={link.label} to={link.to} className="transition-colors hover:text-ink">
                {link.label}
              </Link>
            ))}
          </nav>

          <Link
            to="/"
            className="mx-auto flex items-center gap-2 font-display text-[15px] font-semibold tracking-[-0.02em] text-ink sm:absolute sm:left-1/2 sm:-translate-x-1/2"
          >
            <span className="grid h-6 w-6 place-items-center rounded-lg bg-ink text-accent">
              <Icon name="package" size={13} />
            </span>
            cite<span className="text-ink/40">ui</span>
          </Link>

          <Link
            to="/guide/installation"
            className="inline-flex items-center gap-1 text-[11px] font-semibold text-ink underline decoration-accent decoration-2 underline-offset-4 transition-colors hover:text-accent"
          >
            Get started
            <DiagonalArrow size={11} />
          </Link>
        </div>

        <div className="relative mx-auto mt-14 max-w-3xl text-center sm:mt-16">
          <p className="flex items-center justify-center gap-2.5 font-mono text-[9px] uppercase tracking-[0.22em] text-ink/45 sm:text-[10px]">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
            React · Tailwind CSS · zero deps
          </p>

          <h1 className="mt-6 font-display text-[clamp(2.5rem,8vw,5.4rem)] font-semibold leading-[0.99] tracking-[-0.045em] text-ink">
            <span className="block">
              Build it once.
              <span className="ml-2 inline-grid h-[0.66em] w-[0.66em] -translate-y-[0.05em] place-items-center rounded-full bg-ink align-middle text-paper sm:ml-3">
                <DiagonalArrow size="0.36em" />
              </span>
            </span>
            <span className="block">
              Use it{' '}
              <span className="inline-flex items-center whitespace-nowrap">
                every<Toggle />here.
              </span>
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-[13px] leading-relaxed text-ink/55 sm:text-[15px]">
            cite-ui is our React component library for Tailwind — {componentCount} thoughtfully built
            components, zero runtime dependencies, and the same design language behind everything we
            make at FrameStudio.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-4">
            <a
              href="#components"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-[13px] font-semibold text-ink shadow-[0_12px_26px_-12px_rgba(255,90,54,0.95)] transition-all hover:-translate-y-0.5 hover:bg-accent-deep"
            >
              Explore components
              <Icon name="arrowDown" size={14} />
            </a>
            <Link
              to="/guide/installation"
              className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-ink/60 underline decoration-ink/25 underline-offset-4 transition-colors hover:text-ink"
            >
              Read the guides
              <Icon name="arrowRight" size={13} />
            </Link>
          </div>
        </div>

        <OrbitBadge />

        <div className="relative mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 border-t border-ink/10 pt-6 sm:mt-16 sm:gap-x-12">
          {STACK.map((name) => (
            <span
              key={name}
              className="font-display text-[13px] font-semibold tracking-[-0.01em] text-ink/25 sm:text-[15px]"
            >
              {name}
            </span>
          ))}
        </div>

        <span className="absolute bottom-2 left-4 font-mono text-[8px] uppercase tracking-[0.16em] text-ink/25">
          v{version} · MIT
        </span>
      </div>
    </section>
  )
}
