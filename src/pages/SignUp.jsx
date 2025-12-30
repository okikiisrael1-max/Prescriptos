import React from 'react'
import Footer from '../components/Footer'
import { motion } from 'motion/react'

const SignUp = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, easing: 'ease-out' }}
        viewport={{ once: true }}
        className='flex flex-col items-center justify-center'
      >
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className='border border-gray-300 shadow-md p-8 rounded-lg w-75 md:w-95 mt-10 mb-10'
        >
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className='text-2xl font-bold mb-2 text-center text-gray-700'
          >
            Create Account
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className='mb-4 text-gray-600'
          >
            Please sign up to book appointment
          </motion.p>

          {/* Form Fields */}
          {[
            { id: 'name', label: 'Full Name', type: 'text' },
            { id: 'email', label: 'Email', type: 'email' },
            { id: 'password', label: 'Password', type: 'password' },
          ].map((field, index) => (
            <motion.div
              key={field.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 * index }}
              viewport={{ once: true }}
              className='mb-4'
            >
              <label
                htmlFor={field.id}
                className='block text-[14px] text-gray-500 mb-1'
              >
                {field.label}
              </label>
              <input
                type={field.type}
                id={field.id}
                className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-black'
              />
            </motion.div>
          ))}

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            type='submit'
            className='w-full bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-700 transition-all'
          >
            Create Account
          </motion.button>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            viewport={{ once: true }}
            className='mt-4 text-gray-600 text-[14px]'
          >
            Already have an account?{' '}
            <a href='/login' className='text-indigo-500 hover:underline'>
              Login here
            </a>
          </motion.p>
        </motion.form>
      </motion.div>

      {/* Footer */}
      <Footer />
    </>
  )
}

export default SignUp
