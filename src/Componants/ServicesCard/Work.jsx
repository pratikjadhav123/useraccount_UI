import React from 'react'
import "./ServicesCard.css"
import ServiceCardData from './ServicesCardData'
import ServicesCard from './ServicesCard';

const Work = () => {
  return (
    <>
    <div className="work-container">
        <h1 className='services-heading'>SERVICES</h1>
        <div className='services-container'>
            {ServiceCardData.map((val, ind) =>{
                return(
                    <ServicesCard
                    key={ind}
                    img={val.img}
                    title={val.title}
                    text={val.text}
                    view={val.view}
                    contact={val.contact}
                    />
                )
            })}
        </div>
    </div>
    </>
  )
}

export default Work