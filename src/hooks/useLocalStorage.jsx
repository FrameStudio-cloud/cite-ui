import { useState, useCallback } from 'react'

const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch {
      return initialValue
    }
  })

  const setValue = useCallback(
    (value) => {
      try {
        const valueToStore =
          value instanceof Function ? value(storedValue) : value
        setStoredValue(valueToStore)
        window.localStorage.setItem(key, JSON.stringify(valueToStore))
      } catch (err) {
        console.warn(`useLocalStorage: unable to set key "${key}"`, err)
      }
    },
    [key, storedValue],
  )

  const remove = useCallback(() => {
    try {
      window.localStorage.removeItem(key)
      setStoredValue(initialValue)
    } catch (err) {
      console.warn(`useLocalStorage: unable to remove key "${key}"`, err)
    }
  }, [key, initialValue])

  return [storedValue, setValue, remove]
}

export { useLocalStorage }
