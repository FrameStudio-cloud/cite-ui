import { useState } from 'react'
import { Tabs, TabPanel } from '../../index'

function VariantsDemo() {
  const [underline, setUnderline] = useState(0)
  const [pill, setPill] = useState(0)
  const [buttons, setButtons] = useState(0)
  return (
    <div className="space-y-7">
      <Tabs
        tabs={[{ label: 'Overview' }, { label: 'Activity' }, { label: 'Settings' }]}
        activeTab={underline}
        onChange={setUnderline}
      />
      <Tabs
        tabs={[{ label: 'Overview' }, { label: 'Activity' }, { label: 'Settings' }]}
        activeTab={pill}
        onChange={setPill}
        variant="pill"
      />
      <Tabs
        tabs={[{ label: 'Overview' }, { label: 'Activity' }, { label: 'Settings' }]}
        activeTab={buttons}
        onChange={setButtons}
        variant="buttons"
        size="sm"
      />
    </div>
  )
}

function PanelsDemo() {
  const [tab, setTab] = useState(0)
  return (
    <div>
      <Tabs
        tabs={[{ label: 'Details' }, { label: 'Reviews', icon: 'star' }, { label: 'Shipping', disabled: true }]}
        activeTab={tab}
        onChange={setTab}
      />
      <TabPanel active={tab} index={0}>
        <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">Cotton shirt, made in Nairobi.</p>
      </TabPanel>
      <TabPanel active={tab} index={1}>
        <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">4.6 from 38 reviews.</p>
      </TabPanel>
    </div>
  )
}

export const examples = [
  {
    id: 'variants',
    title: 'Underline, pill and buttons',
    description: 'Same behaviour, three weights for different levels of hierarchy.',
    code: `<Tabs tabs={tabs} activeTab={tab} onChange={setTab} />
<Tabs tabs={tabs} activeTab={tab} onChange={setTab} variant="pill" />
<Tabs tabs={tabs} activeTab={tab} onChange={setTab} variant="buttons" size="sm" />`,
    Demo: VariantsDemo,
  },
  {
    id: 'panels',
    title: 'With panels',
    description: 'Panels are separate exports, so you control what mounts and when.',
    code: `const [tab, setTab] = useState(0)

<Tabs
  tabs={[{ label: 'Details' }, { label: 'Reviews' }, { label: 'Shipping', disabled: true }]}
  activeTab={tab}
  onChange={setTab}
/>

<TabPanel active={tab} index={0}>Details content</TabPanel>
<TabPanel active={tab} index={1}>Reviews content</TabPanel>`,
    Demo: PanelsDemo,
  },
]
