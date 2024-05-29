import React from 'react'
import "./Home.css"
import bg from "../../../Assests/Main.png"

const Home = () => {
  return (
    <>
        <div className='style'>
            <h3>
                <span>L</span>absim <span>T</span>echnology
            </h3>
        </div>

        <div className='homeMain'>

                <div className='introContent'>                    
                    <span className='intro'> We are<br/></span>
                    <span className='introtext'>Best in <span className='introtextcont'>Premium <br/>Driving Simulators</span></span>
                    <p className='introPara'>
                    Labsim offers the world’s best realistic driving simulator with OEM controls with
                    <br/> advance technologies at affordable prices with advance features
                    </p>

                
                </div>
                    {/* <div className="imgCont">
                        <img src={bg} alt="truck" className="bg" />
                    </div> */}

        </div>

    </>
  )
}

export default Home
