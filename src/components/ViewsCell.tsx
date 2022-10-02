/* eslint-disable @next/next/no-img-element */
import { FunctionComponent } from 'react';
import useBreakpoints from '@hooks/useBreakpoints';

const ViewsCell: FunctionComponent<any> = ({ getValue }) => {
  const { isLg, isXl, is2Xl } = useBreakpoints();
  return (
    <div className='w-4 md:w-full py-2 px-4 h-full'>
      <span className='inline-block font-bold text-sm md:text-base lg:text-xl'>
        {isLg || isXl || is2Xl
          ? getValue()
              ?.toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
          : Intl.NumberFormat('en', { notation: 'compact' }).format(getValue())}
      </span>
    </div>
  );
};
export default ViewsCell;
