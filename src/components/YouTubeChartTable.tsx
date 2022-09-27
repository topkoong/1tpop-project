/* eslint-disable react/jsx-key */
import { FunctionComponent, useEffect, useState } from 'react';

import { flexRender } from '@tanstack/react-table';

const YoutubeChartTable: FunctionComponent<any> = ({
  getHeaderGroups,
  getRowModel,
}) => {
  return (
    <table className='w-full table-auto'>
      <thead className='bg-white sticky top-0'>
        {getHeaderGroups().map((headerGroup: any) => (
          <tr key={headerGroup.id} className='border-b-2'>
            {headerGroup.headers.map((header: any) => (
              <th
                className='text-[#7B7979] text-left uppercase font-bold text-sm md:text-base lg:text-xl py-3 px-4 whitespace-nowrap'
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
            <tr key={row.id} className='border-b-2 w-full h-full'>
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
    // <table>
    //   <thead>
    //     {getHeaderGroups().map((headerGroup: any) => (
    //       <tr key={headerGroup.id}>
    //         {headerGroup.headers.map((header: any) => {
    //           return (
    //             <th key={header.id} colSpan={header.colSpan}>
    //               {header.isPlaceholder ? null : (
    //                 <div
    //                   {...{
    //                     className: header.column.getCanSort()
    //                       ? 'cursor-pointer select-none'
    //                       : '',
    //                     onClick: header.column.getToggleSortingHandler(),
    //                   }}
    //                 >
    //                   {flexRender(
    //                     header.column.columnDef.header,
    //                     header.getContext()
    //                   )}
    //                   {{
    //                     asc: ' 🔼',
    //                     desc: ' 🔽',
    //                   }[header.column.getIsSorted() as string] ?? null}
    //                 </div>
    //               )}
    //             </th>
    //           );
    //         })}
    //       </tr>
    //     ))}
    //   </thead>
    //   <tbody>
    //     {getRowModel()
    //       .rows.slice(0, 10)
    //       .map((row: any) => {
    //         return (
    //           <tr key={row.id}>
    //             {row.getVisibleCells().map((cell: any) => {
    //               return (
    //                 <td key={cell.id}>
    //                   {flexRender(
    //                     cell.column.columnDef.cell,
    //                     cell.getContext()
    //                   )}
    //                 </td>
    //               );
    //             })}
    //           </tr>
    //         );
    //       })}
    //   </tbody>
    // </table>
  );
};

export default YoutubeChartTable;
