import { useEffect, useState } from 'react'

function readStoredValue(key, initialValue) {
  if (typeof window === 'undefined') {
    return initialValue
  }

  try {
    const raw = window.localStorage.getItem(key)
    return raw !== null ? JSON.parse(raw) : initialValue
  } catch {
    return initialValue
  }
}

export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => readStoredValue(key, initialValue))

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch {
      // Ignore write errors in private mode or restricted environments.
    }
  }, [key, value])

  return [value, setValue]
}