import React from 'react'
import ReactDOM from 'react-dom/client'
import '../styles.css'
import {
  Navbar, Button, Gallery, WhatsAppFloat, Modal,
  Container, Stack, Grid,   Section as SectionLayout, Divider,
  Card, Badge, Chip, Avatar, Alert, Spinner, Skeleton, Progress, EmptyState,
  TextField, Select, Checkbox, Switch,
  Tabs, TabPanel, Accordion, Drawer, DropdownMenu, Breadcrumbs, Pagination, Tooltip, Table,
  Hero, Features, FAQ, Pricing, Footer, Stats, Testimonials, ContactSection,
  useForm, useLocalStorage, useMediaQuery, useFetch,
  cn, formatKES, formatDate, slugify, truncate, generateId,
  Animate, Motion,
  CatalogueCard, CatalogueGrid, SearchBar, BackToTop, TrustBar, AnnouncementBar, LocationMap,
  Icon,
} from '../index'
import DocsLayout from './DocsLayout'
import Section from './Section'
import docsData from './data'

const IconGrid = () => {
  const names = ['x', 'check', 'chevronDown', 'chevronUp', 'chevronLeft', 'chevronRight', 'menu', 'cart', 'alertCircle', 'info', 'alertTriangle', 'search', 'user', 'mail', 'phone', 'mapPin', 'star', 'heart', 'arrowRight', 'arrowLeft', 'arrowUp', 'arrowDown', 'upload', 'download', 'image', 'externalLink', 'globe', 'clock', 'trash', 'plus', 'minus', 'settings', 'edit', 'share', 'sun', 'moon', 'eye', 'eyeOff', 'copy', 'link', 'refreshCw', 'filter', 'slash', 'messageCircle', 'package']
  return (
    <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2">
      {names.map((name) => (
        <div key={name} className="flex flex-col items-center gap-1 p-2 rounded-lg bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800">
          <Icon name={name} size={18} className="text-gray-600 dark:text-gray-400" />
          <span className="text-[10px] text-gray-500 dark:text-gray-500 truncate w-full text-center">{name}</span>
        </div>
      ))}
    </div>
  )
}

