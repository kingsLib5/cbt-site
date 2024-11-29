import React from 'react';
import video1 from '../assets/video1.mp4';

function Hero3() {
  return (
    <div className='min-h-[70vh] sm:min-h-[90vh] w-full bg-[#575454c5]'>
      <div className='h-[20vh] w-full flex flex-col justify-center items-center text-white'>
        <h1 className='text-[25px] sm:text-[30px] md:text-[35px] font-bold text-[orangered] text-center'>
          Practice with our CBT Software
        </h1>
        <p className='text-[18px] sm:text-[22px] md:text-[25px] font-bold text-center'>
          Practice with e-lesson and succeed
        </p>
      </div>

      <div className='min-h-[40vh] sm:min-h-[60vh] w-full flex justify-center items-center'>
        <video
          src={video1}
          autoPlay
          loop
          muted
          className='h-[25vh] sm:h-[35vh] md:h-[50vh] w-auto'
        />
      </div>
    </div>
  );
}

export default Hero3;