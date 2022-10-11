/* eslint-disable @next/next/no-img-element */
import { FunctionComponent, useState } from 'react';

import Spinner from './Spinner';
import axios from 'axios';
import { isEmpty } from 'lodash';
import { useQuery } from '@tanstack/react-query';

interface VideoInfo {
  [key: string]: string;
}

const Tabs: FunctionComponent<{ color: string }> = ({ color }) => {
  const [openTab, setOpenTab] = useState(1);

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
  } = useQuery(['fetchVideosInfos'], fetchVideosInfos);

  return isLoading || isEmpty(videoInfos) ? (
    <Spinner />
  ) : isError && error instanceof Error ? (
    <span>Error: {error?.message} </span>
  ) : (
    <>
      <div className='flex flex-wrap'>
        <div className='w-full'>
          <ul
            className='flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row'
            role='tablist'
          >
            {Array.isArray(videoInfos) &&
              videoInfos?.map(({ videoId, artist }: VideoInfo, idx: number) => (
                <li
                  key={videoId}
                  className='-mb-px mr-2 last:mr-0 flex-auto text-center'
                >
                  <a
                    className={
                      'text-2xl font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal ' +
                      (openTab === idx + 1
                        ? 'text-white bg-black'
                        : 'text-' + color + '-600 bg-white')
                    }
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenTab(idx + 1);
                    }}
                    data-toggle='tab'
                    href={`#link${idx + 1}`}
                    role='tablist'
                  >
                    {artist}
                  </a>
                </li>
              ))}
          </ul>
          {Array.isArray(videoInfos) &&
            videoInfos?.map(
              (
                {
                  videoId,
                  song,
                  views,
                  publishedAt,
                  defaultImageUrl,
                  mediumImageUrl,
                  highImageUrl,
                  standardImageUrl,
                  maxresImageUrl,
                }: VideoInfo,
                idx: number
              ) => (
                <div
                  key={`${videoId}-${idx}`}
                  className='relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded'
                >
                  <div className='px-4 py-5 flex-auto'>
                    <div className='tab-content tab-space'>
                      <div
                        className={openTab === idx + 1 ? 'block' : 'hidden'}
                        id='link1'
                      >
                        <h3 className='text-xl uppercase font-normal my-8'>
                          Song: {song}
                        </h3>
                        {/* <h4 className='text-xl uppercase font-normal my-8'>
                        Channel Title: {klearVideoInfo.snippet.channelTitle}
                      </h4> */}
                        {/* <h4 className='text-xl uppercase font-normal my-8'>
                          Views: {views.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                        </h4> */}
                        <h4 className='text-xl uppercase font-normal my-8'>
                          Views:{' '}
                          {views
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                        </h4>
                        <h4 className='text-xl uppercase font-normal my-8'>
                          Release date:{' '}
                          {new Date(publishedAt).toLocaleDateString()}
                        </h4>
                        {!isEmpty(defaultImageUrl) && (
                          <>
                            <p className='my-4 text-xl uppercase font-bold'>
                              Default
                            </p>
                            <div>
                              <img
                                src={defaultImageUrl}
                                alt={`Default-${idx}`}
                              />
                            </div>
                          </>
                        )}
                        {!isEmpty(mediumImageUrl) && (
                          <>
                            <p className='my-4 text-xl uppercase font-bold'>
                              Medium
                            </p>
                            <div>
                              <img src={mediumImageUrl} alt={`Medium-${idx}`} />
                            </div>
                          </>
                        )}
                        {!isEmpty(highImageUrl) && (
                          <>
                            <p className='my-4 text-xl uppercase font-bold'>
                              High
                            </p>
                            <div>
                              <img src={highImageUrl} alt={`High-${idx}`} />
                            </div>
                          </>
                        )}
                        {!isEmpty(standardImageUrl) && (
                          <>
                            <p className='my-4 text-xl uppercase font-bold'>
                              Standard
                            </p>
                            <div>
                              <img
                                src={standardImageUrl}
                                alt={`Standard-${idx}`}
                              />
                            </div>
                          </>
                        )}
                        {!isEmpty(maxresImageUrl) && (
                          <>
                            <p className='my-4 text-xl uppercase font-bold'>
                              Max Res
                            </p>
                            <div>
                              <img
                                src={maxresImageUrl}
                                alt={`Max Res-${idx}`}
                              />
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )
            )}
        </div>
      </div>
    </>
  );
};

export default function TabsRender() {
  return <Tabs color='black' />;
}
