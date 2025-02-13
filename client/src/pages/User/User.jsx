import React from 'react'
import { useNavigate } from 'react-router-dom'
import './user.css';

const User = () => {
    const navigate = useNavigate()
  return (
   <>
    <div className='user' >
       <h2 >welcome to user Page </h2>
         {/* <h4 > only user can access these..</h4> */}

         <button className='userbtn' onClick={()=>navigate('/')}>Back</button>
         </div>
                
   </>
  )
}

export default User
 