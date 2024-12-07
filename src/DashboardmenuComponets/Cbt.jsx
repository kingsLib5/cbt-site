import React from 'react'

function Cbt() {
  return (
    <div className="min-h-[100vh] bg-gray-300 grid grid-rows-6 ">
      <div className='  row-span-1 justify-center grid items-center'>
        <h1 className=' font-bold font-serif text-[30px] text-[orangered]' >CBT Review</h1>
      </div>
      <div className='  row-span-5 grid grid-cols-2 gap-[30px]'>
        <div className='  grid grid-rows-2 gap-[30px] '>
          <div className=' bg-white grid grid-rows-4 '>
            <div className='  row-span-1 grid justify-center items-center '>
              <h1 className=' font-bold font-serif text-[20px] text-black '>Test Results</h1>
            </div>
            <div className=' bg-purple-500 row-span-3'></div>
          </div>
          <div className='  bg-white grid grid-rows-4 '>
          <div className='  row-span-1 grid justify-center items-center '>
              <h1 className=' font-bold font-serif text-[20px] text-black '>Upcoming Tests</h1>
            </div>
            <div className=' bg-green-500 row-span-3'></div>
          </div>
        </div>
        <div className='  grid gap-[30px] grid-rows-2'>
        <div className='  bg-white grid grid-rows-4 '>
        <div className='  row-span-1 grid justify-center items-center '>
              <h1 className=' font-bold font-serif text-[20px] text-black '>Progress Results</h1>
            </div>
            <div className=' bg-red-500 row-span-3'></div>
        </div>
        <div className='  bg-white grid grid-rows-4 '>
        <div className='  row-span-1 grid justify-center items-center '>
              <h1 className=' font-bold font-serif text-[20px] text-black '>Attempts History</h1>
            </div>
            <div className=' bg-indigo-500 row-span-3'></div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Cbt