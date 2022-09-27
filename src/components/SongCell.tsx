/* eslint-disable @next/next/no-img-element */
import { FunctionComponent } from 'react';
import classNames from 'classnames';
import useBreakpoints from '@hooks/useBreakpoints';

const SongCell: FunctionComponent<any> = ({ row, getValue }) => {
  const idx = row.index;
  const { isXl } = useBreakpoints();
  return (
    <div className='py-2 px-4 h-full'>
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
              idx === 0 && isXl
                ? row.original.maxresImageUrl
                : row.original.mediumImageUrl
            }
            alt=''
            className='w-full'
          />
        </div>
        <span className='break-word font-bold text-sm md:text-base lg:text-xl'>
          {`${row.original.artist} - ${getValue()}`}
        </span>
      </div>
    </div>
  );
};
export default SongCell;
