import pkg from '../../../package.json'
import docs from '../data'
import * as CiteUI from '../../index'

export const entries = docs
export const byId = Object.fromEntries(docs.map((entry) => [entry.id, entry]))

export const GROUP_ORDER = [
  'Getting Started',
  'Legacy / Enhanced',
  'Layout',
  'UI',
  'Form',
  'Navigation',
  'Animation',
  'Hooks',
  'Utilities',
  'Icons',
]

export const groups = GROUP_ORDER.map((name) => ({
  name,
  items: entries.filter((entry) => entry.group === name),
})).filter((group) => group.items.length > 0)

/** Guides are pages, not registry entries; the sidebar and search treat them alike. */
export const GUIDES = [
  { id: 'getting-started', name: 'Installation', path: '/guide/installation' },
  { id: 'guide-theming', name: 'Theming', path: '/guide/theming' },
  { id: 'guide-motion', name: 'Motion', path: '/guide/motion' },
  { id: 'guide-license', name: 'License', path: '/guide/license' },
]

const GROUP_LABELS = {
  'Legacy / Enhanced': 'Base components',
  Form: 'Forms',
}

export function groupLabel(name) {
  return GROUP_LABELS[name] || name
}

/** Cards shown on the dashboard: one per catalogue category. */
export const CATEGORIES = [
  {
    group: 'Legacy / Enhanced',
    title: 'Base components',
    blurb: 'Buttons, navigation, dialogs and notifications.',
    icon: 'package',
  },
  {
    group: 'Layout',
    title: 'Layout',
    blurb: 'Containers, stacks, grids, sections and dividers.',
    icon: 'layers',
  },
  {
    group: 'UI',
    title: 'UI',
    blurb: 'Cards, badges, avatars, alerts and loading states.',
    icon: 'heart',
  },
  {
    group: 'Form',
    title: 'Forms',
    blurb: 'Inputs, selects, checkboxes and toggles.',
    icon: 'edit',
  },
  {
    group: 'Navigation',
    title: 'Navigation',
    blurb: 'Tabs, tables, drawers, menus and pagination.',
    icon: 'compass',
  },
  {
    group: 'Animation',
    title: 'Motion',
    blurb: 'Entrances and imperative transitions.',
    icon: 'refreshCw',
  },
  {
    group: 'Hooks',
    title: 'Hooks',
    blurb: 'Form state, storage, media queries and fetching.',
    icon: 'link',
  },
  {
    group: 'Utilities',
    title: 'Utilities',
    blurb: 'Formatting, slugs, truncation and ids.',
    icon: 'settings',
  },
  {
    group: 'Icons',
    title: 'Icons',
    blurb: '49 stroke glyphs, no icon package.',
    icon: 'star',
  },
]

/** Every catalogue entry, minus the installation guide. */
export const componentEntries = entries.filter((entry) => entry.group !== 'Getting Started')

/** Uppercase exports are components; hooks and helpers are lowercase. */
export const componentCount = Object.keys(CiteUI).filter((name) => /^[A-Z]/.test(name)).length

export const version = pkg.version

export function pathFor(entry) {
  return entry.id === 'getting-started' ? '/guide/installation' : `/components/${entry.id}`
}

const IMPORT_NAMES = {
  toast: 'ToastProvider, useToast',
  'use-form': 'useForm',
  'use-local-storage': 'useLocalStorage',
  'use-media-query': 'useMediaQuery',
  'use-fetch': 'useFetch',
  'format-kes': 'formatKES',
  'format-date': 'formatDate',
  'generate-id': 'generateId',
  'getting-started': null,
}

export function importName(entry) {
  if (entry.id in IMPORT_NAMES) return IMPORT_NAMES[entry.id]
  return entry.name
}

export function importStatement(entry) {
  const name = importName(entry)
  return name ? `import { ${name} } from 'cite-ui'` : null
}

const pageOrder = entries.map((entry) => entry.id)

const REPO = 'https://github.com/FrameStudio-cloud/cite-ui'

const SOURCE_OVERRIDES = {
  modal: 'src/components/Modal.jsx',
  toast: 'src/components/Toast/ToastContext.jsx',
  cn: 'src/utils/cn.jsx',
  'format-kes': 'src/utils/format.jsx',
  'format-date': 'src/utils/format.jsx',
  slugify: 'src/utils/format.jsx',
  truncate: 'src/utils/format.jsx',
  'generate-id': 'src/utils/format.jsx',
}

export function sourceFor(entry) {
  if (!entry || entry.id === 'getting-started') return null
  const path =
    SOURCE_OVERRIDES[entry.id] ||
    (entry.group === 'Hooks'
      ? `src/hooks/${entry.name}.jsx`
      : `src/components/${entry.name}/index.jsx`)
  return { path, url: `${REPO}/blob/main/${path}` }
}

export function neighbors(id) {
  const index = pageOrder.indexOf(id)
  return {
    prev: index > 0 ? entries[index - 1] : null,
    next: index >= 0 && index < entries.length - 1 ? entries[index + 1] : null,
  }
}
