import React from 'react'
import { useNavigate } from 'react-router-dom'

const Cashier = () => {
    const navigate = useNavigate()
  return (
   <>
    <div className='user' style={{width:"500px",backgroundColor:"#f2f2f2",height:"auto",padding:"10px",margin:"300px auto",borderRadius:"6px"}}>
       <h2 style={{color:"orange"}}>welcome to Cashier </h2>
         <h4 style={{padding:"0 20px"}}> only cashier can access these..</h4>

         <button style={{padding:"5px 10px",border:"none" ,borderRadius:'5px',marginTop:"-25px",float:"right",backgroundColor:"orange"}} onClick={()=>navigate('/cashier')}>back</button>
         </div>
                
   </>
  )
}

export default Cashier
 