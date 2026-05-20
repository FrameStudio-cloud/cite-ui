# cite-ui

A reusable React component library built for FrameStudio client projects. Prop-driven, Tailwind CSS styled, and published on npm.

## Installation

```bash
npm install cite-ui
```

## Setup

After installing, add cite-ui to your Tailwind `content` array so styles are picked up correctly:

```js
// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
    "./node_modules/cite-ui/src/**/*.{js,jsx}"
  ],
}
```

---

## Components

### Button

A flexible button component with three variants.

**Props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `"primary"` \| `"secondary"` \| `"whatsapp"` | `"primary"` | Button style |
| `size` | `"sm"` \| `"md"` \| `"lg"` | `"md"` | Button size |
| `label` | `string` | — | Button text |
| `onClick` | `function` | — | Click handler |
| `className` | `string` | `""` | Extra Tailwind classes |

**Usage**

```jsx
import { Button } from 'cite-ui'

<Button variant="primary" label="Get Started" onClick={() => {}} />
<Button variant="secondary" label="Learn More" onClick={() => {}} />
<Button variant="whatsapp" label="Chat with us" onClick={() => window.open('https://wa.me/254712345678')} />

<Button label="Small" variant="primary" size="sm" />
<Button label="Medium" variant="primary" size="md" />
<Button label="Large" variant="primary" size="lg" />
```

---

### Navbar

A responsive sticky navbar with mobile hamburger menu.

**Props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `logo` | `string` | — | Brand name or logo text |
| `links` | `{ label: string, href: string }[]` | `[]` | Navigation links |
| `ctaLabel` | `string` | — | CTA button text (optional) |
| `ctaHref` | `string` | — | CTA button link (optional) |

**Usage**

```jsx
import { Navbar } from 'cite-ui'

const links = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#' },
  { label: 'Services', href: '#' },
]

<Navbar
  logo="My Business"
  links={links}
  ctaLabel="Get Started"
  ctaHref="#contact"
/>
```

---

### Gallery

A responsive image grid with lightbox on click.

**Props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `images` | `{ src: string, alt: string }[]` | `[]` | Array of image objects |
| `columns` | `number` | `3` | Number of columns on desktop (1–6) |
| `gap` | `number` | `4` | Gap between images (Tailwind spacing scale) |

**Usage**

```jsx
import { Gallery } from 'cite-ui'

const images = [
  { src: '/images/photo1.jpg', alt: 'Photo 1' },
  { src: '/images/photo2.jpg', alt: 'Photo 2' },
  { src: '/images/photo3.jpg', alt: 'Photo 3' },
]

<Gallery images={images} columns={3} gap={4} />
```

---

### Modal

An overlay modal for displaying product details or quick-view content.

**Props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `isOpen` | `boolean` | — | Controls visibility |
| `onClose` | `function` | — | Called when overlay or X is clicked |
| `product` | `{ name, description, price, image }` | — | Product data object |
| `actionLabel` | `string` | `"View Details"` | Action button text |
| `onAction` | `function` | — | Called when action button is clicked |

**Usage**

```jsx
import { useState } from 'react'
import { Button, Modal } from 'cite-ui'

const product = {
  name: 'Wireless Headphones',
  description: 'Premium noise-cancelling wireless headphones.',
  price: 'KSh 12,500',
  image: 'https://picsum.photos/seed/hp/400/300',
}

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState(null)

  return (
    <>
      <Button variant="primary" label="View Product" onClick={() => setSelectedProduct(product)} />

      <Modal
        isOpen={selectedProduct !== null}
        onClose={() => setSelectedProduct(null)}
        product={selectedProduct}
        actionLabel="Add to Cart"
        onAction={() => {
          /* handle action */
          setSelectedProduct(null)
        }}
      />
    </>
  )
}
```

---

## Full Example

```jsx
import { Navbar, Button, Gallery } from 'cite-ui'

const links = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#' },
  { label: 'Services', href: '#' },
]

const images = [
  { src: '/images/photo1.jpg', alt: 'Photo 1' },
  { src: '/images/photo2.jpg', alt: 'Photo 2' },
  { src: '/images/photo3.jpg', alt: 'Photo 3' },
]

export default function App() {
  return (
    <div>
      <Navbar logo="FrameStudio" links={links} ctaLabel="Get Started" ctaHref="#" />
      <div className="p-8 space-y-6">
        <Button variant="whatsapp" label="Chat with us" onClick={() => window.open('https://wa.me/254712345678')} />
        <Gallery images={images} columns={3} />
      </div>
    </div>
  )
}
```

---

## Peer Dependencies

cite-ui requires React 18+ and Tailwind CSS v3 to be installed in your project.

```bash
npm install react react-dom
npm install -D tailwindcss
```

---

## License

MIT