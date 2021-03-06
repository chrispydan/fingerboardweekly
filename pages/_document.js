import Document, { Html, Head, Main, NextScript } from 'next/document';


class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          {/* <meta name="viewport" content="width=device-width,minimum-scale=1, initial-scale=1" /> */}
          <script 
            async 
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6328547113076320"
            crossOrigin="anonymous"></script>
            
        </Head>
        <body class="dark:bg-black bg-gray-100">
          <Main />
          <NextScript />
        </body>
      </Html> 
    );
  }
}

export default MyDocument;
