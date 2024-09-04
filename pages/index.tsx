import Description from '@components/description/Description'
import Footer from '@components/footer/Footer'
import HeroTitle from '@components/heroTitle/HeroTitle'
import Page from '@components/page/Page'
import Portfolio from '@components/portfolio/Portfolio'
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
      <Portfolio />
      <Footer />
    </Page>
  )
}

export default Index
