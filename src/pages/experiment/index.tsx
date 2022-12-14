/* eslint-disable @next/next/no-img-element */
import { FunctionComponent } from 'react';
import Head from 'next/head';
import SimpleBarChart from '@components/SimpleBarChart';
import TabsRender from '@components/Tabs';
import YouTubeChartTestWrapper from '@components/YouTubeChartWrapper';
// TODO
// Update image tag

const Experiment: FunctionComponent = () => {
  return (
    <>
      <Head>
        <title>
          1TPOP - เช็คอันดับเพลงฮิต 2022 อัพเดทประจำทุกสัปดาห์ได้ก่อนใคร
        </title>
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
        <meta property='og:locale' content='th_TH' />
        <meta property='og:site_name' content='1TPOP' />
        <link
          rel='icon'
          href='https://topkoong.github.io/1tpop-project/favicon.ico'
        />
      </Head>
      <main className='px-8 w-full'>
        <h1 className='text-4xl uppercase font-bold my-8'>Playground</h1>

        {/* <TabsRender /> */}
        {/* <YouTubeChartTestWrapper /> */}
        {/* <SimpleBarChart /> */}
      </main>
    </>
  );
};

export default Experiment;
