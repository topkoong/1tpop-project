/* eslint-disable @next/next/no-img-element */
import { FunctionComponent } from 'react';
import Link from 'next/link';

const GraphCell: FunctionComponent<any> = ({ row }) => {
  return (
    <div className='py-2 px-4 h-full'>
      <div className='flex justify-center text-center cursor-pointer'>
        <Link href={`/videos/${row.original.videoId}`} passHref>
          <a target='_blank' rel='noopener noreferrer'>
            <svg
              width='30'
              height='20'
              viewBox='0 0 30 20'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <rect x='5' y='5' width='9' height='13' fill='black' />
              <rect x='16' width='9' height='18' fill='#0047FF' />
              <rect y='17' width='30' height='3' rx='1.5' fill='black' />
            </svg>
          </a>
        </Link>
      </div>
    </div>
  );
};
export default GraphCell;
