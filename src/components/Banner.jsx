import React from 'react'
import {assets} from '../assets/assets.js'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <div className='w-[90%] md:w-[80%] bg-indigo-500 rounded-lg gap-5 mx-auto my-10 px-[5%] pt-5 flex flex-col md:flex-row justify-between items-center'>
      <div className='flex flex-col justify-center items-start pb-5 md:pb-0'>
        <h1 className='text-white text-2xl md:text-5xl font-bold'>Book Appointment <br /> With 100+ Trusted Doctors</h1>
        <Link to='/signup'> <button className='cursor-pointer bg-white text-gray-500 px-4 py-2 rounded-full mt-4'>Create Account</button></Link>
      </div>
      <img className='w-1/3 hidden md:flex' src={assets.appointment_img} alt="Appointment" />
    </div>
  )
}

export default Banner
