import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Animate, Motion, Button } from '../../index'
import Specimen from '../Specimen'
import { usePageMeta } from '../lib/meta'

function AnimateDemo() {
  const [run, setRun] = useState(0)
  return (
    <div className="flex flex-wrap items-center gap-4">
      <Button variant="outline" label="Replay" onClick={() => setRun((value) => value + 1)} />
      <Animate key={run} type="slideUp" duration={500}>
        <div className="flex h-20 w-20 items-center justify-center rounded-xl bg-ink text-[10px] font-semibold text-paper">
          slideUp
        </div>
      </Animate>
    </div>
  )
}

function MotionDemo() {
  const [moved, setMoved] = useState(false)
  return (
    <div>
      <Button variant="outline" label={moved ? 'Reset' : 'Move'} onClick={() => setMoved((value) => !value)} />
      <div className="mt-6 h-28">
        <Motion.div
          animate={{ x: moved ? 140 : 0, rotate: moved ? 12 : 0, scale: moved ? 1.1 : 1 }}
          transition={{ duration: 400 }}
        >
          <div className="flex h-20 w-20 items-center justify-center rounded-xl bg-accent text-[10px] font-semibold text-ink">
            Motion.div
          </div>
        </Motion.div>
      </div>
    </div>
  )
}

export default function MotionGuide() {
  usePageMeta(
    'Motion',
    'Animate and Motion: the zero-dependency animation primitives in cite-ui, and how they handle reduced motion.'
  )

  return (
    <article className="mx-auto max-w-[900px]">
      <nav aria-label="Breadcrumb" className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink/35">
        <Link to="/" className="transition-colors hover:text-ink">Overview</Link>
        <span className="mx-2">/</span>
        <Link to="/guide/installation" className="transition-colors hover:text-ink">Guides</Link>
        <span className="mx-2">/</span>
        <span>Motion</span>
      </nav>

      <header className="mt-5 border-b border-ink/10 pb-8">
        <h1 className="font-display text-[2.2rem] font-semibold leading-[1.05] tracking-[-0.03em] text-ink sm:text-[2.6rem]">
          Motion
        </h1>
        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-ink-soft">
          Two primitives, no animation library: <strong className="text-ink">Animate</strong> for
          entrances and exits, <strong className="text-ink">Motion</strong> for imperative state
          changes. Both tween transform and opacity only.
        </p>
      </header>

      <section className="mt-8">
        <h2 className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/35">Animate</h2>
        <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-ink-soft">
          Eight entrance types, triggered on mount or when scrolled into view. Set{' '}
          <code className="rounded bg-ink/5 px-1.5 py-0.5 font-mono text-[12px] text-ink">once</code>{' '}
          to stop it repeating, and change the <code className="rounded bg-ink/5 px-1.5 py-0.5 font-mono text-[12px] text-ink">key</code>{' '}
          to replay.
        </p>
        <div className="mt-3">
          <Specimen
            id="animate"
            title="Entrance animation"
            description="Replay remounts the child by changing its key."
            code={`<Animate type="slideUp" duration={500}>
  <div className="h-20 w-20 rounded-xl bg-black" />
</Animate>`}
          >
            <AnimateDemo />
          </Specimen>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/35">Motion</h2>
        <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-ink-soft">
          <code className="rounded bg-ink/5 px-1.5 py-0.5 font-mono text-[12px] text-ink">Motion.div</code>{' '}
          (and 20+ other tags) interpolates style from the current state to{' '}
          <code className="rounded bg-ink/5 px-1.5 py-0.5 font-mono text-[12px] text-ink">animate</code>.
          Use it for toggles and gestures, not for page entrances.
        </p>
        <div className="mt-3">
          <Specimen
            id="motion"
            title="Imperative movement"
            description="x, rotate and scale in one transition. The box returns to its start on reset."
            code={`<Motion.div
  animate={{ x: moved ? 140 : 0, rotate: moved ? 12 : 0 }}
  transition={{ duration: 400 }}
>
  <div className="h-20 w-20 rounded-xl bg-[#FF5A36]" />
</Motion.div>`}
          >
            <MotionDemo />
          </Specimen>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/35">Reduced motion</h2>
        <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-ink-soft">
          Respect the user&rsquo;s setting. The library&rsquo;s own demos skip entrance animation when{' '}
          <code className="rounded bg-ink/5 px-1.5 py-0.5 font-mono text-[12px] text-ink">prefers-reduced-motion: reduce</code>{' '}
          is set. Do the same in your app: render the final state and drop the tween.
        </p>
        <div className="mt-3 rounded-2xl border border-ink/10 bg-cream/50 p-4">
          <code className="font-mono text-[12px] text-ink-soft">
            const reduce = window.matchMedia(&apos;(prefers-reduced-motion: reduce)&apos;).matches
          </code>
        </div>
      </section>
    </article>
  )
}
