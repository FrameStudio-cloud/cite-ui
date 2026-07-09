import React, { useState, createContext, useContext, useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import {
  Navbar, Button, Gallery, WhatsAppFloat, Modal,
  ToastProvider, useToast,
  Container, Stack, Grid, Section, Divider,
  Card, Badge, Chip, Avatar, Alert, Spinner, Skeleton, SkeletonGroup, Progress, EmptyState,
  TextField, Textarea, Select, Checkbox, Switch,
  Tabs, TabPanel, Accordion, Drawer, DropdownMenu, Breadcrumbs, Pagination, Tooltip, Table,
  Hero, Features, FAQ, Pricing, Footer, Stats, Testimonials, ContactSection,
  useForm, useLocalStorage, useMediaQuery, useFetch,
  cn, formatKES, formatDate, slugify, truncate, generateId,
  Icon, Animate, Motion,
  CatalogueCard, CatalogueGrid, SearchBar, BackToTop, TrustBar, AnnouncementBar, LocationMap,
} from "./index";

const ThemeCtx = createContext()
const useTheme = () => useContext(ThemeCtx)

const ThemeWrapper = ({ children }) => {
  const [theme, setTheme] = useLocalStorage("cite-ui-theme", "light")
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark")
  }, [theme])
  const toggle = () => setTheme((t) => (t === "light" ? "dark" : "light"))
  return <ThemeCtx.Provider value={{ theme, toggle }}>{children}</ThemeCtx.Provider>
}

const useActiveSection = (ids) => {
  const [active, setActive] = useState(ids[0] || "")
  useEffect(() => {
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting)
        if (visible.length > 0) {
          const top = visible.reduce((prev, curr) =>
            curr.boundingClientRect.top < prev.boundingClientRect.top ? curr : prev
          )
          setActive(top.target.id)
        }
      },
      { rootMargin: "-80px 0px -60% 0px" },
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [ids])
  return active
}

const links = [{ label: "Home", href: "#" }, { label: "About", href: "#" }, { label: "Services", href: "#" }]
const images = Array.from({ length: 6 }, (_, i) => ({ src: `https://picsum.photos/seed/${String.fromCharCode(97 + i)}/400/300`, alt: `Image ${i + 1}` }))
const POSITIONS = ["top-right", "top-left", "top-center", "bottom-right", "bottom-left", "bottom-center"]

const product = {
  name: "Wireless Headphones",
  description: "Premium noise-cancelling wireless headphones with 30-hour battery life.",
  price: "KSh 12,500",
  image: "https://picsum.photos/seed/headphones/400/300",
}

const NAV_ITEMS = [
  { group: "Layout", items: [{ id: "container", label: "Container" }, { id: "stack-grid", label: "Stack & Grid" }, { id: "section", label: "Section" }, { id: "divider", label: "Divider" }] },
  { group: "UI", items: [{ id: "card", label: "Card" }, { id: "badge", label: "Badge" }, { id: "chip", label: "Chip" }, { id: "avatar", label: "Avatar" }, { id: "alert", label: "Alert" }, { id: "spinner", label: "Spinner" }, { id: "skeleton", label: "Skeleton" }, { id: "progress", label: "Progress" }, { id: "empty", label: "EmptyState" }] },
  { group: "Form", items: [{ id: "textfield", label: "TextField" }, { id: "textarea", label: "Textarea" }, { id: "select", label: "Select" }, { id: "checkbox", label: "Checkbox" }, { id: "switch", label: "Switch" }] },
  { group: "Nav", items: [{ id: "tabs", label: "Tabs" }, { id: "accordion", label: "Accordion" }, { id: "drawer", label: "Drawer" }, { id: "dropdown", label: "DropdownMenu" }, { id: "breadcrumbs", label: "Breadcrumbs" }, { id: "pagination", label: "Pagination" }, { id: "tooltip", label: "Tooltip" }, { id: "table", label: "Table" }] },
  { group: "Sections", items: [{ id: "hero", label: "Hero" }, { id: "features", label: "Features" }, { id: "faq", label: "FAQ" }, { id: "pricing", label: "Pricing" }, { id: "stats", label: "Stats" }, { id: "testimonials", label: "Testimonials" }, { id: "contact", label: "Contact" }, { id: "footer", label: "Footer" }] },
  { group: "Legacy", items: [{ id: "navbar", label: "Navbar" }, { id: "button", label: "Button" }, { id: "gallery", label: "Gallery" }, { id: "whatsapp", label: "WhatsAppFloat" }, { id: "toast", label: "Toast" }, { id: "modal", label: "Modal" }] },
  { group: "Hooks", items: [{ id: "use-form", label: "useForm" }, { id: "use-local-storage", label: "useLocalStorage" }, { id: "use-media-query", label: "useMediaQuery" }, { id: "use-fetch", label: "useFetch" }] },
  { group: "Utils", items: [{ id: "format-kes", label: "formatKES" }, { id: "text-utils", label: "text helpers" }] },
  { group: "Animation", items: [{ id: "animate", label: "Animate" }, { id: "motion", label: "Motion" }] },
  { group: "Mini Catalogue", items: [{ id: "catalogue-card", label: "CatalogueCard" }, { id: "catalogue-grid", label: "CatalogueGrid" }, { id: "search-bar", label: "SearchBar" }, { id: "back-to-top", label: "BackToTop" }, { id: "trust-bar", label: "TrustBar" }, { id: "announcement-bar", label: "AnnouncementBar" }, { id: "location-map", label: "LocationMap" }] },
]

const CodeBlock = ({ code }) => {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-t border-gray-200 dark:border-gray-700">
      <button onClick={() => setOpen((v) => !v)} className="flex items-center gap-2 w-full px-6 py-2.5 text-xs font-mono text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
        <span className={`transition-transform ${open ? "rotate-90" : ""}`}>&#9654;</span>
        {open ? "Hide code" : "Show code"}
      </button>
      {open && <pre className="bg-gray-950 text-gray-100 text-xs leading-relaxed overflow-x-auto p-4 m-0 rounded-b-xl">{code}</pre>}
    </div>
  )
}

const DemoCard = ({ badge, badgeColor, title, description, children, code }) => (
  <div id={title.toLowerCase().replace(/\s+/g, "-")} className="scroll-mt-20">
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden mb-8">
      <div className={`h-1 ${badgeColor}`} />
      <div className="px-6 py-5">
        <span className={`inline-block text-[10px] font-semibold tracking-widest uppercase px-2 py-0.5 rounded-full mb-3 ${badge === "Layout" ? "bg-violet-100 text-violet-800 dark:bg-violet-900 dark:text-violet-200" : badge === "Section" ? "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200" : badge === "Form" ? "bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200" : badge === "Nav" ? "bg-rose-100 text-rose-800 dark:bg-rose-900 dark:text-rose-200" : badge === "UI" ? "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200" : badge === "Component" ? "bg-gray-900 text-white dark:bg-white dark:text-gray-900" : badge === "Hook" ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200" : "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"}`}>
          {badge}
        </span>
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{title}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">{description}</p>
        <div className="p-6 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-100 dark:border-gray-800">{children}</div>
      </div>
      {code && <CodeBlock code={code} />}
    </div>
  </div>
)

