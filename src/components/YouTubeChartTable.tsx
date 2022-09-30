import { FunctionComponent } from 'react';
import Link from 'next/link';
import { flexRender } from '@tanstack/react-table';
const YoutubeChartTable: FunctionComponent<any> = ({
  getHeaderGroups,
  getRowModel,
}) => {
  return (
    <table className='bg-white w-full mt-4 table-auto'>
      <thead className='bg-fixed sticky top-0 bg-gradient-to-r from-[#FF2727] to-[#0047FF] h-[64px]'>
        {getHeaderGroups().map((headerGroup: any) => (
          <tr key={headerGroup.id} className='border-b-2'>
            {headerGroup.headers.map((header: any) => (
              <th
                className='text-white text-left uppercase font-bold text-sm md:text-base lg:text-xl py-3 px-4 whitespace-nowrap'
                key={header.id}
                colSpan={header.colSpan}
              >
                {header.isPlaceholder ? null : (
                  <div
                    {...{
                      className: header.column.getCanSort()
                        ? 'cursor-pointer select-none'
                        : '',
                      onClick: header.column.getToggleSortingHandler(),
                    }}
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                    {{
                      asc: ' 🔼',
                      desc: ' 🔽',
                    }[header.column.getIsSorted() as string] ?? null}
                  </div>
                )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {getRowModel().rows.map((row: any, idx: number) => {
          return (
            <tr
              key={row.id}
              className='border-b-[3px] w-full h-full cursor-pointer'
            >
              {row.getVisibleCells().map((cell: any) => {
                return (
                  <td key={cell.id}>
                    <Link
                      key={row.original.videoId}
                      href={`/videos/${row.original.videoId}`}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </Link>
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default YoutubeChartTable;
