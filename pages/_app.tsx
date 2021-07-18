import { AppProps } from 'next/app';

import '../src/styles/global.scss';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Component {...pageProps} /> {/* eslint-disable-line */}
  </>
);

export default MyApp;
