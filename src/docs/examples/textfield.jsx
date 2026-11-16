import { useState } from 'react'
import { TextField } from '../../index'

function BasicFields() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  return (
    <div className="max-w-sm space-y-4">
      <TextField
        label="Full name"
        name="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Jane Wanjiku"
        icon="user"
      />
      <TextField
        label="Email"
        name="email"
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="you@example.com"
        icon="mail"
        helperText="We only use this to reply."
      />
    </div>
  )
}

function StateFields() {
  const [password, setPassword] = useState('not-a-real-password')
  return (
    <div className="max-w-sm space-y-4">
      <TextField
        label="Phone"
        name="phone"
        value="0812 345 678"
        onChange={() => {}}
        error="Use 07…, 01… or 2547…"
        icon="phone"
      />
      <TextField
        label="Password"
        name="password"
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        clearable
      />
      <TextField label="Disabled" name="locked" value="Cannot edit" onChange={() => {}} disabled />
    </div>
  )
}

export const examples = [
  {
    id: 'basic',
    title: 'Label, placeholder and icon',
    description: 'The icon sits inside the field; the helper text explains what happens to the value.',
    code: `const [name, setName] = useState('')

<TextField
  label="Full name"
  name="name"
  value={name}
  onChange={(event) => setName(event.target.value)}
  placeholder="Jane Wanjiku"
  icon="user"
/>

<TextField
  label="Email"
  name="email"
  type="email"
  value={email}
  onChange={(event) => setEmail(event.target.value)}
  icon="mail"
  helperText="We only use this to reply."
/>`,
    Demo: BasicFields,
  },
  {
    id: 'states',
    title: 'Validation, clearable and disabled',
    description: 'The error replaces the border colour and is announced through `aria-invalid`.',
    code: `<TextField
  label="Phone"
  name="phone"
  value="0812 345 678"
  onChange={onChange}
  error="Use 07…, 01… or 2547…"
  icon="phone"
/>

<TextField label="Password" type="password" clearable />
<TextField label="Disabled" value="Cannot edit" disabled />`,
    Demo: StateFields,
  },
]
