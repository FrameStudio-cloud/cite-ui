import {
  Button,
  Badge,
  Card,
  Avatar,
  Alert,
  Chip,
  Spinner,
  Skeleton,
  Progress,
  TextField,
  Select,
  Checkbox,
  Switch,
  Tabs,
  Accordion,
  Pagination,
  SearchBar,
  Icon,
  Divider,
} from '../index'

const noop = () => {}

const frame = 'flex h-full w-full items-center justify-center px-4'

const previews = {
  button: () => (
    <div className="flex flex-wrap items-center justify-center gap-1.5">
      <Button size="xs" label="Primary" />
      <Button size="xs" variant="outline" label="Outline" />
      <Button size="xs" variant="ghost" label="Ghost" />
    </div>
  ),
  navbar: () => (
    <div className="w-full max-w-[170px] overflow-hidden rounded-lg border border-gray-200 bg-white">
      <div className="flex items-center justify-between px-2.5 py-2">
        <span className="text-[8px] font-bold text-gray-900">Soko</span>
        <span className="flex gap-1.5">
          <span className="h-1 w-4 rounded-full bg-gray-200" />
          <span className="h-1 w-4 rounded-full bg-gray-200" />
          <span className="h-1 w-4 rounded-full bg-gray-200" />
        </span>
        <span className="h-3 w-6 rounded bg-black" />
      </div>
    </div>
  ),
  gallery: () => (
    <div className="grid w-full max-w-[160px] grid-cols-3 gap-1">
      {['from-amber-200 to-amber-400', 'from-sky-200 to-sky-400', 'from-rose-200 to-rose-400'].map((tone) => (
        <div key={tone} className={`h-10 rounded bg-gradient-to-br ${tone}`} />
      ))}
    </div>
  ),
  modal: () => (
    <div className="relative flex h-24 w-full max-w-[170px] items-center justify-center rounded-lg bg-gray-900/10">
      <div className="w-[130px] rounded-md border border-gray-200 bg-white p-2 shadow-sm">
        <p className="text-[7px] font-semibold text-gray-900">Delete product?</p>
        <p className="mt-1 text-[6px] leading-tight text-gray-500">This cannot be undone.</p>
        <div className="mt-2 flex justify-end gap-1">
          <span className="rounded bg-gray-100 px-1.5 py-0.5 text-[6px] text-gray-600">Cancel</span>
          <span className="rounded bg-red-600 px-1.5 py-0.5 text-[6px] text-white">Delete</span>
        </div>
      </div>
    </div>
  ),
  toast: () => (
    <div className="flex w-full max-w-[160px] items-start gap-1.5 rounded-md border border-gray-100 border-l-2 border-l-emerald-500 bg-white p-2 shadow-sm">
      <span className="mt-0.5 flex h-3 w-3 items-center justify-center rounded-full bg-emerald-100 text-[7px] text-emerald-600">✓</span>
      <div>
        <p className="text-[7px] font-medium text-gray-800">Saved to inventory</p>
        <p className="text-[6px] text-gray-400">just now</p>
      </div>
    </div>
  ),
  container: () => (
    <div className="w-full max-w-[170px] rounded-lg border border-dashed border-gray-300 p-2">
      <div className="rounded bg-gray-100 py-2 text-center text-[7px] text-gray-500">max-width</div>
    </div>
  ),
  stack: () => (
    <div className="flex w-full max-w-[140px] flex-col gap-1">
      {[1, 2, 3].map((n) => (
        <span key={n} className="h-3 rounded bg-gray-200" />
      ))}
    </div>
  ),
  grid: () => (
    <div className="grid w-full max-w-[140px] grid-cols-3 gap-1">
      {[1, 2, 3, 4, 5, 6].map((n) => (
        <span key={n} className="h-6 rounded bg-gray-200" />
      ))}
    </div>
  ),
  section: () => (
    <div className="w-full max-w-[160px] rounded-lg bg-gray-50 px-3 py-4 text-center">
      <p className="text-[7px] font-semibold text-gray-700">Section</p>
      <p className="text-[6px] text-gray-400">padding + background</p>
    </div>
  ),
  divider: () => (
    <div className="w-full max-w-[160px] space-y-2">
      <Divider />
      <Divider label="or" />
    </div>
  ),
  card: () => (
    <Card variant="outlined" padding="sm" className="w-full max-w-[150px]">
      <p className="text-[7px] font-semibold text-gray-900">Card title</p>
      <p className="mt-1 text-[6px] text-gray-500">Body copy sits here.</p>
    </Card>
  ),
  badge: () => (
    <div className="flex flex-wrap items-center justify-center gap-1">
      <Badge size="sm" color="green">Active</Badge>
      <Badge size="sm" color="amber">Pending</Badge>
      <Badge size="sm" color="red">Out</Badge>
      <Badge size="sm">Draft</Badge>
    </div>
  ),
  chip: () => (
    <div className="flex flex-wrap items-center justify-center gap-1">
      <Chip size="sm">Filter</Chip>
      <Chip size="sm" color="green" onRemove={noop}>In stock</Chip>
    </div>
  ),
  avatar: () => (
    <div className="flex items-center -space-x-2">
      <Avatar name="Amina" size="sm" color="blue" />
      <Avatar name="Brian" size="sm" color="amber" />
      <Avatar name="Grace" size="sm" color="purple" />
      <span className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-gray-100 text-[7px] text-gray-500">+3</span>
    </div>
  ),
  alert: () => (
    <div className="w-full max-w-[170px]">
      <Alert type="success" message="Your changes were saved." />
    </div>
  ),
  spinner: () => (
    <div className="flex items-center gap-3">
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
    </div>
  ),
  skeleton: () => (
    <div className="w-full max-w-[150px] space-y-1.5">
      <Skeleton variant="title" />
      <Skeleton variant="text" />
      <Skeleton variant="text" width="70%" />
    </div>
  ),
  progress: () => (
    <div className="w-full max-w-[150px] space-y-2">
      <Progress value={72} size="sm" showLabel />
      <Progress value={38} size="sm" color="blue" />
    </div>
  ),
  'empty-state': () => (
    <div className="text-center">
      <span className="mx-auto flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-400">
        <Icon name="inbox" size={15} />
      </span>
      <p className="mt-1.5 text-[8px] font-medium text-gray-700">No messages</p>
      <p className="text-[6px] text-gray-400">Nothing here yet.</p>
    </div>
  ),
  textfield: () => (
    <div className="w-full max-w-[160px]">
      <TextField label="Email" name="email" value="" onChange={noop} placeholder="you@example.com" icon="mail" />
    </div>
  ),
  textarea: () => (
    <div className="w-full max-w-[160px] rounded-lg border border-gray-300 bg-white p-2">
      <div className="h-8" />
      <div className="mt-1 text-right text-[6px] text-gray-400">0 / 280</div>
    </div>
  ),
  select: () => (
    <div className="w-full max-w-[160px]">
      <Select label="Category" value="retail" onChange={noop} options={[{ value: 'retail', label: 'Retail' }, { value: 'food', label: 'Food' }]} />
    </div>
  ),
  checkbox: () => (
    <div className="space-y-2">
      <Checkbox label="Remember me" name="remember" checked onChange={noop} />
      <Checkbox label="Disabled" name="disabled" checked={false} disabled onChange={noop} />
    </div>
  ),
  switch: () => (
    <div className="space-y-2">
      <Switch label="Notifications" name="notifications" checked onChange={noop} size="sm" />
      <Switch label="Dark mode" name="dark" checked={false} onChange={noop} size="sm" />
    </div>
  ),
  tabs: () => (
    <Tabs
      tabs={[{ label: 'Overview' }, { label: 'Activity' }, { label: 'Settings' }]}
      activeTab={0}
      onChange={noop}
      variant="pill"
      size="sm"
    />
  ),
  accordion: () => (
    <div className="w-full max-w-[170px]">
      <Accordion
        items={[
          { title: 'What is cite-ui?', content: <p className="text-[7px] text-gray-500">A component library.</p> },
          { title: 'How to install?', content: <p className="text-[7px] text-gray-500">npm install cite-ui</p> },
        ]}
        defaultOpen={[0]}
      />
    </div>
  ),
  drawer: () => (
    <div className="relative h-24 w-full max-w-[170px] overflow-hidden rounded-lg border border-gray-200 bg-gray-50">
      <div className="absolute inset-y-0 right-0 w-[58%] border-l border-gray-200 bg-white p-2 shadow-sm">
        <p className="text-[7px] font-semibold text-gray-800">Filters</p>
        <div className="mt-2 space-y-1">
          <span className="block h-2 rounded bg-gray-100" />
          <span className="block h-2 rounded bg-gray-100" />
        </div>
      </div>
    </div>
  ),
  'dropdown-menu': () => (
    <div className="w-full max-w-[150px] rounded-lg border border-gray-200 bg-white p-1 shadow-sm">
      {['Edit', 'Share', 'Delete'].map((item) => (
        <p key={item} className="rounded px-2 py-1 text-[7px] text-gray-600 first:bg-gray-50">{item}</p>
      ))}
    </div>
  ),
  breadcrumbs: () => (
    <div className="flex items-center gap-1.5 font-mono text-[8px] text-gray-500">
      <span>Home</span>
      <span className="text-gray-300">/</span>
      <span>Products</span>
      <span className="text-gray-300">/</span>
      <span className="font-semibold text-gray-800">Headphones</span>
    </div>
  ),
  pagination: () => (
    <Pagination current={2} total={5} onChange={noop} size="sm" />
  ),
  tooltip: () => (
    <div className="relative pt-4">
      <span className="rounded bg-gray-900 px-2 py-1 text-[6px] text-white">Settings</span>
      <span className="mx-auto mt-1 block h-0 w-0 border-x-4 border-t-4 border-x-transparent border-t-gray-900" />
      <span className="mt-1 flex h-6 w-6 items-center justify-center rounded border border-gray-200 text-gray-500">
        <Icon name="settings" size={11} />
      </span>
    </div>
  ),
  table: () => (
    <div className="w-full max-w-[170px] overflow-hidden rounded-lg border border-gray-200">
      <div className="grid grid-cols-3 bg-gray-50 px-2 py-1 text-[6px] font-semibold uppercase tracking-wide text-gray-400">
        <span>Name</span><span>Role</span><span>Status</span>
      </div>
      {[['John', 'Admin', 'Active'], ['Jane', 'User', 'Active']].map((row) => (
        <div key={row[0]} className="grid grid-cols-3 border-t border-gray-100 px-2 py-1 text-[7px] text-gray-600">
          {row.map((cell) => <span key={cell}>{cell}</span>)}
        </div>
      ))}
    </div>
  ),
  'search-bar': () => (
    <div className="w-full max-w-[170px]">
      <SearchBar value="" onChange={noop} placeholder="Search products…" />
    </div>
  ),
  'back-to-top': () => (
    <div className="flex flex-col items-center gap-1">
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-900 text-white">
        <Icon name="arrowUp" size={14} />
      </span>
      <span className="text-[7px] text-gray-400">after 300px</span>
    </div>
  ),
  animate: () => (
    <div className="relative flex h-16 w-full max-w-[150px] items-center justify-center">
      <span className="absolute left-2 top-2 text-[10px] text-gray-300">↘</span>
      <span className="h-9 w-9 rounded-lg bg-gray-900" />
      <span className="absolute right-2 bottom-2 text-[10px] text-gray-300">↖</span>
    </div>
  ),
  motion: () => (
    <div className="relative flex h-16 w-full max-w-[150px] items-center justify-center">
      <span className="h-9 w-9 rotate-12 rounded-lg bg-gradient-to-br from-accent to-rose-400 opacity-80" />
      <span className="absolute text-[7px] text-gray-400">x · rotate</span>
    </div>
  ),
  'use-form': () => (
    <div className="w-full max-w-[150px] space-y-1.5">
      <span className="block h-4 rounded border border-gray-300 bg-white" />
      <span className="block h-4 rounded border border-red-300 bg-white" />
      <span className="block text-[6px] text-red-500">Invalid email</span>
    </div>
  ),
  'use-local-storage': () => (
    <div className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-center">
      <p className="text-[6px] uppercase tracking-wide text-gray-400">Count</p>
      <p className="text-sm font-semibold text-gray-900">3</p>
    </div>
  ),
  'use-media-query': () => (
    <div className="flex items-end gap-2 text-gray-500">
      <Icon name="phone" size={16} />
      <Icon name="globe" size={22} />
      <span className="text-[7px]">768px</span>
    </div>
  ),
  'use-fetch': () => (
    <div className="w-full max-w-[150px] rounded bg-gray-900 p-2 font-mono text-[6px] leading-relaxed text-gray-300">
      <p>GET /api/orders</p>
      <p className="text-emerald-400">200 OK</p>
      <p className="text-gray-500">loading: false</p>
    </div>
  ),
  cn: () => <code className="rounded bg-gray-100 px-2 py-1 font-mono text-[8px] text-gray-700">px-4 py-2</code>,
  'format-kes': () => <span className="font-mono text-sm font-semibold text-gray-900">KES 12.5K</span>,
  'format-date': () => <span className="font-mono text-sm text-gray-900">Jun 9, 2026</span>,
  slugify: () => <span className="font-mono text-[10px] text-gray-900">hello-world</span>,
  truncate: () => <span className="font-mono text-[10px] text-gray-900">Lorem ipsum…</span>,
  'generate-id': () => <span className="font-mono text-[10px] text-gray-900">a3x9k2m7r</span>,
  icon: () => (
    <div className="grid grid-cols-3 gap-2 text-gray-600">
      {['search', 'heart', 'star', 'mail', 'package', 'sun'].map((name) => (
        <Icon key={name} name={name} size={14} />
      ))}
    </div>
  ),
}

export function Preview({ id }) {
  const Render = previews[id]
  if (!Render) {
    return (
      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-100 text-gray-400">
        <Icon name="package" size={15} />
      </span>
    )
  }
  return (
    <div className={`${frame} pointer-events-none select-none`}>
      <Render />
    </div>
  )
}
