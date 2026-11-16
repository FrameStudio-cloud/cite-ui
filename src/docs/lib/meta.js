import { useEffect } from 'react'

/**
 * Per-page title and description on a client-rendered docs site.
 *
 * There is no SSR here, so this is the only honest way to keep the tab and the
 * share card in step with the route. Restores the previous values on unmount so
 * a 404 does not inherit the last component's title.
 */
export function usePageMeta(title, description) {
  useEffect(() => {
    if (!title) return undefined
    const previousTitle = document.title
    const meta = document.querySelector('meta[name="description"]')
    const previousDescription = meta?.getAttribute('content') ?? ''

    document.title = `${title} — cite-ui docs`

    if (meta && description) meta.setAttribute('content', description)

    return () => {
      document.title = previousTitle
      if (meta && description) meta.setAttribute('content', previousDescription)
    }
  }, [title, description])
}
