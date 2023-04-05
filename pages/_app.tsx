import type { AppProps } from 'next/app';
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/react';
 
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
 
export default MyApp;