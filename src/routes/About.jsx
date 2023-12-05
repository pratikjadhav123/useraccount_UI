import React from 'react'
import Navbar from '../Componants/Navbar/Navbar'
import Footer from '../Componants/Footer/Footer'
import HeroServices from '../Componants/HeroServices/HeroServices'
import AboutContent from '../Componants/AboutContent/AboutContent'

const About = () => {
  return (
    <div>
    <Navbar/>
    <HeroServices heading="ABOUT US." text=""/>
    <AboutContent/>
    <Footer/>
   </div>
  )
}

export default About