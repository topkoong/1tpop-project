/* eslint-disable @next/next/no-img-element */
import { FunctionComponent } from 'react';
import Head from 'next/head';
import TabsRender from '@components/Tabs';
import YouTubeChartTestWrapper from '@components/YouTubeChartWrapper';
// TODO
// Update image tag

const Experiment: FunctionComponent = () => {
  return (
    <>
      <Head>
        <title>1TPOP</title>
        <meta property='og:type' content='website' />
        <meta
          name='description'
          content='1TPOP - Get a YouTube video thumbnail from the YouTube API'
        />
        <meta
          property='og:title'
          content={`1TPOP - THE WEEK'S MOST POPULAR CURRENT SONGS ACROSS ALL GENRES`}
        />
        <meta
          property='og:description'
          content='1TPOP - Retrieve information about a specific video.'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='px-8 w-full'>
        <h1 className='text-4xl uppercase font-bold my-8'>
          Get a YouTube video thumbnail from the YouTube API
        </h1>
        <h2 className='text-2xl uppercase font-medium my-8'>
          Retrieve information about a specific video.
        </h2>
        {/* <TabsRender /> */}
        {/* <YouTubeChartTestWrapper /> */}
      </main>
    </>
  );
};

export default Experiment;
