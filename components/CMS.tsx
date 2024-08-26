import { signOut, useSession } from 'next-auth/react'
import CMS from '@sveltia/cms'
import useLocalStorageRemoved from '@hooks/useLocalStorageRemoved'
import useDOMManipulations from '@hooks/useDOMManipulations'

declare global {
  interface Window {
    CMS: typeof CMS
  }
}

window.CMS = CMS

const CMSComponent = () => {
  const { data: session } = useSession()

  useLocalStorageRemoved('sveltia-cms.user', () => {
    if (session) {
      signOut()
    }
  })

  useDOMManipulations([
    {
      type: 'single',
      selector: 'body > div.sui.app-shell > .outer .main .container .inner',
      callback: (element) => {
        const logo = element?.childNodes[0] as HTMLImageElement
        const title = element?.childNodes[2] as HTMLHeadingElement
        if (logo) {
          logo.src = '/icon.svg'
        }
        if (title) {
          title.textContent = 'Diemas CMS'
        }
      },
    },
    {
      type: 'range',
      selector: 'body > div.sui.app-shell .sui.menu',
      childRange: [8, 14],
      callback: (elements) => {
        elements.forEach((element) => {
          element.setAttribute('style', 'display: none')
        })
      },
    },
  ])

  return <div />
}

export default CMSComponent
