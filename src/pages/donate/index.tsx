import Head from 'next/head';
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
          content='https://topkoong.github.io/1tpop-project/donate'
        />
        <meta
          property='og:description'
          content='1TPOP Email: onetpopthailand@gmail.com Tel: 1234567'
        ></meta>
        <meta property='og:site_name' content='1TPOP' />
        <link rel='icon' href='./favicon.ico' />
        <meta
          property='og:image:url'
          content='https://topkoong.github.io/1tpop-project/apple-icon-180x180.png'
        />
      </Head>
      <main className='px-8 w-full flex flex-col items-center justify-center'>
        <h1 className='text-center text-2xl uppercase font-bold my-8'>
          Donate
        </h1>
        <div>
          <svg
            width='283'
            height='338'
            viewBox='0 0 283 338'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <rect width='283' height='338' rx='36' fill='#F2F2F2' />
            <rect
              x='31'
              y='22'
              width='222'
              height='222'
              rx='26'
              fill='#D9D9D9'
            />
            <rect
              x='31'
              y='254'
              width='222'
              height='27'
              rx='13.5'
              fill='#D9D9D9'
            />
            <rect
              x='31'
              y='291'
              width='222'
              height='27'
              rx='13.5'
              fill='#D9D9D9'
            />
          </svg>
        </div>
        <div className='lg:px-96 h-full lg:mb-20'>
          <h2 className='text-center text-base uppercase font-bold my-8'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sit
            venenatis eget eget vitae imperdiet lectus.
          </h2>
        </div>
        <footer>
          <h3 className='text-center text-sm my-8'>
            onetpopthailand@gmail.com
          </h3>
        </footer>
      </main>
    </>
  );
};

export default Contact;
