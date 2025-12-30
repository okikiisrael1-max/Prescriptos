import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'motion/react'

const Header = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, easing: 'ease-out' }}
      viewport={{ once: true }}
      className='md:w-[80%] w-[90%] mx-auto my-2.5 bg-indigo-500 rounded px-[5%] flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 pt-6'
    >
      {/* LEFT CONTENT */}
      <div className="flex flex-col gap-6">
        
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className='capitalize text-white text-3xl md:text-5xl font-medium'
        >
          Book Appointment with trusted doctors
        </motion.h1>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          viewport={{ once: true }}
          className='flex md:flex-row flex-col items-center gap-3'
        >
          <motion.img
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className='w-39'
            src={assets.group_profiles}
            alt=""
          />

          <p className='text-white text-center md:text-left'>
            Simply browse through our extensive list of trusted doctors,
            schedule your appointment hassle-free.
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.a
          href="#speciality"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.35 }}
          viewport={{ once: true }}
          className="max-md:mx-auto"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className='bg-white text-gray-500 font-medium px-7 py-3 rounded-full hover:bg-gray-200'
          >
            Book Appointment
          </motion.button>
        </motion.a>
      </div>

      {/* RIGHT IMAGE */}
      <motion.img
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className='md:w-1/2'
        src={assets.header_img}
        alt=""
      />
    </motion.div>
  )
}

export default Header
