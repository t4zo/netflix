import Head from 'next/head';
import { AppProps } from 'next/dist/next-server/lib/router/router';

import { FirebaseContext } from 'contexts/firebaseContext';
import { Provider } from 'next-auth/client';
import { getFirebaseInstance } from 'libs/firebase';

// import { GlobalStyles } from 'globalStyles';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';

import 'normalize.css';
import 'styles/_base.scss';

import 'libs/firebase';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <FirebaseContext.Provider value={{ firebase: getFirebaseInstance() }}>
      <Provider session={pageProps.session}>
        {/* <GlobalStyles /> */}
        <Head>
          <meta charSet='utf-8' />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <meta name='description' content='Netflix clone website' />
          <title>Netflix</title>
        </Head>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    </FirebaseContext.Provider>
  );
}
