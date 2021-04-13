import Head from 'next/head';
import { ThemeProvider } from 'styled-components';

import { FirebaseContext } from '../contexts/firebaseContext';
import { getFirebaseInstance } from '../libs/firebase';

import { GlobalStyles } from '../globalStyles';
import theme from '../styles/theme';

import 'normalize.css';
import '../styles/_base.scss'

import '../libs/firebase';

export default function MyApp({ Component, pageProps }) {
  return (
    <FirebaseContext.Provider value={{ firebase: getFirebaseInstance() }}>
      <GlobalStyles />
      <Head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='description' content='Netflix clone website' />
        <title>Netflix</title>
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </FirebaseContext.Provider>
  );
}
