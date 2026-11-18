import { useState } from 'react'
import {
  Navbar, Button, Gallery, Modal, ToastProvider, useToast,
  Container, Stack, Grid, Section as SectionLayout, Divider,
  Card, Badge, Chip, Avatar, Alert, Spinner, Skeleton, Progress, EmptyState,
  TextField, Textarea, Select, Checkbox, Switch,
  Tabs, TabPanel, Accordion, Drawer, DropdownMenu, Breadcrumbs, Pagination, Tooltip, Table,
  Animate, Motion, SearchBar,
  useForm, useLocalStorage, useMediaQuery,
  cn, formatKES, formatDate, slugify, truncate, generateId,
  Icon,
} from '../index'

const ICONS = [
  'x', 'check', 'chevronDown', 'chevronUp', 'chevronLeft', 'chevronRight', 'menu',
  'cart', 'alertCircle', 'info', 'alertTriangle', 'search', 'user', 'mail',
  'phone', 'mapPin', 'star', 'heart', 'arrowRight', 'arrowLeft', 'arrowUp',
  'arrowDown', 'upload', 'download', 'image', 'externalLink', 'globe', 'clock',
  'trash', 'plus', 'minus', 'settings', 'edit', 'share', 'sun', 'moon', 'eye',
  'eyeOff', 'copy', 'link', 'refreshCw', 'filter', 'slash', 'messageCircle', 'package',
  'home', 'bell', 'compass', 'layers',
]

function IconGrid() {
  return (
    <div className="grid grid-cols-4 gap-2 sm:grid-cols-6 lg:grid-cols-8">
      {ICONS.map((name) => (
        <div
          key={name}
          className="flex flex-col items-center gap-1 rounded-xl border border-ink/10 bg-paper p-2"
        >
          <Icon name={name} size={18} className="text-ink-soft" />
          <span className="w-full truncate text-center font-mono text-[9px] text-ink/45">{name}</span>
        </div>
      ))}
    </div>
  )
}

function ToastButtons() {
  const { toast } = useToast()
  return (
    <div className="flex flex-wrap gap-2">
      <Button label="Success" onClick={() => toast.success('Saved to inventory')} />
      <Button variant="outline" label="Info" onClick={() => toast.info('Profile updated')} />
      <Button variant="outline" label="Warning" onClick={() => toast.warning('Check the input')} />
      <Button variant="danger" label="Error" onClick={() => toast.error('Payment could not be verified')} />
      <Button
        variant="secondary"
        label="Promise"
        onClick={() =>
          toast.promise(new Promise((resolve) => setTimeout(resolve, 1400)), {
            loading: 'Publishing…',
            success: 'Published',
            error: 'Could not publish',
          })
        }
      />
    </div>
  )
}

function UseLocalStorageDemo() {
  const [count, setCount, remove] = useLocalStorage('cite-ui-docs-count', 0)
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button label={`Count: ${count}`} onClick={() => setCount(Number(count) + 1)} />
      <Button variant="outline" label="Reset" onClick={remove} />
      <span className="text-xs text-ink-soft">Survives a refresh.</span>
    </div>
  )
}

function UseMediaQueryDemo() {
  const isWide = useMediaQuery('(min-width: 768px)')
  return (
    <p className="text-sm text-ink-soft">
      Viewport is <strong className="text-ink">{isWide ? '768px or wider' : 'narrower than 768px'}</strong>.
    </p>
  )
}

function UseFormDemo() {
  const { values, errors, handleChange, handleBlur, handleSubmit } = useForm({
    initial: { email: '' },
    validate: { email: ['required', 'email'] },
    onSubmit: () => {},
  })

  return (
    <form
      className="max-w-sm space-y-3"
      onSubmit={(event) => {
        event.preventDefault()
        handleSubmit(event)
      }}
      noValidate
    >
      <TextField
        label="Email"
        name="email"
        type="email"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.email}
        placeholder="you@example.com"
      />
      <Button type="submit" label="Submit" />
    </form>
  )
}