const ToastDemo = ({ position, onPositionChange }) => {
  const { toast } = useToast()
  return (
    <div className="flex flex-wrap gap-3 items-center">
      <Button variant="primary" label="Success" size="sm" onClick={() => toast.success("Done!")} />
      <Button variant="secondary" label="Error" size="sm" onClick={() => toast.error("Oops!")} />
      <Button variant="secondary" label="Warning" size="sm" onClick={() => toast.warning("Check input")} />
      <Button variant="secondary" label="Info" size="sm" onClick={() => toast.info("Profile updated")} />
      <Button variant="secondary" label="Promise" size="sm" onClick={() => toast.promise(new Promise(r => setTimeout(r, 1500)), { loading: "Loading...", success: "Loaded!", error: "Failed" })} />
      <span className="w-px h-5 bg-gray-300 dark:bg-gray-600" />
      <span className="text-xs text-gray-400">Pos:</span>
      <select value={position} onChange={(e) => onPositionChange(e.target.value)} className="text-xs border border-gray-300 dark:border-gray-600 rounded px-2 py-1 bg-white dark:bg-gray-800 dark:text-gray-200">
        {POSITIONS.map((p) => <option key={p} value={p}>{p}</option>)}
      </select>
    </div>
  )
}

const FormDemo = () => {
  const { values, errors, touched, submitting, handleChange, handleBlur, handleSubmit, reset } = useForm({
    initial: { name: "", email: "", message: "" },
    validate: { name: "required", email: ["required", "email"], message: ["required", (v) => v && v.length < 10 ? "At least 10 characters" : ""] },
    onSubmit: (vals) => alert(`Submitted:\n${JSON.stringify(vals, null, 2)}`),
  })
  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto space-y-4">
      <TextField label="Name" name="name" value={values.name} onChange={handleChange} onBlur={handleBlur} error={touched.name && errors.name} required />
      <TextField label="Email" name="email" type="email" value={values.email} onChange={handleChange} onBlur={handleBlur} error={touched.email && errors.email} required icon="mail" />
      <Textarea label="Message" name="message" value={values.message} onChange={handleChange} onBlur={handleBlur} error={touched.message && errors.message} required showCount maxLength={500} />
      <div className="flex gap-2">
        <Button variant="primary" label={submitting ? "Sending..." : "Submit"} type="submit" loading={submitting} />
        <Button variant="secondary" label="Reset" onClick={reset} />
      </div>
    </form>
  )
}

const LocalStorageDemo = () => {
  const [val, setVal] = useLocalStorage("cite-ui-demo", "default value")
  return (
    <div className="space-y-3 max-w-sm">
      <TextField value={val} onChange={(e) => setVal(e.target.value)} placeholder="Type something..." />
      <p className="text-xs text-gray-400">Type something and refresh — it persists.</p>
    </div>
  )
}

const MediaQueryDemo = () => {
  const isSm = useMediaQuery("(min-width: 640px)")
  const isMd = useMediaQuery("(min-width: 768px)")
  const isLg = useMediaQuery("(min-width: 1024px)")
  const isDark = useMediaQuery("(prefers-color-scheme: dark)")
  return (
    <div className="text-sm font-mono space-y-1">
      {[{ label: "sm (640px+)", val: isSm }, { label: "md (768px+)", val: isMd }, { label: "lg (1024px+)", val: isLg }].map(({ label, val }) => (
        <p key={label}>{label} <span className={`ml-2 font-semibold ${val ? "text-emerald-600" : "text-red-500"}`}>{val ? "true" : "false"}</span></p>
      ))}
      <p className="pt-1 text-gray-400">System prefers dark <span className="ml-2">{isDark ? "yes" : "no"}</span></p>
    </div>
  )
}

const FetchDemo = () => {
  const [url, setUrl] = useState("https://jsonplaceholder.typicode.com/todos/1")
  const { data, loading, error, refetch } = useFetch(url)
  return (
    <div className="space-y-3">
      <div className="flex gap-2">
        <input value={url} onChange={(e) => setUrl(e.target.value)} className="flex-1 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-xs font-mono bg-white dark:bg-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-black/20" />
        <Button variant="primary" label="Fetch" onClick={refetch} size="sm" />
      </div>
      <pre className="bg-gray-950 text-gray-100 rounded-lg p-4 text-xs font-mono overflow-x-auto min-h-[48px]">{loading ? "Loading..." : error ? `Error: ${error}` : data ? JSON.stringify(data, null, 2) : "No data"}</pre>
    </div>
  )
}

const MotionDemo = () => {
  const [pos, setPos] = useState({ x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 })
  const anims = [
    { label: "Move right", fn: () => setPos((p) => ({ ...p, x: p.x + 40, y: p.y - 20 })) },
    { label: "Move left", fn: () => setPos((p) => ({ ...p, x: p.x - 40, y: p.y + 20 })) },
    { label: "Rotate +15°", fn: () => setPos((p) => ({ ...p, rotate: p.rotate + 15 })) },
    { label: "Scale 1.5x", fn: () => setPos((p) => ({ ...p, scale: 1.5 })) },
    { label: "Fade out", fn: () => setPos((p) => ({ ...p, opacity: 0.2 })) },
    { label: "Reset", fn: () => setPos({ x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }) },
  ]
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-center h-48 bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden">
        <Motion.div
          animate={pos}
          transition={{ duration: 500 }}
        >
          <div className="w-20 h-20 bg-gradient-to-br from-pink-400 to-purple-500 rounded-2xl flex items-center justify-center text-white text-lg shadow-lg">
            ✦
          </div>
        </Motion.div>
      </div>
      <div className="flex flex-wrap gap-2 justify-center">
        {anims.map((a) => (
          <Button key={a.label} variant={a.label === "Reset" ? "secondary" : "primary"} label={a.label} size="sm" onClick={a.fn} />
        ))}
      </div>
    </div>
  )
}

