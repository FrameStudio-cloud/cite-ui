import { useState } from 'react'
import { Select } from '../../index'

const OPTIONS = [
  { value: 'all', label: 'All products' },
  { value: 'audio', label: 'Audio' },
  { value: 'wearables', label: 'Wearables' },
]

function ControlledSelect() {
  const [value, setValue] = useState('')
  return (
    <div className="max-w-sm">
      <Select
        label="Category"
        name="category"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        options={OPTIONS}
        placeholder="Choose a category…"
        helperText={value ? `Filtering by ${value}` : 'Pick one to filter the catalogue.'}
      />
    </div>
  )
}

export const examples = [
  {
    id: 'basic',
    title: 'Controlled select',
    description: 'A styled native select: keyboard behaviour and mobile pickers come from the browser.',
    code: `const [value, setValue] = useState('')

<Select
  label="Category"
  name="category"
  value={value}
  onChange={(event) => setValue(event.target.value)}
  options={[
    { value: 'all', label: 'All products' },
    { value: 'audio', label: 'Audio' },
  ]}
  placeholder="Choose a category…"
/>`,
    Demo: ControlledSelect,
  },
  {
    id: 'states',
    title: 'Error and disabled',
    description: 'The error message replaces the helper text and turns the border red.',
    code: `<Select
  label="Category"
  options={options}
  placeholder="Choose…"
  error="Pick a category to continue"
/>

<Select label="Locked" options={options} disabled />`,
    Demo: () => (
      <div className="max-w-sm space-y-4">
        <Select
          label="Category"
          options={OPTIONS}
          placeholder="Choose…"
          error="Pick a category to continue"
        />
        <Select label="Locked" options={OPTIONS} value="" onChange={() => {}} disabled />
      </div>
    ),
  },
]
