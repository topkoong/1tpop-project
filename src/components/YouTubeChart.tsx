/* eslint-disable @next/next/no-img-element */
import { FunctionComponent } from 'react';
import Spinner from './Spinner';
import axios from 'axios';
import classNames from 'classnames';
import { isEmpty } from 'lodash';
import moment from 'moment';
import { useQuery } from 'react-query';

// TODO
// Update image tag
interface VideoInfo {
  [key: string]: string;
}

const YoutubeChart: FunctionComponent = () => {
  const fetchVideosInfos = async (): Promise<any> => {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/videos`,
      {
        headers: {
          'X-API-Key': process.env.NEXT_PUBLIC_X_API_KEY || '',
        },
      }
    );
    return data;
  };

  const {
    isLoading,
    isError,
    data: videoInfos,
    error,
  } = useQuery('fetchVideosInfos', fetchVideosInfos);

  return isLoading || isEmpty(videoInfos) ? (
    <Spinner />
  ) : isError && error instanceof Error ? (
    <span>Error: {error?.message} </span>
  ) : (
    <table className='w-full table-auto'>
      <thead>
        <tr className='border-b-2'>
          <th className='text-[#7B7979] text-left uppercase font-bold text-base lg:text-xl py-3 px-4 whitespace-nowrap'>
            Rank
          </th>
          <th className='text-[#7B7979] text-left uppercase font-bold text-base lg:text-xl py-3 px-4 '>
            Song
          </th>
          <th className='text-[#7B7979] text-left uppercase font-bold text-base lg:text-xl py-3 px-4 '>
            Views
          </th>
          <th className='text-[#7B7979] text-left uppercase font-bold text-base lg:text-xl py-3 px-4 '>
            Release
          </th>
          <th className='text-[#7B7979] text-left font-bold text-base lg:text-xl py-3 px-4 '>
            Lorem
          </th>
        </tr>
      </thead>
      <tbody className='w-full'>
        {Array.isArray(videoInfos) &&
          videoInfos?.map(
            (
              {
                videoId,
                song,
                artist,
                views,
                publishedAt,
                mediumImageUrl,
                maxresImageUrl,
                highImageUrl,
              }: VideoInfo,
              idx: number
            ) => (
              <tr key={videoId} className='border-b-2 w-full h-full'>
                <td className='py-8 h-full w-full grid grid-cols-2 place-items-center'>
                  <span
                    className={classNames('uppercase font-bold', {
                      'text-7xl lg:text-[136px] text-[136px]': idx === 0,
                      'text-6xl lg:text-[84px]': idx === 1 || idx === 2,
                      'text-[40px]': idx !== 0,
                    })}
                  >
                    {idx + 1}
                  </span>
                  <div className='w-6'>
                    <svg
                      width='21'
                      height='18'
                      viewBox='0 0 21 18'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M10.5 0L20.4593 17.25H0.540708L10.5 0Z'
                        fill='#BDFF00'
                      />
                    </svg>
                  </div>
                </td>
                <td className='py-8 px-4'>
                  <div
                    className={classNames({
                      'flex items-center': idx !== 0,
                      '': idx === 0,
                    })}
                  >
                    <div
                      className={classNames({
                        'w-[117px] h-[66px]': idx !== 0,
                        'w-[495px] h-[278px]': idx === 0,
                      })}
                    >
                      <img
                        src={idx == 0 ? maxresImageUrl : mediumImageUrl}
                        alt=''
                        className='w-full'
                      />
                    </div>
                    <span
                      className={classNames('font-bold text-base lg:text-xl', {
                        'mx-4': idx !== 0,
                        'mt-4 inline-block': idx === 0,
                      })}
                    >
                      {`${artist} - ${song}`}
                    </span>
                  </div>
                </td>
                <td className='py-8 px-4 h-full'>
                  <span className='inline-block font-bold text-base lg:text-xl'>
                    {views.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  </span>
                </td>
                <td className='py-8 px-4 h-full'>
                  <span className='inline-block font-bold text-base lg:text-xl'>
                    {moment(publishedAt).format('l')}
                  </span>
                </td>
                <td className='py-8 px-4 h-full'>
                  <span className='inline-block font-bold text-base lg:text-xl'>
                    Lorem
                  </span>
                </td>
              </tr>
            )
          )}
      </tbody>
    </table>
  );
};

export default YoutubeChart;
