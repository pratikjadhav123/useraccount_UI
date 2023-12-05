import React from 'react'
import Navbar from '../Componants/Navbar/Navbar'
import Hero from '../Componants/Hero/Hero'
import Footer from '../Componants/Footer/Footer'
import Work from '../Componants/ServicesCard/Work'
import AboutContent from '../Componants/AboutContent/AboutContent'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <AboutContent/>
      <Work/>
      <Footer/>
    </div>
  )
}

export default Home