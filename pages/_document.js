import { Html, Head, Main, NextScript } from 'next/document'


export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
      </Head>
      
      <body class="overflow-x-hidden bg-slate-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
