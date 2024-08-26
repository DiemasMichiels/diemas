import { useCallback, useEffect, useRef } from 'react'

// Check if a value was removed from localStorage
const useLocalStorageRemoved = (key: string, onRemove: () => void) => {
  const lastKnownValue = useRef<string | null>(localStorage.getItem(key))

  const checkLocalStorage = useCallback(() => {
    const currentValue = localStorage.getItem(key)
    if (lastKnownValue.current !== null && currentValue === null) {
      onRemove()
    }
    lastKnownValue.current = currentValue
  }, [key, onRemove])

  useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === key) {
        checkLocalStorage()
      }
    }

    window.addEventListener('storage', handleStorageChange)

    const originalSetItem = localStorage.setItem
    const originalRemoveItem = localStorage.removeItem
    const originalClear = localStorage.clear

    localStorage.setItem = function (
      this: Storage,
      k: string,
      value: string,
    ): void {
      if (k === key) {
        lastKnownValue.current = value
      }
      originalSetItem.call(this, k, value)
    }

    localStorage.removeItem = function (this: Storage, k: string): void {
      if (k === key) {
        const previousValue = lastKnownValue.current
        lastKnownValue.current = null
        if (previousValue !== null) {
          onRemove()
        }
      }
      originalRemoveItem.call(this, k)
    }

    localStorage.clear = function (this: Storage): void {
      if (lastKnownValue.current !== null) {
        lastKnownValue.current = null
        onRemove()
      }
      originalClear.call(this)
    }

    return () => {
      window.removeEventListener('storage', handleStorageChange)
      localStorage.setItem = originalSetItem
      localStorage.removeItem = originalRemoveItem
      localStorage.clear = originalClear
    }
  }, [key, onRemove, checkLocalStorage])
}

export default useLocalStorageRemoved
