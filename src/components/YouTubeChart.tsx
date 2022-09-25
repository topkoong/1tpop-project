import 'moment/locale/th';

import { isEmpty, orderBy } from 'lodash';

/* eslint-disable @next/next/no-img-element */
import { FunctionComponent } from 'react';
import Link from 'next/link';
import Spinner from './Spinner';
import axios from 'axios';
import classNames from 'classnames';
import moment from 'moment-timezone';
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
    <div className='table-container'>
      <table className='w-full table-auto'>
        <thead className='bg-white sticky top-0'>
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
            <th className='text-[#7B7979] text-center uppercase font-bold text-base lg:text-xl py-3 px-4 '>
              Watch Video
            </th>
          </tr>
        </thead>
        <tbody className='w-full'>
          {Array.isArray(videoInfos) &&
            orderBy(videoInfos, 'views', 'desc')?.map(
              (
                {
                  videoId,
                  url,
                  song,
                  artist,
                  views,
                  publishedAt,
                  mediumImageUrl,
                  maxresImageUrl,
                }: VideoInfo,
                idx: number
              ) => (
                <tr key={videoId} className='border-b-2 w-full h-full'>
                  <td className='py-2 h-full w-full grid grid-cols-2 place-items-center'>
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
                  <td className='py-2 px-4'>
                    <div
                      className={classNames({
                        'flex items-center': idx !== 0,
                        '': idx === 0,
                      })}
                    >
                      <div
                        className={classNames({
                          'w-[117px] h-[66px]': idx !== 0,
                          'w-[325px] h-[108px]': idx === 0,
                        })}
                      >
                        <img
                          src={idx == 0 ? maxresImageUrl : mediumImageUrl}
                          alt=''
                          className='w-full'
                        />
                      </div>
                      <span
                        className={classNames(
                          'font-bold text-base lg:text-xl',
                          {
                            'mx-4': idx !== 0,
                            'inline-block mt-20': idx === 0,
                          }
                        )}
                      >
                        {`${artist} - ${song}`}
                      </span>
                    </div>
                  </td>
                  <td className='py-2 px-4 h-full'>
                    <span className='inline-block font-bold text-base lg:text-xl'>
                      {views?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    </span>
                  </td>
                  <td className='py-2 px-4 h-full'>
                    <span className='inline-block font-bold text-base lg:text-xl'>
                      {!isEmpty(publishedAt) &&
                        moment(publishedAt).tz('Asia/Bangkok').format('l')}
                    </span>
                  </td>
                  <td className='py-2 px-4 h-full'>
                    {
                      <div className='flex justify-center text-center cursor-pointer'>
                        <Link href={url} passHref>
                          <a target='_blank' rel='noopener noreferrer'>
                            <svg
                              width='46'
                              height='40'
                              viewBox='0 0 46 40'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <rect
                                width='46'
                                height='40'
                                rx='17'
                                fill='#FF0000'
                              />
                              <path
                                d='M33 20.5L17.25 29.5933L17.25 11.4067L33 20.5Z'
                                fill='white'
                              />
                            </svg>
                          </a>
                        </Link>
                      </div>
                    }
                  </td>
                </tr>
              )
            )}
        </tbody>
      </table>
    </div>
  );
};

export default YoutubeChart;
