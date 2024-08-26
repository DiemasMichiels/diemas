import { signOut, useSession } from 'next-auth/react'
import CMS from '@sveltia/cms'
import useLocalStorageRemoved from '@hooks/useLocalStorageRemoved'

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

  return <div />
}

export default CMSComponent
