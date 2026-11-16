import { useEffect } from 'react'
import { BrowserRouter, Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import Shell from './Shell'
import Home from './pages/Home'
import ComponentPage from './pages/ComponentPage'
import GuidePage from './pages/GuidePage'
import ThemingGuide from './pages/ThemingGuide'
import MotionGuide from './pages/MotionGuide'
import NotFound from './pages/NotFound'
import { byId } from './lib/registry'

/**
 * The docs used to be one page with `/#toast` anchors. Links to those anchors
 * exist in the wild, so map them onto the new routes instead of 404ing.
 */
function LegacyHashRedirect() {
  const { hash } = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (!hash) return
    const id = decodeURIComponent(hash.slice(1))
    const entry = byId[id]
    if (!entry) return
    navigate(
      entry.id === 'getting-started' ? '/guide/installation' : `/components/${entry.id}`,
      { replace: true }
    )
  }, [hash, navigate])

  return null
}

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <LegacyHashRedirect />
      <ScrollToTop />
      <Routes>
        <Route element={<Shell />}>
          <Route index element={<Home />} />
          <Route path="components/:id" element={<ComponentPage />} />
          <Route path="guide" element={<Navigate to="/guide/installation" replace />} />
          <Route path="guide/installation" element={<GuidePage />} />
          <Route path="guide/theming" element={<ThemingGuide />} />
          <Route path="guide/motion" element={<MotionGuide />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
