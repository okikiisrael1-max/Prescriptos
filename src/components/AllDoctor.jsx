import React from 'react'
import { doctors } from '../assets/assets.js'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'

const AllDoctor = () => {
  const [showOptions, setShowOptions] = React.useState(false)
  const [activeFilter, setActiveFilter] = React.useState('all')

  const filteredDoctors =
    activeFilter === 'all'
      ? doctors
      : doctors.filter((doctor) =>
          doctor.speciality.toLowerCase().includes(activeFilter.toLowerCase())
        )

  const specialties = [
    'general physician',
    'gynecologist',
    'dermatologist',
    'neurologist',
    'pediatricians',
    'Gastroenterologist',
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, easing: 'ease-out' }}
      viewport={{ once: true }}
      className='mt-5 mx-auto w-[90%] md:w-[80%]'
    >
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
        className='text-gray-600'
      >
        Browse through the doctors specialist.
      </motion.p>

      <div className='flex md:flex-row flex-col gap-5'>
        {/* Mobile filter button */}
        <motion.span
          whileTap={{ scale: 0.95 }}
          className='mr-5 md:hidden rounded border border-gray-300 justify-center text-gray-500 w-20 h-8 cursor-pointer text-[16px] flex items-center p-2.5'
          onClick={() => setShowOptions(!showOptions)}
        >
          Filter
        </motion.span>

        {/* Filter options */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: showOptions ? 1 : 0, y: showOptions ? 0 : -10 }}
          transition={{ duration: 0.3 }}
          className={`flex-col gap-2.5 mt-5 md:w-1/4 w-full ${
            showOptions ? 'flex' : 'hidden'
          } md:flex`}
        >
          {specialties.map((spec, index) => (
            <motion.span
              key={index}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(spec)}
              className='rounded border border-gray-300 text-gray-500 w-full h-8 cursor-pointer text-[16px] flex items-center p-2.5'
            >
              {spec.charAt(0).toUpperCase() + spec.slice(1)}
            </motion.span>
          ))}
        </motion.div>

        {/* Doctor Cards */}
        <motion.div className='grid grid-cols-1 md:grid-cols-4 gap-5 w-[90%] md:w-[80%] mx-auto mt-5 shrink-0'>
          {filteredDoctors.map((doctor, index) => (
            <motion.div
              key={doctor._id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
              className='flex flex-col border text-left border-gray-200 rounded-lg overflow-hidden cursor-pointer'
            >
              <Link to={`/appointment/${doctor._id}`}>
                <img
                  className='w-full bg-indigo-100'
                  src={doctor.image}
                  alt=''
                />
                <li className='ml-5 mt-2.5 text-green-500 flex items-center'>
                  <span className='mr-2 h-1.5 w-1.5 bg-green-500 rounded-full' />
                  Available
                </li>
                <h2 className='ml-5 text-lg font-semibold mt-2 text-gray-900'>
                  {doctor.name}
                </h2>
                <p className='ml-5 text-gray-500 mb-3.5'>{doctor.speciality}</p>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}

export default AllDoctor
