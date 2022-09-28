import { isEmpty, uniq } from 'lodash';

import Head from 'next/head';
/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next';
import SimpleBarChart from '@components/SimpleBarChart';
import Spinner from '@components/Spinner';
import axios from 'axios';
import { useRouter } from 'next/router';

// TODO
// Update image tag

const fetchDailyVideoInfo = async (videoId: string): Promise<any> => {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/videos/${videoId}/infos/daily`,
    {
      headers: {
        'X-API-Key': process.env.NEXT_PUBLIC_X_API_KEY || '',
      },
    }
  );
  return data;
};
const fetchDailyVideosIds = async (): Promise<any> => {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/videos/infos/daily`,
    {
      headers: {
        'X-API-Key': process.env.NEXT_PUBLIC_X_API_KEY || '',
      },
    }
  );
  return Object.keys(data);
};

const VideoPage: NextPage = ({ videoInfos }: any) => {
  const router = useRouter();
  const { videoId } = router.query;
  const videoInfo = videoInfos.find((vdo: any) => vdo.videoId === videoId);
  return (
    <>
      <Head>
        <title>1TPOP</title>
        <meta property='og:type' content='website' />
        <meta name='description' content={`1TPOP - ${videoInfo?.title}`} />
        <meta property='og:title' content={`1TPOP - ${videoInfo?.title}`} />
        <meta
          property='og:description'
          content={`1TPOP - ${videoInfo?.title}`}
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='px-8 w-full'>
        <h1 className='text-4xl uppercase font-bold my-8'>
          {videoInfo?.title ?? 'testing'}
        </h1>

        {/* <TabsRender /> */}
        {/* <YouTubeChartTestWrapper /> */}
        <SimpleBarChart videoInfos={videoInfos} />
      </main>
    </>
  );
};

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
export async function getStaticProps(context: any) {
  const {
    params: { videoId },
  } = context;
  const videoInfos = await fetchDailyVideoInfo(videoId);

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
// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// the path has not been generated.
export async function getStaticPaths() {
  const videoIds = await fetchDailyVideosIds();
  // Get the paths we want to pre-render based on posts
  const paths = videoIds.map((videoId: string) => ({
    params: { videoId },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: blocking } will server-render pages
  // on-demand if the path doesn't exist.

  return { paths, fallback: 'blocking' };
}

export default VideoPage;
