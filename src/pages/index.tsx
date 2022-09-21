import Head from 'next/head';
import type { NextPage } from 'next';
import YoutubeChart from '@components/YouTubeChart';
import moment from 'moment';
const Home: NextPage = () => {
  const startOfWeek = moment().startOf('isoWeek');
  const endOfWeek = moment().endOf('isoWeek');
  return (
    <>
      <Head>
        <title>1TPOP</title>
        <meta property='og:type' content='website' />
        <meta
          name='description'
          content='1TPOP - เช็คอันดับเพลงฮิต 2022 อัพเดทประจำทุกสัปดาห์ได้ก่อนใคร เพลงฮิตติดชาร์ต การันตี รวม Top Chart Songs เพลงใหม่ล่าสุด'
        />
        <meta
          property='og:title'
          content={`1TPOP - THE WEEK'S MOST POPULAR CURRENT SONGS ACROSS ALL GENRES`}
        />
        <meta
          property='og:description'
          content='1TPOP - เช็คอันดับเพลงฮิต 2022 อัพเดทประจำทุกสัปดาห์ได้ก่อนใคร เพลงฮิตติดชาร์ต การันตี รวม Top Chart Songs เพลงใหม่ล่าสุด'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='px-8 w-full'>
        <h1 className='text-base lg:text-3xl xl:text-4xl uppercase font-bold'>
          YouTube’s T-POP Top Songs Chart This Week!{' '}
          <span className='hidden md:block text-sm md:text-base lg:text-xl xl:text-2xl'>
            {`(${startOfWeek} - ${endOfWeek})`}
          </span>
          <p className='block md:hidden text-base lg:text-xl xl:text-2xl'>
            {`(${startOfWeek} - ${endOfWeek})`}
          </p>
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
