import React from 'react'
import "./portfolio.css"
import pic from "../../../Assests/try.jpg"
import car1 from '../../../Assests/car1.jpg'
import car2 from '../../../Assests/truck1.jpg'
import car3 from '../../../Assests/hmv-truck-driving-simulator.jpg'
import truck2 from '../../../Assests/truck2.jpeg'

const Portfolio = () => {
  return (
    <div className='port-main'>
        <div className='portfolio'>
          <h2>Our Portfolio</h2>
          <span>Labsim Technologies Pvt. Ltd providing the service to all over the india , Nepal & Bangladesh</span>
        </div>

        <div className='image'>
          <div className='work-image'>
            <img src = {car1} alt = "pic" img/>
          </div>

          <div className='work-image'>
           <img src = {car3} alt = "pic" img/>
          </div>

          <div className='work-image'>
            <img src = {car2} alt = "pic" img/>
          </div>

          {/* <div className='work-image'>
           <img src = {truck2} alt = "pic" img/>
          </div> */}
        </div>
    </div>
  )
}

export default Portfolio
