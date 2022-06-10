import React from 'react'
import img1 from './Images/logo.png';
import img2 from './Images/1.png';
import img3 from './Images/2.png';
import img4 from './Images/3.png';
import {  FaFacebook, FaGlobe} from "react-icons/fa";
import { IoMdCall } from "react-icons/io";




const Image = () => {
  return (
    <div className='All'>
        <div className='Main'>
        <img src={ img1 } alt="" height={ '100px'  } className="logo" />
        <div className='top-container'>
        <img src={ img2 } alt="" className="Img2" />
       <div className='right-container'>
       <p className='heading'>C.R.I PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</p>
        <ul>
          <li className='text'>C.R.I's energy efficient products recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
          <li className='text'>C.R.I. is the highest contributor in the country for the projects of EESL(Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 star rated energy efficient smart pumps with IoT enabled control panel.</li>
        </ul>
        <img src= { img3 } alt="" className='Img3'/>
        <p className='text'>Government of India has awarded the <strong>"National Energy Conservation Award 2018". </strong>Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
       </div>
      </div>
      <p className='mid-txt'>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION. </p>
      <img src= {img4} alt="" className='Img4' />
      <p className='Names'>Valves - Pumps - Pipes - IoT Drives and Controllers - Wires and Cables - Solar Systems - Motors</p>
      <hr className='line' />
      <div>
          <h4>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h4>
          <p>CHEMICALS & PROCESS <span>|</span> POWER <span>|</span> WATER & WASTE WATER <span>|</span> OILS & GAS <span>|</span> PHARMA <span>|</span> SUGARS & DISTILLERIES <span>|</span> PAPER & PULP <span>|</span> MARINE & DEFENCE <span>|</span> METAL & MINING <span>|</span> FOOD & BEVERAGE <span>|</span> PETROCHEMICAL & REFINERIES <span>|</span> SOLAR <span>|</span> BUILDING <span>|</span> HVAC <span>|</span> FIRE FIGHTING <span>|</span> AGRICULTURE & RESIDENTIAL</p>
      </div>
      <div className='footer'>
          <div className='footer-txt1'><a href=''><span className="icon"></span><IoMdCall className='Icon'/>Toll free <strong>1800 200 1234</strong></a></div>
          <div className='footer-txt1'><a href=''><span className="icon"></span><FaFacebook className='Icon'/>www.facebook.com/cripumps</a></div>
          <div className='footer-txt1'><a href=''><span className="icon"></span><FaGlobe className='Icon'/>www.crigroups.com</a></div>
      </div>
        
    </div>
    </div>
  )
}

export default Image;

