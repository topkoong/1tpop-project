/* eslint-disable @next/next/no-img-element */
import 'moment/locale/th';
import 'swiper/css';
import 'swiper/css/pagination';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay } from 'swiper';
import Head from 'next/head';
import ImageSlide from '@components/ImageSlide';
import Link from 'next/link';
import type { NextPage } from 'next';
import { Pagination } from 'swiper';
import Spinner from '@components/Spinner';
import axios from 'axios';
import { isEmpty } from 'lodash';
import moment from 'moment-timezone';
import { useQuery } from 'react-query';

const fetchTopViewsVideosInfos = async (): Promise<any> => {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/videos?sort=views&limit=3`,
    {
      headers: {
        'X-API-Key': process.env.NEXT_PUBLIC_X_API_KEY || '',
      },
    }
  );
  return data;
};

const Home: NextPage = () => {
  const startOfWeek = moment()
    .startOf('isoWeek')
    .tz('Asia/Bangkok')
    .format('l');
  const endOfWeek = moment().endOf('isoWeek').tz('Asia/Bangkok').format('l');
  const {
    isLoading,
    isError,
    data: videoInfos,
    error,
  } = useQuery('fetchTopViewsVideosInfos', fetchTopViewsVideosInfos);
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
        <link rel='icon' href='./favicon.ico' />
      </Head>
      <main className='w-full h-full'>
        <section className='h-full'>
          <Swiper
            pagination={{ clickable: true }}
            spaceBetween={50}
            slidesPerView={1}
            loop
            autoplay={{
              delay: 2500,
            }}
            navigation
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            modules={[Autoplay, Pagination]}
          >
            {[1, 2, 3, 4, 5].map((elem) => (
              <SwiperSlide key={elem} className='w-full'>
                <ImageSlide idx={elem} />
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
        <section className='p-8'>
          <div className='w-fit'>
            <h2 className='text-base md:text-3xl lg:text-6xl xl:text-7xl uppercase font-bold'>
              All Chart
            </h2>
            <div className='flex-grow border-t h-[8px] md:h-[18px] bg-gradient-to-r from-[#FF2727] to-[#0047FF]'></div>
          </div>
        </section>
        <section className='p-8 my-4 md:my-24 h-full bg-black'>
          <div className='flex justify-between mb-8'>
            <h1 className='text-base lg:text-3xl uppercase font-bold text-white'>
              YouTube’s T-POP Top Songs Chart This Week!{' '}
              <span className='inline-block text-sm md:text-base lg:text-xl xl:text-2xl font-bold text-white'>
                {`(${startOfWeek} - ${endOfWeek})`}
              </span>
            </h1>
            <Link href='/charts'>
              <p className='uppercase text-white text-sm md:text-base lg:text-xl xl:text-2xl font-bold'>
                view all &gt;&gt;
              </p>
            </Link>
          </div>
          {isLoading || isEmpty(videoInfos) ? (
            <Spinner />
          ) : isError && error instanceof Error ? (
            <span>Error: {error?.message} </span>
          ) : (
            <div className='flex gap-8'>
              <div className='w-full'>
                <p className='text-white text-base my-2'>
                  {videoInfos[0].title}
                </p>
                <img
                  className='w-full'
                  src={videoInfos[0].maxresImageUrl}
                  alt=''
                />
              </div>
              <div className='w-full'>
                {videoInfos.slice(1).map((videoInfo: any) => (
                  <div
                    key={videoInfo.title}
                    className='flex items-center gap-8 my-2'
                  >
                    <img
                      className='w-[240px] md:w-[280px] lg:w-[320px] xl:w-[360px] 2xl:w-[380px]'
                      src={
                        videoInfo.maxresImageUrl ??
                        videoInfo.standardImageUrl ??
                        videoInfo.highImageUrl ??
                        videoInfo.mediumImageUrl
                      }
                      alt=''
                    />
                    <p className='text-white text-base'>{videoInfo.title}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>
        <footer className='bg-black h-[190px] w-full flex justify-center items-center'>
          <h4 className='text-center uppercase text-white font-bold text-3xl lg:text-6xl xl:text-7xl'>
            1TPOP!
          </h4>
        </footer>
      </main>
    </>
  );
};

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
export async function getStaticProps() {
  const videoInfos = await fetchTopViewsVideosInfos();

  return {
    props: {
      videoInfos,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 15, // In seconds
  };
}

export default Home;
