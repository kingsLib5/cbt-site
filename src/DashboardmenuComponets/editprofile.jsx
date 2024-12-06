import React from 'react';

function EditProfile() {
  return (
    <>
      <div className='min-h-[100vh] bg-gray-300 flex justify-center items-center py-8 px-4'>
        <form className='h-auto grid grid-rows-7 gap-6 w-full bg-white max-w-2xl p-8 rounded-lg shadow-xl'>
          <div className='row-span-1 font-serif text-[24px] md:text-[28px] text-[orangered] font-bold flex justify-center items-center'>
            <h1>Edit Profile</h1>
          </div>

          <div className='row-span-5 grid gap-6 md:grid-cols-2'>
            {/* Left Column (Personal Info) */}
            <div className='grid gap-6'>
              <div className='flex flex-col md:flex-row items-center gap-4'>
                <label className='font-medium text-[16px] md:text-[18px] text-gray-600 w-full md:w-[30%]'>FirstName:</label>
                <input
                  type="text"
                  placeholder="Enter your first name"
                  className='h-[40px] w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition'
                />
              </div>

              <div className='flex flex-col md:flex-row items-center gap-4'>
                <label className='font-medium text-[16px] md:text-[18px] text-gray-600 w-full md:w-[30%]'>LastName:</label>
                <input
                  type="text"
                  placeholder="Enter your last name"
                  className='h-[40px] w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition'
                />
              </div>

              <div className='flex flex-col md:flex-row items-center gap-4'>
                <label className='font-medium text-[16px] md:text-[18px] text-gray-600 w-full md:w-[30%]'>Username:</label>
                <input
                  type="text"
                  placeholder="Enter your username"
                  className='h-[40px] w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition'
                />
              </div>
              <div className='flex flex-col md:flex-row items-center gap-4'>
                <label className='font-medium text-[16px] md:text-[18px] text-gray-600 w-full md:w-[30%]'>Password:</label>
                <input
                  type="text"
                  placeholder="Enter your username"
                  className='h-[40px] w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition'
                />
              </div>
            </div>

            {/* Right Column (Contact Info) */}
            <div className='grid gap-6'>
              <div className='flex flex-col md:flex-row items-center gap-4'>
                <label className='font-medium text-[16px] md:text-[18px] text-gray-600 w-full md:w-[30%]'>Phone:</label>
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  className='h-[40px] w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition'
                />
              </div>

              <div className='flex flex-col md:flex-row items-center gap-4'>
                <label className='font-medium text-[16px] md:text-[18px] text-gray-600 w-full md:w-[30%]'>Email:</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className='h-[40px] w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition'
                />
              </div>

              <div className='flex flex-col md:flex-row items-center gap-4'>
                <label className='font-medium text-[16px] md:text-[18px] text-gray-600 w-full md:w-[30%]'>State:</label>
                <input
                  type="text"
                  placeholder="Enter your state"
                  className='h-[40px] w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition'
                />
              </div>
              
              <div className='flex flex-col md:flex-row items-center gap-4'>
                <label className='font-medium text-[16px] md:text-[18px] text-gray-600 w-full md:w-[30%]'>Confirm Password:</label>
                <input
                  type="text"
                  placeholder="Enter your state"
                  className='h-[40px] w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition'
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className='row-span-1 flex justify-center items-center'>
            <button
              type='submit'
              className='px-8 py-3 w-full md:w-auto bg-[orangered] text-white font-semibold text-lg rounded-md hover:bg-[#00008B] transition duration-200 ease-in'>
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default EditProfile;