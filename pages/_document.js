import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head >
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Courgette&family=Poppins:wght@400;500;600&display=swap" rel="stylesheet"/>
      </Head>
      <body>
        <Main />
        <NextScript />
        {/* Google tag (gtag.js)  */}
        <Script
          src='https://www.googletagmanager.com/gtag/js?id=G-JE2RN358R0'
          strategy='afterInteractive'
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-JE2RN358R0');
            `}
        </Script>
      </body>
    </Html>
  )
}
