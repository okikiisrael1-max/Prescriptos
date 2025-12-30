import React from 'react'
import { motion } from 'motion/react'

const WhyChooseUs = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, easing: 'ease-out' }}
      viewport={{ once: true }}
      className='mt-10'
    >
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
        className='text-center text-2xl text-gray-600'
      >
        Why Choose <span className='text-black font-bold'>Us</span>
      </motion.h1>

      {/* Cards */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-5 w-[90%] md:w-[80%] mx-auto mt-10 mb-10'>
        {[
          {
            title: 'EFFICIENCY:',
            text: 'Streamlined appointment scheduling that fits into your busy lifestyle.'
          },
          {
            title: 'CONVENIENCE:',
            text: 'Access to a network of trusted healthcare professionals in your area.'
          },
          {
            title: 'PERSONALIZATION:',
            text: 'Tailored recommendations and reminders to help you stay on top of your health.'
          }
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: index * 0.15,
              easing: 'ease-out'
            }}
            viewport={{ once: true }}
            whileHover={{ y: -6, scale: 1.02 }}
            className='flex flex-col p-5 border border-gray-400 gap-2.5 py-5 hover:bg-indigo-500 hover:text-white transition-all'
          >
            <h2 className='text-lg font-semibold mb-2.5'>{item.title}</h2>
            <p>{item.text}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default WhyChooseUs
