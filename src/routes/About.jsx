import React from 'react'
import Navbar from '../Componants/Navbar/Navbar'
import Footer from '../Componants/Footer/Footer'
import AboutAll from '../Componants/AboutContent/AboutAll'
import HeroAbout from '../Componants/AboutContent/HeroAbout/HeroAbout'

const About = () => {
  return (
    <div>
    <Navbar/>
    {/* <HeroAbout heading="ABOUT US." text=""/> */}
    <HeroAbout heading="ABOUT US." text=""/>
    <AboutAll/>
    <Footer/>
   </div>
  )
}

export default About