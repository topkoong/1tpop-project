/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { useState } from 'react';

// TODO
// Update image tag

const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  return (
    <header>
      <nav className='bg-white px-8 py-2.5'>
        <div className='flex flex-wrap justify-between items-center mx-auto'>
          <Link href='/'>
            <div className='flex items-center'>
              <span className='self-center text-transparent text-3xl lg:text-6xl xl:text-8xl bg-clip-text bg-gradient-to-r from-[#FF2727] to-[#0047FF] font-semibold whitespace-nowrap'>
                1TPOP!
              </span>
            </div>
          </Link>
          <button
            data-collapse-toggle='navbar-default'
            type='button'
            className='inline-flex items-center p-2 ml-3 text-sm text-black rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-black'
            aria-controls='navbar-default'
            aria-expanded='false'
            onClick={() => setIsNavbarOpen(!isNavbarOpen)}
          >
            {!isNavbarOpen ? (
              <svg
                className='w-6 h-6'
                aria-hidden='true'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                  clipRule='evenodd'
                ></path>
              </svg>
            ) : (
              <svg
                className='fill-current h-6 w-6 lg:hidden'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                stroke='currentColor'
                aria-hidden='true'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='3'
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            )}
          </button>
          <div
            className={`${
              isNavbarOpen ? 'block' : 'hidden'
            } w-full md:block md:w-auto`}
            id='navbar-default'
          >
            <ul className='flex flex-col p-4 mt-4 bg-white rounded-lg md:flex-row md:space-x-8 md:mt-0'>
              <li className='uppercase font-bold text-base lg:text-xl block py-2 pr-4 pl-3 text-black rounded md:p-0'>
                <Link href='/' aria-current='page'>
                  CHART
                </Link>
              </li>
              <li className='uppercase font-bold text-base lg:text-xl block py-2 pr-4 pl-3 text-black rounded md:p-0'>
                <Link href='/artist'>ARTIST</Link>
              </li>
              <li className='uppercase font-bold text-base lg:text-xl block py-2 pr-4 pl-3 text-black rounded md:p-0'>
                <Link href='/add/artist'>ADD ARTIST</Link>
              </li>
              <li className='uppercase font-bold text-base lg:text-xl block py-2 pr-4 pl-3 text-black rounded md:p-0'>
                <Link href='/artist/experiment'>ARTIST (EXPERIMENT)</Link>
              </li>
              <li className='uppercase font-bold text-base lg:text-xl block py-2 pr-4 pl-3 text-black rounded md:p-0'>
                <Link href='/contact'>Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
