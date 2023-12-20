import React from 'react'
import { FaHome,FaPhone, FaMailBulk,FaLinkedin, FaFacebook,FaTwitter,FaInstagram} from "react-icons/fa";
import "./FooterStyle.css"

const Footer = () => {
  return (
     <>
     <div className="footer">
        <div className="footer-container">
            <div className="left">
                  <div className="location">
                  <FaHome size={20} style={{color:"#fff", marginRight:"2rem"}} />
                  <div>
                    <p>Flat no 306, H3 Wing, Ivy Estate - Nia,</p>
                    <p>Wagholi, Pune - 412207</p>
                  </div>
                  </div>
                  <div className="phone">
                  <h4><FaPhone size={20} style={{color:"#fff", marginRight:"2rem"}}/> +91 9022405567</h4>
                  </div>
                  <div className="email">
                  <h4><FaMailBulk size={20} style={{color:"#fff", marginRight:"2rem"}}/> contactus@itvidpra.com</h4>
                  </div>
                  <div className="instagram">
                  <h4><FaInstagram size={20} style={{color:"#fff", marginRight:"2rem"}}/>itvidpra_2007</h4>
                  </div>
            </div>
            <div className="right">
                <h4> About the company</h4>
                <p>Founded in 2021, we have brought together some of 
                    the strongest and most passionate experts in the field 
                    of software product engineering. We are the most proactive .Net Interns Hub, 
                    expertizing our skills in Microsoft .Net Technologies.
                </p>
                <div className="social">
                <FaFacebook size={30} style={{color:"#fff", marginRight:"1rem"}}/>
                <FaTwitter size={30} style={{color:"#fff", marginRight:"1rem"}}/>
                <FaLinkedin size={30} style={{color:"#fff", marginRight:"1rem"}}/>
                <FaInstagram size={30} style={{color:"#fff", marginRight:"1rem"}}/>
                </div>

            </div>
        </div>
     </div>
     <div className='legal'>
        <p>
        Copyright © 2023- ITvidpra | Designed by PRATIK JADHAV<i className='fa fa-heart'></i> 
        </p>
      </div>
     </>
  )
}

export default Footer;