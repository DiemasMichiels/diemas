import dynamic from 'next/dynamic'

const CMS = dynamic(() => import('@components/CMS'), { ssr: false })

const AdminPage = () => {
  return <CMS />
}

export default AdminPage
