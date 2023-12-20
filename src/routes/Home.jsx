import React from 'react'
import Navbar from '../Componants/Navbar/Navbar'
import Hero from '../Componants/Hero/Hero'
import Footer from '../Componants/Footer/Footer'
import Work from '../Componants/ServicesCard/Work'
import AboutAll from '../Componants/AboutContent/AboutAll'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <AboutAll/>
      <Work/>
      <Footer/>
    </div>
  )
}

export default Home