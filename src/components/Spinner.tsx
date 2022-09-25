import { FunctionComponent } from 'react';
const Spinner: FunctionComponent = () => (
  <div className='spinner-container'>
    <div className='loader p-5 rounded-full flex space-x-3'>
      <div className='w-5 h-5 bg-black rounded-full animate-bounce' />
      <div className='w-5 h-5 bg-black rounded-full animate-bounce' />
      <div className='w-5 h-5 bg-black rounded-full animate-bounce' />
    </div>
  </div>
);

export default Spinner;
