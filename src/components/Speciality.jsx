import React from 'react'
import { specialityData } from '../assets/assets.js'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'

const Speciality = () => {
  return (
    <motion.div
      id='speciality'
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, easing: 'ease-out' }}
      viewport={{ once: true }}
      className='w-[90%] md:w-[80%] flex flex-col my-5 mx-auto items-center gap-3 justify-center'
    >
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
        className='text-2xl md:text-3xl font-semibold text-gray-900'
      >
        Find by Speciality
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        viewport={{ once: true }}
        className='text-center text-gray-500'
      >
        Simply browse through our extensive list of trusted doctors, <br />
        schedule your appointment hassle-free.
      </motion.p>

      {/* Speciality List */}
      <div className='flex justify-center items-center overflow-x-auto w-full mt-5'>
        {specialityData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            viewport={{ once: true }}
          >
            <Link to={`/all-doctors`}>
              <motion.div
                whileHover={{ scale: 1.08, y: -8 }}
                transition={{ duration: 0.25 }}
                className='flex flex-col justify-center items-center mx-3 my-5'
              >
                <motion.div
                  initial={{ scale: 0.9 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: true }}
                  className='w-20 h-20 md:w-24 md:h-24 bg-indigo-100 rounded-full flex justify-center items-center'
                >
                  <img
                    className='w-16 h-16'
                    src={item.image}
                    alt=""
                  />
                </motion.div>

                <p className='font-medium mt-2 text-gray-500'>
                  {item.speciality}
                </p>
              </motion.div>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default Speciality
