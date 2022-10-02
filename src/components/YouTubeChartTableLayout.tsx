import { FunctionComponent, useMemo } from 'react';
import {
  createColumnHelper,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';

import GraphCell from '@components/GraphCell';
import RankCell from '@components/RankCell';
import ReleaseCell from '@components/ReleaseCell';
import SongCell from '@components/SongCell';
import VideoCell from '@components/VideoCell';
import ViewsCell from '@components/ViewsCell';
import YouTubeChartTable from '@components/YouTubeChartTable';
import useBreakpoints from '@hooks/useBreakpoints';

const YoutubeChartTableLayout: FunctionComponent<any> = ({ tableData }) => {
  const columnHelper = createColumnHelper<any>();
  const { isXs, isSm } = useBreakpoints();

  const columns =
    isXs || isSm
      ? [
          columnHelper.display({
            header: isXs || isSm ? '#' : 'Rank',
            id: 'mobile-rank',
            cell: RankCell,
          }),
          columnHelper.accessor('song', {
            header: 'Song',
            id: 'mobile-song',
            cell: SongCell,
          }),
          columnHelper.accessor('views', {
            header: () =>
              isXs || isSm ? (
                <svg
                  width='16'
                  height='16'
                  viewBox='0 0 16 16'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M10.3867 8.00007C10.3867 9.32007 9.32001 10.3867 8.00001 10.3867C6.68001 10.3867 5.61334 9.32007 5.61334 8.00007C5.61334 6.68007 6.68001 5.6134 8.00001 5.6134C9.32001 5.6134 10.3867 6.68007 10.3867 8.00007Z'
                    stroke='white'
                    stroke-width='1.5'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                  <path
                    d='M8 13.5133C10.3533 13.5133 12.5467 12.1266 14.0733 9.72665C14.6733 8.78665 14.6733 7.20665 14.0733 6.26665C12.5467 3.86665 10.3533 2.47998 8 2.47998C5.64667 2.47998 3.45334 3.86665 1.92667 6.26665C1.32667 7.20665 1.32667 8.78665 1.92667 9.72665C3.45334 12.1266 5.64667 13.5133 8 13.5133Z'
                    stroke='white'
                    stroke-width='1.5'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                </svg>
              ) : (
                'Views'
              ),
            id: 'mobile-views',
            cell: ViewsCell,
          }),
          columnHelper.display({
            header: () => <p className='text-center'>Graph</p>,
            id: 'mobile-graph',
            cell: GraphCell,
          }),
        ]
      : [
          columnHelper.display({
            header: 'Rank',
            id: 'rank',
            cell: RankCell,
          }),
          columnHelper.accessor('song', {
            header: 'Song',
            id: 'song',
            cell: SongCell,
          }),
          columnHelper.accessor('views', {
            header: 'Views',
            id: 'views',
            cell: ViewsCell,
          }),
          columnHelper.accessor('publishedAt', {
            header: 'Release',
            id: 'release',
            cell: ReleaseCell,
          }),
          columnHelper.display({
            header: () => <p className='text-center'>Graph</p>,
            id: 'graph',
            cell: GraphCell,
          }),
          columnHelper.display({
            header: () => <p className='text-center'>Video</p>,
            id: 'video',
            cell: VideoCell,
          }),
        ];

  const sortees = useMemo(
    () => [
      {
        id: 'views',
        desc: true,
      },
    ],
    []
  );

  const tableInstance = useReactTable({
    data: tableData as any,
    columns: columns as any,
    initialState: {
      sorting: sortees,
    },
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    debugTable: true,
  });
  return (
    <div className='px-0 sm:px-[20px] md:px-[40px] lg:px-[80px] xl:px-[100px]'>
      <YouTubeChartTable {...tableInstance} />
    </div>
  );
};

export default YoutubeChartTableLayout;
