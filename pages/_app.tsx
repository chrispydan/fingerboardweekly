import React from 'react';
import { Layout } from '../components';
import Script from 'next/script';
import { ThemeProvider } from 'next-themes'
import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react'


function MyApp({ Component, pageProps }: AppProps) {
  
  return (
    <ThemeProvider enableSystem={true} attribute="class">
    <React.Fragment>
      
  <Script strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script strategy="lazyOnload">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
                `}
      </Script>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </React.Fragment>
    </ThemeProvider>
  )
}

export default MyApp
