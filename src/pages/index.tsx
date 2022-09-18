import Head from 'next/head';
import type { NextPage } from 'next';
import YoutubeChart from '@components/YouTubeChart';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>1TPOP</title>
        <meta property='og:type' content='website' />
        <meta
          name='description'
          content='1TPOP - อัพเดทประจำทุกสัปดาห์ได้ก่อนใคร เพลงฮิตติดชาร์ต การันตี รวม Top Chart Songs เพลงฮิต เพลงใหม่ล่าสุด'
        />
        <meta
          property='og:title'
          content={`1TPOP - THE WEEK'S MOST POPULAR CURRENT SONGS ACROSS ALL GENRES`}
        />
        <meta
          property='og:description'
          content='1TPOP - อัพเดทประจำทุกสัปดาห์ได้ก่อนใคร เพลงฮิตติดชาร์ต การันตี รวม Top Chart Songs เพลงฮิต เพลงใหม่ล่าสุด'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='px-8 w-full'>
        <h1 className='text-4xl uppercase font-bold'>
          YouTube’s Thailand Top Songs Chart This Week!{' '}
          <span className='text-2xl'>(15/08/22 - 21/08/22)</span>
        </h1>
        {/* <div className='relative flex py-5 items-center'>
          <div className='flex-grow border-t bg-gradient-to-r from-[#FF2727] to-[#0047FF]'></div>
          <div className='flex-grow border-t bg-gradient-to-r from-[#FF2727] to-[#0047FF]'></div>
        </div> */}
        <div className='my-4 h-2.5 bg-gradient-to-r from-[#FF2727] to-[#0047FF] w-full'>
          &nbsp;
        </div>
        <YoutubeChart />
      </main>
    </>
  );
};

export default Home;
