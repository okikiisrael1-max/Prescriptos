import React from 'react'
import { assets } from '../assets/assets.js'

const ContactInfo = () => {
  return (
    <div className='mt-10 w-[90%] md:w-[80%] mx-auto text-center'>
      <h1 className='text-2xl md:text-3xl font-semibold text-gray-900'>Contact Us</h1>
      <div className='mt-5 flex flex-col md:flex-row gap-5 justify-center items-center w-80% mx-auto'>
        <img  className='md:w-1/3' src={assets.contact_image} alt="" />
        <div className='flex flex-col gap-2.5 text-gray-600 text-left md:w-1/2'>
            <h3 className='text-xl font-medium uppercase'>Our Office</h3>
            <p>00000 Willms Station <br />
            Suite 000, Washington, USA</p>
            <p>Phone: (123) 456-7890 <br />
            Email: onakomayaokiki@gmail.com</p>
            <h3 className='text-xl font-medium uppercase'>CAREERS AT PRESCRIPTO</h3>
            <p>Learn more about our teams and job openings.</p>
            <div className='mt-5'>
              <button className='bg-indigo-600 cursor-pointer text-white px-5 py-2.5 rounded hover:bg-indigo-700 transition-all'>Get in Touch</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ContactInfo
