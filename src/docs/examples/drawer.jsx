import { useState } from 'react'
import { Drawer, Button } from '../../index'

function BasicDrawer() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Button label="Open drawer" onClick={() => setOpen(true)} />
      <Drawer
        isOpen={open}
        onClose={() => setOpen(false)}
        title="Order settings"
        side="right"
        footer={
          <div className="flex justify-end gap-2">
            <Button variant="ghost" label="Cancel" onClick={() => setOpen(false)} />
            <Button label="Save" onClick={() => setOpen(false)} />
          </div>
        }
      >
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Escape closes it, so does the backdrop, and focus returns to the button that opened it.
        </p>
      </Drawer>
    </>
  )
}

function SidesDrawer() {
  const [side, setSide] = useState(null)
  return (
    <>
      <div className="flex flex-wrap gap-2">
        {['left', 'right', 'bottom'].map((value) => (
          <Button key={value} variant="outline" label={value} onClick={() => setSide(value)} />
        ))}
      </div>
      <Drawer
        isOpen={!!side}
        onClose={() => setSide(null)}
        title={`${side || 'right'} drawer`}
        side={side || 'right'}
        size="sm"
      >
        <p className="text-sm text-gray-600 dark:text-gray-300">Slide direction is a prop; the behaviour is identical.</p>
      </Drawer>
    </>
  )
}

export const examples = [
  {
    id: 'basic',
    title: 'Right drawer',
    description: 'The default side. A footer slot keeps save and cancel separate from scrolling content.',
    code: `const [open, setOpen] = useState(false)

<Button label="Open drawer" onClick={() => setOpen(true)} />

<Drawer
  isOpen={open}
  onClose={() => setOpen(false)}
  title="Order settings"
  side="right"
  footer={<div className="flex justify-end gap-2">…</div>}
>
  <p>Drawer content</p>
</Drawer>`,
    Demo: BasicDrawer,
  },
  {
    id: 'sides',
    title: 'Slide direction',
    description: 'Left, right, top or bottom. Use bottom on mobile, where a side panel feels cramped.',
    code: `<Drawer isOpen={open} onClose={close} title="Filters" side="bottom" size="sm">
  <Filters />
</Drawer>`,
    Demo: SidesDrawer,
  },
]
