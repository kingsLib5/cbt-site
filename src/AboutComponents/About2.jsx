import React from 'react';

function About2() {
  return (
    <>
      <div className='h-[70vh] md:h-[90vh] w-full bg-[#080836] grid grid-rows-6 p-4 md:p-0'>
        {/* Header Section */}
        <div className='row-span-1 flex justify-center items-center text-[18px] md:text-[25px] font-bold text-white mb-4 md:mb-0'>
          Who We Are
        </div>

        {/* Content Section */}
        <div className='row-span-5 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-[25px]'>
          
          {/* Conditional Image Display */}
          <div className='order-1 md:order-2 md:mr-[170px] h-[150px] md:h-[70%] bg-cover bg-center rounded-tr-[40px] md:rounded-tr-[80px] rounded-bl-[40px] md:rounded-bl-[80px] bg-[url(./assets/students2.jpg)] hidden sm:block'></div>

          {/* Text Content */}
          <div className='order-2 md:order-1 flex justify-center text-center text-[14px] md:text-[18px] text-white md:ml-[150px] p-4 md:p-0'>
            <p className='text-left leading-[22px] md:leading-[30px]'>
              e-lesson is an educational platform that helps students prepare for their exams and boosts their confidence with challenging questions. <br /><br />
              It uses technology to make education accessible, interactive, and engaging for all learners. <br /><br />
              Our primary focus is helping students prepare academically to achieve their goals. <br /><br />
              We ensure our learners understand their strengths and weaknesses, serving as a guide.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About2;
