import { useEffect, useRef } from 'react'

const FOCUSABLE = [
  'a[href]',
  'button:not([disabled])',
  'textarea:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(',')

// Only the newest open overlay traps Tab, so a modal inside a drawer wins.
const trapStack = []

/**
 * Keeps keyboard focus inside an open overlay and restores it on close.
 *
 * Returns the ref to attach to the dialog panel. The first focusable child gets
 * focus on open (the close button in both Modal and Drawer), Tab and Shift+Tab
 * wrap, and focus returns to whatever opened the overlay.
 */
export function useFocusTrap(isOpen) {
  const panelRef = useRef(null)

  useEffect(() => {
    if (!isOpen) return undefined
    const panel = panelRef.current
    if (!panel) return undefined

    const previouslyFocused = document.activeElement
    const focusable = () =>
      Array.from(panel.querySelectorAll(FOCUSABLE)).filter(
        (element) => !element.hasAttribute('disabled') && element.getAttribute('aria-hidden') !== 'true'
      )

    const first = focusable()[0]
    first?.focus()
    trapStack.push(panel)

    const onKeyDown = (event) => {
      if (event.key !== 'Tab') return
      if (trapStack[trapStack.length - 1] !== panel) return
      const items = focusable()
      if (items.length === 0) {
        event.preventDefault()
        return
      }
      const firstItem = items[0]
      const lastItem = items[items.length - 1]
      if (event.shiftKey && document.activeElement === firstItem) {
        event.preventDefault()
        lastItem.focus()
      } else if (!event.shiftKey && document.activeElement === lastItem) {
        event.preventDefault()
        firstItem.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      const index = trapStack.indexOf(panel)
      if (index !== -1) trapStack.splice(index, 1)
      if (previouslyFocused instanceof HTMLElement) previouslyFocused.focus()
    }
  }, [isOpen])

  return panelRef
}
