import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='md:w-[80%] w-[90%] mx-auto my-2.5 bg-indigo-500 rounded px-[5%] flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 pt-6'>
      <div>
        <h1 className='capitalize text-white text-3xl md:text-5xl font-medium'>Book Appointment with trusted doctors</h1>
        <div className='flex md:flex-row flex-col items-center mt-7 mb-5'>
            <img className='flex mr-2.5 w-39' src={assets.group_profiles} alt="" />
          <div>
            <p className='text-white'>Simply browse through our extensive list of trusted doctors,
            schedule your appointment hassle-free.</p>
          </div>
        </div>
        <a href="#speciality">
        <button className=' flex bg-white text-gray-500 max-md:mx-auto font-medium px-7 py-3 rounded-full hover:bg-gray-200 transition-all'>Book Appointment</button>
        </a>
      </div>
      <img className='md:w-1/2' src={assets.header_img} alt="" />
    </div>
  )
}

export default Header
