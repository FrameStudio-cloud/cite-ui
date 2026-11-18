import { useState } from 'react'
import { BottomNav } from '../../index'

const ITEMS = [
  { label: 'Home', icon: 'home' },
  { label: 'Search', icon: 'search' },
  { label: 'Discover', icon: 'compass' },
  { label: 'Alerts', icon: 'bell', badge: 3 },
  { label: 'Profile', icon: 'user' },
]

const SHORT = ITEMS.slice(0, 4)
const MINIMAL = ITEMS.slice(0, 3)

function PillDemo() {
  const [active, setActive] = useState(0)
  return (
    <div className="mx-auto w-full max-w-md">
      <BottomNav items={ITEMS} active={active} onChange={setActive} />
    </div>
  )
}

function LabelDemo() {
  const [active, setActive] = useState(0)
  return (
    <div className="mx-auto w-full max-w-md">
      <BottomNav items={SHORT} active={active} onChange={setActive} activeStyle="label" />
    </div>
  )
}

function CapDemo() {
  const [active, setActive] = useState(0)
  return (
    <div className="mx-auto w-full max-w-md">
      <BottomNav items={SHORT} active={active} onChange={setActive} activeStyle="cap" />
    </div>
  )
}

function SegmentedDemo() {
  const [active, setActive] = useState(0)
  return (
    <div className="mx-auto w-full max-w-md">
      <BottomNav
        items={SHORT}
        active={active}
        onChange={setActive}
        variant="segmented"
        action={{ icon: 'plus', label: 'Create' }}
      />
    </div>
  )
}

function DetachedDemo() {
  const [active, setActive] = useState(0)
  return (
    <div className="mx-auto w-full max-w-md space-y-5">
      <BottomNav
        items={MINIMAL}
        active={active}
        onChange={setActive}
        action={{ icon: 'layers', label: 'Collections' }}
        actionPlacement="detached"
      />
      <BottomNav
        items={MINIMAL}
        active={active}
        onChange={setActive}
        action={{ icon: 'plus', label: 'Add' }}
        actionPlacement="detached"
        classNames={{
          bar: 'bg-gradient-to-br from-gray-900 to-purple-950',
          activeItem: 'bg-white/20',
          action: 'bg-gradient-to-br from-amber-300 to-orange-500',
        }}
      />
    </div>
  )
}

export const examples = [
  {
    id: 'pill',
    title: 'Pill with badges',
    description: 'The default: a dark floating pill of icon tabs, with one badge and an optional action tile.',
    code: `const [active, setActive] = useState(0)

<BottomNav
  items={[
    { label: "Home", icon: "home" },
    { label: "Search", icon: "search" },
    { label: "Discover", icon: "compass" },
    { label: "Alerts", icon: "bell", badge: 3 },
    { label: "Profile", icon: "user" },
  ]}
  active={active}
  onChange={setActive}
/>`,
    Demo: PillDemo,
  },
  {
    id: 'label',
    title: 'Expanded active label',
    description: 'activeStyle="label" opens the active tab to show its name; inactive tabs stay icon-only.',
    code: `<BottomNav
  items={items}
  active={active}
  onChange={setActive}
  activeStyle="label"
/>`,
    Demo: LabelDemo,
  },
  {
    id: 'cap',
    title: 'Caps label',
    description: 'The same expansion set in uppercase, for a tighter editorial look.',
    code: `<BottomNav
  items={items}
  active={active}
  onChange={setActive}
  activeStyle="cap"
/>`,
    Demo: CapDemo,
  },
  {
    id: 'segmented',
    title: 'Segmented tiles',
    description: 'variant="segmented" splits the tabs into separate tiles. The action joins them as an accent square.',
    code: `<BottomNav
  items={items}
  active={active}
  onChange={setActive}
  variant="segmented"
  action={{ icon: "plus", label: "Create" }}
/>`,
    Demo: SegmentedDemo,
  },
  {
    id: 'detached',
    title: 'Detached action and brand slots',
    description: 'The action floats beside the bar. The second example brands the bar and action with gradient classes through classNames — no new props, no stylesheet.',
    code: `<BottomNav
  items={items}
  active={active}
  onChange={setActive}
  action={{ icon: "layers", label: "Collections" }}
  actionPlacement="detached"
/>

<BottomNav
  items={items}
  active={active}
  onChange={setActive}
  action={{ icon: "plus", label: "Add" }}
  actionPlacement="detached"
  classNames={{
    bar: "bg-gradient-to-br from-gray-900 to-purple-950",
    activeItem: "bg-white/20",
    action: "bg-gradient-to-br from-amber-300 to-orange-500",
  }}
/>`,
    Demo: DetachedDemo,
  },
]
