import React from 'react'
import { useNavigate } from 'react-router-dom'
import './cashier.css'

const Accounts = () => {
    const navigate = useNavigate()
  return (
   <>
    <div className='account' >
       <h2>welcome to AccountPage </h2>
         <button className='accountbtn' onClick={()=>navigate('/')}>back</button>
    </div>
                
   </>
  )
}

export default Accounts
 