import React from 'react'

const WhyChooseUs = () => {
  return (
    <div className='mt-10'>
      <h1 className='text-center text-2xl text-gray-600'>Why Choose <span className='text-black font-bold'>Us</span></h1>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-5 w-[90%] md:w-[80%] mx-auto mt-10 mb-10'>
        <div className='flex flex-col p-5 border border-gray-400 gap-2.5 hover:bg-indigo-500 hover:text-white py-5 transition-all'>
            <h2 className='text-lg font-semibold mb-2.5'>EFFICIENCY:</h2>
            <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
        </div>
        <div className='flex flex-col p-5 border border-gray-400 gap-2.5 hover:bg-indigo-500 hover:text-white py-5 transition-all'>
            <h2 className='text-lg font-semibold mb-2.5'>CONVENIENCE:</h2>
            <p>Access to a network of trusted healthcare professionals in your area.</p>
      </div>
      <div className='flex flex-col p-5 border border-gray-400 gap-2.5 hover:bg-indigo-500 hover:text-white py-5 transition-all'>
            <h2 className='text-lg font-semibold mb-2.5'>PERSONALIZATION:</h2>
            <p>Tailored recommendations and reminders to help you stay on top of your health.</p>
      </div>
    </div>
    </div>
  )
}

export default WhyChooseUs
