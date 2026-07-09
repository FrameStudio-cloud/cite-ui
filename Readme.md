<p align="center">
  <h1 align="center">cite-ui</h1>
  <p align="center">React component library — 54+ components, hooks & utilities for building faster.</p>
  <p align="center">Zero runtime dependencies. Tailwind CSS v3. Built for production.</p>
</p>

<p align="center">
  <a href="#installation">Installation</a> ·
  <a href="#components">Components</a> ·
  <a href="#hooks">Hooks</a> ·
  <a href="#utilities">Utilities</a> ·
  <a href="#animation">Animation</a> ·
  <a href="#mini-catalogue">Mini Catalogue</a>
</p>

---

## Installation

```bash
npm install cite-ui
```

cite-ui requires **React 18+** and **Tailwind CSS v3** as peer dependencies:

```bash
npm install react react-dom
npm install -D tailwindcss @tailwindcss/postcss postcss autoprefixer
```

### Tailwind Setup

Add cite-ui's source to your Tailwind config so styles aren't purged:

```js
// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/cite-ui/src/**/*.{js,jsx}",
  ],
}
```

If you use Tailwind v4 with `@import "tailwindcss"`, add to your CSS:

```css
@source "../node_modules/cite-ui/src";
```

---

## Components

### Layout Primitives