const App = () => {
  const [modalOpen, setModalOpen] = React.useState(false)
  const [drawerOpen, setDrawerOpen] = React.useState(false)
  const [tab, setTab] = React.useState(0)

  const sampleProducts = [
    { title: 'Wireless Headphones', tag: 'Audio', price: 'KES 12,500', rating: 4.5, badge: 'Sale', image: { src: 'https://picsum.photos/seed/headphones/400/300', alt: '' }, cta: { label: 'View', href: '#' } },
    { title: 'Bluetooth Speaker', tag: 'Audio', price: 'KES 8,000', rating: 4, image: { src: 'https://picsum.photos/seed/speaker/400/300', alt: '' }, cta: { label: 'View', href: '#' } },
    { title: 'Smart Watch', tag: 'Wearables', price: 'KES 18,000', rating: 4.5, badge: 'Popular', image: { src: 'https://picsum.photos/seed/watch/400/300', alt: '' }, cta: { label: 'View', href: '#' } },
  ]

  return (
    <DocsLayout sections={docsData}>
      {docsData.map((data) => (
        <Section key={data.id} data={data}>
          {data.id === 'getting-started' && (
            <div className="space-y-4 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              <p><strong className="text-gray-900 dark:text-white">cite-ui</strong> is a React component library designed for modern web applications — especially those serving Kenyan businesses.</p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong className="text-gray-900 dark:text-white">Zero runtime dependencies</strong> — React 18+ is a peer dependency only</li>
                <li><strong className="text-gray-900 dark:text-white">Tailwind CSS v3</strong> — fully styled, customizable via Tailwind classes</li>
                <li><strong className="text-gray-900 dark:text-white">Dark mode</strong> — all components support <code className="text-violet-600">dark:</code> variants</li>
                <li><strong className="text-gray-900 dark:text-white">54+ components</strong> — layout, UI, forms, navigation, sections, animation, Mini Catalogue</li>
                <li><strong className="text-gray-900 dark:text-white">Built-in animation</strong> — <code className="text-violet-600">Animate</code> + <code className="text-violet-600">Motion</code> components, no framer-motion needed</li>
              </ul>
            </div>
          )}
          {data.id === 'button' && (
            <div className="flex flex-wrap gap-3 items-center">
              <Button variant="primary" label="Primary" onClick={() => {}} />
              <Button variant="secondary" label="Secondary" />
              <Button variant="outline" label="Outline" />
              <Button variant="ghost" label="Ghost" />
              <Button variant="danger" label="Danger" />
              <Button variant="whatsapp" label="WhatsApp" icon="messageCircle" />
              <Button variant="primary" label="Loading" loading />
              <Button variant="outline" label="With Icon" icon="heart" />
              <Button variant="primary" label="Small" size="sm" />
              <Button variant="primary" label="Large" size="lg" />
            </div>
          )}
          {data.id === 'navbar' && (
            <Navbar
              logo="MyShop"
              links={[{ label: 'Home', href: '#' }, { label: 'Shop', href: '#' }, { label: 'Contact', href: '#' }]}
              variant="default"
              cartCount={3}
              ctaLabel="Get Started"
              ctaHref="#"
            />
          )}
          {data.id === 'gallery' && (
            <Gallery
              images={[
                { src: 'https://picsum.photos/seed/a/400/300', alt: 'A' },
                { src: 'https://picsum.photos/seed/b/400/300', alt: 'B' },
                { src: 'https://picsum.photos/seed/c/400/300', alt: 'C' },
              ]}
              columns={3}
            />
          )}
          {data.id === 'whatsapp-float' && (
            <div className="relative h-48 flex items-center justify-center border border-dashed border-gray-300 dark:border-gray-700 rounded-xl">
              <p className="text-sm text-gray-400">WhatsAppFloat appears in bottom-right corner of the viewport</p>
              <WhatsAppFloat phoneNumber="254712345678" bottom="16px" right="16px" />
            </div>
          )}
          {data.id === 'modal' && (
            <div>
              <Button variant="primary" label="Open Modal" onClick={() => setModalOpen(true)} />
              <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} title="Example Modal" size="sm">
                <p className="text-sm text-gray-600 dark:text-gray-400">This is a modal dialog. Click outside or the X to close.</p>
              </Modal>
            </div>
          )}
          {data.id === 'toast' && (
            <p className="text-sm text-gray-500">Toast requires <code className="text-violet-600">{'<ToastProvider>'}</code> wrapping the app. See playground for full demo.</p>
          )}
          {data.id === 'container' && (
            <Container maxWidth="md" className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 text-center text-sm text-gray-500">
              Container with maxWidth="md"
            </Container>
          )}
          {data.id === 'stack' && (
            <Stack gap={3}>
              <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center text-xs text-gray-500">Item 1</div>
              <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center text-xs text-gray-500">Item 2</div>
              <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center text-xs text-gray-500">Item 3</div>
            </Stack>
          )}
          {data.id === 'grid' && (
            <Grid columns={3} gap={3}>
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-16 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center text-xs text-gray-500">Cell {i}</div>
              ))}
            </Grid>
          )}
          {data.id === 'section' && (
            <SectionLayout padding="md" bg="bg-gray-100 dark:bg-gray-800 rounded-lg">
              <p className="text-sm text-gray-500 text-center">Section with padding="md" and custom bg</p>
            </SectionLayout>
          )}
          {data.id === 'divider' && (
            <div className="space-y-4">
              <Divider />
              <Divider label="or" />
              <div className="flex h-16 items-center gap-3">
                <span className="text-xs text-gray-400">Left</span>
                <Divider orientation="vertical" />
                <span className="text-xs text-gray-400">Right</span>
              </div>
            </div>
          )}
          {data.id === 'card' && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card variant="elevated"><p className="text-sm">Elevated</p></Card>
              <Card variant="outlined"><p className="text-sm">Outlined</p></Card>
              <Card variant="flat"><p className="text-sm">Flat</p></Card>
              <Card variant="bordered"><p className="text-sm">Bordered</p></Card>
            </div>
          )}
          {data.id === 'badge' && (
            <div className="flex flex-wrap gap-2">
              <Badge>Default</Badge>
              <Badge color="red">Sold Out</Badge>
              <Badge color="green">Active</Badge>
              <Badge color="blue">New</Badge>
              <Badge color="amber">Pending</Badge>
              <Badge color="purple">Premium</Badge>
              <Badge color="pink">Hot</Badge>
              <Badge color="black">Black</Badge>
            </div>
          )}
          {data.id === 'chip' && (
            <div className="flex flex-wrap gap-2">
              <Chip>Default</Chip>
              <Chip color="blue" onRemove={() => {}}>Filter</Chip>
              <Chip color="amber" onClick={() => {}}>Clickable</Chip>
              <Chip color="green" size="sm">Small</Chip>
            </div>
          )}
          {data.id === 'avatar' && (
            <div className="flex items-center gap-4">
              <Avatar name="John Doe" color="blue" />
              <Avatar name="Alice" color="amber" size="lg" />
              <Avatar src="https://i.pravatar.cc/80" alt="User" size="xl" />
              <Avatar name="A" color="purple" size="sm" />
            </div>
          )}
          {data.id === 'alert' && (
            <div className="space-y-3 max-w-lg">
              <Alert type="info" title="Info" message="This is an informational alert." />
              <Alert type="success" title="Success" message="Your changes have been saved." />
              <Alert type="warning" title="Warning" message="Check your input before submitting." dismissible />
              <Alert type="error" title="Error" message="Something went wrong. Please try again." />
            </div>
          )}
          {data.id === 'spinner' && (
            <div className="flex items-center gap-4">
              <Spinner size="xs" />
              <Spinner size="sm" />
              <Spinner size="md" />
              <Spinner size="lg" />
              <Spinner size="xl" color="#2563eb" />
            </div>
          )}
          {data.id === 'skeleton' && (
            <div className="space-y-4 max-w-sm">
              <Skeleton variant="text" />
              <Skeleton variant="title" />
              <div className="flex gap-3 items-center">
                <Skeleton variant="avatar" />
                <div className="flex-1 space-y-2">
                  <Skeleton variant="text" width="60%" />
                  <Skeleton variant="text" />
                </div>
              </div>
              <Skeleton variant="button" />
              <Skeleton variant="image" className="h-32" />
            </div>
          )}
          {data.id === 'progress' && (
            <div className="space-y-4 max-w-sm">
              <Progress value={75} showLabel />
              <Progress value={40} color="blue" size="lg" />
              <Progress value={100} color="green" />
              <Progress value={60} color="amber" showLabel />
            </div>
          )}
          {data.id === 'empty-state' && (
            <EmptyState icon="inbox" title="No messages" message="Your inbox is empty." actionLabel="Compose" onAction={() => {}} />
          )}
          {data.id === 'textfield' && (
            <div className="max-w-sm space-y-4">
              <TextField label="Name" name="name" value="" onChange={() => {}} placeholder="Your name" icon="user" />
              <TextField label="Email" name="email" value="" onChange={() => {}} placeholder="Email" icon="mail" type="email" error="Invalid email" />
              <TextField label="Password" name="password" type="password" value="" onChange={() => {}} placeholder="Password" clearable />
            </div>
          )}
          {data.id === 'select' && (
            <Select label="Category" name="cat" value="" onChange={() => {}} options={[{ value: 'all', label: 'All' }, { value: 'audio', label: 'Audio' }, { value: 'visual', label: 'Visual' }]} placeholder="Select..." />
          )}
          {data.id === 'checkbox' && (
            <div className="space-y-2">
              <Checkbox label="Subscribe to newsletter" name="sub" checked={false} onChange={() => {}} />
              <Checkbox label="Accept terms" name="terms" checked={false} onChange={() => {}} />
              <Checkbox label="Disabled" disabled checked={false} onChange={() => {}} />
            </div>
          )}
          {data.id === 'switch' && (
            <div className="space-y-3">
              <Switch label="Dark mode" name="dark" checked={false} onChange={() => {}} />
              <Switch label="Notifications" name="notif" checked={true} onChange={() => {}} />
              <Switch label="Small" size="sm" checked={false} onChange={() => {}} />
            </div>
          )}
          {data.id === 'tabs' && (
            <div>
              <Tabs tabs={[{ label: 'Details' }, { label: 'Reviews', icon: 'star' }, { label: 'Shipping', disabled: true }]} activeTab={tab} onChange={setTab} />
              <TabPanel active={tab} index={0}><p className="text-sm text-gray-500 mt-3">Details content</p></TabPanel>
              <TabPanel active={tab} index={1}><p className="text-sm text-gray-500 mt-3">Reviews content</p></TabPanel>
            </div>
          )}
          {data.id === 'accordion' && (
            <Accordion
              items={[
                { title: 'What is cite-ui?', content: <p className="text-sm text-gray-500">React component library for Kenyan businesses.</p> },
                { title: 'How do I install it?', content: <p className="text-sm text-gray-500">npm install cite-ui</p> },
              ]}
              defaultOpen={[0]}
            />
          )}
          {data.id === 'drawer' && (
            <div>
              <Button variant="primary" label="Open Drawer" onClick={() => setDrawerOpen(true)} />
              <Drawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} title="Drawer Example" side="right">
                <p className="text-sm text-gray-500">Drawer content goes here.</p>
              </Drawer>
            </div>
          )}
          {data.id === 'dropdown-menu' && (
            <DropdownMenu
              trigger={<Button label="Actions" />}
              items={[
                { label: 'Edit', icon: 'edit', onClick: () => {} },
                { label: 'Share', icon: 'share', shortcut: '⌘S' },
                { separator: true },
                { label: 'Delete', icon: 'trash', disabled: true },
              ]}
            />
          )}
          {data.id === 'breadcrumbs' && (
            <Breadcrumbs
              items={[{ label: 'Home', href: '#' }, { label: 'Products', href: '#' }, { label: 'Current' }]}
              separator="slash"
            />
          )}
          {data.id === 'pagination' && (
            <Pagination current={3} total={10} onChange={() => {}} size="sm" />
          )}
          {data.id === 'tooltip' && (
            <Tooltip content="This is a tooltip">
              <Button variant="outline" label="Hover me" />
            </Tooltip>
          )}
          {data.id === 'table' && (
            <Table
              columns={[{ key: 'name', label: 'Name', sortable: true }, { key: 'role', label: 'Role' }, { key: 'status', label: 'Status', render: (v) => <Badge color={v === 'Active' ? 'green' : 'gray'} size="sm">{v}</Badge> }]}
              data={[{ id: 1, name: 'John', role: 'Admin', status: 'Active' }, { id: 2, name: 'Jane', role: 'User', status: 'Inactive' }]}
              striped
              sortable
              compact
            />
          )}
          {data.id === 'hero' && (
            <div className="space-y-4">
              <Hero
                title="Build Better Products"
                subtitle="Modern React components for Kenyan businesses."
                primaryCta={{ label: 'Get Started', href: '#' }}
                secondaryCta={{ label: 'Learn More', href: '#' }}
              />
              <Hero
                variant="centered"
                title="Centered Layout"
                subtitle="Perfect for landing pages and marketing sites."
                primaryCta={{ label: 'Get Started', href: '#' }}
              />
            </div>
          )}
          {data.id === 'features' && (
            <Features
              title="Why Choose Us"
              columns={3}
              features={[
                { icon: 'zap', title: 'Fast', description: 'Lightning quick performance.' },
                { icon: 'shield', title: 'Secure', description: 'Enterprise grade security.' },
                { icon: 'heart', title: 'Lovable', description: 'Developer friendly API.' },
              ]}
            />
          )}
          {data.id === 'faq' && (
            <FAQ
              title="FAQ"
              items={[
                { title: 'Is it free?', content: <p className="text-sm text-gray-500">Yes, MIT licensed.</p> },
                { title: 'Does it work with Next.js?', content: <p className="text-sm text-gray-500">Yes, fully compatible.</p> },
              ]}
            />
          )}
          {data.id === 'pricing' && (
            <Pricing
              title="Pricing"
              plans={[
                { name: 'Starter', price: 'Free', description: 'For side projects', features: [{ label: '1 project', included: true }, { label: 'Basic support', included: true }, { label: 'Advanced features' }] },
                { name: 'Pro', price: 'KES 2,500/mo', highlighted: true, badge: 'Popular', description: 'For businesses', features: [{ label: 'Unlimited projects', included: true }, { label: 'Priority support', included: true }, { label: 'Advanced features', included: true }], cta: 'Subscribe' },
                { name: 'Enterprise', price: 'Custom', description: 'For large teams', features: [{ label: 'Everything in Pro', included: true }, { label: 'Custom development', included: true }] },
              ]}
            />
          )}
          {data.id === 'footer' && (
            <Footer
              brand="MyShop"
              description="Your trusted online store."
              links={[{ title: 'Shop', items: [{ label: 'All Products', href: '#' }] }, { title: 'Support', items: [{ label: 'Contact', href: '#' }] }]}
              social={[{ icon: 'globe', href: '#', label: 'Website' }]}
              contact={[{ icon: 'mail', label: 'Email', value: 'hello@myshop.com', href: 'mailto:hello@myshop.com' }, { icon: 'phone', label: 'Phone', value: '+254 712 345 678' }]}
              businessHours={[{ day: 'Mon-Fri', hours: '8AM - 5PM' }, { day: 'Sat', hours: '9AM - 1PM' }]}
              copyright="© 2025 MyShop"
              developerCredit={{ name: 'FrameStudio', whatsapp: '254712345678' }}
            />
          )}
          {data.id === 'stats' && (
            <Stats title="Our Impact" stats={[{ value: '10K+', label: 'Users' }, { value: '500+', label: 'Businesses' }, { value: '99.9%', label: 'Uptime' }]} />
          )}
          {data.id === 'testimonials' && (
            <Testimonials
              testimonials={[
                { quote: 'Amazing service!', name: 'John Doe', role: 'CEO', company: 'Acme Inc', rating: 5 },
                { quote: 'Highly recommended.', name: 'Jane Smith', role: 'Designer', rating: 4 },
                { quote: 'Transformed our workflow.', name: 'Bob', rating: 5 },
              ]}
            />
          )}
          {data.id === 'contact-section' && (
            <ContactSection
              fields={[
                { name: 'name', label: 'Name', type: 'text', validation: 'required' },
                { name: 'email', label: 'Email', type: 'email', validation: ['required', 'email'] },
                { name: 'message', label: 'Message', type: 'textarea' },
              ]}
              onSubmit={(vals) => alert(JSON.stringify(vals, null, 2))}
              contactInfo={[{ icon: 'mail', label: 'Email', value: 'hello@example.com' }, { icon: 'phone', label: 'Phone', value: '+254 712 345 678' }]}
            />
          )}
          {data.id === 'animate' && (
            <div className="flex flex-wrap gap-4">
              {['fadeIn', 'slideUp', 'slideDown', 'slideLeft', 'slideRight', 'scaleIn', 'fadeScaleIn'].map((t) => (
                <Animate key={t} type={t} duration={500}>
                  <div className="w-20 h-20 bg-gradient-to-br from-violet-400 to-purple-500 rounded-xl flex items-center justify-center text-white text-[9px] font-semibold text-center leading-tight p-1 shadow-lg">
                    {t}
                  </div>
                </Animate>
              ))}
            </div>
          )}
          {data.id === 'motion' && (
            <Motion.div animate={{ x: 50, rotate: 15 }} transition={{ duration: 600 }}>
              <div className="w-24 h-24 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center text-white text-xs font-semibold shadow-lg">
                Motion.div
              </div>
            </Motion.div>
          )}
          {data.id === 'catalogue-card' && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <CatalogueCard title="Wireless Headphones" tag="Audio" price="KES 12,500" rating={4.5} badge="Sale" image={{ src: 'https://picsum.photos/seed/headphones/400/300', alt: '' }} cta={{ label: 'View', href: '#' }} />
              <CatalogueCard title="Consulting" price="KES 25,000" variant="service" icon="package" rating={5} cta={{ label: 'Book Now', onClick: () => {} }} />
              <CatalogueCard title="Graphic Design" tag="Creative" price="KES 8,000" rating={4} variant="service" icon="edit" cta={{ label: 'Inquire', onClick: () => {} }} />
            </div>
          )}
          {data.id === 'catalogue-grid' && (
            <div className="space-y-6">
              <p className="text-[11px] font-semibold text-gray-500">Loading state</p>
              <CatalogueGrid columns={3} loading />
              <p className="text-[11px] font-semibold text-gray-500">With items</p>
              <CatalogueGrid title="Featured Products" items={sampleProducts} columns={3} />
            </div>
          )}
          {data.id === 'search-bar' && (
            <SearchBar placeholder="Search products..." value="" onChange={() => {}} filters={[{ label: 'Category', options: [{ label: 'All', value: 'all' }, { label: 'Audio', value: 'audio' }] }]} />
          )}
          {data.id === 'back-to-top' && (
            <p className="text-sm text-gray-500">Add <code className="text-violet-600">{'<BackToTop />'}</code> to your layout. Appears after scrolling past 300px.</p>
          )}
          {data.id === 'trust-bar' && (
            <div className="space-y-6">
              <TrustBar title="Trusted by" logos={Array.from({ length: 4 }, (_, i) => ({ src: `https://picsum.photos/seed/logo${i}/120/40`, alt: `Brand ${i + 1}` }))} />
              <TrustBar variant="carousel" logos={Array.from({ length: 4 }, (_, i) => ({ src: `https://picsum.photos/seed/brand${i}/120/40`, alt: `Brand ${i + 1}` }))} title="Carousel" />
            </div>
          )}
          {data.id === 'announcement-bar' && (
            <div className="space-y-2">
              <AnnouncementBar text="Free shipping over KES 5,000" variant="sale" cta={{ label: 'Shop Now' }} dismissible />
              <AnnouncementBar text="New collection drops Friday!" variant="info" dismissible />
              <AnnouncementBar text="Same-day delivery within Nairobi" variant="premium" dismissible />
            </div>
          )}
          {data.id === 'location-map' && (
            <LocationMap address="123 Kimathi Street\nNairobi, Kenya" coords={{ lat: -1.286389, lng: 36.817223 }} embedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.654!2d36.817223!3d-1.286389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMTcnMTEuMCJTIDM2wrA0OScwMi4wIkU!5e0!3m2!1sen!2ske!4v1" />
          )}
          {data.id === 'use-form' && (
            <p className="text-sm text-gray-500">Wrap any form with <code className="text-violet-600">useForm</code> for validation and state management. See playground for full demo.</p>
          )}
          {data.id === 'use-local-storage' && (
            <p className="text-sm text-gray-500">Usage: <code className="text-violet-600">const [theme, setTheme, remove] = useLocalStorage('theme', 'light')</code></p>
          )}
          {data.id === 'use-media-query' && (
            <p className="text-sm text-gray-500">Usage: <code className="text-violet-600">const isMobile = useMediaQuery('(max-width: 768px)')</code></p>
          )}
          {data.id === 'use-fetch' && (
             <p className="text-sm text-gray-500">Usage: <code className="text-violet-600">{'const { data, loading, error, refetch } = useFetch(\'/api/data\')'}</code></p>
          )}
          {data.id === 'cn' && (
            <p className="text-sm text-gray-500">Result: <code className="text-violet-600 font-mono">{cn("px-4", false, "py-2", undefined, "rounded-lg")}</code></p>
          )}
          {data.id === 'format-kes' && (
            <div className="space-y-1 text-sm font-mono">
              <p><span className="text-gray-400">formatKES(12500)</span> → {formatKES(12500)}</p>
              <p><span className="text-gray-400">formatKES(12500, compact)</span> → {formatKES(12500, { compact: true })}</p>
              <p><span className="text-gray-400">formatKES(1500000, compact)</span> → {formatKES(1500000, { compact: true })}</p>
            </div>
          )}
          {data.id === 'format-date' && (
            <div className="space-y-1 text-sm font-mono">
              <p><span className="text-gray-400">formatDate("2025-06-09")</span> → {formatDate('2025-06-09')}</p>
              <p><span className="text-gray-400">formatDate("2025-06-09", short)</span> → {formatDate('2025-06-09', { style: 'short' })}</p>
            </div>
          )}
          {data.id === 'slugify' && (
            <div className="space-y-1 text-sm font-mono">
              <p><span className="text-gray-400">slugify("Hello World!")</span> → {slugify('Hello World!')}</p>
              <p><span className="text-gray-400">slugify("My Product Name")</span> → {slugify('My Product Name')}</p>
            </div>
          )}
          {data.id === 'truncate' && (
            <div className="space-y-1 text-sm font-mono">
              <p><span className="text-gray-400">truncate("Lorem ipsum dolor sit amet", 16)</span> → {truncate('Lorem ipsum dolor sit amet', 16)}</p>
            </div>
          )}
          {data.id === 'generate-id' && (
            <div className="space-y-1 text-sm font-mono">
              <p><span className="text-gray-400">generateId()</span> → {generateId()}</p>
              <p><span className="text-gray-400">generateId()</span> → {generateId()}</p>
            </div>
          )}
          {data.id === 'icon' && (
            <IconGrid />
          )}
        </Section>
      ))}
    </DocsLayout>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
