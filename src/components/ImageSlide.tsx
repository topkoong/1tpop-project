import { FunctionComponent } from 'react';
const ImageSlide: FunctionComponent<{ idx: number }> = ({ idx }) => (
  <div className='w-full stacked'>
    <div className='bg-[#0047FF] mb-12 sm:mb-16 w-[133px] sm:w-[173px] md:w-[233px] lg:w-[273px] h-[33px] sm:h-[43px] md:h-[83px] lg:h-[93px] flex justify-center items-center'>
      <h2 className='text-base md:text-2xl lg:text-3xl uppercase font-bold text-white'>
        New Music
      </h2>
    </div>
    <img className='w-full media' src={`./images/slide${idx}.png`} />
  </div>
);

export default ImageSlide;
