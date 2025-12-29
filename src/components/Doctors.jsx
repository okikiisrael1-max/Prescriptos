import React from 'react'
import { doctors } from '../assets/assets'
import { Link } from 'react-router-dom'

const Doctors = () => {
  return (
    <div className='text-center my-10 space-y-3'>
      <h1 className='text-2xl md:text-3xl font-semibold text-gray-900'>Top Doctors To Book</h1>
      <p className='text-gray-500'>Simply browse through our extensive list of trusted <br /> doctors.</p>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-5 w-[90%] md:w-[80%] mx-auto mt-5'>
        {doctors.slice(0, 6).map((doctor, index) => (
            <Link to={`/appointment/${doctor._id}`} key={index} className='flex flex-col border text-left border-gray-200 rounded-lg overflow-hidden hover:-translate-y-2 hover:shadow-lg transition-all '>
                <img className='w-full bg-indigo-100' src={doctor.image} alt="" />
                <li className='ml-5 mt-2.5 text-green-500 flex items-center'><span className='mr-2 h-1.5 w-1.5 bg-green-500 rounded-full' />Available</li>
                <h2 className='ml-5 text-lg font-semibold mt-2 text-gray-900'>{doctor.name}</h2>
                <p className='ml-5 text-gray-500 mb-3.5'>{doctor.speciality}</p>
            </Link>
        ))}
      </div>
        <Link to="/all-doctors"><button className='bg-gray-300 cursor-pointer text-gray-700 px-6 py-2 rounded-full mt-5 hover:bg-gray-400 transition-colors'>View All Doctors</button></Link>
    </div>
  )
}

export default Doctors
