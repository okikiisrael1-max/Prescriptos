import React from 'react'
import {assets} from '../assets/assets.js'

const Footer = () => {
  return (
    <>
    <div className='w-[90%] md:w-[80%] bg-white text-gray-600 rounded-lg gap-5 mx-auto mt-10 pt-5 flex flex-col md:flex-row justify-between items-start py-10'>
      <div className='flex flex-col justify-center items-start pb-5 md:pb-0 gap-3'>
        <img src={assets.logo} alt="" />
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora quam, eum enim totam illum aliquam praesentium nihil est quod? Dignissimos molestiae accusantium dolores. Eligendi id ex hic. Quaerat, eveniet perspiciatis!</p>
      </div>
      <div className='flex flex-col gap-2 md:w-1/2'>
        <h2 className='text-lg font-semibold'>company</h2>
        <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
        </ul>
      </div>
      <div className='flex flex-col gap-2'>
        <h2 className='text-lg font-semibold'>Let Get In Touch</h2>
        <p>1234 Street Name, City Name, United States</p>
        <p>Email: contact@example.com</p>
      </div>
    </div>
    <hr className='flex text-gray-300 mx-auto w-[90%] md:w-[80%] h-0.5' />
    <p className='text-center my-2 text-gray-500'>© 2025 ZenithDev. All rights reserved.</p>
    </>
  )
}

export default Footer
