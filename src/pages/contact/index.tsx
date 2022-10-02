import Head from 'next/head';
import Link from 'next/link';
import type { NextPage } from 'next';
const Contact: NextPage = () => {
  return (
    <>
      <Head>
        <title>1TPOP - Contact</title>
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
        <meta
          property='og:url'
          content='https://topkoong.github.io/1tpop-project/contact'
        />
        <meta
          property='og:description'
          content='1TPOP Email: onetpopthailand@gmail.com Tel: 1234567'
        ></meta>
        <meta property='og:site_name' content='1TPOP' />
        <link rel='icon' href='./favicon.ico' />
        <meta property='og:image:url' content='./apple-icon-180x180.png' />
      </Head>
      <main className='px-8 w-full flex flex-col items-center justify-center'>
        <div>
          <svg
            width='221'
            height='221'
            viewBox='0 0 221 221'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <rect
              x='19'
              y='19'
              width='183'
              height='183'
              rx='91.5'
              fill='url(#paint0_linear_165_142)'
            />
            <rect
              x='14.5'
              y='14.5'
              width='192'
              height='192'
              rx='96'
              stroke='url(#paint1_linear_165_142)'
              stroke-opacity='0.72'
            />
            <rect
              x='8.5'
              y='8.5'
              width='205'
              height='205'
              rx='102.5'
              stroke='url(#paint2_linear_165_142)'
              stroke-opacity='0.25'
            />
            <rect
              x='0.5'
              y='0.5'
              width='220'
              height='220'
              rx='110'
              stroke='url(#paint3_linear_165_142)'
              stroke-opacity='0.13'
            />
            <path d='M110.5 73L149 138H72L110.5 73Z' fill='white' />
            <defs>
              <linearGradient
                id='paint0_linear_165_142'
                x1='55.2188'
                y1='34.25'
                x2='167.688'
                y2='202'
                gradientUnits='userSpaceOnUse'
              >
                <stop stop-color='#FF2727' />
                <stop offset='1' stop-color='#0047FF' />
              </linearGradient>
              <linearGradient
                id='paint1_linear_165_142'
                x1='110.5'
                y1='14'
                x2='110.5'
                y2='207'
                gradientUnits='userSpaceOnUse'
              >
                <stop stop-color='#0047FF' />
                <stop offset='1' stop-color='#FF0707' />
              </linearGradient>
              <linearGradient
                id='paint2_linear_165_142'
                x1='111'
                y1='8'
                x2='111'
                y2='214'
                gradientUnits='userSpaceOnUse'
              >
                <stop stop-color='#0047FF' />
                <stop offset='1' stop-color='#FF0707' />
              </linearGradient>
              <linearGradient
                id='paint3_linear_165_142'
                x1='110.5'
                y1='0'
                x2='110.5'
                y2='221'
                gradientUnits='userSpaceOnUse'
              >
                <stop stop-color='#0047FF' />
                <stop offset='1' stop-color='#FF0707' />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className='lg:px-96 h-full lg:mb-40'>
          <h1 className='text-center text-2xl uppercase font-bold my-8'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sit
            venenatis eget eget vitae imperdiet lectus.
          </h1>
        </div>
        <footer>
          <h2 className='text-center text-sm my-8'>
            ติดต่อ : onetpopthailand@gmail.com หรือ สนับสนุนได้ที่{' '}
            <button className='bg-[#0047FF] text-sm rounded-full text-white py-0.5 px-2'>
              <Link href='/donate'>donate</Link>
            </button>
          </h2>
        </footer>
      </main>
    </>
  );
};

export default Contact;