const Sidebar = ({ active }) => {
  const { theme, toggle } = useTheme()
  return (
    <aside className="fixed top-0 left-0 w-56 h-screen bg-gray-950 text-gray-300 flex flex-col z-40">
      <div className="px-5 py-6 border-b border-gray-800">
        <h1 className="text-white text-lg font-bold tracking-tight">cite-ui</h1>
        <p className="text-[11px] text-gray-500 mt-0.5">v1.0.0 playground <a href="/docs.html" className="text-gray-500 hover:text-white underline underline-offset-2 ml-2 transition-colors">Docs</a></p>
      </div>
      <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-5 text-sm">
        {NAV_ITEMS.map((group) => (
          <div key={group.group}>
            <p className="text-[10px] font-semibold tracking-widest text-gray-600 uppercase mb-2 px-2">{group.group}</p>
            <div className="space-y-0.5">
              {group.items.map((item) => {
                const isActive = active === item.id
                return (
                  <a key={item.id} href={`#${item.id}`} className={`block px-2 py-1.5 rounded-md transition-colors ${isActive ? "bg-white/10 text-white font-medium" : "text-gray-400 hover:text-white hover:bg-gray-800"}`}>{item.label}</a>
                )
              })}
            </div>
          </div>
        ))}
      </nav>
      <div className="px-3 py-4 border-t border-gray-800">
        <button onClick={toggle} className="flex items-center gap-2 w-full px-2 py-1.5 rounded-md text-sm text-gray-400 hover:text-white hover:bg-gray-800 transition-colors">
          <span>{theme === "dark" ? "☀️" : "🌙"}</span>
          {theme === "dark" ? "Light mode" : "Dark mode"}
        </button>
      </div>
    </aside>
  )
}

const sectionIds = NAV_ITEMS.flatMap((g) => g.items.map((i) => i.id))

