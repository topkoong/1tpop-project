import 'moment/locale/th';

import { isEmpty, orderBy } from 'lodash';

import { FunctionComponent } from 'react';
import Spinner from './Spinner';
import YoutubeChartTableLayout from './YouTubeChartTableLayout';
import axios from 'axios';
import { useQuery } from 'react-query';

const YoutubeChartTestWrapper: FunctionComponent = () => {
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
    isError,
    data: videoInfos,
    error,
  } = useQuery('fetchVideosInfos', fetchVideosInfos);

  return isLoading || isEmpty(videoInfos) ? (
    <Spinner />
  ) : isError && error instanceof Error ? (
    <span>Error: {error?.message} </span>
  ) : (
    <YoutubeChartTableLayout tableData={videoInfos} />
  );
};

export default YoutubeChartTestWrapper;
