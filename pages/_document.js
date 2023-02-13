import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head >
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Courgette&family=Poppins:wght@400;500;600&display=swap" rel="stylesheet"/>
        <title>Portio - Your one stop destination to build portfolio website</title>
        <meta name="title" content="Portio - Your one stop destination to build portfolio website" />
        <meta name="description" content="Your one stop destination to build portfolio website" />
        <meta name="keywords" content="Portfolio,Developer,Website,Resume" />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="1 days" />
        <meta name="author" content="Portio" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="https://portio-content.s3.ap-south-1.amazonaws.com/167631245526243654657014b1cfcc0ea7b1792b8b934.png" type="image/x-icon" />
        <link rel="apple-touch-icon" href="https://portio-content.s3.ap-south-1.amazonaws.com/167631245526243654657014b1cfcc0ea7b1792b8b934.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://portio.in/" />
        <meta property="og:title" content="Portio - Your one stop destination to build portfolio website" />
        <meta property="og:description" content="Your one stop destination to build portfolio website" />
        <meta property="og:image" content="https://portio-content.s3.ap-south-1.amazonaws.com/167631245526243654657014b1cfcc0ea7b1792b8b934.png" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://portio.in/" />
        <meta property="twitter:title" content="Portio - Your one stop destination to build portfolio website" />
        <meta property="twitter:description" content="Your one stop destination to build portfolio website" />
        <meta property="twitter:image" content="https://portio-content.s3.ap-south-1.amazonaws.com/167631245526243654657014b1cfcc0ea7b1792b8b934.png" />
        
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
