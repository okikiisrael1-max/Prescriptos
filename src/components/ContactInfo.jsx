import React from 'react'
import { assets } from '../assets/assets.js'
import { motion } from 'motion/react'

const ContactInfo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, easing: 'ease-out' }}
      viewport={{ once: true }}
      className='mt-10 w-[90%] md:w-[80%] mx-auto text-center'
    >
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
        className='text-2xl md:text-3xl font-semibold text-gray-900'
      >
        Contact Us
      </motion.h1>

      <div className='mt-5 flex flex-col md:flex-row gap-5 justify-center items-center w-80% mx-auto'>
        {/* Image */}
        <motion.img
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, easing: 'ease-out' }}
          viewport={{ once: true }}
          className='md:w-1/3'
          src={assets.contact_image}
          alt=''
        />

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1, easing: 'ease-out' }}
          viewport={{ once: true }}
          className='flex flex-col gap-2.5 text-gray-600 text-left md:w-1/2'
        >
          <h3 className='text-xl font-medium uppercase'>Our Office</h3>
          <p>
            00000 Willms Station <br />
            Suite 000, Washington, USA
          </p>
          <p>
            Phone: (123) 456-7890 <br />
            Email: onakomayaokiki@gmail.com
          </p>

          <h3 className='text-xl font-medium uppercase'>Careers at Prescripto</h3>
          <p>Learn more about our teams and job openings.</p>

          <motion.div
            className='mt-5'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button className='bg-indigo-600 cursor-pointer text-white px-5 py-2.5 rounded hover:bg-indigo-700 transition-all'>
              Get in Touch
            </button>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default ContactInfo
