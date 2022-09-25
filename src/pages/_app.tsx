import '../styles/tailwind.css';
import '../styles/globals.css';

import { QueryClient, QueryClientProvider } from 'react-query';

import type { AppProps } from 'next/app';
import Head from 'next/head';
import Layout from '@components/Layout';
import { ReactQueryDevtools } from 'react-query/devtools';
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
        <link rel='icon' href='/favicon.ico' />
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
