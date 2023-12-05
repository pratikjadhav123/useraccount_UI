import React from 'react'
import "./ServicesCard.css"
import { NavLink } from 'react-router-dom'

const ServicesCard = (props) => {
  return (
    <>
    <div className='services-card'>
                <img  src={props.img} alt="" />
                <h2 className='services-title'> {props.title}</h2>
                <div className='services-details'>
                    <p> {props.text}</p>
                    <div className="services-btns">
                        <NavLink to= {props.view} className="btn">View</NavLink>
                        <NavLink to={props.contact} className="btn">Contact</NavLink>
                    </div>
                </div>
            </div>
    </>
  )
}

export default ServicesCard