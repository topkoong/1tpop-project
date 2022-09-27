/* eslint-disable @next/next/no-img-element */
import { FunctionComponent } from 'react';

const ViewsCell: FunctionComponent<any> = ({ getValue }) => {
  return (
    <div className='py-2 px-4 h-full'>
      <span className='inline-block font-bold text-sm md:text-base lg:text-xl'>
        {getValue()
          ?.toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
      </span>
    </div>
  );
};
export default ViewsCell;
