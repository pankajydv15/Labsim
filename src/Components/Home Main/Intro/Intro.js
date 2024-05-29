import React from 'react'
import "./intro.css"
// import truck1 from "../../Assests/truck1.jpg"
import truck3 from "../../../Assests/truck3.png"
import car3 from "../../../Assests/car3.jpg"
import bike from "../../../Assests/bike.jpg"

const Intro = () => {
  return (
    <div className='intro-main'>
      <div className='heading'>
        <h3>Product we provide</h3><br/>
        <span>Made in india simulator</span>
        <span id='pan'>Labsim ensuring a high level of customer satisfaction 
          Our customers satisfaction is a core component of our business module.</span>

        {/* <div className='worksImgs'>
            
                <div className='card'>
                  <div className='card-inner'>
                    <div className='front'>
                    <img src={truck1} alt='' className='worksImg' id='img'/>  
                   <p className='ImgDetails'>HMV<br/>Labsim offering Realistic Simulators on the <br/>OEM controls of the Vehicles</p>
                   <img src={truck2} alt='' className='flip' id='img'/>
                    </div>
                  </div>
                </div>


          
                <div className='card'>
                  <div className='card-inner'>
                    <div className='front'>
                    <img src={car1} alt='' className='worksImg' id='img'/>
                    <p className='ImgDetails'>LMV<br/>Labsim offering Realistic Simulators on the <br/>OEM controls of the Vehicles</p>
                    </div>
                  </div>
                </div>
           
                <div className='card'>
                  <div className='card-inner'>
                    <div className='front'>
                    <img src={car2} alt='' className='worksImg' id='img'/>
                  <p className='ImgDetails'>two wheeler simulator <br/>Labsim offering Realistic Simulators on the<br/> OEM controls of the Vehicles</p>
                    </div>
                  </div>
                </div>
    
        </div> */}


      <div className='worksImgs'>
        
        <div class="flip-box">
          <div class="flip-box-inner">
            <div class="flip-box-front">
              <img src={truck3}  class="truck-img" alt="Paris" img/>
            </div>
            <div class="flip-box-back">
              <h2>HMV</h2>
              <p className='text-deatils'><br/>Labsim offering Realistic Simulators on the <br/>OEM controls of the Vehicles</p>
            </div>
          </div>
        </div>

        <div class="flip-box">
          <div class="flip-box-inner">
            <div class="flip-box-front">
              <img src={car3}  class="truck-img" alt="Paris" img/>
            </div>
            <div class="flip-box-back">
              <h2>LMV</h2>
              <p className='text-deatils'><br/>Labsim offering Realistic Simulators on the <br/>OEM controls of the Vehicles</p>
            </div>
          </div>
        </div>

        <div class="flip-box">
          <div class="flip-box-inner">
            <div class="flip-box-front">
              <img src={bike}  class="truck-img" alt="Paris" img/>
            </div>
            <div class="flip-box-back">
              <h2>two wheeler simulator</h2>
              <p className='text-deatils'> <br/>Labsim offering Realistic Simulators on the<br/> OEM controls of the Vehicles</p>
            </div>
          </div>
        </div>

      </div> 


      </div>
    </div>
  )
}

export default Intro
