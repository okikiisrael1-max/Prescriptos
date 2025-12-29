import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import {assets} from '../assets/assets.js'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  return (
    <div className='flex justify-between items-center w-full px-[5%]  md:px-[10%] py-2.5'>
        <Link to="/"><img className='max-w-40' src={assets.logo} alt="" /></Link>
      <ul className='hidden md:flex gap-10 font-medium'>
        <li><NavLink className={`flex transition-all border-indigo-500`} to="/">Home</NavLink></li>
        <li><NavLink className={`flex transition-all border-indigo-500`} to="/all-doctors">All Doctors</NavLink></li>
        <li><NavLink className={`flex transition-all border-indigo-500`} to="/about">About</NavLink></li>
        <li><NavLink className={`flex transition-all border-indigo-500`} to="/contact">Contact</NavLink></li>
      </ul>
      <Link to="/signup" className='hidden md:flex w-44 h-10 rounded-full bg-indigo-500 hover:bg-indigo-600 transition-all text-white justify-center items-center'>Create Account</Link>
    <span className='md:hidden' onClick={()=> setIsMenuOpen(!isMenuOpen)}>
        <img src={assets.menu_icon} alt="" />
    </span>
    <ul className={`absolute top-16 right-5 bg-white shadow-lg flex flex-col gap-5 p-5 rounded-md md:hidden transition-all ${isMenuOpen ? 'flex' : 'hidden'}`}>
        <li><NavLink onClick={()=> setIsMenuOpen(!isMenuOpen)} className={`flex transition-all border-indigo-500`} to="/">Home</NavLink></li>
        <li><NavLink onClick={()=> setIsMenuOpen(!isMenuOpen)} className={`flex transition-all border-indigo-500`} to="/all-doctors">All Doctors</NavLink></li>
        <li><NavLink onClick={()=> setIsMenuOpen(!isMenuOpen)} className={`flex transition-all border-indigo-500`} to="/about">About</NavLink></li>
        <li><NavLink onClick={()=> setIsMenuOpen(!isMenuOpen)} className={`flex transition-all border-indigo-500`} to="/contact">Contact</NavLink></li>
        <Link to="/signup" onClick={()=> setIsMenuOpen(!isMenuOpen)} className='w-44 h-10 rounded-full bg-indigo-500 hover:bg-indigo-600 transition-all text-white flex justify-center items-center'>Create Account</Link>
    </ul>
    </div>
  )
}

export default Navbar
