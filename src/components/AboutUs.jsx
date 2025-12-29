import React from 'react'
import {assets} from '../assets/assets.js'

const AboutUs = () => {
  return (
    <div className='mt-10'>
      <h2 className='text-center text-2xl text-gray-600'>About <span className='text-black font-bold'>Us</span> </h2>
      <div className='mt-5 w-[90%] md:w-[80%] mx-auto flex flex-col md:flex-row gap-10 items-center'>
        <img className='w-1/3' src={assets.about_image} alt="" />
        <div className='flex flex-col gap-5 text-gray-600'>
          <p className='text-gray-600'>Welcome to Prescripto, your trusted partner in managing your healthcare needs conveniently and efficiently. At Prescripto, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.</p>
          <p className='text-gray-600'>Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Prescripto is here to support you every step of the way.</p>
          <h3 className='text-black font-bold my-2.5'>Our Vision</h3>
          <p className='text-gray-600'>Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.</p>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
