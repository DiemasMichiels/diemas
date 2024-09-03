import Description from '@components/description/Description'
import HeroTitle from '@components/heroTitle/HeroTitle'
import Page from '@components/page/Page'
import Ticker from '@components/ticker/Ticker'
import type { NextPage } from 'next'

const Index: NextPage = () => {
  return (
    <Page>
      <HeroTitle />
      <Description />
      <Ticker
        itemsRow1={[
          'INNOVATIVE',
          'CREATIVE',
          'DYNAMIC',
          'CUSTOMIZED',
          'VERSATILE',
          'EFFICIENT',
        ]}
        itemsRow2={[
          'EXPERT',
          'NEXT-GEN',
          'RESPONSIVE',
          'STRATEGIC',
          'COLLABORATIVE',
          'PROGRESSIVE',
        ]}
      />
    </Page>
  )
}

export default Index
