import React, { useState, useEffect, useRef } from 'react';
import { FaEdgeLegacy, FaArrowLeft, FaArrowRight } from "react-icons/fa6";

function Hero1() {
  const slides = [
    {
      title: "-lesson",
      text: (
        <>
          is an educational platform that helps students prepare for their exams and boosts
          <br />
          their confidence with challenging questions.
        </>
      ),
      button: { label: "Read More", link: "/about" }
    },
    {
      title: "CBT Examination",
      text: (
        <>
          Our platform offers interactive content tailored to different learning needs and styles,
          <br />
          keeping students engaged and motivated.
        </>
      ),
      button: { label: "Read More", link: "/CBT Exam" }
    },
    {
      title: "Past Questions",
      text: (
        <>
          With resources from experts in various fields, students receive quality guidance and help  
          <br />
        </>
      ),
      button: { label: "Read More", link: "/Past Questions" }
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [animationClass, setAnimationClass] = useState("slide-in-right");
  const autoSlideInterval = useRef(null);

  const startAutoSlide = () => {
    autoSlideInterval.current = setInterval(() => {
      handleNextSlide("right");
    }, 10000);
  };

  const resetAutoSlide = () => {
    clearInterval(autoSlideInterval.current);
    startAutoSlide();
  };

  const handleNextSlide = (direction) => {
    if (direction === "right") {
      setAnimationClass("slide-out-left");
      setTimeout(() => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        setAnimationClass("slide-in-right");
      }, 500);
    } else if (direction === "left") {
      setAnimationClass("slide-out-right");
      setTimeout(() => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
        setAnimationClass("slide-in-left");
      }, 500);
    }
  };

  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(autoSlideInterval.current);
  }, []);

  return (
    <div className='w-full h-[80vh] bg-[url(./assets/hero.jpg)] bg-cover bg-center grid overflow-hidden'>
      <div className='bg-[#575454c5] flex justify-center items-center relative'>
        <div className={`relative gap-4 flex justify-center w-[90vw] sm:w-[75vw] h-[70%] sm:h-[60%] flex-col pl-8 ${animationClass}`}>
          
          {/* Title */}
          <h1 className='text-[25px] sm:text-[35px] font-bold text-[orangered] flex items-center'>
            {slides[currentSlide].title.includes("-lesson") && (
              <FaEdgeLegacy className='text-[orangered] text-[30px] sm:text-[35px] animate-pulse' />
            )}
            <span className='text-white ml-2'>{slides[currentSlide].title}</span>
          </h1>

          {/* Slide Content */}
          <div className='pl-4 text-white text-[16px] sm:text-[23px]'>
            {slides[currentSlide].text}
          </div>

          {/* Button */}
          <div className="mt-4 ml-4 flex ">
            <a
              href={slides[currentSlide].button.link}
              className='rounded-xl bg-[orangered] w-[40%] sm:w-[15%] h-[40px] flex justify-center items-center text-white px-3 transition-all duration-300 hover:bg-[#00008B]'
            >
              {slides[currentSlide].button.label}
            </a>
          </div>
        </div>

        {/* Left Arrow */}
        <button
          onClick={() => {
            resetAutoSlide();
            handleNextSlide("right");
          }}
          className="absolute left-5 sm:left-10 top-1/2 transform -translate-y-1/2 text-white bg-[orangered] rounded-full p-2 sm:p-4 flex items-center justify-center"
        >
          <FaArrowLeft />
        </button>

        {/* Right Arrow */}
        <button
          onClick={() => {
            resetAutoSlide();
            handleNextSlide("left");
          }}
          className="absolute right-5 sm:right-10 top-1/2 transform -translate-y-1/2 text-white bg-[orangered] rounded-full p-2 sm:p-4 flex items-center justify-center"
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
}

export default Hero1;
