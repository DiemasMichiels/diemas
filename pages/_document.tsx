import Document, { Head, Html, Main, NextScript } from 'next/document'
import { themeScript } from '@utils/themeScript'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Fonts */}
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link
            rel='preconnect'
            href='https://fonts.gstatic.com'
            crossOrigin='anonymous'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Poppins&display=swap'
            rel='stylesheet'
          />
          <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
