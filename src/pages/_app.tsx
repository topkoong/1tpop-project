import '../styles/tailwind.css';
import '../styles/globals.css';
import '../styles/overrideswiper.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import type { AppProps } from 'next/app';
import Head from 'next/head';
import Layout from '@components/Layout';
import { useState } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <>
      <Head>
        <title>
          1TPOP - อัพเดทประจำทุกสัปดาห์ได้ก่อนใคร เพลงฮิตติดชาร์ต การันตี รวม
          Top Chart Songs เพลงฮิต เพลงใหม่ล่าสุด
        </title>
        <meta
          name='description'
          content='1TPOP - อัพเดทประจำทุกสัปดาห์ได้ก่อนใคร เพลงฮิตติดชาร์ต การันตี รวม Top Chart Songs เพลงฮิต เพลงใหม่ล่าสุด'
        />
        <link
          rel='apple-touch-icon'
          sizes='57x57'
          href='https://topkoong.github.io/1tpop-project/apple-icon-57x57.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='60x60'
          href='https://topkoong.github.io/1tpop-project/apple-icon-60x60.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='72x72'
          href='https://topkoong.github.io/1tpop-project/apple-icon-72x72.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='76x76'
          href='https://topkoong.github.io/1tpop-project/apple-icon-76x76.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='114x114'
          href='https://topkoong.github.io/1tpop-project/apple-icon-114x114.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='120x120'
          href='https://topkoong.github.io/1tpop-project/apple-icon-120x120.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='144x144'
          href='https://topkoong.github.io/1tpop-project/apple-icon-144x144.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='152x152'
          href='https://topkoong.github.io/1tpop-project/apple-icon-152x152.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='https://topkoong.github.io/1tpop-project/apple-icon-180x180.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='192x192'
          href='https://topkoong.github.io/1tpop-project/android-icon-192x192.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='https://topkoong.github.io/1tpop-project/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='96x96'
          href='https://topkoong.github.io/1tpop-project/favicon-96x96.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='https://topkoong.github.io/1tpop-project/favicon-16x16.png'
        />
        <link
          rel='icon'
          href='https://topkoong.github.io/1tpop-project/favicon.ico'
        />
        <link
          rel='manifest'
          href='https://topkoong.github.io/1tpop-project/manifest.json'
        />
        <meta name='msapplication-TileColor' content='#ffffff' />
        <meta
          name='msapplication-TileImage'
          content='https://topkoong.github.io/1tpop-project/ms-icon-144x144.png'
        />
        <meta name='theme-color' content='#ffffff' />
        <meta
          property='og:image:url'
          content='https://topkoong.github.io/1tpop-project/apple-icon-180x180.png'
        />
      </Head>
      <Layout>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </Layout>
    </>
  );
}

export default MyApp;
