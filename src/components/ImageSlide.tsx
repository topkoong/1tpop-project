/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { FunctionComponent } from 'react';
import classNames from 'classnames';
import { isEmpty } from 'lodash';
const ImageSlide: FunctionComponent<{
  url: string;
  backgroundColor: string;
  fontColor: string;
  text: string;
}> = ({ url, backgroundColor, fontColor, text }) => (
  <div className='w-full stacked'>
    <div
      className={classNames(
        'mb-12 sm:mb-16 w-[133px] sm:w-[173px] md:w-[233px] lg:w-[273px] h-[33px] sm:h-[43px] md:h-[83px] lg:h-[93px] flex justify-center items-center',
        {
          'bg-[#0047FF]': isEmpty(backgroundColor),
          [`bg-[${backgroundColor}]`]: !isEmpty(backgroundColor),
        }
      )}
    >
      <h2
        className={classNames(
          'text-base md:text-2xl lg:text-3xl uppercase font-bold',
          {
            'text-white':
              isEmpty(fontColor) ||
              (!isEmpty(fontColor) &&
                fontColor?.toLocaleLowerCase() === '#ffffff'),
            [`text-[${fontColor}`]: !isEmpty(fontColor),
          }
        )}
      >
        {text ?? 'New Music'}
      </h2>
    </div>
    <img className='w-full media' src={url} />
  </div>
);

export default ImageSlide;
