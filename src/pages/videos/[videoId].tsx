import 'moment/locale/th';

import Head from 'next/head';
import type { NextPage } from 'next';
import SimpleBarChart from '@components/SimpleBarChart';
import Spinner from '@components/Spinner';
import axios from 'axios';
import { isEmpty } from 'lodash';
import moment from 'moment-timezone';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';

// TODO
// Update image tag
// NEEDS TO FIX THIS CLIENT NEVER GETS UPDATED

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
  const startOfWeek = moment()
    .startOf('isoWeek')
    .tz('Asia/Bangkok')
    .format('l');
  const endOfWeek = moment().endOf('isoWeek').tz('Asia/Bangkok').format('l');
  const router = useRouter();
  const { videoId } = router.query;
  const {
    isLoading,
    isError,
    data: videoInfo,
    error,
  } = useQuery(
    ['fetchDailyVideoInfo', videoId],
    () => fetchDailyVideoInfo(videoId as string)
    // { initialData: videoInfos.find((vdo: any) => vdo.videoId === videoId) }
  );
  // const videoInfo =
  //   !isEmpty(videoInfos) &&
  //   videoInfos?.find((vdo: any) => vdo.videoId === videoId);
  // Extract single video info to provide in metadata
  // const videoInfo = videoInfos.find((vdo: any) => vdo.videoId === videoId);
  // TODO:
  // handle when there's no videoId
  const title = !isEmpty(videoInfo)
    ? `1TPOP - ${videoInfo[0]?.title || ''}`
    : '';

  if (router.isFallback) return null;

  return isLoading || isEmpty(videoInfos) || isEmpty(videoInfo) ? (
    <Spinner />
  ) : isError && error instanceof Error ? (
    <span>Error: {error?.message} </span>
  ) : (
    <>
      <Head>
        <title>{title}</title>
        <meta property='og:type' content='website' />
        <meta name='description' content={title} />
        <meta property='og:title' content={title} />
        <meta property='og:description' content={title} />
        <meta
          property='og:url'
          content={`https://topkoong.github.io/1tpop-project/${videoInfo?.videoId}`}
        />
        <meta property='og:site_name' content='1TPOP' />
        <meta property='og:locale' content='th_TH' />
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
        {/* <TabsRender /> */}
        {/* <YouTubeChartTestWrapper /> */}
        <div className='px-8 flex w-full bg-[#3D3D3D] h-[144px] flex-col items-start justify-center gap-4'>
          <h1 className='text-base lg:text-3xl uppercase font-bold text-white'>
            Graph of the Week{' '}
            <span className='inline-block text-sm md:text-base lg:text-xl xl:text-2xl font-bold text-white'>
              {`(${startOfWeek} - ${endOfWeek})`}
            </span>
          </h1>
        </div>
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
      videoInfos, //same video Id for every single day
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 60, // In seconds
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

  return { paths, fallback: true }; // SSR page and then cache
}

export default VideoPage;