export default function Demo({ id }) {
  const [modalOpen, setModalOpen] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [tab, setTab] = useState(0)
  const [name, setName] = useState('')
  const [textarea, setTextarea] = useState('')
  const [category, setCategory] = useState('')
  const [checks, setChecks] = useState({ news: true, terms: false })
  const [switches, setSwitches] = useState({ dark: false, notifications: true })
  const [query, setQuery] = useState('')

  switch (id) {
    case 'button':
      return (
        <div className="flex flex-wrap items-center gap-3">
          <Button variant="primary" label="Primary" onClick={() => {}} />
          <Button variant="secondary" label="Secondary" />
          <Button variant="outline" label="Outline" />
          <Button variant="ghost" label="Ghost" />
          <Button variant="danger" label="Danger" />
          <Button variant="whatsapp" label="WhatsApp" icon="messageCircle" />
          <Button variant="primary" label="Loading" loading />
          <Button variant="outline" label="With icon" icon="heart" />
          <Button variant="primary" label="Small" size="sm" />
          <Button variant="primary" label="Large" size="lg" />
        </div>
      )

    case 'navbar':
      return (
        <div className="overflow-hidden rounded-xl [&_nav]:!static">
          <Navbar
            logo="MyShop"
            links={[
              { label: 'Home', href: '#' },
              { label: 'Shop', href: '#' },
              { label: 'Contact', href: '#' },
            ]}
            cartCount={3}
            ctaLabel="Get Started"
            ctaHref="#"
          />
        </div>
      )

    case 'gallery':
      return (
        <Gallery
          images={[
            { src: 'https://picsum.photos/seed/cite-a/400/300', alt: 'A' },
            { src: 'https://picsum.photos/seed/cite-b/400/300', alt: 'B' },
            { src: 'https://picsum.photos/seed/cite-c/400/300', alt: 'C' },
          ]}
          columns={3}
        />
      )

    case 'modal':
      return (
        <div>
          <Button label="Open modal" onClick={() => setModalOpen(true)} />
          <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} title="Example modal" size="sm">
            <p className="text-sm text-ink-soft">
              Click outside, press Escape, or use the close button.
            </p>
          </Modal>
        </div>
      )

    case 'toast':
      return (
        <ToastProvider position="top-right">
          <ToastButtons />
        </ToastProvider>
      )

    case 'container':
      return (
        <Container maxWidth="md" className="rounded-xl bg-cream p-4 text-center text-sm text-ink-soft">
          Container with maxWidth=&quot;md&quot;
        </Container>
      )

    case 'stack':
      return (
        <Stack gap={3}>
          {[1, 2, 3].map((n) => (
            <div key={n} className="flex h-10 items-center justify-center rounded-lg bg-ink/5 text-xs text-ink-soft">
              Item {n}
            </div>
          ))}
        </Stack>
      )

    case 'grid':
      return (
        <Grid columns={3} gap={3}>
          {[1, 2, 3].map((n) => (
            <div key={n} className="flex h-16 items-center justify-center rounded-lg bg-ink/5 text-xs text-ink-soft">
              Cell {n}
            </div>
          ))}
        </Grid>
      )

    case 'section':
      return (
        <SectionLayout padding="md" bg="bg-cream rounded-lg">
          <p className="text-center text-sm text-ink-soft">Section with padding=&quot;md&quot;</p>
        </SectionLayout>
      )

    case 'divider':
      return (
        <div className="space-y-4">
          <Divider />
          <Divider label="or" />
          <div className="flex h-16 items-center gap-3">
            <span className="text-xs text-ink-faint">Left</span>
            <Divider orientation="vertical" />
            <span className="text-xs text-ink-faint">Right</span>
          </div>
        </div>
      )

    case 'card':
      return (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Card variant="elevated"><p className="text-sm">Elevated</p></Card>
          <Card variant="outlined"><p className="text-sm">Outlined</p></Card>
          <Card variant="flat"><p className="text-sm">Flat</p></Card>
          <Card variant="bordered"><p className="text-sm">Bordered</p></Card>
        </div>
      )

    case 'badge':
      return (
        <div className="flex flex-wrap gap-2">
          <Badge>Default</Badge>
          <Badge color="red">Sold out</Badge>
          <Badge color="green">Active</Badge>
          <Badge color="blue">New</Badge>
          <Badge color="amber">Pending</Badge>
          <Badge color="purple">Premium</Badge>
          <Badge color="pink">Hot</Badge>
          <Badge color="black">Black</Badge>
        </div>
      )

    case 'chip':
      return (
        <div className="flex flex-wrap gap-2">
          <Chip>Default</Chip>
          <Chip color="blue" onRemove={() => {}}>Filter</Chip>
          <Chip color="amber" onClick={() => {}}>Clickable</Chip>
          <Chip color="green" size="sm">Small</Chip>
        </div>
      )

    case 'avatar':
      return (
        <div className="flex items-center gap-4">
          <Avatar name="John Doe" color="blue" />
          <Avatar name="Alice" color="amber" size="lg" />
          <Avatar src="https://i.pravatar.cc/80" alt="User" size="xl" />
          <Avatar name="A" color="purple" size="sm" />
        </div>
      )

    case 'alert':
      return (
        <div className="max-w-lg space-y-3">
          <Alert type="info" title="Info" message="This is an informational alert." />
          <Alert type="success" title="Success" message="Your changes have been saved." />
          <Alert type="warning" title="Warning" message="Check your input before submitting." dismissible />
          <Alert type="error" title="Error" message="Something went wrong. Please try again." />
        </div>
      )

    case 'spinner':
      return (
        <div className="flex items-center gap-4">
          <Spinner size="xs" />
          <Spinner size="sm" />
          <Spinner size="md" />
          <Spinner size="lg" />
          <Spinner size="xl" color="#FF5A36" />
        </div>
      )

    case 'skeleton':
      return (
        <div className="max-w-sm space-y-4">
          <Skeleton variant="text" />
          <Skeleton variant="title" />
          <div className="flex items-center gap-3">
            <Skeleton variant="avatar" />
            <div className="flex-1 space-y-2">
              <Skeleton variant="text" width="60%" />
              <Skeleton variant="text" />
            </div>
          </div>
          <Skeleton variant="button" />
          <Skeleton variant="image" className="h-32" />
        </div>
      )

    case 'progress':
      return (
        <div className="max-w-sm space-y-4">
          <Progress value={75} showLabel />
          <Progress value={40} color="blue" size="lg" />
          <Progress value={100} color="green" />
          <Progress value={60} color="amber" showLabel />
        </div>
      )

    case 'empty-state':
      return (
        <EmptyState
          icon="inbox"
          title="No messages"
          message="Your inbox is empty."
          actionLabel="Compose"
          onAction={() => {}}
        />
      )

    case 'textfield':
      return (
        <div className="max-w-sm space-y-4">
          <TextField
            label="Name"
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Your name"
            icon="user"
          />
          <TextField label="Email" name="email" value="" onChange={() => {}} placeholder="Email" icon="mail" type="email" error="Invalid email" />
          <TextField label="Password" name="password" type="password" value="" onChange={() => {}} placeholder="Password" clearable />
        </div>
      )

    case 'textarea':
      return (
        <div className="max-w-sm">
          <Textarea
            label="Message"
            name="message"
            value={textarea}
            onChange={(event) => setTextarea(event.target.value)}
            rows={4}
            maxLength={280}
            showCount
            helperText="Keep it short."
          />
        </div>
      )

    case 'select':
      return (
        <div className="max-w-sm">
          <Select
            label="Category"
            name="category"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            options={[
              { value: 'all', label: 'All' },
              { value: 'audio', label: 'Audio' },
              { value: 'visual', label: 'Visual' },
            ]}
            placeholder="Select…"
          />
        </div>
      )

    case 'checkbox':
      return (
        <div className="space-y-2">
          <Checkbox
            label="Subscribe to newsletter"
            name="news"
            checked={checks.news}
            onChange={() => setChecks((prev) => ({ ...prev, news: !prev.news }))}
          />
          <Checkbox
            label="Accept terms"
            name="terms"
            checked={checks.terms}
            onChange={() => setChecks((prev) => ({ ...prev, terms: !prev.terms }))}
          />
          <Checkbox label="Disabled" disabled checked={false} onChange={() => {}} />
        </div>
      )

    case 'switch':
      return (
        <div className="space-y-3">
          <Switch
            label="Dark mode"
            name="dark"
            checked={switches.dark}
            onChange={() => setSwitches((prev) => ({ ...prev, dark: !prev.dark }))}
          />
          <Switch
            label="Notifications"
            name="notifications"
            checked={switches.notifications}
            onChange={() => setSwitches((prev) => ({ ...prev, notifications: !prev.notifications }))}
          />
          <Switch label="Small" size="sm" checked={false} onChange={() => {}} />
        </div>
      )

    case 'tabs':
      return (
        <div>
          <Tabs
            tabs={[{ label: 'Details' }, { label: 'Reviews', icon: 'star' }, { label: 'Shipping', disabled: true }]}
            activeTab={tab}
            onChange={setTab}
          />
          <TabPanel active={tab} index={0}>
            <p className="mt-3 text-sm text-ink-soft">Details content</p>
          </TabPanel>
          <TabPanel active={tab} index={1}>
            <p className="mt-3 text-sm text-ink-soft">Reviews content</p>
          </TabPanel>
        </div>
      )

    case 'accordion':
      return (
        <Accordion
          items={[
            { title: 'What is cite-ui?', content: <p className="text-sm text-ink-soft">A React component library for Tailwind CSS.</p> },
            { title: 'How do I install it?', content: <p className="text-sm text-ink-soft">npm install cite-ui</p> },
          ]}
          defaultOpen={[0]}
        />
      )

    case 'drawer':
      return (
        <div>
          <Button label="Open drawer" onClick={() => setDrawerOpen(true)} />
          <Drawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} title="Drawer example" side="right">
            <p className="text-sm text-ink-soft">Drawer content goes here.</p>
          </Drawer>
        </div>
      )

    case 'dropdown-menu':
      return (
        <DropdownMenu
          trigger={<Button label="Actions" />}
          items={[
            { label: 'Edit', icon: 'edit', onClick: () => {} },
            { label: 'Share', icon: 'share', shortcut: '⌘S' },
            { separator: true },
            { label: 'Delete', icon: 'trash', disabled: true },
          ]}
        />
      )

    case 'breadcrumbs':
      return (
        <Breadcrumbs
          items={[{ label: 'Home', href: '#' }, { label: 'Products', href: '#' }, { label: 'Current' }]}
          separator="slash"
        />
      )

    case 'pagination':
      return <Pagination current={3} total={10} onChange={() => {}} size="sm" />

    case 'tooltip':
      return (
        <Tooltip content="This is a tooltip">
          <Button variant="outline" label="Hover me" />
        </Tooltip>
      )

    case 'table':
      return (
        <Table
          columns={[
            { key: 'name', label: 'Name', sortable: true },
            { key: 'role', label: 'Role' },
            {
              key: 'status',
              label: 'Status',
              render: (value) => <Badge color={value === 'Active' ? 'green' : 'gray'} size="sm">{value}</Badge>,
            },
          ]}
          data={[
            { id: 1, name: 'John', role: 'Admin', status: 'Active' },
            { id: 2, name: 'Jane', role: 'User', status: 'Inactive' },
          ]}
          striped
          sortable
          compact
        />
      )

    case 'animate':
      return (
        <div className="flex flex-wrap gap-4">
          {['fadeIn', 'slideUp', 'slideDown', 'slideLeft', 'slideRight', 'scaleIn', 'fadeScaleIn'].map((type) => (
            <Animate key={type} type={type} duration={500}>
              <div className="flex h-20 w-20 items-center justify-center rounded-xl bg-ink p-1 text-center text-[9px] font-semibold leading-tight text-paper">
                {type}
              </div>
            </Animate>
          ))}
        </div>
      )

    case 'motion':
      return (
        <Motion.div animate={{ x: 50, rotate: 15 }} transition={{ duration: 600 }}>
          <div className="flex h-24 w-24 items-center justify-center rounded-xl bg-accent text-xs font-semibold text-ink">
            Motion.div
          </div>
        </Motion.div>
      )

    case 'search-bar':
      return (
        <SearchBar
          placeholder="Search products…"
          value={query}
          onChange={setQuery}
          filters={[
            {
              label: 'Category',
              options: [
                { label: 'All', value: 'all' },
                { label: 'Audio', value: 'audio' },
              ],
            },
          ]}
        />
      )

    case 'back-to-top':
      return (
        <p className="text-sm text-ink-soft">
          The button mounts only after the page scrolls past 300px, so it is not shown in this
          preview. Add <code className="rounded bg-ink/5 px-1.5 py-0.5 font-mono text-[12px]">{'<BackToTop />'}</code> to
          a layout with long content.
        </p>
      )

    case 'use-form':
      return <UseFormDemo />

    case 'use-local-storage':
      return <UseLocalStorageDemo />

    case 'use-media-query':
      return <UseMediaQueryDemo />

    case 'use-fetch':
      return (
        <p className="text-sm text-ink-soft">
          Returns <code className="rounded bg-ink/5 px-1.5 py-0.5 font-mono text-[12px]">{'{ data, loading, error, refetch }'}</code>{' '}
          and aborts the request on unmount. See Usage for the two modes.
        </p>
      )

    case 'cn':
      return (
        <p className="text-sm text-ink-soft">
          Result:{' '}
          <code className="rounded bg-ink/5 px-1.5 py-0.5 font-mono text-[12px]">
            {cn('px-4', false, 'py-2', undefined, 'rounded-lg')}
          </code>
        </p>
      )

    case 'format-kes':
      return (
        <div className="space-y-1 font-mono text-sm">
          <p><span className="text-ink-faint">formatKES(12500)</span> → {formatKES(12500)}</p>
          <p><span className="text-ink-faint">formatKES(12500, compact)</span> → {formatKES(12500, { compact: true })}</p>
          <p><span className="text-ink-faint">formatKES(1500000, compact)</span> → {formatKES(1500000, { compact: true })}</p>
        </div>
      )

    case 'format-date':
      return (
        <div className="space-y-1 font-mono text-sm">
          <p><span className="text-ink-faint">formatDate(&quot;2025-06-09&quot;)</span> → {formatDate('2025-06-09')}</p>
          <p><span className="text-ink-faint">formatDate(short)</span> → {formatDate('2025-06-09', { style: 'short' })}</p>
        </div>
      )

    case 'slugify':
      return (
        <div className="space-y-1 font-mono text-sm">
          <p><span className="text-ink-faint">slugify(&quot;Hello World!&quot;)</span> → {slugify('Hello World!')}</p>
          <p><span className="text-ink-faint">slugify(&quot;My Product Name&quot;)</span> → {slugify('My Product Name')}</p>
        </div>
      )

    case 'truncate':
      return (
        <div className="space-y-1 font-mono text-sm">
          <p>
            <span className="text-ink-faint">truncate(&quot;Lorem ipsum dolor sit amet&quot;, 16)</span> →{' '}
            {truncate('Lorem ipsum dolor sit amet', 16)}
          </p>
        </div>
      )

    case 'generate-id':
      return (
        <div className="space-y-1 font-mono text-sm">
          <p><span className="text-ink-faint">generateId()</span> → {generateId()}</p>
          <p><span className="text-ink-faint">generateId()</span> → {generateId()}</p>
        </div>
      )

    case 'icon':
      return <IconGrid />

    default:
      return null
  }
}
