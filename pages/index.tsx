import Page from '@components/page/Page'
import { attributes } from '@content/pages/home.md'
import type { NextPage } from 'next'

const Index: NextPage = () => {
  return (
    <Page>
      <h1>{attributes.title}</h1>
    </Page>
  )
}

export default Index
