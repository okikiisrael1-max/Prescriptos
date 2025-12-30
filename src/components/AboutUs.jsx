import React from 'react'
import { assets } from '../assets/assets.js'
import { motion } from 'motion/react'

const AboutUs = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, easing: 'ease-out' }}
      viewport={{ once: true }}
      className='mt-10'
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
        className='text-center text-2xl text-gray-600'
      >
        About <span className='text-black font-bold'>Us</span>
      </motion.h2>

      <div className='mt-5 w-[90%] md:w-[80%] mx-auto flex flex-col md:flex-row gap-10 items-center'>
        {/* Image */}
        <motion.img
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, easing: 'ease-out' }}
          viewport={{ once: true }}
          className='w-1/3'
          src={assets.about_image}
          alt=''
        />

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1, easing: 'ease-out' }}
          viewport={{ once: true }}
          className='flex flex-col gap-5 text-gray-600'
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            Welcome to Prescripto, your trusted partner in managing your healthcare
            needs conveniently and efficiently. At Prescripto, we understand the
            challenges individuals face when it comes to scheduling doctor
            appointments and managing their health records.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Prescripto is committed to excellence in healthcare technology. We
            continuously strive to enhance our platform, integrating the latest
            advancements to improve user experience and deliver superior service.
            Whether you're booking your first appointment or managing ongoing care,
            Prescripto is here to support you every step of the way.
          </motion.p>

          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
            className='text-black font-bold my-2.5'
          >
            Our Vision
          </motion.h3>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.25 }}
            viewport={{ once: true }}
          >
            Our vision at Prescripto is to create a seamless healthcare experience
            for every user. We aim to bridge the gap between patients and healthcare
            providers, making it easier for you to access the care you need, when
            you need it.
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default AboutUs
