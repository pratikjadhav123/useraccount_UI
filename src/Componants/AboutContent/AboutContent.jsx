import React from 'react'
import "./AboutContent.css"
import { Link } from 'react-router-dom'
import aboutimg1 from "../../assets/Services.bg.jpg"
import aboutimg2 from "../../assets/intro-img.jpg"

const AboutContent = () => {
  return (
    <div className='about'>
        <div className="left">
            <h1>ABOUT US</h1>
            <h3>Trusted by 50+ Happy Clients</h3>
            <p>Founded in 2021, we have brought together
                 some of the strongest and most passionate 
                 experts in the field of software product 
                 engineering. We are the most proactive .
                 Net Interns Hub, expertizing our skills in Microsoft .
                 Net Technologies. We claim our expertise in the Web
                  application development and Mobile Chatbot, iOS, 
                  Android application development. We deliver innovative solutions and services like Software Design and
                  Development, Web Hosting and Independent Testing.
            </p>
            <Link to="/contact">
                <button className='btn'>Contact</button>
            </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                   <img src={aboutimg1} alt="true" className='img' />
                </div>
                <div className="img-stack bottom">
                   <img src={aboutimg2} alt="true" className='img' />
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default AboutContent