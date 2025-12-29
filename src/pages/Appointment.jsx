import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { doctors } from '../assets/assets.js'
import { assets } from '../assets/assets.js'
import Footer from '../components/Footer.jsx'
import { Link } from 'react-router-dom'

const Appointment = () => {

  const {_id} = useParams();
  const doctor = doctors.find(doc => doc._id === _id);
  if (!doctor) return <p>Doctor not found</p>;

  const relatedDoctors = doctors.filter(
  doc =>
    doc.speciality === doctor.speciality &&
    doc._id !== doctor._id
);
  return (
    <>
    <div className='md:px-[10%] px-[5%]'>
      <div className='flex p-5 gap-5 flex-col justify-center md:flex-row'>
        <img className='md:w-1/4 bg-indigo-500 rounded-lg' src={doctor.image} alt="" />
        <div className='flex flex-col rounded-lg border border-gray-400 p-5'>
          <h1 className='text-2xl text-black font-bold'>{doctor.name}</h1>
          <div className='flex gap-2.5 items-center'>
            <p className='text-gray-600'>{doctor.degree} - {doctor.speciality}</p>
            <span className='rounded-full text-gray-500 border border-gray-500 w-15 h-4.5 flex justify-center items-center text-[12px]'>{doctor.experience}</span>
          </div>
          <p className='flex mt-5 text-black text-[16px]'>About <img className='w-2.5 mx-1.5' src={assets.info_icon} alt="" /></p>
          <p className='text-gray-600 text-[14px]'>{doctor.about}</p>
          <p className='mt-5 text-gray-700 font-medium'>Appointment Fee: ${doctor.fees}</p>
          <div>
          </div>
          
        </div>
      </div>  
        <h1 className='text-2xl text-black font-bold mt-5'>Booking slot</h1>
        <form className='flex flex-col md:items-end md:flex-row' gap-2>
          <div className='flex flex-col gap-1.5'>
            <label className='text-gray-500' htmlFor="date">Date</label>
            <input className='flex w-50 border border-gray-500 rounded px-2.5 mr-2.5' type="date" name='date' id='date'/>
          </div>
          <div className='flex flex-col gap-1.5'>
            <label className='text-gray-500' htmlFor="time">Time</label>
            <input className='w-30 flex  border border-gray-500 rounded px-2.5 mr-2.5' type="time" name="time" id='time' />
          </div>
          <button className='flex max-md:mt-5 justify-center items-center bg-indigo-600 rounded text-white w-50 h-10'>Book Appointment</button>
          
        </form>
      <div>
        <h1 className='text-center text-3xl text-black font-bold mt-10'>Related Doctors</h1>
        <p className='text-center text-gray-400 my-2.5'>Simply browse through our extensive list of trusted doctors.</p>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-5 mx-auto mt-5'>
        {relatedDoctors.length > 0 ? (
          relatedDoctors.map(doc => (
            <Link to={`/appointment/${doc._id}`} key={doc._id} className='flex flex-col border text-left border-gray-200 rounded-lg overflow-hidden hover:-translate-y-2 hover:shadow-lg transition-all '>
                <img className='w-full bg-indigo-100' src={doc.image} alt="" />
                <li className='ml-5 mt-2.5 text-green-500 flex items-center'><span className='mr-2 h-1.5 w-1.5 bg-green-500 rounded-full' />Available</li>
                <h2 className='ml-5 text-lg font-semibold mt-2 text-gray-900'>{doc.name}</h2>
                <p className='ml-5 text-gray-500 mb-3.5'>{doc.speciality}</p>
            </Link>
        ))) : (<p className="text-gray-500">No related doctors found</p>)}
      </div>
      </div>
    </div>

    <wbr></wbr>
    <Footer/>
    </>
  )
}

export default Appointment
