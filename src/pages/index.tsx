import 'moment/locale/th';
import 'swiper/css';
import 'swiper/css/pagination';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay } from 'swiper';
import Head from 'next/head';
import type { NextPage } from 'next';
import { Pagination } from 'swiper';
import moment from 'moment-timezone';

const Home: NextPage = () => {
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
        <link rel='icon' href='/icons/favicon.ico' />
      </Head>
      <main className='w-full h-full'>
        <section className='h-full'>
          <Swiper
            pagination={true}
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
            <SwiperSlide className='w-full'>
              <div className='w-full stacked'>
                <div className='bg-[#0047FF] mb-12 sm:mb-16 w-[133px] sm:w-[173px] md:w-[233px] lg:w-[273px] h-[33px] sm:h-[43px] md:h-[83px] lg:h-[93px] flex justify-center items-center'>
                  <h2 className='text-base md:text-2xl lg:text-3xl uppercase font-bold text-white'>
                    New Music
                  </h2>
                </div>
                <img className='w-full media' src='./images/slide1.png' />
              </div>
            </SwiperSlide>
            <SwiperSlide className='w-full'>
              <div className='w-full stacked'>
                <div className='bg-[#0047FF] mb-12 sm:mb-16 w-[133px] sm:w-[173px] md:w-[233px] lg:w-[273px] h-[33px] sm:h-[43px] md:h-[83px] lg:h-[93px] flex justify-center items-center'>
                  <h2 className='text-base md:text-2xl lg:text-3xl uppercase font-bold text-white'>
                    New Music
                  </h2>
                </div>
                <img className='w-full media' src='./images/slide2.png' />
              </div>
            </SwiperSlide>
            <SwiperSlide className='w-full'>
              <div className='w-full stacked'>
                <div className='bg-[#0047FF] mb-12 sm:mb-16 w-[133px] sm:w-[173px] md:w-[233px] lg:w-[273px] h-[33px] sm:h-[43px] md:h-[83px] lg:h-[93px] flex justify-center items-center'>
                  <h2 className='text-base md:text-2xl lg:text-3xl uppercase font-bold text-white'>
                    New Music
                  </h2>
                </div>
                <img className='w-full media' src='./images/slide3.png' />
              </div>
            </SwiperSlide>
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

            <p className='uppercase text-white text-sm md:text-base lg:text-xl xl:text-2xl font-bold'>
              view all &gt;&gt;
            </p>
          </div>
          <div className='flex gap-8'>
            <div className='w-full'>
              <p className='text-white text-base my-2'>NuNew - รักแท้</p>
              <img className='w-full' src='./images/nunew.png' alt='' />
            </div>
            <div className='w-full'>
              <div className='flex items-center gap-8 my-2'>
                <img
                  className='w-[240px] md:w-[280px] lg:w-[320px] xl:w-[360px] 2xl:w-[380px]'
                  src='./images/klear.png'
                  alt=''
                />
                <p className='text-white text-base'>
                  2 ถามเพื่ออะไร (What for?) - KLEAR
                </p>
              </div>
              <div className='flex items-center gap-8 my-2'>
                <img
                  className='w-[240px] md:w-[280px] lg:w-[320px] xl:w-[360px] 2xl:w-[380px]'
                  src='./images/bo.png'
                  alt=''
                />
                <p className='text-white text-base'>
                  3 BOW Maylada - เเฟนผมน่ารัก (CUTE)
                </p>
              </div>
            </div>
          </div>
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

export default Home;
