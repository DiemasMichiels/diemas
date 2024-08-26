import { useEffect } from 'react'

type Manipulation =
  | { selector: string; callback: (element: Element) => void; type: 'single' }
  | {
      selector: string
      childRange: [number, number]
      callback: (elements: Element[]) => void
      type: 'range'
    }

const useMultipleDOMManipulations = (manipulations: Manipulation[]) => {
  useEffect(() => {
    const observer = new MutationObserver(() => {
      manipulations.forEach((manipulation) => {
        const element = document.querySelector(manipulation.selector)
        if (element) {
          if (manipulation.type === 'single') {
            manipulation.callback(element)
          } else if (manipulation.type === 'range') {
            const { childRange, callback } = manipulation
            const [start, end] = childRange
            const children = Array.from(element.children).slice(start - 1, end)
            callback(children)
          }
        }
      })
    })

    observer.observe(document.body, { childList: true, subtree: true })

    // Initial check
    manipulations.forEach((manipulation) => {
      const element = document.querySelector(manipulation.selector)
      if (element) {
        if (manipulation.type === 'single') {
          manipulation.callback(element)
        } else if (manipulation.type === 'range') {
          const { childRange, callback } = manipulation
          const [start, end] = childRange
          const children = Array.from(element.children).slice(start - 1, end)
          callback(children)
        }
      }
    })

    return () => observer.disconnect()
  }, [manipulations])
}

export default useMultipleDOMManipulations
