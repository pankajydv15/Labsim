import React from 'react';
import "./clients.css";
// import hyundai from "../../../Assests/hyundai.png"
import delhi from "../../../Assests/Delhi-Police-Logo.jpg"
import ashok from "../../../Assests/Ashok-Leyland-Emblem.jpg"
import bike from "../../../Assests/honda bike.jpg"
import honda from "../../../Assests/honda logo.jpg"
import iit from "../../../Assests/IIT Guwahati Logo.png"
import maruti from "../../../Assests/maruti  logo.png"
import tata from "../../../Assests/tata motors.jpg"


const Clients = () => {
  return (
    <div className='Main-Client'>
        <div className='Client'>
          <h2>Our Clients</h2>
        </div>

        <div className='client-image'>
          <img src= {delhi} alt='Logo'img/>
          <img src= {ashok} alt='Logo'img/>
          <img src= {bike} alt='Logo'img/>
          <img src= {honda} alt='Logo'img/>
          <img src= {iit} alt='Logo'img/>
          <img src= {maruti} alt='Logo'img/>
          <img src= {tata} alt='Logo'img/>


        </div>
      
    </div>
  )
}

export default Clients
