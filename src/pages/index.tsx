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
import useBreakpoints from '@hooks/useBreakpoints';
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

const fetchImageSliders = async (): Promise<any> => {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/images/sliders`,
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
  const { isLg, isXl, is2Xl } = useBreakpoints();
  const {
    isLoading,
    isError,
    data: videoInfos,
    error,
  } = useQuery('fetchTopViewsVideosInfos', fetchTopViewsVideosInfos);

  const {
    isLoading: isLoadingImages,
    isError: isFetchingImagesSlidersError,
    data: imageSliders,
    error: fetchingImagesSlidersError,
  } = useQuery('fetchImageSliders', fetchImageSliders);
  return (
    <>
      <Head>
        <title>
          1TPOP - เช็คอันดับเพลงฮิต 2022 อัพเดทประจำทุกสัปดาห์ได้ก่อนใคร
        </title>
        <meta property='og:type' content='website' />
        <meta
          name='description'
          content='1TPOP - เช็คอันดับเพลงฮิตทุกแนว 2022 อัพเดทประจำทุกสัปดาห์ได้ก่อนใคร เพลงฮิตติดชาร์ต การันตี รวม Top Chart Songs เพลงใหม่ล่าสุด'
        />
        <meta
          property='og:title'
          content={`1TPOP - เช็คอันดับเพลงฮิตทุกแนว 2022 อัพเดทประจำทุกสัปดาห์ได้ก่อนใคร เพลงฮิตติดชาร์ต การันตี รวม Top Chart Songs เพลงใหม่ล่าสุด`}
        />
        <meta
          property='og:description'
          content='1TPOP - เช็คอันดับเพลงฮิต 2022 อัพเดทประจำทุกสัปดาห์ได้ก่อนใคร เพลงฮิตติดชาร์ต การันตี รวม Top Chart Songs เพลงใหม่ล่าสุด'
        />
        <meta
          property='og:url'
          content='https://topkoong.github.io/1tpop-project/'
        />
        <meta property='og:locale' content='th_TH' />
        <meta property='og:site_name' content='1TPOP' />
        <link rel='icon' href='./favicon.ico' />
      </Head>
      <main className='w-full h-full bg-[#efefef]'>
        {isLoadingImages || isEmpty(imageSliders) ? (
          <Spinner />
        ) : isFetchingImagesSlidersError &&
          fetchingImagesSlidersError instanceof Error ? (
          <span>Error: {fetchingImagesSlidersError?.message} </span>
        ) : (
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
              {imageSliders.map((imageSlider: any, idx: number) => (
                <SwiperSlide key={idx} className='w-full'>
                  <ImageSlide {...imageSlider} />
                </SwiperSlide>
              ))}
            </Swiper>
          </section>
        )}
        <section className='p-8'>
          <div className='w-fit'>
            <h2 className='text-base md:text-3xl lg:text-6xl xl:text-7xl uppercase font-bold'>
              All Chart
            </h2>
            <div className='flex-grow border-t h-[8px] md:h-[18px] bg-gradient-to-r from-[#FF2727] to-[#0047FF]'></div>
          </div>
        </section>
        <section className='p-8 my-4 md:my-0 h-full'>
          <div className='p-8 flex flex-col md:flex-row justify-between bg-[#0047FF]'>
            <h1 className='text-base lg:text-3xl uppercase font-bold text-white'>
              YouTube’s T-POP Top Songs Chart This Week!{' '}
              <span className='inline-block text-sm md:text-base lg:text-xl xl:text-2xl font-bold text-white'>
                {`(${startOfWeek} - ${endOfWeek})`}
              </span>
            </h1>
            <Link href='/charts'>
              <p className='cursor-pointer uppercase text-white text-sm md:text-base lg:text-xl xl:text-2xl font-bold'>
                view all &gt;&gt;
              </p>
            </Link>
          </div>
          {isLoading || isEmpty(videoInfos) ? (
            <Spinner />
          ) : isError && error instanceof Error ? (
            <span>Error: {error?.message} </span>
          ) : (
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 p-8 bg-[#3D3D3D]'>
              <div className='w-full'>
                <img
                  className='w-full'
                  src={videoInfos[0].maxresImageUrl}
                  alt=''
                />
              </div>
              <div className='w-full grid grid-rows-3 gap-4'>
                {videoInfos.map((videoInfo: any, idx: number) => (
                  <div
                    key={videoInfo.title}
                    className='grid grid-cols-3 bg-white w-full'
                  >
                    <div className='bg-[#0047FF] w-14 col-end-1 grid items-center'>
                      <p className='text-white text-center text-xl sm:text-3xl md:text-4xl lg:text-5xl'>
                        {idx + 1}
                      </p>
                    </div>
                    <div className='w-full p-8 col-span-full'>
                      <div className='grid grid-rows-2 h-full gap-4'>
                        <div className='w-full'>
                          <p className='text-black font-bold text-base lg:text-2xl'>
                            {videoInfo.title}
                          </p>
                        </div>
                        <div>
                          <div className='flex justify-start gap-8'>
                            <div className='flex gap-4 items-center'>
                              <svg
                                width='33'
                                height='34'
                                viewBox='0 0 33 34'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                              >
                                <ellipse
                                  cx='16.2785'
                                  cy='16.7718'
                                  rx='16.2785'
                                  ry='16.7718'
                                  fill='#D9D9D9'
                                />
                              </svg>
                              <p className='font-bold text-sm md:text-base lg:text-lg'>
                                {' '}
                                {isLg || isXl || is2Xl
                                  ? videoInfo?.views
                                      ?.toString()
                                      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                                  : Intl.NumberFormat('en', {
                                      notation: 'compact',
                                    }).format(videoInfo.views)}
                              </p>
                            </div>
                            <div className='flex gap-4 items-center'>
                              <svg
                                width='33'
                                height='34'
                                viewBox='0 0 33 34'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                              >
                                <ellipse
                                  cx='16.2785'
                                  cy='16.7718'
                                  rx='16.2785'
                                  ry='16.7718'
                                  fill='#D9D9D9'
                                />
                              </svg>
                              <p className='font-bold text-sm md:text-base lg:text-lg'>
                                {moment(videoInfo.publishedAt)
                                  .tz('Asia/Bangkok')
                                  .format('l')}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>
        <section className='p-8 my-4 md:my-0 h-full grid grid-cols-1 md:grid-cols-2 gap-8 p-8'>
          {isLoading || isEmpty(videoInfos) ? (
            <Spinner />
          ) : isError && error instanceof Error ? (
            <span>Error: {error?.message} </span>
          ) : (
            <>
              <div className='w-full'>
                <div className='p-8 flex justify-between bg-[#3D3D3D]'>
                  <h1 className='text-base lg:text-xl uppercase font-bold text-white'>
                    Most viewed YouTube T-Pop video last week
                  </h1>
                  <Link href='/charts'>
                    <p className='cursor-pointer uppercase text-white text-sm lg:text-base xl:text-lg font-bold'>
                      view all &gt;&gt;
                    </p>
                  </Link>
                </div>
                <img
                  className='w-full'
                  src={videoInfos[0].maxresImageUrl}
                  alt=''
                />
                <div className='w-full grid gap-4'>
                  <div
                    key={videoInfos[0].title}
                    className='grid grid-cols-3 bg-white w-full'
                  >
                    <div className='w-full p-8 col-span-full'>
                      <div className='grid grid-rows-2 h-full gap-4'>
                        <div className='w-full'>
                          <p className='text-black font-bold text-base lg:text-2xl'>
                            {videoInfos[0].title}
                          </p>
                        </div>
                        <div>
                          <div className='flex justify-start gap-8'>
                            <div className='flex gap-4 items-center'>
                              <svg
                                width='33'
                                height='34'
                                viewBox='0 0 33 34'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                              >
                                <ellipse
                                  cx='16.2785'
                                  cy='16.7718'
                                  rx='16.2785'
                                  ry='16.7718'
                                  fill='#D9D9D9'
                                />
                              </svg>
                              <p className='font-bold text-sm md:text-base lg:text-lg'>
                                {' '}
                                {isLg || isXl || is2Xl
                                  ? videoInfos[0]?.views
                                      ?.toString()
                                      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                                  : Intl.NumberFormat('en', {
                                      notation: 'compact',
                                    }).format(videoInfos[0].views)}
                              </p>
                            </div>
                            <div className='flex gap-4 items-center'>
                              <svg
                                width='33'
                                height='34'
                                viewBox='0 0 33 34'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                              >
                                <ellipse
                                  cx='16.2785'
                                  cy='16.7718'
                                  rx='16.2785'
                                  ry='16.7718'
                                  fill='#D9D9D9'
                                />
                              </svg>
                              <p className='font-bold text-sm md:text-base lg:text-lg'>
                                {moment(videoInfos[0].publishedAt)
                                  .tz('Asia/Bangkok')
                                  .format('l')}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='w-full'>
                <div className='p-8 flex justify-between bg-[#3D3D3D]'>
                  <h1 className='text-base lg:text-xl uppercase font-bold text-white'>
                    Most viewed YouTube T-Pop video this month
                  </h1>
                  <Link href='/charts'>
                    <p className='cursor-pointer uppercase text-white text-sm lg:text-base xl:text-lg font-bold'>
                      view all &gt;&gt;
                    </p>
                  </Link>
                </div>
                <img
                  className='w-full'
                  src={videoInfos[1].maxresImageUrl}
                  alt=''
                />
                <div className='w-full grid gap-4'>
                  <div
                    key={videoInfos[1].title}
                    className='grid grid-cols-3 bg-white w-full'
                  >
                    <div className='w-full p-8 col-span-full'>
                      <div className='grid grid-rows-2 h-full gap-4'>
                        <div className='w-full'>
                          <p className='text-black font-bold text-base lg:text-2xl'>
                            {videoInfos[1].title}
                          </p>
                        </div>
                        <div>
                          <div className='flex justify-start gap-8'>
                            <div className='flex gap-4 items-center'>
                              <svg
                                width='33'
                                height='34'
                                viewBox='0 0 33 34'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                              >
                                <ellipse
                                  cx='16.2785'
                                  cy='16.7718'
                                  rx='16.2785'
                                  ry='16.7718'
                                  fill='#D9D9D9'
                                />
                              </svg>
                              <p className='font-bold text-sm md:text-base lg:text-lg'>
                                {' '}
                                {isLg || isXl || is2Xl
                                  ? videoInfos[1]?.views
                                      ?.toString()
                                      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                                  : Intl.NumberFormat('en', {
                                      notation: 'compact',
                                    }).format(videoInfos[1].views)}
                              </p>
                            </div>
                            <div className='flex gap-4 items-center'>
                              <svg
                                width='33'
                                height='34'
                                viewBox='0 0 33 34'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                              >
                                <ellipse
                                  cx='16.2785'
                                  cy='16.7718'
                                  rx='16.2785'
                                  ry='16.7718'
                                  fill='#D9D9D9'
                                />
                              </svg>
                              <p className='font-bold text-sm md:text-base lg:text-lg'>
                                {moment(videoInfos[0].publishedAt)
                                  .tz('Asia/Bangkok')
                                  .format('l')}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
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
  const imageSliders = await fetchImageSliders();

  return {
    props: {
      videoInfos,
      imageSliders,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 15, // In seconds
  };
}

export default Home;
