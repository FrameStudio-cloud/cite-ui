let scrollLocks = 0

/** Reference-counted body scroll lock, so nested overlays do not unlock early. */
export function lockScroll() {
  if (typeof document === 'undefined') return
  if (scrollLocks === 0) document.body.style.overflow = 'hidden'
  scrollLocks += 1
}

export function unlockScroll() {
  if (typeof document === 'undefined') return
  scrollLocks = Math.max(0, scrollLocks - 1)
  if (scrollLocks === 0) document.body.style.overflow = ''
}

/** True when this panel is the topmost visible dialog (for Escape handling). */
export function isTopDialog(panel) {
  if (typeof document === 'undefined' || !panel) return true
  const dialogs = Array.from(
    document.querySelectorAll('[role="dialog"][aria-modal="true"]')
  ).filter((dialog) => dialog.getAttribute('aria-hidden') !== 'true')
  return dialogs[dialogs.length - 1] === panel
}
