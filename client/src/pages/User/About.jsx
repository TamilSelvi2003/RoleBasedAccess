import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
    const navigate = useNavigate()
  return (
   <>
    <div className='user' style={{width:"500px",backgroundColor:"#f2f2f2",height:"auto",padding:"10px",margin:"300px auto",borderRadius:"6px"}}>
       <h2 style={{color:"orange"}}>welcome to About Page </h2>
         <h4 style={{padding:"0 20px"}}> only user can access these..</h4>

         <button style={{backgroundColor:"orange",padding:"10px",border:"none",borderRadius:"6px",marginLeft:"230px"}} onClick={()=>navigate('/')}>Back</button>
         </div>
                
   </>
  )
}

export default About
 