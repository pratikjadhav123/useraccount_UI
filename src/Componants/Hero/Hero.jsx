import React from 'react'
import "./Hero.css"
import { Link } from "react-router-dom"
import IntroImg from "../../assets/intro-img.jpg"

const Hero = () => {
    return (
        <div className='hero'>
            <div className="mask">
                <img src={IntroImg} alt="IntroImg" className='into-img' />
            </div>
            <div className="content">
                <p>WE MAKE</p>
                <h1>DIGITAL PRODUCTS</h1>
                <div>
                    <Link to="/project" className='btn'>Project</Link>
                    <Link to="/contact" className='btn-light'>Contact</Link>
                </div>
            </div>

        </div>
    )
}

export default Hero