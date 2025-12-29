import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import AllDoctors from './pages/AllDoctors.jsx'
import About from './pages/About.jsx'
import Appointment from './pages/Appointment.jsx'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import SignUp from './pages/SignUp.jsx'
import Contact from './pages/Contact.jsx'


const App = () => {
  return (
    <div>
      <Router>
      <Navbar />
      <hr className='text-gray-300 w-[90%] md:w-[80%] h-1 flex mx-auto my-1'/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/all-doctors" element={<AllDoctors />} />
          <Route path="/about" element={<About />} />
          <Route path="/appointment/:_id" element={<Appointment />} />
          <Route path='*' element={<h1>Page Not found</h1>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
