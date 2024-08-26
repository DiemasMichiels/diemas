import { signOut } from 'next-auth/react'
import CMS from '@sveltia/cms'
import useLocalStorageRemoved from '@hooks/useLocalStorageRemoved'

declare global {
  interface Window {
    CMS: typeof CMS
  }
}

window.CMS = CMS

const CMSComponent = () => {
  useLocalStorageRemoved('sveltia-cms.user', () => {
    signOut()
  })

  return <div />
}

export default CMSComponent
