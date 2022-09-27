import { FunctionComponent } from 'react';
import classNames from 'classnames';

const RankCell: FunctionComponent<any> = ({ row }) => {
  const idx = row.index;
  return (
    <div
      className={classNames(
        'py-2 h-[120px] xl:h-[80px] w-full grid grid-cols-2 place-items-center place-content-center',
        {
          'h-[140px] md:h-[160px] lg:h-[170px] xl:h-[180px] 2xl:h-[200px]':
            idx === 0,
        }
      )}
    >
      <p
        className={classNames('uppercase font-bold', {
          'text-3xl md:text-7xl lg:text-[116px] xl:text-[126px] 2xl:text-[136px]':
            idx === 0,
          'text-2xl md:text-6xl lg:text-[64px] xl:text-[74px] 2xl:text-[84px]':
            idx === 1 || idx === 2,
          'text-lg md:text-[40px]': ![0, 1, 2].includes(idx),
        })}
      >
        {idx + 1}
      </p>
      <div className='w-6'>
        <svg
          width='21'
          height='18'
          viewBox='0 0 21 18'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M10.5 0L20.4593 17.25H0.540708L10.5 0Z' fill='#BDFF00' />
        </svg>
      </div>
    </div>
  );
};
export default RankCell;
