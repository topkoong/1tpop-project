import { FunctionComponent } from 'react';
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
                      asc: (
                        <span>
                          {' '}
                          <svg
                            width='13'
                            height='11'
                            viewBox='0 0 13 11'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                            className='hidden md:inline'
                          >
                            <path
                              d='M6.06218 0L12.1244 10.5L0 10.5L6.06218 0Z'
                              fill='white'
                            />
                          </svg>
                        </span>
                      ),
                      desc: (
                        <span>
                          {' '}
                          <svg
                            width='13'
                            height='11'
                            viewBox='0 0 13 11'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                            className='hidden md:inline'
                          >
                            <path
                              d='M6.06218 10.5L4.73264e-06 -1.05994e-06L12.1244 0L6.06218 10.5Z'
                              fill='white'
                            />
                          </svg>
                        </span>
                      ),
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
              onClick={() =>
                window.open(`./videos/${row.original.videoId}`, '_blank')
              }
              key={row.id}
              className='border-b-[3px] w-full h-full cursor-pointer'
            >
              {row.getVisibleCells().map((cell: any) => {
                return (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
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
