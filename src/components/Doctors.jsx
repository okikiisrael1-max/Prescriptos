import React from 'react'
import { doctors } from '../assets/assets'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'

const Doctors = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, easing: 'ease-out' }}
      viewport={{ once: true }}
      className='text-center my-10 space-y-3'
    >
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
        className='text-2xl md:text-3xl font-semibold text-gray-900'
      >
        Top Doctors To Book
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        viewport={{ once: true }}
        className='text-gray-500'
      >
        Simply browse through our extensive list of trusted <br /> doctors.
      </motion.p>

      {/* Cards */}
      <div className='grid grid-cols-1 md:grid-cols-4 gap-5 w-[90%] md:w-[80%] mx-auto mt-5'>
        {doctors.slice(0, 6).map((doctor, index) => (
          <motion.div
            key={doctor._id}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            viewport={{ once: true }}
          >
            <Link
              to={`/appointment/${doctor._id}`}
              className='flex flex-col border text-left border-gray-200 rounded-lg overflow-hidden hover:-translate-y-2 hover:shadow-lg transition-all'
            >
              <motion.img
                initial={{ scale: 0.95 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
                className='w-full bg-indigo-100'
                src={doctor.image}
                alt=""
              />

              <li className='ml-5 mt-2.5 text-green-500 flex items-center'>
                <span className='mr-2 h-1.5 w-1.5 bg-green-500 rounded-full' />
                Available
              </li>

              <h2 className='ml-5 text-lg font-semibold mt-2 text-gray-900'>
                {doctor.name}
              </h2>

              <p className='ml-5 text-gray-500 mb-3.5'>
                {doctor.speciality}
              </p>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* View All Button */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <Link to="/all-doctors">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className='bg-gray-300 cursor-pointer text-gray-700 px-6 py-2 rounded-full mt-5 hover:bg-gray-400'
          >
            View All Doctors
          </motion.button>
        </Link>
      </motion.div>
    </motion.div>
  )
}

export default Doctors
