import React, { useEffect, useState, useRef } from 'react';
import { IoIosPeople } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";

function AnimatedCounter({ target, decimalPlaces = 0, trigger }) {
  const [count, setCount] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    if (trigger) {
      controls.start({
        count: target,
        transition: { duration: 3, ease: "easeOut" },
      });
    }
  }, [controls, target, trigger]);

  return (
    <motion.h1
      className='text-[35px] text-[white] font-bold'
      animate={controls}
      onUpdate={(latest) => setCount(latest.count.toFixed(decimalPlaces))}
    >
      {count}{decimalPlaces === 0 ? "+" : ""}
    </motion.h1>
  );
}

function About4() {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          setIsInView(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={ref} className='h-[50vh] w-full bg-[orangered] grid place-items-center'>
      <div className='flex flex-wrap justify-center gap-[20px] w-full p-4'>
        
        <div className='flex flex-col items-center gap-2 w-[90%] md:w-[30%]'>
          <div className='flex items-center'>
            <AnimatedCounter target={100} decimalPlaces={0} trigger={isInView} />
            <IoIosPeople className='text-[white] text-[40px]' />
          </div>
          <h1 className='text-[20px] text-[white] font-bold text-center'>
            Customer Served Worldwide
          </h1>
        </div>

        <div className='flex flex-col items-center gap-2 w-[90%] md:w-[30%]'>
          <div className='flex items-center'>
            <AnimatedCounter target={50} decimalPlaces={0} trigger={isInView} />
          </div>
          <h1 className='text-[20px] text-[white] font-bold text-center'>
            Exam Administered
          </h1>
        </div>

        <div className='flex flex-col items-center gap-2 w-[90%] md:w-[30%]'>
          <div className='flex items-center'>
            <AnimatedCounter target={4.5} decimalPlaces={1} trigger={isInView} />
            <FaStar className='text-[white] text-[35px]' />
          </div>
          <h1 className='text-[20px] text-[white] font-bold text-center'>
            Our Service Rating
          </h1>
        </div>
        
      </div>
    </div>
  );
}

export default About4;
