import { DefaultSeo } from 'next-seo'
import Head from 'next/head'
import SEO from '@root/next-seo.config'
import type { AppProps } from 'next/app'

import '@styles/global.scss'

type PageProps = {}

const App = ({
  Component,
  pageProps,
}: Omit<AppProps<PageProps>, 'pageProps'> & {
  pageProps: PageProps
}) => {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' sizes='any' />
        <link rel='icon' href='/icon.svg' type='image/svg+xml' />
        <link rel='apple-touch-icon' href='/apple-touch-icon.png' />
        <link rel='manifest' href='/manifest.json' />
        <meta name='theme-color' content='#ffffff' />
      </Head>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  )
}

export default App
