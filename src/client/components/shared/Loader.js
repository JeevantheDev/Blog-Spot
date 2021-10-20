import React from 'react';

const Loader = () => {
  return (
    <div className='preloader-wrapper active custom-align-spinner-2'>
      <div className='spinner-layer spinner-teal-only'>
        <div className='circle-clipper left'>
          <div className='circle'></div>
        </div>
        <div className='gap-patch'>
          <div className='circle'></div>
        </div>
        <div className='circle-clipper right'>
          <div className='circle'></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
