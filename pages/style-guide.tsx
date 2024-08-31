import Page from '@components/page/Page'
import type { NextPage } from 'next'

const Index: NextPage = () => {
  return (
    <Page>
      <h1 className='header1'>
        Header 1 <span className='highlight'>Highlight</span>
      </h1>
      <h2 className='header2'>
        Header 2 <span className='focus'>Focus</span>
      </h2>
      <h3 className='header3'>
        Header 3 <span className='focus'>Focus</span>
      </h3>
      <h4 className='header4'>Header 4</h4>
      <p>Paragraph</p>
      <a className='link' href='#'>
        Link
      </a>
      <button className='button primary'>Button primary</button>
      <button className='button secondary'>Button secondary</button>
    </Page>
  )
}

export default Index
