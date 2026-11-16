/* ─── Existing Components (Enhanced) ─── */
export { default as Navbar } from './components/Navbar'
export { default as Button } from './components/Button'
export { default as Gallery } from './components/Gallery'
export { default as Modal } from './components/Modal'
export { ToastProvider, useToast } from './components/Toast/ToastContext'

/* ─── Layout Primitives ─── */
export { Container } from './components/Container'
export { Stack } from './components/Stack'
export { Grid } from './components/Grid'
export { Section } from './components/Section'
export { Divider } from './components/Divider'

/* ─── UI Components ─── */
export { Card } from './components/Card'
export { Badge } from './components/Badge'
export { Chip } from './components/Chip'
export { Avatar } from './components/Avatar'
export { Alert } from './components/Alert'
export { Spinner } from './components/Spinner'
export { Skeleton, SkeletonGroup } from './components/Skeleton'
export { Progress } from './components/Progress'
export { EmptyState } from './components/EmptyState'

/* ─── Form Components ─── */
export { TextField } from './components/TextField'
export { Textarea } from './components/Textarea'
export { Select } from './components/Select'
export { Checkbox } from './components/Checkbox'
export { Switch } from './components/Switch'

/* ─── Navigation & Overlays ─── */
export { Tabs, TabPanel } from './components/Tabs'
export { Accordion } from './components/Accordion'
export { Drawer } from './components/Drawer'
export { DropdownMenu } from './components/DropdownMenu'
export { Breadcrumbs } from './components/Breadcrumbs'
export { Pagination } from './components/Pagination'
export { Tooltip } from './components/Tooltip'
export { Table } from './components/Table'

/* ─── Page Sections ─── */
/* Removed in 2.0.0: Hero, Features, FAQ, Pricing, Footer, Stats, Testimonials,
   ContactSection. They were marketing page furniture, not primitives, and had no
   consumers in the FrameStudio apps. */

/* ─── Hooks ─── */
export { useForm } from './hooks/useForm'
export { useLocalStorage } from './hooks/useLocalStorage'
export { useMediaQuery } from './hooks/useMediaQuery'
export { useFetch } from './hooks/useFetch'

/* ─── Utilities ─── */
export { cn } from './utils/cn'
export { formatKES, formatDate, slugify, truncate, generateId } from './utils/format'

/* ─── Animation ─── */
export { Animate } from './components/Animate'
export { Motion } from './components/Motion'

/* ─── Search & scroll helpers ─── */
export { SearchBar } from './components/SearchBar'
export { BackToTop } from './components/BackToTop'

/* Removed in 2.0.0: CatalogueCard, CatalogueGrid, TrustBar, AnnouncementBar,
   LocationMap, ImageWithFallback, VariantPicker, CategoryFilter, ProductDetail,
   WhatsAppFloat. The Keel storefront owns these now. */

/* ─── Icon ─── */
export { Icon } from './components/Icon'
