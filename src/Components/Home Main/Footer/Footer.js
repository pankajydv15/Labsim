import React from 'react'
import "./Footer.css"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import logo from '../../../Assests/logo.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-style'>
                <div className='Logo'>
                <img src= {logo} alt='Logo'img/>
                </div>
                
                
                <div className='Site-map'>
                    <h2>Site Map</h2>
                    <p className='para'>HOME</p>
                    <p className='para'>About Us</p>
                    <p className='para'>service</p>
                    <p className='para'>Contact Us</p>
                </div>

                <div className='Address'>
                    <h2 className='para'>Reach Us</h2>
                  <div className='reach'>
                    <h2>Labsim Technologies Private Limited</h2>
                    </div>

                    <p className="para"><CallIcon/> Contact No. 9467460625 , 9811766326</p>
                    <p className='para'><EmailIcon/> Email ID : info@labsim.in</p>
                    <p className="para"><LocationOnIcon/> Plot No 199 – 200 , Main Rohtak Road
                       Opposite – Metro Pillar No 541
                       Mundka Industrial Area , New Delhi -110041</p>





                </div>
        </div>
    </div>
  )
}

export default Footer