| Component | Description |
|-----------|-------------|
| [Container](#container) | Max-width wrapper with responsive padding |
| [Stack](#stack--grid) | Flex layout with direction, gap, alignment |
| [Grid](#stack--grid) | Responsive CSS Grid with breakpoint-aware columns |
| [Section](#section) | Page section with configurable padding and background |
| [Divider](#divider) | Horizontal/vertical divider with optional label |

#### Container

```jsx
import { Container } from 'cite-ui'

<Container maxWidth="lg">
  <p>Responsive centered content</p>
</Container>
<Container maxWidth="sm" padding={false}>
  <p>No padding variant</p>
</Container>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `maxWidth` | `"sm" \| "md" \| "lg" \| "xl" \| "full" \| "7xl"` | `"7xl"` | Container max-width |
| `padding` | `boolean` | `true` | Apply responsive horizontal padding |
| `as` | `string` | `"div"` | HTML element to render |
| `className` | `string` | `""` | Extra Tailwind classes |

#### Stack & Grid

```jsx
import { Stack, Grid } from 'cite-ui'

<Stack direction="horizontal" gap={4} align="center">
  <div>Item 1</div>
  <div>Item 2</div>
</Stack>

<Grid columns={{ default: 1, md: 2, lg: 3 }} gap={6}>
  <div>Column 1</div>
  <div>Column 2</div>
  <div>Column 3</div>
</Grid>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `direction` | `"vertical" \| "horizontal"` | `"vertical"` | Flex direction |
| `gap` | `number` | `4` | Tailwind gap scale |
| `align` | `string` | — | `items-*` alignment |
| `justify` | `string` | — | `justify-*` alignment |
| `wrap` | `boolean` | `false` | `flex-wrap` |

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `columns` | `object \| number` | `{default:1, sm:2, lg:3}` | Column count per breakpoint |
| `gap` | `number` | `6` | Grid gap |

#### Section

```jsx
import { Section } from 'cite-ui'

<Section padding="lg" bg="bg-gray-50">
  <p>Page section with vertical spacing</p>
</Section>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `padding` | `"none" \| "sm" \| "md" \| "lg" \| "xl"` | `"lg"` | Vertical padding |
| `bg` | `string` | — | Background class |
| `as` | `string` | `"section"` | HTML element |
| `id` | `string` | — | Section ID for scroll-spy |

#### Divider

```jsx
import { Divider } from 'cite-ui'

<Divider />
<Divider label="or continue with" />
<Divider orientation="vertical" />
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `orientation` | `"horizontal" \| "vertical"` | `"horizontal"` | Direction |
| `label` | `string` | — | Optional label text |

---

### UI Components

| Component | Description |
|-----------|-------------|
| [Card](#card) | Content container with 4 variants |
| [Badge](#badge) | Small label with 8 colors |
| [Chip](#chip) | Removable tag with colors |
| [Avatar](#avatar) | Image or initial-based avatar |
| [Alert](#alert) | Contextual notification banner |
| [Spinner](#spinner) | Loading indicator |
| [Skeleton](#skeleton) | Loading placeholder |
| [SkeletonGroup](#skeleton) | Group loading placeholders |
| [Progress](#progress) | Progress bar with percentage |
| [EmptyState](#emptystate) | Empty view placeholder |

#### Card

```jsx
import { Card } from 'cite-ui'

<Card variant="elevated" padding="md" hover>
  <h3>Card Title</h3>
  <p>Card content goes here.</p>
</Card>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `"elevated" \| "outlined" \| "flat" \| "bordered"` | `"elevated"` | Card style |
| `padding` | `"none" \| "sm" \| "md" \| "lg"` | `"md"` | Padding size |
| `hover` | `boolean` | `false` | Subtle lift on hover |
| `onClick` | `function` | — | Makes card clickable |
| `href` | `string` | — | Renders as link |

#### Badge

```jsx
import { Badge } from 'cite-ui'

<Badge color="green" size="sm">Active</Badge>
<Badge color="red">Inactive</Badge>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `color` | `"gray" \| "red" \| "green" \| "blue" \| "amber" \| "purple" \| "pink" \| "black"` | `"gray"` | Color scheme |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | Size |

#### Chip

```jsx
import { Chip } from 'cite-ui'

<Chip color="blue" onRemove={() => {}}>Filter tag</Chip>
<Chip color="green" onClick={() => {}}>Clickable</Chip>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `color` | `"gray" \| "blue" \| "green" \| "red" \| "amber"` | `"gray"` | Color scheme |
| `onRemove` | `function` | — | Shows X button |
| `onClick` | `function` | — | Makes chip clickable |
| `size` | `"sm" \| "md"` | `"md"` | Size |

#### Avatar

```jsx
import { Avatar } from 'cite-ui'

<Avatar name="John Doe" />
<Avatar src="https://i.pravatar.cc/80" size="lg" />
<Avatar name="Jane Smith" color="purple" />
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `src` | `string` | — | Image URL |
| `name` | `string` | — | Name for initials fallback |
| `size` | `"xs" \| "sm" \| "md" \| "lg" \| "xl" \| "2xl"` | `"md"` | Size |
| `color` | `"gray" \| "blue" \| "green" \| "red" \| "purple" \| "amber"` | `"gray"` | Background color |

#### Alert

```jsx
import { Alert } from 'cite-ui'

<Alert type="success" title="Saved!" message="Your changes have been saved." dismissible />
<Alert type="error" message="Something went wrong." />
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `type` | `"info" \| "success" \| "warning" \| "error"` | `"info"` | Alert type |
| `title` | `string` | — | Bold title |
| `message` | `string` | — | Body text |
| `dismissible` | `boolean` | `false` | Show close button |

#### Spinner

```jsx
import { Spinner } from 'cite-ui'

<Spinner size="md" />
<Spinner size="lg" color="#6366f1" />
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `"xs" \| "sm" \| "md" \| "lg" \| "xl"` | `"md"` | Spinner size |
| `color` | `string` | `"currentColor"` | SVG stroke color |

#### Skeleton

```jsx
import { Skeleton, SkeletonGroup } from 'cite-ui'

<Skeleton variant="card" />
<Skeleton variant="avatar" />
<SkeletonGroup count={3} variant="text" direction="vertical" gap={2} />
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `"text" \| "title" \| "avatar" \| "button" \| "image" \| "card" \| "circle"` | `"text"` | Shape variant |
| `width` | `string` | — | Override width |
| `height` | `string` | — | Override height |
| `rounded` | `"none" \| "sm" \| "md" \| "lg" \| "xl" \| "full"` | `"md"` | Border radius |

#### Progress

```jsx
import { Progress } from 'cite-ui'

<Progress value={65} color="green" showLabel size="md" />
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `number` | `0` | Current value |
| `max` | `number` | `100` | Max value |
| `color` | `"black" \| "blue" \| "green" \| "red" \| "amber" \| "purple"` | `"black"` | Bar color |
| `size` | `"sm" \| "md" \| "lg" \| "xl"` | `"md"` | Bar thickness |
| `showLabel` | `boolean` | `false` | Show percentage |

#### EmptyState

```jsx
import { EmptyState } from 'cite-ui'

<EmptyState
  icon="inbox"
  title="No messages yet"
  message="Your inbox is empty."
  actionLabel="New Message"
  onAction={() => {}}
/>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `icon` | `string` | — | Icon name |
| `title` | `string` | — | Heading |
| `message` | `string` | — | Description |
| `actionLabel` | `string` | — | CTA button text |
| `onAction` | `function` | — | CTA click handler |

---

### Form Components

| Component | Description |
|-----------|-------------|
| [TextField](#textfield) | Input with label, error, icons, password toggle, clearable |
| [Textarea](#textarea) | Multi-line input with character count |
| [Select](#select) | Styled native select |
| [Checkbox](#checkbox) | Custom checkbox with indeterminate state |
| [Switch](#switch) | Toggle switch in 3 sizes |

#### TextField

```jsx
import { TextField } from 'cite-ui'

<TextField label="Email" name="email" type="email" icon="mail" required />
<TextField label="Password" type="password" />
<TextField label="Search" icon="search" clearable />
<TextField label="Name" error="This field is required" />
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | — | Field label |
| `name` | `string` | — | Input name |
| `type` | `string` | `"text"` | Input type |
| `value` | `string` | — | Controlled value |
| `onChange` | `function` | — | Change handler |
| `onBlur` | `function` | — | Blur handler |
| `placeholder` | `string` | — | Placeholder |
| `error` | `string` | — | Error message |
| `helperText` | `string` | — | Helper text below input |
| `icon` | `string \| element` | — | Icon name or element |
| `clearable` | `boolean` | `false` | Show clear button |
| `disabled` | `boolean` | `false` | Disabled state |
| `required` | `boolean` | `false` | Required indicator |

#### Textarea

```jsx
import { Textarea } from 'cite-ui'

<Textarea label="Message" name="message" showCount maxLength={500} />
<Textarea label="Bio" error="Too short" />
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | — | Field label |
| `rows` | `number` | `4` | Visible rows |
| `maxLength` | `number` | — | Max character limit |
| `showCount` | `boolean` | `false` | Show character count |
| `error` | `string` | — | Error message |
| `helperText` | `string` | — | Helper text |

#### Select

```jsx
import { Select } from 'cite-ui'

<Select label="Category" options={[
  { value: "web", label: "Web Development" },
  { value: "design", label: "Design" },
]} placeholder="Choose..." />
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | — | Field label |
| `options` | `array` | `[]` | `{ value, label }` or strings |
| `placeholder` | `string` | — | Disabled placeholder option |
| `error` | `string` | — | Error message |

#### Checkbox

```jsx
import { Checkbox } from 'cite-ui'

<Checkbox label="Accept terms" checked onChange={fn} />
<Checkbox label="Indeterminate" indeterminate />
<Checkbox label="Disabled" disabled />
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | — | Checkbox label |
| `checked` | `boolean` | `false` | Checked state |
| `indeterminate` | `boolean` | `false` | Indeterminate state |
| `disabled` | `boolean` | `false` | Disabled |
| `onChange` | `function` | — | Change handler |

#### Switch

```jsx
import { Switch } from 'cite-ui'

<Switch label="Dark mode" checked onChange={fn} />
<Switch label="Small" size="sm" />
<Switch label="Large" size="lg" />
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | — | Switch label |
| `checked` | `boolean` | `false` | Toggle state |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | Size |
| `disabled` | `boolean` | `false` | Disabled |
| `onChange` | `function` | — | Change handler |

---

### Navigation & Overlays

| Component | Description |
|-----------|-------------|
| [Tabs](#tabs) | Tabbed interface with 3 variants |
| [TabPanel](#tabs) | Content panel for tabs |
| [Accordion](#accordion) | Collapsible panels |
| [Drawer](#drawer) | Slide-in panel from any side |
| [DropdownMenu](#dropdownmenu) | Contextual menu |
| [Breadcrumbs](#breadcrumbs) | Navigation trail |
| [Pagination](#pagination) | Page navigation with ellipsis |
| [Tooltip](#tooltip) | Hover tooltip in 4 positions |
| [Table](#table) | Data table with sorting |

#### Tabs

```jsx
import { Tabs, TabPanel } from 'cite-ui'

const [active, setActive] = useState(0)

<Tabs tabs={[{ label: "Tab 1" }, { label: "Tab 2" }]} activeTab={active} onChange={setActive} variant="pill" />

<TabPanel active={active} index={0}>Content 1</TabPanel>
<TabPanel active={active} index={1}>Content 2</TabPanel>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `tabs` | `array` | `[]` | `{ label, icon?, disabled? }[]` |
| `activeTab` | `number` | — | Controlled active index |
| `onChange` | `function` | — | Tab change handler |
| `variant` | `"underline" \| "pill" \| "buttons"` | `"underline"` | Tab style |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | Tab size |

#### Accordion

```jsx
import { Accordion } from 'cite-ui'

<Accordion items={[
  { title: "Question 1", content: "Answer 1" },
  { title: "Question 2", content: "Answer 2" },
]} allowMultiple />
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `array` | `[]` | `{ title, content }[]` |
| `allowMultiple` | `boolean` | `false` | Multi-open |
| `defaultOpen` | `array` | `[]` | Indices to open by default |

#### Drawer

```jsx
import { Drawer } from 'cite-ui'

<Drawer isOpen={isOpen} onClose={fn} title="Settings" side="right" size="md">
  <p>Drawer content</p>
</Drawer>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `isOpen` | `boolean` | — | Visibility |
| `onClose` | `function` | — | Close handler |
| `title` | `string` | — | Header title |
| `side` | `"left" \| "right" \| "top" \| "bottom"` | `"right"` | Slide direction |
| `size` | `"sm" \| "md" \| "lg" \| "xl" \| "full"` | `"md"` | Drawer width |
| `footer` | `element` | — | Sticky footer |
| `closeOnOverlay` | `boolean` | `true` | Close on backdrop click |
| `showClose` | `boolean` | `true` | Show close button |

#### DropdownMenu

```jsx
import { DropdownMenu } from 'cite-ui'

<DropdownMenu
  trigger={<Button label="Menu" />}
  items={[
    { label: "Profile", icon: "user", onClick: fn },
    { label: "Settings", icon: "settings", onClick: fn },
    { separator: true },
    { label: "Logout", icon: "x", onClick: fn },
  ]}
/>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `trigger` | `element` | — | Element that opens the menu |
| `items` | `array` | `[]` | `{ label?, icon?, onClick?, disabled?, separator? }[]` |
| `align` | `"left" \| "right"` | `"left"` | Dropdown alignment |

#### Breadcrumbs

```jsx
import { Breadcrumbs } from 'cite-ui'

<Breadcrumbs items={[
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Current Page" },
]} />
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `array` | `[]` | `{ label, href? }[]` |
| `separator` | `string` | `"chevronRight"` | Icon or `"slash"` |

#### Pagination

```jsx
import { Pagination } from 'cite-ui'

const [page, setPage] = useState(1)
<Pagination current={page} total={20} onChange={setPage} />
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `current` | `number` | — | Current page |
| `total` | `number` | — | Total pages |
| `onChange` | `function` | — | Page change handler |
| `siblingCount` | `number` | `1` | Pages around current |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | Button size |

#### Tooltip

```jsx
import { Tooltip } from 'cite-ui'

<Tooltip content="Tooltip text" position="top">
  <button>Hover me</button>
</Tooltip>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `content` | `string` | — | Tooltip text |
| `position` | `"top" \| "bottom" \| "left" \| "right"` | `"top"` | Tooltip position |
| `delay` | `number` | `200` | Show delay (ms) |

#### Table

```jsx
import { Table, Badge } from 'cite-ui'

<Table
  columns={[
    { key: "name", label: "Name" },
    { key: "role", label: "Role" },
    { key: "status", label: "Status", render: (v) => <Badge color="green">{v}</Badge> },
  ]}
  data={[
    { id: 1, name: "John Doe", role: "Developer", status: "Active" },
  ]}
  sortable
  striped
  onRowClick={(row) => console.log(row)}
/>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `columns` | `array` | `[]` | `{ key, label, render?, sortable? }[]` |
| `data` | `array` | `[]` | Row data objects |
| `sortable` | `boolean` | `false` | Enable column sorting |
| `striped` | `boolean` | `false` | Alternating row colors |
| `compact` | `boolean` | `false` | Reduced padding |
| `onRowClick` | `function` | — | Row click handler |

---

### Page Sections

Build complete landing pages fast with these pre-built sections:

| Component | Description |
|-----------|-------------|
| [Hero](#hero) | Page hero — 5 variants (default, split, centered, bg-dark, slideshow) |
| [Features](#features) | Feature grid with icons — card or inline variants |
| [FAQ](#faq) | FAQ section using accordion |
| [Pricing](#pricing) | Pricing cards with feature lists + highlighted plan |
| [Stats](#stats) | Statistics grid — grid or row variants |
| [Testimonials](#testimonials) | Testimonial cards with avatar, quote, rating |
| [ContactSection](#contactsection) | Contact form with validation + info sidebar |
| [Footer](#footer) | Multi-column footer with brand, social, links |

#### Hero

```jsx
import { Hero } from 'cite-ui'

<Hero
  title="Build faster with cite-ui"
  subtitle="40+ components for React + Tailwind. Zero runtime deps."
  primaryCta={{ label: "Get Started", variant: "primary" }}
  secondaryCta={{ label: "Learn More", variant: "outline" }}
  image={{ src: "/hero.jpg", alt: "Hero image" }}
  variant="split"
/>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | — | Hero headline |
| `subtitle` | `string` | — | Subtext (max 65ch) |
| `primaryCta` | `object` | — | `{ label, variant?, size?, onClick?, href? }` |
| `secondaryCta` | `object` | — | Same shape as primaryCta |
| `image` | `object` | — | `{ src, alt }` |
| `imagePosition` | `"left" \| "right"` | `"right"` | Image placement (split mode) |
| `variant` | `"default" \| "split" \| "centered" \| "bg-dark" \| "slideshow"` | `"default"` | Hero layout. `slideshow` expects `slides` array with auto-advance |

#### Features

```jsx
import { Features } from 'cite-ui'

<Features
  title="Why choose cite-ui"
  subtitle="Everything you need to build production-ready sites."
  features={[
    { icon: "zap", title: "Fast Setup", description: "Install and import." },
    { icon: "layers", title: "40+ Components", description: "From buttons to sections." },
    { icon: "moon", title: "Dark Mode", description: "Built-in support." },
  ]}
  columns={3}
  variant="card"
/>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | — | Section heading |
| `subtitle` | `string` | — | Section subtext |
| `features` | `array` | `[]` | `{ icon, title, description }[]` |
| `columns` | `number` | `3` | Grid columns (1-4) |
| `variant` | `"card" \| "inline"` | `"card"` | Display style |

#### FAQ

```jsx
import { FAQ } from 'cite-ui'

<FAQ
  title="Frequently Asked Questions"
  items={[
    { title: "How do I install cite-ui?", content: "Run npm install cite-ui..." },
    { title: "Is it free?", content: "Yes, MIT license." },
  ]}
/>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | — | Section heading |
| `subtitle` | `string` | — | Section subtext |
| `items` | `array` | `[]` | `{ title, content }[]` |

#### Pricing

```jsx
import { Pricing } from 'cite-ui'

<Pricing
  title="Simple Pricing"
  plans={[
    {
      name: "Starter", price: "Free", description: "For side projects",
      features: [{ label: "Core components" }],
      cta: "Get Started",
    },
    {
      name: "Pro", price: "KES 2,500", period: "/mo",
      description: "For professionals", highlighted: true, badge: "Popular",
      features: [{ label: "All components" }, { label: "Priority support" }],
      cta: "Start Free Trial",
    },
  ]}
/>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | — | Section heading |
| `subtitle` | `string` | — | Section subtext |
| `plans` | `array` | `[]` | Plan objects (see below) |

Each plan object:

| Prop | Type | Description |
|------|------|-------------|
| `name` | `string` | Plan name |
| `price` | `string` | Price display |
| `period` | `string` | Billing period (e.g. "/mo") |
| `description` | `string` | Plan description |
| `features` | `array` | `{ label, included? }[]` |
| `highlighted` | `boolean` | Featured/popular plan |
| `badge` | `string` | Badge text (e.g. "Popular") |
| `cta` | `string` | Button label |
| `onClick` / `href` | — | CTA handler |

#### Stats

```jsx
import { Stats } from 'cite-ui'

<Stats
  title="By the Numbers"
  stats={[
    { value: "40+", label: "Components" },
    { value: "Zero", label: "Dependencies" },
    { value: "MIT", label: "License" },
  ]}
  variant="grid"
/>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | — | Section heading |
| `stats` | `array` | `[]` | `{ value, label, icon? }[]` |
| `variant` | `"grid" \| "row"` | `"grid"` | Layout |

#### Testimonials

```jsx
import { Testimonials } from 'cite-ui'

<Testimonials
  title="What People Say"
  testimonials={[
    { quote: "Amazing library!", name: "John Doe", role: "Developer", rating: 5 },
  ]}
  variant="grid"
/>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | — | Section heading |
| `subtitle` | `string` | — | Section subtext |
| `testimonials` | `array` | `[]` | `{ quote, name, role?, company?, avatar?, rating? }[]` |
| `variant` | `"grid" \| "list"` | `"grid"` | Layout |

#### ContactSection

```jsx
import { ContactSection } from 'cite-ui'

<ContactSection
  title="Get in Touch"
  fields={[
    { name: "name", label: "Full Name", type: "text", validation: "required" },
    { name: "email", label: "Email", type: "email", validation: ["required", "email"] },
    { name: "message", label: "Message", type: "textarea", validation: "required" },
  ]}
  contactInfo={[
    { icon: "mail", label: "Email", value: "hello@example.com" },
    { icon: "phone", label: "Phone", value: "+254 712 345 678" },
  ]}
  onSubmit={(values) => console.log(values)}
/>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | `"Get in Touch"` | Section heading |
| `subtitle` | `string` | — | Section subtext |
| `fields` | `array` | `[...]` | `{ name, label, type, validation }[]` |
| `onSubmit` | `function` | — | Form submit handler |
| `submitLabel` | `string` | `"Send Message"` | Submit button text |
| `contactInfo` | `array` | — | `{ icon, label, value }[]` |

#### Footer

```jsx
import { Footer } from 'cite-ui'

<Footer
  brand="CiteUI"
  description="React component library for building faster."
  links={[
    { title: "Product", items: [{ label: "Components", href: "#" }] },
    { title: "Company", items: [{ label: "About", href: "#" }] },
  ]}
  social={[
    { icon: "globe", href: "#", label: "Website" },
    { icon: "mail", href: "#", label: "Email" },
  ]}
  copyright="© 2026 CiteUI. MIT License."
/>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `brand` | `string` | — | Brand/logo text |
| `description` | `string` | — | About text |
| `links` | `array` | `[]` | `{ title, items: { label, href }[] }[]` |
| `social` | `array` | `[]` | `{ icon, href, label }[]` |
| `contact` | `array` | — | `{ icon, label, value, href? }[]` |
| `businessHours` | `array` | — | `{ day, hours }[]` |
| `developerCredit` | `object` | — | `{ name, whatsapp? }` |
| `copyright` | `string` | — | Copyright line |
| `columns` | `number` | `4` | Column count |

---

### Existing (Enhanced) Components

| Component | Description |
|-----------|-------------|
| [Button](#button-1) | 6 variants, 5 sizes, loading, icons, link mode |
| [Navbar](#navbar) | Sticky nav, glass variant, scroll-aware, mobile menu |
| [Gallery](#gallery) | Responsive grid, lightbox with keyboard support |
| [Modal](#modal) | Overlay modal with sizes, esc to close, backdrop blur |
| [WhatsAppFloat](#whatsappfloat) | Floating WhatsApp button with tooltip |
| [Toast](#toast) | Context-based notifications with promise support |

#### Button

```jsx
import { Button } from 'cite-ui'

<Button variant="primary" label="Click Me" onClick={fn} />
<Button variant="secondary" label="Secondary" />
<Button variant="outline" label="Outline" />
<Button variant="ghost" label="Ghost" />
<Button variant="danger" label="Delete" loading />
<Button variant="whatsapp" label="Chat with us" />

<Button label="Small" size="sm" />
<Button label="Large" size="lg" />

<Button label="With Icon" icon="arrowRight" iconPosition="right" />
<Button label="Loading" loading />
<Button label="Disabled" disabled />
<Button label="Link Button" href="https://example.com" />
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `"primary" \| "secondary" \| "outline" \| "ghost" \| "danger" \| "whatsapp"` | `"primary"` | Button style |
| `size` | `"xs" \| "sm" \| "md" \| "lg" \| "xl"` | `"md"` | Button size |
| `label` | `string` | — | Button text |
| `onClick` | `function` | — | Click handler |
| `type` | `"button" \| "submit" \| "reset"` | `"button"` | HTML type |
| `disabled` | `boolean` | `false` | Disabled state |
| `loading` | `boolean` | `false` | Loading spinner |
| `icon` | `string \| element` | — | Icon name or element |
| `iconPosition` | `"left" \| "right"` | `"left"` | Icon side |
| `href` | `string` | — | Renders as `<a>` |
| `className` | `string` | `""` | Extra classes |

#### Navbar

```jsx
import { Navbar } from 'cite-ui'

<Navbar logo="My Brand" links={links} ctaLabel="Get Started" ctaHref="#" />
<Navbar variant="glass" logo="My Brand" links={links} cartCount={3} onCartClick={fn} />
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `logo` | `string` | — | Brand text |
| `links` | `{ label, href }[]` | `[]` | Navigation links |
| `variant` | `"default" \| "glass" \| "transparent"` | `"default"` | Navbar style. Transition to solid on scroll |
| `cartCount` | `number` | `0` | Cart badge count |
| `onCartClick` | `function` | — | Cart icon handler |
| `ctaLabel` | `string` | — | CTA button text |
| `ctaHref` | `string` | — | CTA button link |
| `ctaVariant` | `"primary" \| "secondary"` | `"primary"` | CTA button style |
| `whatsapp` | `string` | — | WhatsApp number for chat link |
| `className` | `string` | `""` | Extra classes |

#### Gallery

```jsx
import { Gallery } from 'cite-ui'

<Gallery images={images} columns={3} gap={4} />
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `images` | `{ src, alt }[]` | `[]` | Image array |
| `columns` | `number` | `3` | Desktop columns (1-6) |
| `gap` | `number` | `4` | Tailwind gap scale |
| `lightbox` | `boolean` | `true` | Enable click-to-expand |

#### Modal

```jsx
import { Modal } from 'cite-ui'

<Modal isOpen={isOpen} onClose={fn} title="Modal Title" size="md">
  <p>Modal body content</p>
</Modal>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `isOpen` | `boolean` | — | Controls visibility |
| `onClose` | `function` | — | Close handler |
| `title` | `string` | — | Modal title |
| `children` | `node` | — | Body content |
| `footer` | `node` | — | Footer content |
| `size` | `"sm" \| "md" \| "lg" \| "xl" \| "2xl" \| "3xl" \| "full"` | `"md"` | Modal width |
| `closeOnOverlay` | `boolean` | `true` | Click overlay to close |
| `showClose` | `boolean` | `true` | Show X button |

#### WhatsAppFloat

```jsx
import { WhatsAppFloat } from 'cite-ui'

<WhatsAppFloat phoneNumber="254712345678" />
<WhatsAppFloat phoneNumber="254712345678" message="Hi!" showTooltip={false} />
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `phoneNumber` | `string` | — | Phone number (without +) |
| `message` | `string` | `"Hello..."` | Pre-filled message |
| `bottom` | `string` | `"24px"` | Bottom offset |
| `right` | `string` | `"24px"` | Right offset |
| `showTooltip` | `boolean` | `true` | Show speech bubble |
| `tooltipText` | `string` | `"Chat with us"` | Bubble text |
| `bounce` | `boolean` | `true` | Add bounce keyframe animation |

#### Toast

```jsx
import { ToastProvider, useToast } from 'cite-ui'

// Wrap your app
<ToastProvider position="top-right">
  <App />
</ToastProvider>

// Use anywhere inside
const { toast } = useToast()

toast.success("Saved!")                    // 4s auto-dismiss
toast.error("Failed!")                     // 6s
toast.warning("Check input")               // 4s
toast.info("Profile updated")              // 4s
toast.promise(
  fetch("/api/data"),
  { loading: "Loading...", success: "Done!", error: "Error!" }
)
toast.success("Keeps forever", { duration: Infinity })
```

| Prop (ToastProvider) | Type | Default | Description |
|----------------------|------|---------|-------------|
| `position` | `"top-right" \| "top-left" \| "top-center" \| "bottom-right" \| "bottom-left" \| "bottom-center"` | `"top-right"` | Toast position |

| Method | Default Duration | Description |
|--------|-----------------|-------------|
| `toast.success(msg, opts?)` | 4000ms | Success |
| `toast.error(msg, opts?)` | 6000ms | Error |
| `toast.warning(msg, opts?)` | 4000ms | Warning |
| `toast.info(msg, opts?)` | 4000ms | Info |
| `toast.promise(promise, { loading, success, error })` | — | Promise wrapper |

---

## Hooks

### useForm

Form state management with built-in validation rules.

```jsx
import { useForm } from 'cite-ui'

const { values, errors, touched, submitting, isValid, isDirty, handleChange, handleBlur, handleSubmit, setValue, setValues, reset } = useForm({
  initial: { name: '', email: '' },
  validate: {
    name: 'required',
    email: ['required', 'email'],
    message: ['required', (v) => v.length < 10 ? 'Too short' : ''],
  },
  onSubmit: (values) => { /* send */ },
})
```

**Validation rules:**

| Rule | Description |
|------|-------------|
| `"required"` | Value must be non-empty |
| `"email"` | Valid email format |
| `"phone"` | Kenyan phone (254/0 + 1/7 + 8 digits) |
| `"min"` | `(n) => (v) => ...` — minimum length factory |
| `"max"` | `(n) => (v) => ...` — maximum length factory |
| `function` | Custom validator, return error string or `""` |

### useLocalStorage

`useState` synced to localStorage.

```jsx
import { useLocalStorage } from 'cite-ui'

const [theme, setTheme, remove] = useLocalStorage('theme', 'light')
```

### useMediaQuery

Reactive media query hook.

```jsx
import { useMediaQuery } from 'cite-ui'

const isMobile = useMediaQuery('(max-width: 768px)')
const isDark = useMediaQuery('(prefers-color-scheme: dark)')
```

### useFetch

Data fetching with abort, loading/error states, and refetch.

```jsx
import { useFetch } from 'cite-ui'

// Auto-fetch on mount
const { data, loading, error, refetch } = useFetch('https://api.example.com/data')

// Manual trigger
const { data, refetch } = useFetch('/api/data', { immediate: false })

// With custom options
const { data } = useFetch('/api/data', {
  method: 'POST',
  headers: { Authorization: 'Bearer token' },
  body: JSON.stringify({ key: 'value' }),
})
```

---

## Utilities

```jsx
import { cn, formatKES, formatDate, slugify, truncate, generateId } from 'cite-ui'
```

| Function | Description |
|----------|-------------|
| `cn(...classes)` | Conditional class joiner — filters falsy values |
| `formatKES(amount, opts?)` | Format as Kenyan Shillings. `opts: { compact, withSymbol }` |
| `formatDate(date, opts?)` | Date formatting with Kenyan locale. `opts: { style: 'short'\|'medium'\|'long', locale }` |
| `slugify(text)` | URL-friendly slug |
| `truncate(text, maxLength)` | Smart truncation with ellipsis |
| `generateId()` | Random 9-char alphanumeric ID |

```js
cn('px-4', false && 'hidden', 'py-2')     // "px-4 py-2"

formatKES(12500)                            // "KES 12,500"
formatKES(12500, { compact: true })        // "KES 12.5K"
formatKES(1500000, { compact: true })      // "KES 1.5M"
formatKES("500")                            // "KES 500"

formatDate('2025-06-09')                   // "Jun 9, 2025"
formatDate('2025-06-09', { style: 'long' }) // "Monday, June 9, 2025"

slugify('Hello World!')                     // "hello-world"
truncate('Lorem ipsum dolor sit amet', 16) // "Lorem ipsum dolo..."
generateId()                                // "a3x9k2m7r"
```

---

## Animation

cite-ui includes a zero-dependency animation system — no framer-motion required.

### Animate

Entrance animation wrapper with 8 types, mount/viewport/exit triggers.

```jsx
import { Animate } from 'cite-ui'

<Animate type="slideUp" duration={600}>
  <div>Animates in on mount</div>
</Animate>

<Animate type="fadeIn" trigger="viewport" threshold={0.3}>
  <Card>Appears when scrolled into view</Card>
</Animate>

<Animate type="scaleIn" animateIn={isOpen} onAnimateOut={onClose}>
  <div>Reverse animation when animateIn toggles off</div>
</Animate>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `type` | `"fadeIn" \| "fadeScaleIn" \| "slideIn" \| "slideUp" \| "slideDown" \| "slideLeft" \| "slideRight" \| "scaleIn"` | `"fadeIn"` | Animation type |
| `duration` | `number` | `400` | Duration in ms |
| `delay` | `number` | `0` | Delay in ms |
| `trigger` | `"mount" \| "viewport"` | `"mount"` | What triggers the animation |
| `threshold` | `number` | `0.1` | IntersectionObserver threshold |
| `once` | `boolean` | `true` | Animate only once |
| `animateIn` | `boolean` | `true` | Toggle to trigger/reverse |
| `onAnimateOut` | `function` | — | Called after exit completes |

### Motion

Imperative animation via style interpolation. Supports `Motion.div`, `Motion.span`, `Motion.p`, and 20+ HTML tags.

```jsx
import { Motion } from 'cite-ui'

<Motion.div
  animate={{ x: 100, rotate: 45, scale: 1.2 }}
  transition={{ duration: 500 }}
>
  <div className="w-20 h-20 bg-black rounded-xl" />
</Motion.div>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `animate` | `object` | — | `{ x?, y?, rotate?, scale?, opacity? }` |
| `transition` | `object` | `{ duration: 300 }` | `{ duration?, delay?, ease? }` |
| `initial` | `object` | — | State before animation starts |

---

## Mini Catalogue

Components built for template-based catalogue sites for Kenyan small businesses.

| Component | Description |
|-----------|-------------|
| [CatalogueCard](#cataloguecard) | Product/service card with image, price, rating, badge, CTA |
| [CatalogueGrid](#cataloguegrid) | Grid of CatalogueCards with loading skeletons and empty state |
| [SearchBar](#searchbar) | Search input with loading spinner and filter dropdown |
| [BackToTop](#backtotop) | Floating scroll-to-top button |
| [TrustBar](#trustbar) | Social proof logo bar (grid or carousel) |
| [AnnouncementBar](#announcementbar) | Dismissible top announcement bar |
| [LocationMap](#locationmap) | Google Maps embed with address display |

### CatalogueCard

```jsx
import { CatalogueCard } from 'cite-ui'

<CatalogueCard
  title="Wireless Headphones"
  price="KES 12,500"
  rating={4.5}
  badge="Sale"
  image={{ src: "/headphones.jpg", alt: "" }}
  cta={{ label: "View Details", href: "/product/1" }}
/>

<CatalogueCard
  title="Consulting"
  price="KES 25,000"
  variant="service"
  icon="package"
  cta={{ label: "Book Now" }}
/>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `"product" \| "service"` | `"product"` | Card type |
| `image` | `object` | — | `{ src, alt? }` |
| `title` | `string` | — | Item title |
| `description` | `string` | — | Description |
| `price` | `string` | — | Price display |
| `rating` | `number` | — | 0-5 rating with stars |
| `badge` | `string` | — | Corner badge |
| `icon` | `string` | — | Icon for service variant |
| `cta` | `object` | — | `{ label, href?, onClick? }` |

### CatalogueGrid

```jsx
import { CatalogueGrid } from 'cite-ui'

<CatalogueGrid
  title="Featured Products"
  items={products}
  columns={4}
  loading={isLoading}
/>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `array` | `[]` | Array of CatalogueCard props |
| `columns` | `2 \| 3 \| 4` | `3` | Grid columns |
| `title` | `string` | — | Section heading |
| `description` | `string` | — | Section subheading |
| `loading` | `boolean` | `false` | Show skeleton state |
| `empty` | `node` | — | Custom empty state |

### SearchBar

```jsx
import { SearchBar } from 'cite-ui'

<SearchBar
  value={query}
  onChange={setQuery}
  placeholder="Search products..."
  filters={[
    { label: "Category", options: [{ label: "All", value: "all" }] },
  ]}
/>
```

### BackToTop

```jsx
import { BackToTop } from 'cite-ui'

<BackToTop threshold={300} size="md" />
```

### TrustBar

```jsx
import { TrustBar } from 'cite-ui'

<TrustBar title="Trusted by 500+" variant="carousel" logos={logos} />
```

### AnnouncementBar

```jsx
import { AnnouncementBar } from 'cite-ui'

<AnnouncementBar
  text="Free shipping over KES 5,000"
  variant="sale"
  cta={{ label: "Shop Now" }}
  dismissible
/>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `text` | `string` | — | Announcement text |
| `variant` | `"default" \| "sale" \| "info" \| "premium"` | `"default"` | Color variant |
| `dismissible` | `boolean` | `true` | Show X button |
| `href` | `string` | — | Makes bar clickable |
| `cta` | `object` | — | `{ label }` |

### LocationMap

```jsx
import { LocationMap } from 'cite-ui'

<LocationMap
  address="123 Kimathi Street\nNairobi, Kenya"
  coords={{ lat: -1.286389, lng: 36.817223 }}
  embedUrl="https://..."
/>
```

---

## Full Example

```jsx
import { Navbar, Button, Gallery, Hero, Features, Footer, Container, useForm, formatKES } from 'cite-ui'

const links = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#' },
  { label: 'Services', href: '#' },
]

const images = [
  { src: '/images/photo1.jpg', alt: 'Photo 1' },
  { src: '/images/photo2.jpg', alt: 'Photo 2' },
]

export default function App() {
  return (
    <div>
      <Navbar logo="FrameStudio" links={links} ctaLabel="Get Started" ctaHref="#" />

      <Hero
        title="Build faster with cite-ui"
        subtitle="40+ components for React + Tailwind. Zero runtime dependencies."
        primaryCta={{ label: "Get Started", variant: "primary" }}
        image={{ src: "/hero.jpg", alt: "Preview" }}
      />

      <Features
        title="Everything you need"
        features={[
          { icon: "zap", title: "Fast Setup", description: "Install once, import anywhere." },
          { icon: "layers", title: "40+ Components", description: "From buttons to page sections." },
          { icon: "moon", title: "Dark Mode", description: "Built-in, class-based toggling." },
        ]}
        columns={3}
      />

      <Container>
        <Gallery images={images} columns={3} />
        <p className="mt-4">Price: {formatKES(12500)}</p>
      </Container>

      <Footer
        brand="FrameStudio"
        description="Building digital products for Kenyan businesses."
        copyright="© 2026 FrameStudio. MIT License."
      />
    </div>
  )
}
```

---

## Peer Dependencies

cite-ui requires these to be installed in your project:

```bash
npm install react react-dom
npm install -D tailwindcss postcss autoprefixer
```

React is a **peer dependency only** — never bundled. This keeps your bundle lean and avoids version conflicts.

---

## Documentation

Full interactive documentation with prop tables, live examples, and copyable code:

```
npm run docs:dev
```

Or open `/docs.html` when running `npm run dev`.

## Bundle Size

| Format | Size | Gzip |
|--------|------|------|
| ESM | 111 kB | 26 kB |
| UMD | 85 kB | 23 kB |

Zero runtime dependencies. Everything is tree-shakeable.

---

## Icon

```jsx
import { Icon } from 'cite-ui'

<Icon name="heart" size={24} className="text-red-500" />
<Icon name="search" />
<Icon name="arrowRight" size={16} />
```

45 icons available: `x`, `check`, `chevronDown`, `chevronUp`, `chevronLeft`, `chevronRight`, `menu`, `cart`, `alertCircle`, `info`, `alertTriangle`, `search`, `user`, `mail`, `phone`, `mapPin`, `star`, `heart`, `arrowRight`, `arrowLeft`, `arrowUp`, `arrowDown`, `upload`, `download`, `image`, `externalLink`, `globe`, `clock`, `trash`, `plus`, `minus`, `settings`, `edit`, `share`, `sun`, `moon`, `eye`, `eyeOff`, `copy`, `link`, `refreshCw`, `filter`, `slash`, `messageCircle`, `package`.

---

## License

MIT © [Lewis Irungu](https://github.com/anomalyco)
