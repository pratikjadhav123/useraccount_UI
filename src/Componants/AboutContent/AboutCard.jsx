import React from "react"
// import Heading from "../common/heading/Header1"
import "./about.css";
import { homeAbout } from "./AboutData"
import Awrapper from "./Awrapper";
import 'bootstrap/dist/css/bootstrap.css';
import aboutimg from "../../assets/About_Us.jpg"

const AboutCard = () => {
  return (
    <>
      <section className='aboutHome'>
        <div className='container flexSB'>
          <div className='left row'>
            <img src={aboutimg} alt="IntroImg" />
          </div>
          <div className='right row'>
            {/* <Heading subtitle='LEARN ANYTHING' title='Benefits About Online Learning Expertise' /> */}
            <div className='items'>
              {homeAbout.map((val) => {
                return (
                  <div className='item flexSB'>
                    <div className='img'>
                      <img src={val.cover} alt='' />
                    </div>
                    <div className='text'>
                      <h2>{val.title}</h2>
                      <p>{val.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
      <Awrapper/>
    </>
  )
}

export default AboutCard