import { AppProps } from 'next/app';

import '../src/styles/global.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <Component {...pageProps} /> {/* eslint-disable-line */}
    </>
  );
}

export default MyApp;
