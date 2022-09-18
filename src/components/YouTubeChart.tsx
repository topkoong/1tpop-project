/* eslint-disable @next/next/no-img-element */
import { FunctionComponent } from 'react';

// TODO
// Update image tag

const YoutubeChart: FunctionComponent = () => {
  return (
    <table className='w-full'>
      <thead>
        <tr className='border-b-2'>
          <th className='text-left uppercase font-bold text-xl py-3 px-4 whitespace-nowrap'>
            Rank
          </th>
          <th className='text-left uppercase font-bold text-xl py-3 px-4 '>
            Song
          </th>
          <th className='text-left uppercase font-bold text-xl py-3 px-4 '>
            Views
          </th>
          <th className='text-left uppercase font-bold text-xl py-3 px-4 '>
            Release
          </th>
          <th className='text-left font-bold text-xl py-3 px-4 '>Lorem</th>
        </tr>
      </thead>
      <tbody>
        <tr className='border-b-2'>
          <td className='w-full grid grid-cols-2 place-items-center'>
            <span className='uppercase font-bold text-[136px]'>1</span>
            <div className='w-6'>
              <svg
                width='21'
                height='18'
                viewBox='0 0 21 18'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M10.5 0L20.4593 17.25H0.540708L10.5 0Z'
                  fill='#BDFF00'
                />
              </svg>
              <span className='w-full inline-block text-center'>-</span>
            </div>
          </td>
          <td className='py-8 px-4'>
            <div>
              <img src='./images/klear.png' alt='' />
            </div>
            <span className='my-4 inline-block'>
              ถามเพื่ออะไร (What for?) - KLEAR 「Official MV」
            </span>
          </td>
          <td className='py-8 px-4 h-full align-top'>
            <span className='inline-block'>1,040,589</span>
          </td>
          <td className='py-8 px-4 h-full align-top'>
            <span className='inline-block'>14/08/2022</span>
          </td>
          <td className='py-8 px-4 h-full align-top'>
            <span className='inline-block'>Lorem</span>
          </td>
        </tr>
        <tr className='border-b-2'>
          <td className='w-full grid grid-cols-2 place-items-center'>
            <span className='uppercase font-bold text-[84px]'>2</span>
            <div className='w-6'>
              <svg
                width='21'
                height='18'
                viewBox='0 0 21 18'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M10.5 0L20.4593 17.25H0.540708L10.5 0Z'
                  fill='#BDFF00'
                />
              </svg>
              <p className='text-center'>-</p>
            </div>
          </td>
          <td className='py-8 px-4'>
            <div className='flex'>
              <div>
                <img src='./images/4eve-small.png' alt='' />
              </div>
              <span className='mx-4'>4EVE - JACKPOT | Official M/V</span>
            </div>
          </td>
          <td className='py-8 px-4 h-full align-top'>
            <span className='inline-block'>1,040,589</span>
          </td>
          <td className='py-8 px-4 h-full align-top'>
            <span className='inline-block'>14/08/2022</span>
          </td>
          <td className='py-8 px-4 h-full align-top'>
            <span className='inline-block'>Lorem</span>
          </td>
        </tr>
        <tr className='border-b-2'>
          <td className='w-full grid grid-cols-2 place-items-center'>
            <span className='uppercase font-bold text-[84px]'>3</span>
            <div className='w-6'>
              <svg
                width='21'
                height='18'
                viewBox='0 0 21 18'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M10.5 0L20.4593 17.25H0.540708L10.5 0Z'
                  fill='#BDFF00'
                />
              </svg>
              <span className='w-full inline-block text-center'>-</span>
            </div>
          </td>
          <td className='py-8 px-4'>
            <div className='flex'>
              <div>
                <img src='./images/klear-small.png' alt='' />
              </div>
              <span className='mx-4'>4EVE - JACKPOT | Official M/V</span>
            </div>
          </td>
          <td className='py-8 px-4 h-full align-top'>
            <span className='inline-block'>1,040,589</span>
          </td>
          <td className='py-8 px-4 h-full align-top'>
            <span className='inline-block'>14/08/2022</span>
          </td>
          <td className='py-8 px-4 h-full align-top'>
            <span className='inline-block'>Lorem</span>
          </td>
        </tr>
        <tr className='border-b-2'>
          <td className='w-full grid grid-cols-2 place-items-center'>
            <span className='uppercase font-bold text-[40px]'>4</span>
            <div className='w-6'>
              <svg
                width='21'
                height='18'
                viewBox='0 0 21 18'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M10.5 0L20.4593 17.25H0.540708L10.5 0Z'
                  fill='#BDFF00'
                />
              </svg>
              <span className='w-full inline-block text-center'>-</span>
            </div>
          </td>
          <td className='py-8 px-4'>
            <div className='flex'>
              <div>
                <img src='./images/klear-small.png' alt='' />
              </div>
              <span className='mx-4'>4EVE - JACKPOT | Official M/V</span>
            </div>
          </td>
          <td className='py-8 px-4 h-full align-top'>
            <span className='inline-block'>1,040,589</span>
          </td>
          <td className='py-8 px-4 h-full align-top'>
            <span className='inline-block'>14/08/2022</span>
          </td>
          <td className='py-8 px-4 h-full align-top'>
            <span className='inline-block'>Lorem</span>
          </td>
        </tr>
        <tr className='border-b-2'>
          <td className='w-full grid grid-cols-2 place-items-center'>
            <span className='uppercase font-bold text-[40px]'>5</span>
            <div className='w-6'>
              <svg
                width='21'
                height='18'
                viewBox='0 0 21 18'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M10.5 0L20.4593 17.25H0.540708L10.5 0Z'
                  fill='#BDFF00'
                />
              </svg>
              <span className='w-full inline-block text-center'>-</span>
            </div>
          </td>
          <td className='py-8 px-4'>
            <div className='flex'>
              <div>
                <img src='./images/klear-small.png' alt='' />
              </div>
              <span className='mx-4'>4EVE - JACKPOT | Official M/V</span>
            </div>
          </td>
          <td className='py-8 px-4 h-full align-top'>
            <span className='inline-block'>1,040,589</span>
          </td>
          <td className='py-8 px-4 h-full align-top'>
            <span className='inline-block'>14/08/2022</span>
          </td>
          <td className='py-8 px-4 h-full align-top'>
            <span className='inline-block'>Lorem</span>
          </td>
        </tr>
        <tr className='border-b-2'>
          <td className='w-full grid grid-cols-2 place-items-center'>
            <span className='uppercase font-bold text-[40px]'>6</span>
            <div className='w-6'>
              <svg
                width='21'
                height='18'
                viewBox='0 0 21 18'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M10.5 0L20.4593 17.25H0.540708L10.5 0Z'
                  fill='#BDFF00'
                />
              </svg>
              <span className='w-full inline-block text-center'>-</span>
            </div>
          </td>
          <td className='py-8 px-4'>
            <div className='flex'>
              <div>
                <img src='./images/klear-small.png' alt='' />
              </div>
              <span className='mx-4'>4EVE - JACKPOT | Official M/V</span>
            </div>
          </td>
          <td className='py-8 px-4 h-full align-top'>
            <span className='inline-block'>1,040,589</span>
          </td>
          <td className='py-8 px-4 h-full align-top'>
            <span className='inline-block'>14/08/2022</span>
          </td>
          <td className='py-8 px-4 h-full align-top'>
            <span className='inline-block'>Lorem</span>
          </td>
        </tr>
        <tr className='border-b-2'>
          <td className='w-full grid grid-cols-2 place-items-center'>
            <span className='uppercase font-bold text-[40px]'>7</span>
            <div className='w-6'>
              <svg
                width='21'
                height='18'
                viewBox='0 0 21 18'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M10.5 0L20.4593 17.25H0.540708L10.5 0Z'
                  fill='#BDFF00'
                />
              </svg>
              <span className='w-full inline-block text-center'>-</span>
            </div>
          </td>
          <td className='py-8 px-4'>
            <div className='flex'>
              <div>
                <img src='./images/klear-small.png' alt='' />
              </div>
              <span className='mx-4'>4EVE - JACKPOT | Official M/V</span>
            </div>
          </td>
          <td className='py-8 px-4 h-full align-top'>
            <span className='inline-block'>1,040,589</span>
          </td>
          <td className='py-8 px-4 h-full align-top'>
            <span className='inline-block'>14/08/2022</span>
          </td>
          <td className='py-8 px-4 h-full align-top'>
            <span className='inline-block'>Lorem</span>
          </td>
        </tr>
        <tr className='border-b-2'>
          <td className='w-full grid grid-cols-2 place-items-center'>
            <span className='uppercase font-bold text-[40px]'>8</span>
            <div className='w-6'>
              <svg
                width='21'
                height='18'
                viewBox='0 0 21 18'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M10.5 0L20.4593 17.25H0.540708L10.5 0Z'
                  fill='#BDFF00'
                />
              </svg>
              <span className='w-full inline-block text-center'>-</span>
            </div>
          </td>
          <td className='py-8 px-4'>
            <div className='flex'>
              <div>
                <img src='./images/klear-small.png' alt='' />
              </div>
              <span className='mx-4'>4EVE - JACKPOT | Official M/V</span>
            </div>
          </td>
          <td className='py-8 px-4 h-full align-top'>
            <span className='inline-block'>1,040,589</span>
          </td>
          <td className='py-8 px-4 h-full align-top'>
            <span className='inline-block'>14/08/2022</span>
          </td>
          <td className='py-8 px-4 h-full align-top'>
            <span className='inline-block'>Lorem</span>
          </td>
        </tr>
        <tr className='border-b-2'>
          <td className='w-full grid grid-cols-2 place-items-center'>
            <span className='uppercase font-bold text-[40px]'>9</span>
            <div className='w-6'>
              <svg
                width='21'
                height='18'
                viewBox='0 0 21 18'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M10.5 0L20.4593 17.25H0.540708L10.5 0Z'
                  fill='#BDFF00'
                />
              </svg>
              <span className='w-full inline-block text-center'>-</span>
            </div>
          </td>
          <td className='py-8 px-4'>
            <div className='flex'>
              <div>
                <img src='./images/klear-small.png' alt='' />
              </div>
              <span className='mx-4'>4EVE - JACKPOT | Official M/V</span>
            </div>
          </td>
          <td className='py-8 px-4 h-full align-top'>
            <span className='inline-block'>1,040,589</span>
          </td>
          <td className='py-8 px-4 h-full align-top'>
            <span className='inline-block'>14/08/2022</span>
          </td>
          <td className='py-8 px-4 h-full align-top'>
            <span className='inline-block'>Lorem</span>
          </td>
        </tr>
        <tr className='border-b-2'>
          <td className='w-full grid grid-cols-2 place-items-center'>
            <span className='uppercase font-bold text-[40px]'>10</span>
            <div className='w-6'>
              <svg
                width='21'
                height='18'
                viewBox='0 0 21 18'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M10.5 0L20.4593 17.25H0.540708L10.5 0Z'
                  fill='#BDFF00'
                />
              </svg>
              <span className='w-full inline-block text-center'>-</span>
            </div>
          </td>
          <td className='py-8 px-4'>
            <div className='flex'>
              <div>
                <img src='./images/klear-small.png' alt='' />
              </div>
              <span className='mx-4'>4EVE - JACKPOT | Official M/V</span>
            </div>
          </td>
          <td className='py-8 px-4 h-full align-top'>
            <span className='inline-block'>1,040,589</span>
          </td>
          <td className='py-8 px-4 h-full align-top'>
            <span className='inline-block'>14/08/2022</span>
          </td>
          <td className='py-8 px-4 h-full align-top'>
            <span className='inline-block'>Lorem</span>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default YoutubeChart;
