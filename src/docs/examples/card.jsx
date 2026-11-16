import { Card, Badge } from '../../index'

export const examples = [
  {
    id: 'variants',
    title: 'Variants',
    description: 'Four surfaces for different levels of separation: elevated, outlined, flat and bordered.',
    code: `<Card variant="elevated">
  <h3 className="font-semibold">Elevated</h3>
  <p className="text-sm text-gray-600 dark:text-gray-300">Sits above the page.</p>
</Card>

<Card variant="outlined">…</Card>
<Card variant="flat">…</Card>
<Card variant="bordered">…</Card>`,
    Demo: () => (
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {[
          ['elevated', 'Elevated'],
          ['outlined', 'Outlined'],
          ['flat', 'Flat'],
          ['bordered', 'Bordered'],
        ].map(([variant, label]) => (
          <Card key={variant} variant={variant}>
            <p className="font-semibold">{label}</p>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">Body copy sits here.</p>
          </Card>
        ))}
      </div>
    ),
  },
  {
    id: 'interactive',
    title: 'Interactive',
    description: '`hover` lifts the card; `href` or `onClick` makes the whole surface clickable.',
    code: `<Card variant="outlined" hover href="/portfolio/keel">
  <div className="flex items-center justify-between gap-3">
    <h3 className="font-semibold">Keel</h3>
    <Badge color="green" size="sm">Live</Badge>
  </div>
  <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Multi-tenant dashboard for shop owners.</p>
</Card>`,
    Demo: () => (
      <Card variant="outlined" hover href="#example-interactive" className="max-w-sm">
        <div className="flex items-center justify-between gap-3">
          <h3 className="font-semibold">Keel</h3>
          <Badge color="green" size="sm">Live</Badge>
        </div>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Multi-tenant dashboard for shop owners.</p>
      </Card>
    ),
  },
]
