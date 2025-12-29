import React from 'react'
import {specialityData} from '../assets/assets.js'
import { Link } from 'react-router-dom'

const Speciality = () => {
  return (
    <div id='speciality' className='w-[90%] md:w-[80%] flex flex-col my-5 mx-auto items-center gap-3 justify-center'>
      <h1 className='text-2xl md:text-3xl font-semibold text-gray-900'>Find by Speciality</h1>
      <p className='text-center text-gray-500'>Simply browse through our extensive list of trusted doctors, <br />
        schedule your appointment hassle-free.</p>
        <div className='flex scroll-auto justify-center items-center overflow-x-auto w-full mt-5'>
        {specialityData.map((item, index) => (
            <Link  to={`/all-doctors`}>
                <div key={index} className='flex flex-col justify-center items-center mx-3 my-5 transition-transform hover:scale-105 hover:-translate-y-2.5'>
                    
                        <div className='w-20 h-20 md:w-24 md:h-24 bg-indigo-100 rounded-full flex justify-center items-center'>
                            <img className='w-16 h-16' src={item.image} alt="" />
                            
                        </div>
                    
                    <p className='font-medium mt-2 text-gray-500'>{item.speciality}</p>
                </div>
            </Link>
        ))}</div>
    </div>
  )
}

export default Speciality
