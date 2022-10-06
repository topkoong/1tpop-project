import 'moment/locale/th';

import { FunctionComponent } from 'react';
import Spinner from '@components/Spinner';
import YoutubeChartTableLayout from '@components/YouTubeChartTableLayout';
import axios from 'axios';
import { isEmpty } from 'lodash';
import { useQuery } from '@tanstack/react-query';

const YoutubeChartWrapper: FunctionComponent = () => {
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
    <YoutubeChartTableLayout tableData={videoInfos} />
  );
};

export default YoutubeChartWrapper;
