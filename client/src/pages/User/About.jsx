import React from 'react'
import { useNavigate } from 'react-router-dom'
import './user.css';
const About = () => {
    const navigate = useNavigate()
  return (
   <>
    <div className='user' >
       <h2 >welcome to About Page... </h2>
         {/* <h4 > only user can access these..</h4> */}

         <button className='userbtn'  onClick={()=>navigate('/')}>Back</button>
         </div>
                
   </>
  )
}

export default About
 