import { useEffect } from 'react'
import { signOut } from 'next-auth/react'
import CMS from '@sveltia/cms'

declare global {
  interface Window {
    CMS: typeof CMS
  }
}

window.CMS = CMS

const CMSComponent = () => {
  useEffect(() => {
    const checkLocalStorage = () => {
      if (localStorage.getItem('sveltia-cms.user') === null) {
        signOut()
      }
    }

    // Create a MutationObserver to watch for changes in localStorage
    const observer = new MutationObserver(() => {
      checkLocalStorage()
    })

    // Observe changes to localStorage
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['data-localstorage-change'],
    })

    // Wrap localStorage methods
    const originalSetItem = localStorage.setItem
    const originalRemoveItem = localStorage.removeItem
    const originalClear = localStorage.clear

    localStorage.setItem = function (...args) {
      document.body.setAttribute(
        'data-localstorage-change',
        Date.now().toString(),
      )
      originalSetItem.apply(this, args)
    }

    localStorage.removeItem = function (...args) {
      document.body.setAttribute(
        'data-localstorage-change',
        Date.now().toString(),
      )
      originalRemoveItem.apply(this, args)
    }

    localStorage.clear = function (...args) {
      document.body.setAttribute(
        'data-localstorage-change',
        Date.now().toString(),
      )
      originalClear.apply(this, args)
    }

    // Clean up
    return () => {
      observer.disconnect()
      localStorage.setItem = originalSetItem
      localStorage.removeItem = originalRemoveItem
      localStorage.clear = originalClear
    }
  }, [])

  return <div />
}

export default CMSComponent
