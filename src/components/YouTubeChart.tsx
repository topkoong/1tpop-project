import 'moment/locale/th';

/* eslint-disable @next/next/no-img-element */
import { FunctionComponent, useEffect, useState } from 'react';
import { isEmpty, orderBy } from 'lodash';

import Link from 'next/link';
import Spinner from './Spinner';
import axios from 'axios';
import classNames from 'classnames';
import moment from 'moment-timezone';
import useBreakpoints from '@hooks/useBreakpoints';
import { useQuery } from 'react-query';

// TODO
// Update image tag
interface VideoInfo {
  [key: string]: string;
}

const YoutubeChart: FunctionComponent = () => {
  const { isXs, isSm, isMd, isLg, isXl, is2Xl } = useBreakpoints();
  const [vdoInfos, setVdoInfos] = useState<any>([]);
  const [isToggleReleasedButton, setIsToggleReleasedButton] = useState(false);
  const [isToggleViewsButton, setIsToggleViewsButton] = useState(false);
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const fetchVideosInfos = async (): Promise<any> => {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/videos`,
      {
        headers: {
          'X-API-Key': process.env.NEXT_PUBLIC_X_API_KEY || '',
        },
      }
    );
    return orderBy(data, 'views', 'desc');
  };

  const {
    isLoading,
    isSuccess,
    isError,
    data: videoInfos,
    error,
  } = useQuery('fetchVideosInfos', fetchVideosInfos, {
    onSuccess: setVdoInfos,
  });

  const handleReleaseButton = () => {
    setIsToggleViewsButton(false);
    setIsToggleReleasedButton((prevState) => !prevState);
    setVdoInfos(
      orderBy(vdoInfos, 'publishedAt', !isToggleReleasedButton ? 'desc' : 'asc')
    );
  };
  const handleViewsButton = () => {
    setIsToggleReleasedButton(false);
    setIsToggleViewsButton((prevState) => !prevState);
    setVdoInfos(
      orderBy(vdoInfos, 'views', !isToggleViewsButton ? 'desc' : 'asc')
    );
  };

  return isLoading || isEmpty(vdoInfos) ? (
    <Spinner />
  ) : isError && error instanceof Error ? (
    <span>Error: {error?.message} </span>
  ) : (
    <div className='table-container'>
      <table className='w-full table-auto'>
        <thead className='bg-white sticky top-0'>
          <tr className='border-b-2'>
            <th className='text-[#7B7979] text-left uppercase font-bold text-sm md:text-base lg:text-xl py-3 px-4 whitespace-nowrap'>
              Rank
            </th>
            <th className='text-[#7B7979] text-left uppercase font-bold text-sm md:text-base  lg:text-xl py-3 px-4 '>
              Song
            </th>
            <th className='text-[#7B7979] text-left uppercase font-bold text-sm md:text-base  lg:text-xl py-3 px-4'>
              <div className='flex items-center'>
                Views
                <a className='cursor-pointer'>
                  <svg
                    onClick={handleViewsButton}
                    xmlns='http://www.w3.org/2000/svg'
                    className='ml-1 w-3 h-3'
                    aria-hidden='true'
                    fill='currentColor'
                    viewBox='0 0 320 512'
                  >
                    <path d='M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z' />
                  </svg>
                </a>
              </div>
            </th>
            <th className='text-[#7B7979] text-left uppercase font-bold text-sm md:text-base lg:text-xl py-3 px-4'>
              <div className='flex items-center'>
                Release
                <a className='cursor-pointer'>
                  <svg
                    onClick={handleReleaseButton}
                    xmlns='http://www.w3.org/2000/svg'
                    className='ml-1 w-3 h-3'
                    aria-hidden='true'
                    fill='currentColor'
                    viewBox='0 0 320 512'
                  >
                    <path d='M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z' />
                  </svg>
                </a>
              </div>
            </th>
            <th className='text-[#7B7979] text-center uppercase font-bold text-sm md:text-base  lg:text-xl py-3 px-4 '>
              Video
            </th>
          </tr>
        </thead>
        <tbody className='w-full'>
          {Array.isArray(vdoInfos) &&
            vdoInfos?.map(
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
                  standardImageUrl,
                }: VideoInfo,
                idx: number
              ) => (
                <tr key={videoId} className='border-b-2 w-full h-full'>
                  <td
                    className={classNames(
                      'py-2 h-[120px] xl:h-[80px] w-full grid grid-cols-2 place-items-center place-content-center',
                      {
                        'h-[140px] md:h-[160px] lg:h-[170px] xl:h-[180px] 2xl:h-[200px]':
                          idx === 0,
                      }
                    )}
                  >
                    <p
                      className={classNames('uppercase font-bold', {
                        'text-3xl md:text-7xl lg:text-[116px] xl:text-[126px] 2xl:text-[136px]':
                          idx === 0,
                        'text-2xl md:text-6xl lg:text-[64px] xl:text-[74px] 2xl:text-[84px]':
                          idx === 1 || idx === 2,
                        'text-lg md:text-[40px]': ![0, 1, 2].includes(idx),
                      })}
                    >
                      {idx + 1}
                    </p>
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
                  <td className='py-2 px-4 h-full'>
                    <div className='h-full flex flex-col gap-4 xl:gap-8 xl:flex-row xl:items-center'>
                      <div
                        className={classNames({
                          'w-[117px] h-[66px]': idx !== 0,
                          'h-full md:w-[200px] lg:w-[300px] xl:w-[320px] 2xl:w-[325px]':
                            idx === 0,
                        })}
                      >
                        <img
                          src={
                            idx === 0 && isXl ? maxresImageUrl : mediumImageUrl
                          }
                          alt=''
                          className='w-full'
                        />
                      </div>
                      <span className='break-word font-bold text-sm md:text-base lg:text-xl'>
                        {`${artist} - ${song}`}
                      </span>
                    </div>
                  </td>
                  <td className='py-2 px-4 h-full'>
                    <span className='inline-block font-bold text-sm md:text-base lg:text-xl'>
                      {views?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    </span>
                  </td>
                  <td className='py-2 px-4 h-full'>
                    <span className='inline-block font-bold text-sm md:text-base lg:text-xl'>
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
                              width='36'
                              height='31'
                              viewBox='0 0 36 31'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <rect
                                width='35.65'
                                height='31'
                                rx='13'
                                fill='#FF0707'
                              />
                              <path
                                d='M25.575 15.8875L13.3688 22.9348L13.3688 8.84022L25.575 15.8875Z'
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
