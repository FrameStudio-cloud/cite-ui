import { useState, useEffect, useCallback, useRef } from 'react'

const useFetch = (url, options = {}) => {
  const { immediate = true, headers, ...fetchOptions } = options
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(immediate)
  const [error, setError] = useState(null)
  const abortRef = useRef(null)

  const execute = useCallback(
    async (overrideUrl) => {
      if (abortRef.current) abortRef.current.abort()
      const controller = new AbortController()
      abortRef.current = controller

      setLoading(true)
      setError(null)

      try {
        const res = await fetch(overrideUrl || url, {
          ...fetchOptions,
          headers: { 'Content-Type': 'application/json', ...headers },
          signal: controller.signal,
        })
        if (!res.ok) {
          throw new Error(`HTTP ${res.status}: ${res.statusText}`)
        }
        const json = await res.json()
        if (!controller.signal.aborted) {
          setData(json)
          setError(null)
        }
      } catch (err) {
        if (err.name === 'AbortError') return
        setError(err.message)
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false)
        }
      }
    },
    [url, fetchOptions, headers],
  )

  useEffect(() => {
    if (immediate && url) {
      execute()
    }
    return () => {
      if (abortRef.current) abortRef.current.abort()
    }
  }, [url, immediate, execute])

  const refetch = useCallback(() => execute(), [execute])

  return { data, loading, error, refetch }
}

export { useFetch }
