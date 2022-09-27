/* eslint-disable @next/next/no-img-element */
import { FunctionComponent } from 'react';
import Link from 'next/link';

const VideoCell: FunctionComponent<any> = ({ row }) => {
  return (
    <div className='py-2 px-4 h-full'>
      <div className='flex justify-center text-center cursor-pointer'>
        <Link href={row.original.url} passHref>
          <a target='_blank' rel='noopener noreferrer'>
            <svg
              width='36'
              height='31'
              viewBox='0 0 36 31'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <rect width='35.65' height='31' rx='13' fill='#FF0707' />
              <path
                d='M25.575 15.8875L13.3688 22.9348L13.3688 8.84022L25.575 15.8875Z'
                fill='white'
              />
            </svg>
          </a>
        </Link>
      </div>
    </div>
  );
};
export default VideoCell;
