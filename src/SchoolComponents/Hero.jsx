import React from 'react'
import Hero1 from '../HeroComponents/Hero1'
import Hero2 from '../HeroComponents/Hero2'
import Hero3 from '../HeroComponents/Hero3'
import Hero4 from '../HeroComponents/Hero4'



function Hero() {
  return (
    <>
    <div className=' grid bg-[url(./assets/books.jpg)] bg-cover bg-center'>
    <Hero1/>
    <Hero2/>
    <Hero3/>
    <Hero4/>
   
    </div>
    </>
   
  )
}

export default Hero