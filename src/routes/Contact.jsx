import React from 'react'
import Navbar from '../Componants/Navbar/Navbar'
import Footer from '../Componants/Footer/Footer'
import HeroServices from '../Componants/HeroServices/HeroServices'
import SignUp from './../Componants/Register/SignUp';

const Contact = () => {
  return (
    <div>
     <Navbar/>
     <HeroServices heading=" CONTACT." text=""/>
     <SignUp/>
     <Footer/>
   </div>
  )
}

export default Contact