const App = () => {
  const [position, setPosition] = useState("top-right")
  const [modalOpen, setModalOpen] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [page, setPage] = useState(1)
  const activeSection = useActiveSection(sectionIds)

  const tableColumns = [
    { key: "name", label: "Name" },
    { key: "email", label: "Email" },
    { key: "role", label: "Role" },
    { key: "status", label: "Status", render: (v) => <Badge color={v === "Active" ? "green" : "gray"} size="sm">{v}</Badge> },
  ]
  const tableData = [
    { id: 1, name: "John Doe", email: "john@example.com", role: "Developer", status: "Active" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Designer", status: "Active" },
    { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "Manager", status: "Inactive" },
  ]

  const accordionItems = [
    { title: "What is cite-ui?", content: "A React component library built for faster project development with Tailwind CSS." },
    { title: "How do I install it?", content: "Run npm install cite-ui and add it to your Tailwind content config." },
    { title: "Is it free?", content: "Yes, it's open source under the MIT license." },
  ]

  const features = [
    { icon: "zap", title: "Fast Setup", description: "Install once, import anywhere. Works with any Tailwind project." },
    { icon: "layers", title: "40+ Components", description: "From buttons to full page sections — everything you need." },
    { icon: "moon", title: "Dark Mode", description: "Built-in dark mode support with class-based toggling." },
  ]

  const pricingPlans = [
    { name: "Starter", price: "Free", description: "Perfect for side projects", cta: "Get Started", features: [{ label: "Core components" }, { label: "Community support" }, { label: "MIT license" }] },
    { name: "Pro", price: "KES 2,500", period: "/mo", description: "For professional developers", highlighted: true, badge: "Popular", cta: "Start Free Trial", features: [{ label: "All components" }, { label: "Priority support" }, { label: "Custom themes" }, { label: "Early access" }] },
    { name: "Enterprise", price: "Custom", description: "For teams and agencies", cta: "Contact Sales", features: [{ label: "Everything in Pro" }, { label: "White-labeling" }, { label: "Dedicated support" }, { label: "Custom development" }] },
  ]

  const stats = [
    { value: "40+", label: "Components" },
    { value: "Zero", label: "Dependencies" },
    { value: "100%", label: "Tailwind CSS" },
    { value: "MIT", label: "License" },
  ]

  const testimonials = [
    { quote: "This library saved us weeks of development time. The components are well-designed and easy to customize.", name: "Lewis Irungu", role: "Developer", avatar: "https://i.pravatar.cc/80?img=1", rating: 5 },
    { quote: "The form system alone is worth it. Validation, error handling, everything just works out of the box.", name: "Sarah Wanjiku", role: "Designer", rating: 5 },
    { quote: "I built a complete landing page in under an hour. The section components are incredibly composable.", name: "Kevin Omondi", role: "Freelancer", rating: 5 },
  ]

  return (
    <ThemeWrapper>
      <ToastProvider position={position}>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors">
          <Sidebar active={activeSection} />
          <div className="ml-56">
            <div className="bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white px-8 py-16">
              <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold tracking-tight mb-2">cite-ui v1.0</h1>
                <p className="text-gray-400 mb-6">40+ React components, hooks, and utilities — zero runtime dependencies.</p>
                <div className="flex items-center gap-3 mb-6">
                  <code className="bg-white/10 text-gray-200 px-4 py-2 rounded-lg text-sm font-mono">npm install cite-ui</code>
                </div>
              </div>
            </div>

            <div className="max-w-4xl mx-auto px-8 py-10">

              {/* Layout */}
              <p className="text-[10px] font-semibold tracking-widest text-violet-600 dark:text-violet-400 uppercase mb-4">Layout</p>

              <DemoCard badge="Layout" badgeColor="bg-violet-500" title="Container" description="Max-width wrapper with responsive padding. Sizes: sm, md, lg, xl, full, 7xl." code={`<Container maxWidth="lg">content</Container>`}>
                <Container maxWidth="sm" className="bg-gray-200 dark:bg-gray-700 rounded-lg p-4"><p className="text-sm text-gray-500 text-center">max-w-sm container</p></Container>
              </DemoCard>

              <DemoCard badge="Layout" badgeColor="bg-violet-500" title="Stack & Grid" description="Stack (flex) and Grid (CSS Grid) layout primitives." code={`<Stack gap={4}><div/><div/></Stack>\n<Grid columns={{ default:1, md:3 }} gap={6}><div/><div/><div/></Grid>`}>
                <Stack gap={3} className="mb-6">
                  <div className="bg-gray-200 dark:bg-gray-700 rounded-lg p-4 text-sm text-center">Stack item 1</div>
                  <div className="bg-gray-200 dark:bg-gray-700 rounded-lg p-4 text-sm text-center">Stack item 2</div>
                </Stack>
                <Grid columns={{ default: 1, md: 3 }} gap={4}>
                  {["Grid 1", "Grid 2", "Grid 3"].map((g, i) => <div key={i} className="bg-gray-200 dark:bg-gray-700 rounded-lg p-4 text-sm text-center">{g}</div>)}
                </Grid>
              </DemoCard>

              <DemoCard badge="Layout" badgeColor="bg-violet-500" title="Section" description="Spacing wrapper for page sections. Sizes: none, sm, md, lg, xl." code={`<Section padding="lg" bg="bg-gray-50">content</Section>`}>
                <Section padding="md" className="bg-gray-200 dark:bg-gray-700 rounded-lg"><p className="text-sm text-gray-500 text-center">Section with md padding</p></Section>
              </DemoCard>

              <DemoCard badge="Layout" badgeColor="bg-violet-500" title="Divider" description="Horizontal or vertical divider with optional label." code={`<Divider label="or" />`}>
                <Stack direction="horizontal" gap={4} align="center">
                  <span className="text-xs text-gray-400">Left</span>
                  <Divider orientation="vertical" />
                  <span className="text-xs text-gray-400">Right</span>
                </Stack>
                <Divider label="section divider" className="my-4" />
              </DemoCard>

              {/* UI */}
              <p className="text-[10px] font-semibold tracking-widest text-indigo-600 dark:text-indigo-400 uppercase mb-4 mt-12">UI</p>

              <DemoCard badge="UI" badgeColor="bg-indigo-500" title="Card" description="Versatile content container with 4 variants and 4 padding sizes." code={`<Card variant="elevated" padding="md" hover>content</Card>`}>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {["elevated", "outlined", "flat", "bordered"].map((v) => (
                    <Card key={v} variant={v} padding="sm" hover>
                      <p className="text-sm font-medium text-gray-900 dark:text-white capitalize">{v}</p>
                      <p className="text-xs text-gray-500 mt-1">Card variant</p>
                    </Card>
                  ))}
                </div>
              </DemoCard>

              <DemoCard badge="UI" badgeColor="bg-indigo-500" title="Badge" description="Small labels with 8 color options and 3 sizes." code={`<Badge color="green" size="sm">Active</Badge>`}>
                <div className="flex flex-wrap gap-2">
                  {["gray", "red", "green", "blue", "amber", "purple", "pink", "black"].map((c) => (
                    <Badge key={c} color={c}>{c}</Badge>
                  ))}
                </div>
              </DemoCard>

              <DemoCard badge="UI" badgeColor="bg-indigo-500" title="Chip" description="Removable tags with optional click handler." code={`<Chip color="blue" onRemove={fn}>Tag</Chip>`}>
                <div className="flex flex-wrap gap-2">
                  {["blue", "green", "red", "amber"].map((c) => (
                    <Chip key={c} color={c} onRemove={() => {}}>{c} tag</Chip>
                  ))}
                </div>
              </DemoCard>

              <DemoCard badge="UI" badgeColor="bg-indigo-500" title="Avatar" description="Image or initial-based avatars with 6 sizes and 5 colors." code={`<Avatar name="John Doe" size="md" />`}>
                <div className="flex items-center gap-4 flex-wrap">
                  <Avatar name="John Doe" size="sm" />
                  <Avatar name="Jane Smith" size="md" color="blue" />
                  <Avatar name="Bob Johnson" size="lg" color="green" />
                  <Avatar src="https://i.pravatar.cc/80?img=1" size="md" />
                  <Avatar size="xl" color="purple" />
                </div>
              </DemoCard>

              <DemoCard badge="UI" badgeColor="bg-indigo-500" title="Alert" description="Contextual notification banners. 4 types, dismissible." code={`<Alert type="success" title="Done!" message="Saved successfully." dismissible />`}>
                <Stack gap={3}>
                  {(["info", "success", "warning", "error"]).map((t) => (
                    <Alert key={t} type={t} title={t.charAt(0).toUpperCase() + t.slice(1)} message={`This is a ${t} alert message.`} dismissible />
                  ))}
                </Stack>
              </DemoCard>

              <DemoCard badge="UI" badgeColor="bg-indigo-500" title="Spinner" description="Loading spinner with 5 sizes." code={`<Spinner size="md" />`}>
                <div className="flex items-center gap-4">
                  {["xs", "sm", "md", "lg", "xl"].map((s) => (
                    <Spinner key={s} size={s} />
                  ))}
                </div>
              </DemoCard>

              <DemoCard badge="UI" badgeColor="bg-indigo-500" title="Skeleton" description="Loading placeholder with 8 variants." code={`<Skeleton variant="card" />\n<SkeletonGroup count={3} variant="text" />`}>
                <Stack gap={4}>
                  <div className="flex items-center gap-4">
                    <Skeleton variant="avatar" />
                    <div className="flex-1 space-y-2">
                      <Skeleton variant="title" />
                      <Skeleton variant="text" />
                    </div>
                  </div>
                  <Skeleton variant="image" />
                </Stack>
              </DemoCard>

              <DemoCard badge="UI" badgeColor="bg-indigo-500" title="Progress" description="Progress bar with color and size options." code={`<Progress value={65} color="green" showLabel />`}>
                <Stack gap={4}>
                  <Progress value={35} showLabel />
                  <Progress value={65} color="blue" showLabel />
                  <Progress value={90} color="green" showLabel size="sm" />
                </Stack>
              </DemoCard>

              <DemoCard badge="UI" badgeColor="bg-indigo-500" title="EmptyState" description="Empty view placeholder with optional action." code={`<EmptyState icon="inbox" title="No items" message="Nothing here yet." actionLabel="Add Item" onAction={fn} />`}>
                <EmptyState icon="inbox" title="No messages yet" message="Your inbox is empty. Start a conversation to see messages here." actionLabel="New Message" onAction={() => {}} />
              </DemoCard>

              {/* Form */}
              <p className="text-[10px] font-semibold tracking-widest text-cyan-600 dark:text-cyan-400 uppercase mb-4 mt-12">Form</p>

              <DemoCard badge="Form" badgeColor="bg-cyan-500" title="TextField" description="Input with label, error, icons, clearable, password toggle." code={`<TextField label="Email" icon="mail" clearable />`}>
                <Stack gap={4} className="max-w-sm">
                  <TextField label="Default" name="default" placeholder="Placeholder..." />
                  <TextField label="With Icon" name="icon" placeholder="Email address..." icon="mail" />
                  <TextField label="Password" name="password" type="password" placeholder="Enter password" />
                  <TextField label="Clearable" name="clearable" placeholder="Type and clear..." clearable />
                  <TextField label="With Error" name="error" value="bad" error="This field has an error" />
                </Stack>
              </DemoCard>

              <DemoCard badge="Form" badgeColor="bg-cyan-500" title="Textarea" description="Multi-line text input with character count." code={`<Textarea label="Message" showCount maxLength={500} />`}>
                <Textarea label="Message" name="msg" placeholder="Write something..." showCount maxLength={500} className="max-w-sm" />
              </DemoCard>

              <DemoCard badge="Form" badgeColor="bg-cyan-500" title="Select" description="Native select with custom styling." code={`<Select options={[{value:'a', label:'Option A'}]} />`}>
                <Select label="Choose option" options={[{ value: "1", label: "Option 1" }, { value: "2", label: "Option 2" }, { value: "3", label: "Option 3" }]} placeholder="Select..." className="max-w-sm" />
              </DemoCard>

              <DemoCard badge="Form" badgeColor="bg-cyan-500" title="Checkbox" description="Custom checkbox with label and indeterminate state." code={`<Checkbox label="Accept terms" checked={true} />`}>
                <Stack gap={3}>
                  <Checkbox label="Default checkbox" />
                  <Checkbox label="Checked" checked />
                  <Checkbox label="Indeterminate" indeterminate />
                  <Checkbox label="Disabled" disabled checked />
                </Stack>
              </DemoCard>

              <DemoCard badge="Form" badgeColor="bg-cyan-500" title="Switch" description="Toggle switch with 3 sizes." code={`<Switch label="Dark mode" checked={true} />`}>
                <Stack gap={3}>
                  {(["sm", "md", "lg"]).map((s) => (
                    <Switch key={s} label={`Switch ${s}`} size={s} />
                  ))}
                </Stack>
              </DemoCard>

              {/* Navigation */}
              <p className="text-[10px] font-semibold tracking-widest text-rose-600 dark:text-rose-400 uppercase mb-4 mt-12">Navigation</p>

              <DemoCard badge="Nav" badgeColor="bg-rose-500" title="Tabs" description="Tabbed interfaces with 3 variants." code={`<Tabs tabs={[{ label: 'Tab 1' }]} variant="underline" />`}>
                <Stack gap={4}>
                  <Tabs tabs={[{ label: "Underline" }, { label: "Active" }]} variant="underline" />
                  <Tabs tabs={[{ label: "Pill" }, { label: "Style" }]} variant="pill" />
                  <Tabs tabs={[{ label: "Buttons" }, { label: "Variant" }]} variant="buttons" />
                </Stack>
              </DemoCard>

              <DemoCard badge="Nav" badgeColor="bg-rose-500" title="Accordion" description="Collapsible content panels. Single or multi-open." code={`<Accordion items={[{ title: 'Question', content: 'Answer' }]} />`}>
                <Accordion items={accordionItems} />
              </DemoCard>

              <DemoCard badge="Nav" badgeColor="bg-rose-500" title="Drawer" description="Slide-in panel from any side. Sizes sm-lg." code={`<Drawer isOpen={open} onClose={fn} title="Title" side="right">content</Drawer>`}>
                <Button variant="primary" label="Open Drawer" onClick={() => setDrawerOpen(true)} />
              </DemoCard>

              <DemoCard badge="Nav" badgeColor="bg-rose-500" title="DropdownMenu" description="Contextual dropdown with icons and separators." code={`<DropdownMenu trigger={<Button label="Menu" />} items={[{ label: 'Action', onClick: fn }]} />`}>
                <DropdownMenu trigger={<Button variant="outline" label="Open Menu" size="sm" />} items={[
                  { label: "Profile", icon: "user", onClick: () => {} },
                  { label: "Settings", icon: "settings", onClick: () => {} },
                  { separator: true },
                  { label: "Logout", icon: "x", onClick: () => {} },
                ]} />
              </DemoCard>

              <DemoCard badge="Nav" badgeColor="bg-rose-500" title="Breadcrumbs" description="Navigation trail with configurable separator." code={`<Breadcrumbs items={[{ label: 'Home', href: '#' }, { label: 'Current' }]} />`}>
                <Breadcrumbs items={[{ label: "Home", href: "#" }, { label: "Products", href: "#" }, { label: "Wireless Headphones" }]} />
              </DemoCard>

              <DemoCard badge="Nav" badgeColor="bg-rose-500" title="Pagination" description="Page navigation with ellipsis for large sets." code={`<Pagination current={1} total={10} onChange={fn} />`}>
                <Pagination current={page} total={10} onChange={setPage} />
              </DemoCard>

              <DemoCard badge="Nav" badgeColor="bg-rose-500" title="Tooltip" description="Hover tooltips in 4 positions." code={`<Tooltip content="Tooltip text" position="top"><button>Hover me</button></Tooltip>`}>
                <div className="flex gap-4 justify-center">
                  {["top", "bottom", "left", "right"].map((p) => (
                    <Tooltip key={p} content={`${p} tooltip`} position={p}>
                      <span className="text-sm text-gray-500 bg-gray-100 dark:bg-gray-800 px-3 py-1.5 rounded-lg cursor-default">{p}</span>
                    </Tooltip>
                  ))}
                </div>
              </DemoCard>

              <DemoCard badge="Nav" badgeColor="bg-rose-500" title="Table" description="Data table with sorting, striped rows, and click handlers." code={`<Table columns={[...]} data={[...]} sortable />`}>
                <Table columns={tableColumns} data={tableData} sortable striped />
              </DemoCard>

              {/* Section demos are lighter - just preview cards */}
              <p className="text-[10px] font-semibold tracking-widest text-orange-600 dark:text-orange-400 uppercase mb-4 mt-12">Sections</p>

              <DemoCard badge="Section" badgeColor="bg-orange-500" title="Hero" description="Page hero with 4 variants (split, centered, bg-dark, default)." code={`<Hero title="Headline" subtitle="Subtext" primaryCta={{ label: "Get Started" }} image={{ src: "..." }} />`}>
                <Hero
                  title="Build faster with cite-ui"
                  subtitle="40+ components for React + Tailwind. Zero runtime dependencies. Build production-ready sites in hours, not weeks."
                  primaryCta={{ label: "Get Started", variant: "primary", size: "md" }}
                  secondaryCta={{ label: "Learn More", variant: "outline", size: "md" }}
                  image={{ src: "https://picsum.photos/seed/cite/600/400", alt: "Preview" }}
                />
              </DemoCard>

              <DemoCard badge="Section" badgeColor="bg-orange-500" title="Features" description="Feature grid with icon, title, description. Card or inline variants." code={`<Features features={[{ icon: "zap", title: "Fast", description: "..." }]} columns={3} />`}>
                <Features features={features} columns={3} />
              </DemoCard>

              <DemoCard badge="Section" badgeColor="bg-orange-500" title="FAQ" description="FAQ section using Accordion component." code={`<FAQ title="FAQs" items={[...]} />`}>
                <FAQ items={accordionItems} />
              </DemoCard>

              <DemoCard badge="Section" badgeColor="bg-orange-500" title="Pricing" description="Pricing cards with feature lists and highlighted plan." code={`<Pricing plans={[...]} />`}>
                <Pricing plans={pricingPlans} columns={3} />
              </DemoCard>

              <DemoCard badge="Section" badgeColor="bg-orange-500" title="Stats" description="Statistics grid with two variants." code={`<Stats stats={[...]} variant="grid" />`}>
                <Stats stats={stats} variant="grid" />
              </DemoCard>

              <DemoCard badge="Section" badgeColor="bg-orange-500" title="Testimonials" description="Testimonial cards with avatar, quote, rating." code={`<Testimonials testimonials={[...]} variant="grid" />`}>
                <Testimonials testimonials={testimonials} variant="grid" />
              </DemoCard>

              <DemoCard badge="Section" badgeColor="bg-orange-500" title="ContactSection" description="Contact form with useForm validation + info sidebar." code={`<ContactSection fields={[...]} contactInfo={[...]} />`}>
                <ContactSection
                  fields={[
                    { name: "name", label: "Full Name", type: "text", validation: "required" },
                    { name: "email", label: "Email", type: "email", validation: ["required", "email"] },
                    { name: "message", label: "Message", type: "textarea", validation: "required" },
                  ]}
                  contactInfo={[
                    { icon: "mail", label: "Email", value: "hello@cite-ui.dev" },
                    { icon: "phone", label: "Phone", value: "+254 712 345 678" },
                    { icon: "mapPin", label: "Location", value: "Nairobi, Kenya" },
                  ]}
                  onSubmit={(v) => alert(JSON.stringify(v, null, 2))}
                />
              </DemoCard>

              <DemoCard badge="Section" badgeColor="bg-orange-500" title="Footer" description="Multi-column site footer with brand, social, link groups." code={`<Footer brand="CiteUI" links={[...]} social={[...]} copyright="© 2026" />`}>
                <Footer
                  brand="CiteUI"
                  description="A React component library for building beautiful sites faster."
                  links={[
                    { title: "Product", items: [{ label: "Components", href: "#" }, { label: "Hooks", href: "#" }, { label: "Utilities", href: "#" }] },
                    { title: "Company", items: [{ label: "About", href: "#" }, { label: "Blog", href: "#" }, { label: "Contact", href: "#" }] },
                    { title: "Legal", items: [{ label: "Privacy", href: "#" }, { label: "Terms", href: "#" }, { label: "License", href: "#" }] },
                  ]}
                  social={[
                    { icon: "globe", href: "#", label: "Website" },
                    { icon: "mail", href: "#", label: "Email" },
                  ]}
                  copyright="© 2026 CiteUI. MIT License."
                />
              </DemoCard>

              {/* Legacy */}
              <p className="text-[10px] font-semibold tracking-widest text-gray-600 dark:text-gray-400 uppercase mb-4 mt-12">Existing Components</p>

              <DemoCard badge="Component" badgeColor="bg-gray-900" title="Navbar" description="Sticky nav with glass variant, scroll-aware, mobile hamburger."
                code={`<Navbar logo="Brand" links={links} ctaLabel="Get Started" ctaHref="#" />\n<Navbar variant="glass" logo="Brand" links={links} cartCount={3} onCartClick={fn} />`}>
                <div className="mb-4 overflow-hidden border border-gray-200 dark:border-gray-700 rounded-lg">
                  <Navbar logo="FrameStudio" links={links} ctaLabel="Get Started" ctaHref="#" />
                </div>
                <div className="overflow-hidden border border-gray-200 dark:border-gray-700 rounded-lg" style={{ background: "linear-gradient(135deg, #667eea, #764ba2)" }}>
                  <Navbar variant="glass" logo="FrameStudio" links={links} cartCount={3} onCartClick={() => {}} />
                </div>
              </DemoCard>

              <DemoCard badge="Component" badgeColor="bg-gray-900" title="Button" description="6 variants, 5 sizes, loading states, icons. Renders as link with href."
                code={`<Button variant="primary" label="Primary" icon="arrowRight" iconPosition="right" />\n<Button variant="danger" label="Delete" loading />`}>
                <Stack gap={3} className="flex-wrap">
                  {["primary", "secondary", "outline", "ghost", "danger", "whatsapp"].map((v) => (
                    <Button key={v} variant={v} label={v.charAt(0).toUpperCase() + v.slice(1)} onClick={() => {}} />
                  ))}
                </Stack>
                <Stack gap={3} className="flex-wrap mt-5 pt-5 border-t border-gray-200 dark:border-gray-700">
                  {["xs", "sm", "md", "lg", "xl"].map((s) => (
                    <Button key={s} variant="primary" label={s.toUpperCase()} size={s} onClick={() => {}} />
                  ))}
                </Stack>
                <Stack gap={3} className="flex-wrap mt-5 pt-5 border-t border-gray-200 dark:border-gray-700">
                  <Button variant="primary" label="Loading" loading onClick={() => {}} />
                  <Button variant="primary" label="Disabled" disabled onClick={() => {}} />
                  <Button variant="primary" label="With Icon" icon="arrowRight" iconPosition="right" onClick={() => {}} />
                  <Button variant="primary" label="as Link" href="#" />
                </Stack>
              </DemoCard>

              <DemoCard badge="Component" badgeColor="bg-gray-900" title="Gallery" description="Responsive grid with lightbox. Keyboard dismiss, lazy loading." code={`<Gallery images={images} columns={3} gap={4} />`}>
                <Gallery images={images} columns={3} gap={4} />
              </DemoCard>

              <DemoCard badge="Component" badgeColor="bg-gray-900" title="WhatsAppFloat" description="Floating WhatsApp button with tooltip and pulse animation." code={`<WhatsAppFloat phoneNumber="254712345678" />`}>
                <div className="relative h-28 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                  <p className="text-xs text-gray-400">Floating button — visible bottom-right of viewport</p>
                </div>
                <WhatsAppFloat phoneNumber="254712345678" />
              </DemoCard>

              <DemoCard badge="Component" badgeColor="bg-gray-900" title="Toast" description="Context-based notifications with promise support, 6 positions." code={`<ToastProvider position="top-right"><App /></ToastProvider>\nconst { toast } = useToast()\ntoast.success("Done!")`}>
                <ToastDemo position={position} onPositionChange={setPosition} />
              </DemoCard>

              <DemoCard badge="Component" badgeColor="bg-gray-900" title="Modal" description="Overlay modal with sizes, esc to close, backdrop blur." code={`<Modal isOpen={open} onClose={fn} title="Title" size="md">content</Modal>`}>
                <Button variant="primary" label="Open Modal" onClick={() => setModalOpen(true)} />
              </DemoCard>

              {/* Animation */}
              <p className="text-[10px] font-semibold tracking-widest text-pink-600 dark:text-pink-400 uppercase mb-4 mt-12">Animation</p>

              <DemoCard badge="Animation" badgeColor="bg-pink-500" title="Animate" description="Mount, viewport, and exit entrance animations. 8 types: fadeIn, fadeScaleIn, slideUp, slideDown, slideLeft, slideRight, slideIn, scaleIn. No dependencies."
                code={`<Animate type="fadeIn" duration={500}>\n  <div>content</div>\n</Animate>\n\n<Animate type="slideUp" trigger="viewport">\n  <Card />\n</Animate>\n\n<Animate type="scaleIn" animateIn={isOpen} onAnimateOut={onClose}>\n  <div>exit animation</div>\n</Animate>`}>
                <div className="space-y-6">
                  <div>
                    <p className="text-[11px] font-semibold text-gray-500 dark:text-gray-400 mb-3">Mount animations (different types)</p>
                    <div className="flex flex-wrap gap-4">
                      {["fadeIn", "slideUp", "slideDown", "slideLeft", "slideRight", "scaleIn", "fadeScaleIn"].map((t) => (
                        <Animate key={t} type={t} duration={500}>
                          <div className="w-20 h-20 bg-gradient-to-br from-pink-400 to-purple-500 rounded-xl flex items-center justify-center text-white text-[9px] font-semibold text-center leading-tight p-1 shadow-lg">
                            {t}
                          </div>
                        </Animate>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold text-gray-500 dark:text-gray-400 mb-3">Viewport trigger — scroll down to see it</p>
                    <div className="h-40" />
                    <div className="flex justify-center">
                      <Animate type="slideUp" duration={600} trigger="viewport" threshold={0.5}>
                        <div className="w-48 h-32 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl flex items-center justify-center text-white text-sm font-semibold shadow-lg">
                          👋 I appeared!
                        </div>
                      </Animate>
                    </div>
                    <div className="h-40" />
                  </div>
                </div>
              </DemoCard>

              <DemoCard badge="Animation" badgeColor="bg-pink-500" title="Motion" description="Imperative animation via style interpolation. Animate x, y, rotate, scale, opacity with CSS transitions."
                code={`<Motion.div\n  animate={{ x: 100, rotate: 45, scale: 1.2 }}\n  transition={{ duration: 500 }}>\n  <div />\n</Motion.div>`}>
                <MotionDemo />
              </DemoCard>

              {/* Mini Catalogue */}
              <p className="text-[10px] font-semibold tracking-widest text-teal-600 dark:text-teal-400 uppercase mb-4 mt-12">Mini Catalogue</p>

              <DemoCard badge="Mini Catalogue" badgeColor="bg-teal-500" title="CatalogueCard" description="Product/service card with image, price, rating, badge, and CTA. Two variants: product and service."
                code={`<CatalogueCard\n  title="Wireless Headphones"\n  price="KES 12,500"\n  rating={4.5}\n  badge="Sale"\n  variant="product"\n  image={{ src: "...", alt: "..." }}\n  cta={{ label: "View", href: "#" }}\n/>`}>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <CatalogueCard
                    title="Wireless Headphones"
                    tag="Audio"
                    description="Premium noise-cancelling wireless headphones with 30-hour battery life."
                    price="KES 12,500"
                    rating={4.5}
                    badge="Sale"
                    image={{ src: "https://picsum.photos/seed/headphones/400/300", alt: "Headphones" }}
                    cta={{ label: "View Details", href: "#" }}
                  />
                  <CatalogueCard
                    title="Consulting Package"
                    tag="Service"
                    description="Strategic business consulting for startups and SMEs."
                    price="KES 25,000"
                    rating={5}
                    variant="service"
                    icon="package"
                    cta={{ label: "Book Now", href: "#" }}
                  />
                  <CatalogueCard
                    title="Graphic Design"
                    tag="Creative"
                    description="Logo design, branding, and social media assets."
                    price="KES 8,000"
                    rating={4}
                    variant="service"
                    icon="edit"
                    cta={{ label: "Inquire", onClick: () => alert("Inquiry sent!") }}
                  />
                </div>
              </DemoCard>

              <DemoCard badge="Mini Catalogue" badgeColor="bg-teal-500" title="CatalogueGrid" description="Grid layout wrapping CatalogueCards with loading skeletons and empty state."
                code={`<CatalogueGrid\n  items={items}\n  columns={3}\n  title="Our Products"\n  description="Browse our catalog"\n  loading={false}\n/>`}>
                <div className="space-y-6">
                  <p className="text-[11px] font-semibold text-gray-500 mb-1">Loading state</p>
                  <CatalogueGrid columns={4} loading />
                  <p className="text-[11px] font-semibold text-gray-500 mb-1 mt-6">Empty state</p>
                  <CatalogueGrid items={[]} columns={3} />
                </div>
              </DemoCard>

              <DemoCard badge="Mini Catalogue" badgeColor="bg-teal-500" title="SearchBar" description="Search input with loading spinner and optional filter dropdown."
                code={`<SearchBar\n  value={query}\n  onChange={setQuery}\n  onSubmit={handleSearch}\n  placeholder="Search products..."\n  filters={[\n    { label: "Category", options: [{ label: "All", value: "all" }] },\n  ]}\n/>`}>
                <div className="max-w-md">
                  <SearchBar
                    placeholder="Search products..."
                    value=""
                    onChange={() => {}}
                    filters={[
                      { label: "Category", options: [{ label: "All", value: "all" }, { label: "Audio", value: "audio" }, { label: "Visual", value: "visual" }] },
                      { label: "Price", options: [{ label: "All", value: "all" }, { label: "Under 5K", value: "low" }, { label: "5K-15K", value: "mid" }, { label: "15K+", value: "high" }] },
                    ]}
                  />
                </div>
              </DemoCard>

              <DemoCard badge="Mini Catalogue" badgeColor="bg-teal-500" title="BackToTop" description="Floating scroll-to-top button. Appears after threshold scroll."
                code={`<BackToTop threshold={300} size="md" />`}>
                <p className="text-sm text-gray-500">Scroll down on the page to see the floating button appear in the bottom-right corner.</p>
              </DemoCard>

              <DemoCard badge="Mini Catalogue" badgeColor="bg-teal-500" title="TrustBar" description="Social proof logo bar with grid or infinite carousel variants."
                code={`<TrustBar\n  title="Trusted by 500+ businesses"\n  variant="carousel"\n  logos={[\n    { src: "/logo1.png", alt: "Logo 1" },\n    { src: "/logo2.png", alt: "Logo 2" },\n  ]}\n/>`}>
                <div className="space-y-8">
                  <div>
                    <p className="text-[11px] font-semibold text-gray-500 mb-2">Grid variant</p>
                    <TrustBar
                      title="Trusted by leading businesses"
                      logos={Array.from({ length: 5 }, (_, i) => ({
                        src: `https://picsum.photos/seed/logo${i}/120/40`,
                        alt: `Brand ${i + 1}`,
                      }))}
                    />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold text-gray-500 mb-2">Carousel variant</p>
                    <TrustBar
                      variant="carousel"
                      logos={Array.from({ length: 4 }, (_, i) => ({
                        src: `https://picsum.photos/seed/brand${i}/120/40`,
                        alt: `Brand ${i + 1}`,
                      }))}
                    />
                  </div>
                </div>
              </DemoCard>

              <DemoCard badge="Mini Catalogue" badgeColor="bg-teal-500" title="AnnouncementBar" description="Top announcement bar with variants, dismissible, and optional CTA."
                code={`<AnnouncementBar\n  text="Free shipping on orders over KES 5,000"\n  variant="sale"\n  cta={{ label: "Shop Now" }}\n  dismissible\n/>`}>
                <div className="space-y-3">
                  <AnnouncementBar text="Free shipping on orders over KES 5,000" variant="sale" cta={{ label: "Shop Now" }} dismissible />
                  <AnnouncementBar text="New collection drops this Friday!" variant="info" dismissible />
                  <AnnouncementBar text="Same-day delivery within Nairobi" variant="default" dismissible />
                </div>
              </DemoCard>

              <DemoCard badge="Mini Catalogue" badgeColor="bg-teal-500" title="LocationMap" description="Embedded Google Map with address and contact details."
                code={`<LocationMap\n  address="123 Kimathi Street\\nNairobi, Kenya"\n  coords={{ lat: -1.286389, lng: 36.817223 }}\n  embedUrl="https://..."\n/>`}>
                <LocationMap
                  label="Visit us"
                  address="123 Kimathi Street\nNairobi, Kenya"
                  coords={{ lat: -1.286389, lng: 36.817223 }}
                  embedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.654!2d36.817223!3d-1.286389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMTcnMTEuMCJTIDM2wrA0OScwMi4wIkU!5e0!3m2!1sen!2ske!4v1"
                />
              </DemoCard>

              {/* Hooks */}
              <p className="text-[10px] font-semibold tracking-widest text-emerald-600 dark:text-emerald-400 uppercase mb-4 mt-12">Hooks</p>

              <DemoCard badge="Hook" badgeColor="bg-emerald-500" title="useForm" description="Form state with validation. Supports required, email, phone, min, max, and custom functions."
                code={`const { values, errors, touched, handleChange, handleSubmit } = useForm({\n  initial: { name: "" },\n  validate: { name: "required" },\n  onSubmit: fn,\n})`}>
                <FormDemo />
              </DemoCard>

              <DemoCard badge="Hook" badgeColor="bg-emerald-500" title="useLocalStorage" description="useState synced to localStorage with remove function."
                code={`const [value, setValue, remove] = useLocalStorage("key", "default")`}>
                <LocalStorageDemo />
              </DemoCard>

              <DemoCard badge="Hook" badgeColor="bg-emerald-500" title="useMediaQuery" description="Reactive media query. Updates on resize."
                code={`const isMobile = useMediaQuery("(max-width: 768px)")`}>
                <MediaQueryDemo />
              </DemoCard>

              <DemoCard badge="Hook" badgeColor="bg-emerald-500" title="useFetch" description="Data fetching with abort, loading/error states, immediate toggle."
                code={`const { data, loading, error, refetch } = useFetch("/api/data")`}>
                <FetchDemo />
              </DemoCard>

              {/* Utilities */}
              <p className="text-[10px] font-semibold tracking-widest text-blue-600 dark:text-blue-400 uppercase mb-4 mt-12">Utilities</p>

              <DemoCard badge="Utility" badgeColor="bg-blue-500" title="formatKES" description="Kenyan Shilling formatting — full and compact modes."
                code={`formatKES(12500)          // "KES 12,500"\nformatKES(12500, { compact: true })  // "KES 12.5K"`}>
                <div className="space-y-2 text-sm font-mono">
                  <p><span className="text-gray-400">formatKES(12500)</span> → <span className="font-semibold">{formatKES(12500)}</span></p>
                  <p><span className="text-gray-400">formatKES(12500, compact)</span> → <span className="font-semibold">{formatKES(12500, { compact: true })}</span></p>
                  <p><span className="text-gray-400">formatKES(1500000, compact)</span> → <span className="font-semibold">{formatKES(1500000, { compact: true })}</span></p>
                </div>
              </DemoCard>

              <DemoCard badge="Utility" badgeColor="bg-blue-500" title="Text helpers" description="slugify, truncate, generateId, formatDate, cn."
                code={`slugify("Hello World")       // "hello-world"\ntruncate("Long text", 10)  // "Long text…"\ngenerateId()               // "a3x9k2"\ncn("px-4", false && "hidden")  // "px-4"`}>
                <div className="space-y-2 text-sm font-mono">
                  <p><span className="text-gray-400">formatDate("2025-06-09")</span> → {formatDate("2025-06-09")}</p>
                  <p><span className="text-gray-400">slugify("Hello World!")</span> → {slugify("Hello World!")}</p>
                  <p><span className="text-gray-400">truncate("Lorem ipsum dolor sit amet", 16)</span> → {truncate("Lorem ipsum dolor sit amet", 16)}</p>
                  <p><span className="text-gray-400">generateId()</span> → {generateId()}</p>
                  <p><span className="text-gray-400">cn("px-4", false, "py-2")</span> → "{cn("px-4", false, "py-2")}"</p>
                </div>
              </DemoCard>

            </div>

            <footer className="bg-black text-gray-400 text-xs py-3 px-8 flex items-center justify-between">
              <span>cite-ui v1.0.0</span>
              <span>40+ components · Zero runtime deps · React + Tailwind</span>
            </footer>
          </div>
        </div>

        <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} title="Wireless Headphones" size="md">
          <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-lg mb-4" />
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{product.description}</p>
          <p className="text-xl font-bold text-gray-900 dark:text-white mb-4">{product.price}</p>
          <Button variant="primary" label="Add to Cart" onClick={() => { alert("Added!"); setModalOpen(false) }} className="w-full" />
        </Modal>

        <Drawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} title="Drawer Example" side="right">
          <p className="text-sm text-gray-600 dark:text-gray-400">This is a drawer panel. It slides in from the right side. You can put any content here — forms, navigation, details, etc.</p>
        </Drawer>

      </ToastProvider>
    </ThemeWrapper>
  )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />)
