import { useEffect } from 'react'

const useMultipleDOMManipulations = (
  manipulations: { selector: string; callback: (element: Element) => void }[],
) => {
  useEffect(() => {
    const observer = new MutationObserver(() => {
      manipulations.forEach((manipulation) => {
        const element = document.querySelector(manipulation.selector)
        if (element) {
          manipulation.callback(element)
        }
      })
    })

    observer.observe(document.body, { childList: true, subtree: true })

    // Initial check
    manipulations.forEach((manipulation) => {
      const element = document.querySelector(manipulation.selector)
      if (element) {
        manipulation.callback(element)
      }
    })

    return () => observer.disconnect()
  }, [manipulations])
}

export default useMultipleDOMManipulations
