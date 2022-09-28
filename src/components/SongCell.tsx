/* eslint-disable @next/next/no-img-element */
import { FunctionComponent } from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import useBreakpoints from '@hooks/useBreakpoints';

const SongCell: FunctionComponent<any> = ({ row, getValue }) => {
  const idx = row.index;
  const { isXl } = useBreakpoints();
  return (
    <div className='py-2 md:px-4 h-full'>
      <div
        className={classNames('h-full flex flex-col gap-2', {
          'xl:flex-col xl:items-start xl:gap-2': idx === 0,
          'xl:flex-row xl:items-center  xl:gap-8': idx !== 0,
        })}
      >
        <Link href={`/videos/${row.original.videoId}`}>
          <div
            className={classNames('cursor-pointer', {
              'w-[117px] h-[66px]': idx !== 0,
              'h-full sm:w-[150px] md:w-[200px] lg:w-[300px] xl:w-[320px] 2xl:w-[325px]':
                idx === 0,
            })}
          >
            <img
              src={
                idx === 0 && isXl
                  ? row.original.maxresImageUrl
                  : row.original.mediumImageUrl
              }
              alt=''
              className='w-full'
            />
          </div>
        </Link>
        <span className='break-word font-bold text-sm md:text-base lg:text-xl'>
          {`${row.original.artist} - ${getValue()}`}
        </span>
      </div>
    </div>
  );
};
export default SongCell;
