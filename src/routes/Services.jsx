 import React from 'react'
import Navbar from '../Componants/Navbar/Navbar'
import Footer from '../Componants/Footer/Footer'
import HeroServices from '../Componants/HeroServices/HeroServices'
import Work from '../Componants/ServicesCard/Work'
 
 const Services = () => {
   return (
     <div>
      <Navbar/>
      <HeroServices heading="SERVICES." text=""/>
      <Work/>
      <Footer/>
     </div>
   )
 }
 
 export default Services