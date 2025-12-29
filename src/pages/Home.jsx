import React from 'react'
import Header from '../components/Header.jsx'
import Speciality from '../components/Speciality.jsx'
import Doctors from '../components/Doctors.jsx'
import Banner from '../components/Banner.jsx'
import Footer from '../components/Footer.jsx'

const Home = () => {
  return (
    <div>
      <Header/>
      <Speciality/>
      <Doctors/>
      <Banner/>
      <Footer/>
    </div>
  )
}

export default Home
