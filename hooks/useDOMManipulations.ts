import { useEffect } from 'react'

const useDOMManipulations = (
  manipulations: { selector: string; callback: (element: Element) => void }[],
) => {
  useEffect(() => {
    const observer = new MutationObserver(() => {
      manipulations.forEach(({ selector, callback }) => {
        const element = document.querySelector(selector)
        if (element) callback(element)
      })
    })

    observer.observe(document.body, { childList: true, subtree: true })

    // Initial check
    manipulations.forEach(({ selector, callback }) => {
      const element = document.querySelector(selector)
      if (element) callback(element)
    })

    return () => observer.disconnect()
  }, [manipulations])
}

export default useDOMManipulations
