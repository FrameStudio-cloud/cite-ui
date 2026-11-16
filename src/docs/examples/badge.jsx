import { Badge } from '../../index'

export const examples = [
  {
    id: 'colors',
    title: 'Colours',
    description: 'Eight schemes for status, not decoration. Pair colour with a word — never colour alone.',
    code: `<Badge color="green">Active</Badge>
<Badge color="red">Sold out</Badge>
<Badge color="amber">Pending</Badge>
<Badge color="blue">New</Badge>
<Badge color="purple">Premium</Badge>
<Badge>Default</Badge>`,
    Demo: () => (
      <div className="flex flex-wrap items-center gap-2">
        <Badge color="green">Active</Badge>
        <Badge color="red">Sold out</Badge>
        <Badge color="amber">Pending</Badge>
        <Badge color="blue">New</Badge>
        <Badge color="purple">Premium</Badge>
        <Badge>Default</Badge>
        <Badge color="pink">Hot</Badge>
        <Badge color="black">Black</Badge>
      </div>
    ),
  },
  {
    id: 'sizes',
    title: 'Sizes',
    description: 'Three sizes; `sm` fits inside table rows and card corners.',
    code: `<Badge size="sm" color="green">Small</Badge>
<Badge color="green">Medium</Badge>
<Badge size="lg" color="green">Large</Badge>`,
    Demo: () => (
      <div className="flex flex-wrap items-center gap-2">
        <Badge size="sm" color="green">Small</Badge>
        <Badge color="green">Medium</Badge>
        <Badge size="lg" color="green">Large</Badge>
      </div>
    ),
  },
]
