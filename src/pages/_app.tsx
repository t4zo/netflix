import Head from 'next/head';
import { AppProps } from 'next/dist/next-server/lib/router/router';

import { Provider } from 'next-auth/client';
import { FirebaseContextProvider } from 'contexts/firebaseContext';
import { FeatureContextProvider } from 'contexts/featureContext';

// import { GlobalStyles } from 'globalStyles';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';

// Import Swiper styles
import 'swiper/swiper.scss';
// import "swiper/components/navigation/navigation.min.css";
// import "swiper/components/pagination/pagination.min.css"

import 'normalize.css';
import 'styles/_base.scss';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <FirebaseContextProvider>
      <FeatureContextProvider>
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
      </FeatureContextProvider>
    </FirebaseContextProvider>
  );
}
