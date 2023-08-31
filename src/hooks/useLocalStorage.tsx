import { useState, useEffect } from 'react'

export function useLocalStorage<T>(item: string, initialValue: T) {
  const [value, setValue] = useState<T>(initialValue)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const valueLocalStorage = localStorage.getItem(item)
    if (valueLocalStorage) setValue(JSON.parse(valueLocalStorage))
  }, [])
  const updateLocalStorage = (newValue: T) => {
    setValue(newValue)
    localStorage.setItem(item, JSON.stringify(newValue))
  }

  return {
    value,
    updateLocalStorage,
  }
}
