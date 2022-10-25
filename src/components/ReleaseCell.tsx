import { FunctionComponent } from 'react';
import { isEmpty } from 'lodash';
import moment from 'moment-timezone';
const ReleaseCell: FunctionComponent<any> = ({ getValue }) => {
  return (
    <div className='py-2 px-4 h-full'>
      <span className='inline-block font-bold text-sm md:text-base lg:text-xl'>
        {!isEmpty(getValue()) &&
          moment(getValue()).tz('Asia/Bangkok').format('l')}
      </span>
    </div>
  );
};
export default ReleaseCell;
