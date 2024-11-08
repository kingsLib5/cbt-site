import React from 'react';

function About1() {
  return (
    <>
      <div className='h-min-[80vh] w-full bg-center bg-cover bg-[url(./assets/students.jpg)] grid grid-cols-1 md:grid-cols-2'>
        <div className='grid p-4 md:p-0'>
          <div className='grid grid-rows-3 bg-[#8080807c] mt-4 md:mt-0 ml-0 md:ml-[90px] rounded-sm'>
            
            <div className='flex flex-col justify-center text-left pt-4 md:pt-[70px] pl-4 md:pl-[120px]'>
              <h1 className='text-[24px] md:text-[35px] font-bold text-[orangered]'>Our Purpose</h1>
              <p className='text-[18px] md:text-[23px] font-bold text-white'>"A platform that helps students"</p>
            </div>
            
            <div className='flex flex-col justify-center text-left pl-4 md:pl-[120px] mt-4 md:mt-0'>
              <h1 className='text-[24px] md:text-[35px] font-bold text-[orangered]'>Our Vision</h1>
              <p className='text-[16px] md:text-[20px] font-bold text-white'>
                "To revolutionize students assessments,<br className="hidden md:block" />
                through a secure, scalable technology<br className="hidden md:block" />
                and empowering students to track their progress, identify gaps, and achieve academic success."
              </p>
            </div>
            
            <div className='flex flex-col justify-center text-left pb-4 md:pb-[40px] pl-4 md:pl-[120px] mt-4 md:mt-0'>
              <h1 className='text-[24px] md:text-[35px] font-bold text-[orangered]'>Our Mission</h1>
              <p className='text-[16px] md:text-[20px] font-bold text-white'>
                "Continuous innovation in upskilling on a<br className="hidden md:block" />
                mass scale."
              </p>
            </div>
          
          </div>
        </div>
      </div>
    </>
  );
}

export default About1;