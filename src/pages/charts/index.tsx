import 'moment/locale/th';

import Head from 'next/head';
import type { NextPage } from 'next';
import YoutubeChart from '@components/YouTubeChartWrapper';
import moment from 'moment-timezone';

const Charts: NextPage = () => {
  const startOfWeek = moment()
    .startOf('isoWeek')
    .tz('Asia/Bangkok')
    .format('l');
  const endOfWeek = moment().endOf('isoWeek').tz('Asia/Bangkok').format('l');
  return (
    <>
      <Head>
        <title>
          1TPOP - เช็คอันดับเพลงฮิต 2022 อัพเดทประจำทุกสัปดาห์ได้ก่อนใคร
        </title>
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
        <meta
          property='og:url'
          content='https://topkoong.github.io/1tpop-project/charts'
        />
        <meta property='og:locale' content='th_TH' />
        <meta property='og:site_name' content='1TPOP' />
        <link
          rel='icon'
          href='https://topkoong.github.io/1tpop-project/favicon.ico'
        />
        <meta
          property='og:image:url'
          content='https://topkoong.github.io/1tpop-project/apple-icon-180x180.png'
        />
      </Head>
      <main className='w-full bg-[#efefef]'>
        <div className='flex px-8 w-full bg-[#3D3D3D] h-[144px] flex-col items-center justify-center gap-4'>
          <h1 className='text-base lg:text-3xl uppercase font-bold text-white'>
            YouTube’s T-POP Top Songs Chart This Week!{' '}
          </h1>
          <div className='flex gap-4 items-center'>
            <button>
              <svg
                width='40'
                height='40'
                viewBox='0 0 40 40'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <circle cx='20' cy='20' r='20' fill='#4B4B4B' />
                <path
                  d='M12 20.1375L24.2062 13.0902L24.2062 27.1848L12 20.1375Z'
                  fill='white'
                />
              </svg>
            </button>
            <p className='text-sm md:text-base lg:text-xl xl:text-2xl font-bold text-white'>{`(${startOfWeek} - ${endOfWeek})`}</p>
            <button>
              <svg
                width='40'
                height='40'
                viewBox='0 0 40 40'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <circle cx='20' cy='20' r='20' fill='#4B4B4B' />
                <path
                  d='M28.275 20.1375L16.0688 27.1848L16.0688 13.0902L28.275 20.1375Z'
                  fill='white'
                />
              </svg>
            </button>
          </div>
        </div>
        {/* <div className='relative flex py-5 items-center'>
          <div className='flex-grow border-t bg-gradient-to-r from-[#FF2727] to-[#0047FF]'></div>
          <div className='flex-grow border-t bg-gradient-to-r from-[#FF2727] to-[#0047FF]'></div>
        </div> */}
        {/* <div className='mt-4 h-2.5 bg-gradient-to-r from-[#FF2727] to-[#0047FF] w-full'>
          &nbsp;
        </div> */}
        <YoutubeChart />
      </main>
    </>
  );
};

export default Charts;
