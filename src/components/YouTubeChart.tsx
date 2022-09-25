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
    <table className='w-full'>
      <thead>
        <tr className='border-b-2'>
          <th className='text-left uppercase font-bold text-base lg:text-xl py-3 px-4 whitespace-nowrap'>
            Rank
          </th>
          <th className='text-left uppercase font-bold text-base lg:text-xl py-3 px-4 '>
            Song
          </th>
          <th className='text-left uppercase font-bold text-base lg:text-xl py-3 px-4 '>
            Views
          </th>
          <th className='text-left uppercase font-bold text-base lg:text-xl py-3 px-4 '>
            Release
          </th>
          <th className='text-left font-bold text-base lg:text-xl py-3 px-4 '>
            Lorem
          </th>
        </tr>
      </thead>
      <tbody>
        {Array.isArray(videoInfos) &&
          videoInfos?.map(
            (
              {
                videoId,
                song,
                views,
                publishedAt,
                mediumImageUrl,
                defaultImageUrl,
              }: VideoInfo,
              idx: number
            ) => (
              <tr key={videoId} className='border-b-2'>
                <td className='w-full grid grid-cols-2 place-items-center'>
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
                    <span className='w-full inline-block text-center'>-</span>
                  </div>
                </td>
                <td className='py-8 px-4'>
                  <div
                    className={classNames({
                      flex: idx !== 0,
                      '': idx === 0,
                    })}
                  >
                    <div>
                      <img
                        src={idx == 0 ? mediumImageUrl : defaultImageUrl}
                        alt=''
                      />
                    </div>
                    <span
                      className={classNames('font-bold text-base lg:text-xl', {
                        'mx-4': idx !== 0,
                        'my-4 inline-block': idx === 0,
                      })}
                    >
                      {song}
                    </span>
                  </div>
                </td>
                <td className='py-8 px-4 h-full align-top'>
                  <span className='inline-block font-bold text-base lg:text-xl'>
                    {views.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  </span>
                </td>
                <td className='py-8 px-4 h-full align-top'>
                  <span className='inline-block font-bold text-base lg:text-xl'>
                    {moment(publishedAt).format('l')}
                  </span>
                </td>
                <td className='py-8 px-4 h-full align-top'>
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
