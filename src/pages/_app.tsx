import Head from 'next/head';
import { AppProps } from 'next/dist/next-server/lib/router/router';

import 'normalize.css';
import { GlobalStyles } from 'globalStyles';


export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='description' content='Netflix clone website' />
        <title>Netflix</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
