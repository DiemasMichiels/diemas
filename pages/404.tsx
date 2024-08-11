import { useRouter } from 'next/router'
import { useEffect } from 'react'
import type { NextPage } from 'next'

const NotFound: NextPage = () => {
  const router = useRouter()

  useEffect(() => {
    router.replace('/')
  })

  return null
}

export default NotFound
