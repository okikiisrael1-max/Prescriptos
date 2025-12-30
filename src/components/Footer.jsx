import React from 'react'
import { assets } from '../assets/assets.js'
import { motion } from 'motion/react'

const Footer = () => {
  return (
    <>
      {/* Footer Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, easing: 'ease-out' }}
        viewport={{ once: true }}
        className='w-[90%] md:w-[80%] bg-white text-gray-600 rounded-lg gap-5 mx-auto mt-10 pt-5 flex flex-col md:flex-row justify-between items-start py-10'
      >
        {/* Brand */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className='flex flex-col justify-center items-start pb-5 md:pb-0 gap-3'
        >
          <motion.img
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            src={assets.logo}
            alt=''
          />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora
            quam, eum enim totam illum aliquam praesentium nihil est quod?
          </p>
        </motion.div>

        {/* Company Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          viewport={{ once: true }}
          className='flex flex-col gap-2 md:w-1/2'
        >
          <h2 className='text-lg font-semibold'>Company</h2>
          <ul className='space-y-1'>
            <li className='hover:text-indigo-500 transition-colors'>Home</li>
            <li className='hover:text-indigo-500 transition-colors'>About us</li>
            <li className='hover:text-indigo-500 transition-colors'>Delivery</li>
            <li className='hover:text-indigo-500 transition-colors'>Privacy Policy</li>
          </ul>
        </motion.div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
          className='flex flex-col gap-2'
        >
          <h2 className='text-lg font-semibold'>Let’s Get In Touch</h2>
          <p>1234 Street Name, City Name, United States</p>
          <p>Email: contact@example.com</p>
        </motion.div>
      </motion.div>

      {/* Divider */}
      <motion.hr
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        viewport={{ once: true }}
        className='flex text-gray-300 mx-auto w-[90%] md:w-[80%] h-0.5'
      />

      {/* Copyright */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        viewport={{ once: true }}
        className='text-center my-2 text-gray-500'
      >
        © 2025 ZenithDev. All rights reserved.
      </motion.p>
    </>
  )
}

export default Footer
