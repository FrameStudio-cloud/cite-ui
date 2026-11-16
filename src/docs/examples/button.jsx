import { Button } from '../../index'

export const examples = [
  {
    id: 'variants',
    title: 'Variants',
    description: 'Six visual styles. The WhatsApp variant is the only one that ships a brand colour.',
    code: `<Button variant="primary" label="Primary" />
<Button variant="secondary" label="Secondary" />
<Button variant="outline" label="Outline" />
<Button variant="ghost" label="Ghost" />
<Button variant="danger" label="Delete" />
<Button variant="whatsapp" label="Chat" icon="messageCircle" />`,
    Demo: () => (
      <div className="flex flex-wrap items-center gap-2.5">
        <Button variant="primary" label="Primary" />
        <Button variant="secondary" label="Secondary" />
        <Button variant="outline" label="Outline" />
        <Button variant="ghost" label="Ghost" />
        <Button variant="danger" label="Delete" />
        <Button variant="whatsapp" label="Chat" icon="messageCircle" />
      </div>
    ),
  },
  {
    id: 'sizes',
    title: 'Sizes, icons and states',
    description: 'Five sizes, icons on either side, a loading state that disables the button, and a disabled state.',
    code: `<Button size="xs" label="Extra small" />
<Button size="sm" label="Small" />
<Button size="lg" label="Large" />

<Button label="With icon" icon="heart" />
<Button label="Icon right" icon="arrowRight" iconPosition="right" />
<Button label="Saving" loading />
<Button label="Disabled" disabled />`,
    Demo: () => (
      <div className="flex flex-wrap items-center gap-2.5">
        <Button size="xs" label="Extra small" />
        <Button size="sm" label="Small" />
        <Button size="lg" label="Large" />
        <Button label="With icon" icon="heart" />
        <Button label="Icon right" icon="arrowRight" iconPosition="right" />
        <Button label="Saving" loading />
        <Button label="Disabled" disabled />
      </div>
    ),
  },
  {
    id: 'link',
    title: 'As a link',
    description: 'Pass `href` and the button renders an anchor, with the same variants and states.',
    code: `<Button href="/pricing" label="View pricing" variant="outline" />
<Button href="https://wa.me/254712345678" label="WhatsApp us" variant="whatsapp" icon="messageCircle" />`,
    Demo: () => (
      <div className="flex flex-wrap items-center gap-2.5">
        <Button href="#example-variants" label="View pricing" variant="outline" />
        <Button href="#example-link" label="WhatsApp us" variant="whatsapp" icon="messageCircle" />
      </div>
    ),
  },
]
