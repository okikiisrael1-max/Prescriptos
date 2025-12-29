import React from 'react'
import Footer from '../components/Footer'

const SignUp = () => {
  return (
    <>
    <div className='flex flex-col items-center justify-center'>
      <form className='border border-gray-300 shadow-md p-8 rounded-lg w-75 md:w-95 mt-10 mb-10'>
        <h2 className='text-2xl font-bold mb-2 text-center text-gray-700'>Create Account</h2>
        <p className='mb-4 text-gray-600'>Please sign up to book appointment</p>
        <div className='mb-4'>
          <label htmlFor='name' className='block text-[14px] text-gray-500 mb-1'>Full Name</label>
          <input type='text' id='name' className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-black' />
        </div>
        <div className='mb-4'>
          <label htmlFor='email' className='block text-[14px] text-gray-500 mb-1'>Email</label>
          <input type='email' id='email' className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-black' />
        </div>
        <div className='mb-4'>
          <label htmlFor='password' className='block text-[14px] text-gray-500 mb-1'>Password</label>
          <input type='password' id='password' className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-black' />
        </div>
        <button type='submit' className='w-full bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-700 transition-all'>Create Account</button>
        <p className='mt-4 text-gray-600 text-[14px] '>Already have an account? <a href='/login' className='text-indigo-500 hover:underline'>Login here</a></p>
      </form>
    </div>
    <Footer/>
    </>
  )
}

export default SignUp
