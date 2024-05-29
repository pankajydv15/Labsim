import React from 'react'
import './about.css'
// import backgrnd from '../../Assests/blue - Copy.jpg'
import ApiOutlinedIcon from '@mui/icons-material/ApiOutlined';
import AirportShuttleOutlinedIcon from '@mui/icons-material/AirportShuttleOutlined';
import AssistWalkerOutlinedIcon from '@mui/icons-material/AssistWalkerOutlined';
import Brightness7OutlinedIcon from '@mui/icons-material/Brightness7Outlined';



const About = () => {
  return (
    <div className=' Main-about'>
      <div className='labsim'>
            <h2>
                <span>L</span>absim <span>T</span>echnology <span>P</span>rivate <span>L</span>imted
            </h2>
      </div>

      <div className="pic">

        <div className='keywords'>

              <div className='icon' >          
                <h2 id='uni'><ApiOutlinedIcon/>Advanced Technology</h2>
              </div>       
              
              <div className='icon'>
                <h2><AirportShuttleOutlinedIcon/> Scalability</h2>
              </div>       
              
              <div className='icon' >
                <h2   ><Brightness7OutlinedIcon/>Customization</h2>
              </div>       
              
              <div className='icon'>
                <h2><AssistWalkerOutlinedIcon/>Faster</h2>
              </div> 

        </div>

      </div>


      <div className='about'>
        <div className='info'>

            <div className='box'>
              <p>        
                  Labsim Technologies Private Ltd. stands at the forefront of automotive simulator design and development, 
                  offering tailored solutions, software development expertise, and technical consultancy services. 
              </p>
            </div>



            <div className='box'>
              <p>
                  With its headquarters based in Delhi, Labsim boasts a dedicated team specializing in hardware and software development, 
                  production, cutting-edge research and development facilities, and efficient service management.
              </p>
            </div>



            <div className='box'>
              <p><br/>
              Labsim engineers are highly experienced in simulation technology using the latest tools of software &
              hardware platform.
              </p>
            </div>


              
            <div className='box'>
              <p>
               Labsim has designed & developmore than 40 driver training simulators in India
              and successfully installed to customer end. Labsim started with a group of highly technical skill
              engineers. Labsim offers the world’s best realistic simulation technologies at affordable prices with
              advance features.
              </p>
            </div>

            

            <div className='box'>
              <p><br/>
              Labsim are committed to our customers and have a passion for technology. We take on big
              challenges, and pride ourselves on seeing them through. We hold ourselves accountable to
              our customers. 
              </p>
            </div>

            <div className='box'>
              <p>
              Labsim Ensuring a high level of satisfaction among our customers is a core
              component of our business.
              </p>
            </div>
        

        </div>
      
      
      </div>
    </div>
  )
}

export default About;
