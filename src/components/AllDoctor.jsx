import React from 'react'
import {doctors} from '../assets/assets.js'
import { Link } from 'react-router-dom'

const AllDoctor = () => {
    const [showOptions, setShowOptions] = React.useState(false);
    const [activeFilter, setActiveFilter] = React.useState('all');

    const handleFilterClick = 
        activeFilter === 'all' ? 
        doctors : 
        doctors.filter(doctor => doctor.speciality.toLowerCase().includes(activeFilter.toLowerCase()));
  return (
    <div className='mt-5 mx-auto w-[90%] md:w-[80%]'>
      <p className='text-gray-600 '>Browse through the doctors specialist.</p>
    <div className='flex md:flex-row flex-col gap-5'>
        <span className='mr-5 md:hidden rounded border border-gray-300 justify-center text-gray-500 w-20 h-8 cursor-pointer text-[16px] flex items-center p-2.5' onClick={() => setShowOptions(!showOptions)}>Filter</span>
      <div className={` flex-col gap-2.5 mt-5 md:w-1/4 w-full ${showOptions ? 'flex' : 'hidden'} md:flex`}>
        <span onClick={()=> setActiveFilter('general physician')} className='rounded border border-gray-300 text-gray-500 w-full h-8 cursor-pointer text-[16px] flex items-center p-2.5'>General physician</span>
        <span onClick={()=> setActiveFilter('gynecologist')} className='rounded border border-gray-300 text-gray-500 w-full h-8 cursor-pointer text-[16px] flex items-center p-2.5'>Gynecologist</span>
        <span onClick={()=> setActiveFilter('dermatologist')} className='rounded border border-gray-300 text-gray-500 w-full h-8 cursor-pointer text-[16px] flex items-center p-2.5'>Dermatologist</span>
        <span onClick={()=> setActiveFilter('neurologist')} className='rounded border border-gray-300 text-gray-500 w-full h-8 cursor-pointer text-[16px] flex items-center p-2.5'>Neurologist</span>
        <span onClick={()=> setActiveFilter('pediatricians')} className='rounded border border-gray-300 text-gray-500 w-full h-8 cursor-pointer text-[16px] flex items-center p-2.5'>Pediatricians</span>
        <span onClick={()=> setActiveFilter('Gastroenterologist')} className='rounded border border-gray-300 text-gray-500 w-full h-8 cursor-pointer text-[16px] flex items-center p-2.5'>Gastroenterologist</span>
      </div>
    <div className='grid grid-cols-1 md:grid-cols-4 gap-5 w-[90%] md:w-[80%] mx-auto mt-5 shrink-0'>
            {handleFilterClick.map((doctor, index) => (
                <Link to={`/appointment/${doctor._id}`} key={index} className='flex flex-col border text-left border-gray-200 rounded-lg overflow-hidden hover:-translate-y-2 hover:shadow-lg transition-all '>
                    <img className='w-full bg-indigo-100' src={doctor.image} alt="" />
                    <li className='ml-5 mt-2.5 text-green-500 flex items-center'><span className='mr-2 h-1.5 w-1.5 bg-green-500 rounded-full' />Available</li>
                    <h2 className='ml-5 text-lg font-semibold mt-2 text-gray-900'>{doctor.name}</h2>
                    <p className='ml-5 text-gray-500 mb-3.5'>{doctor.speciality}</p>
                </Link>
            ))}
    </div>
    </div> 
    </div>
  )}

export default AllDoctor
