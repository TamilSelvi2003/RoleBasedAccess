import React from 'react'
import { useNavigate } from 'react-router-dom'
import './cashier.css';

const Cashier = () => {
    const navigate = useNavigate()
  return (
   <>
    <div className='cash' >
       <h2 >welcome to Cashier </h2>
             <button className='cashbtn' onClick={()=>navigate('/')}>back</button>
         </div>
                
   </>
  )
}

export default Cashier
 