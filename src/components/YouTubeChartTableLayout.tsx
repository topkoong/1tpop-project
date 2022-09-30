import { FunctionComponent, useMemo } from 'react';
import {
  createColumnHelper,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';

import RankCell from '@components/RankCell';
import ReleaseCell from '@components/ReleaseCell';
import SongCell from '@components/SongCell';
import VideoCell from '@components/VideoCell';
import ViewsCell from '@components/ViewsCell';
import YouTubeChartTable from '@components/YouTubeChartTable';

const YoutubeChartTableLayout: FunctionComponent<any> = ({ tableData }) => {
  const columnHelper = createColumnHelper<any>();

  const columns = useMemo(
    () => [
      columnHelper.display({
        header: 'Rank',
        id: 'index',
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
        header: () => <p className='text-center'>Video</p>,
        id: 'index',
        cell: VideoCell,
      }),
    ],
    []
  );

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
    <div className='sm:px-[20px] md:px-[40px] lg:px-[80px] xl:px-[100px]'>
      <YouTubeChartTable {...tableInstance} />
    </div>
  );
};

export default YoutubeChartTableLayout;
