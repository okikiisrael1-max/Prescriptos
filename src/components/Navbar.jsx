import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { assets } from '../assets/assets.js'
import { motion } from 'motion/react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, easing: 'ease-out' }}
      className='flex justify-between items-center w-full px-[5%] md:px-[10%] py-2.5'
    >
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        <Link to="/">
          <img className='max-w-40' src={assets.logo} alt="" />
        </Link>
      </motion.div>

      {/* Desktop Menu */}
      <ul className='hidden md:flex gap-10 font-medium'>
        {['/', '/all-doctors', '/about', '/contact'].map((path, index) => (
          <motion.li
            key={path}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.08 }}
          >
            <NavLink
              className='flex transition-all border-indigo-500'
              to={path}
            >
              {path === '/' ? 'Home' :
               path === '/all-doctors' ? 'All Doctors' :
               path.charAt(1).toUpperCase() + path.slice(2)}
            </NavLink>
          </motion.li>
        ))}
      </ul>

      {/* Desktop CTA */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className='hidden md:flex'
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          <Link
            to="/signup"
            className='w-44 h-10 rounded-full bg-indigo-500 hover:bg-indigo-600 transition-all text-white flex justify-center items-center'
          >
            Create Account
          </Link>
        </motion.div>
      </motion.div>

      {/* Mobile Menu Icon */}
      <motion.span
        className='md:hidden'
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <img src={assets.menu_icon} alt="" />
      </motion.span>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.ul
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, easing: 'ease-out' }}
          className='absolute z-50 top-16 right-5 bg-white shadow-lg flex flex-col gap-5 p-5 rounded-md md:hidden'
        >
          {['/', '/all-doctors', '/about', '/contact'].map(path => (
            <NavLink
              key={path}
              onClick={() => setIsMenuOpen(false)}
              className='flex transition-all border-indigo-500'
              to={path}
            >
              {path === '/' ? 'Home' :
               path === '/all-doctors' ? 'All Doctors' :
               path.charAt(1).toUpperCase() + path.slice(2)}
            </NavLink>
          ))}

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/signup"
              onClick={() => setIsMenuOpen(false)}
              className='w-44 h-10 rounded-full bg-indigo-500 hover:bg-indigo-600 transition-all text-white flex justify-center items-center'
            >
              Create Account
            </Link>
          </motion.div>
        </motion.ul>
      )}
    </motion.div>
  )
}

export default Navbar
