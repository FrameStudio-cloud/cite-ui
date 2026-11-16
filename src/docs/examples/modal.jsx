import { useState } from 'react'
import { Modal, Button } from '../../index'

function BasicModal() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Button label="Open modal" onClick={() => setOpen(true)} />
      <Modal isOpen={open} onClose={() => setOpen(false)} title="Delete product?" size="sm">
        <p className="text-sm text-gray-600 dark:text-gray-300">
          This removes the product from the catalogue. Escape, the backdrop or the close button all
          dismiss it.
        </p>
      </Modal>
    </>
  )
}

function SizedModal() {
  const [size, setSize] = useState(null)
  return (
    <>
      <div className="flex flex-wrap gap-2">
        <Button variant="outline" label="Small" onClick={() => setSize('sm')} />
        <Button variant="outline" label="Large" onClick={() => setSize('lg')} />
      </div>
      <Modal
        isOpen={!!size}
        onClose={() => setSize(null)}
        title={size === 'lg' ? 'Large modal' : 'Small modal'}
        size={size || 'sm'}
        footer={
          <div className="flex justify-end gap-2">
            <Button variant="ghost" label="Cancel" onClick={() => setSize(null)} />
            <Button label="Save" onClick={() => setSize(null)} />
          </div>
        }
      >
        <p className="text-sm text-gray-600 dark:text-gray-300">A footer keeps destructive and primary actions apart.</p>
      </Modal>
    </>
  )
}

export const examples = [
  {
    id: 'basic',
    title: 'Basic modal',
    description: 'Focus moves into the dialog, Escape closes it and the backdrop is clickable.',
    code: `const [open, setOpen] = useState(false)

<Button label="Open modal" onClick={() => setOpen(true)} />

<Modal isOpen={open} onClose={() => setOpen(false)} title="Delete product?" size="sm">
  <p>This removes the product from the catalogue.</p>
</Modal>`,
    Demo: BasicModal,
  },
  {
    id: 'sizes',
    title: 'Sizes and footer',
    description: 'Seven widths from `sm` to `full`, with a footer slot for actions.',
    code: `<Modal
  isOpen={open}
  onClose={close}
  title="Large modal"
  size="lg"
  footer={<div className="flex justify-end gap-2">…</div>}
>
  <p>Body content</p>
</Modal>`,
    Demo: SizedModal,
  },
]
