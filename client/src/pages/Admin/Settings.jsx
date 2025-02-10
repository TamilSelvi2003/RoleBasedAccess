import React from 'react'
import { useNavigate } from 'react-router-dom'

const Settings = () => {
    const navigate = useNavigate()
  return (
    <div className='settings' style={{width:"500px",backgroundColor:"#f2f2f2",height:"auto",padding:"10px",margin:"300px auto"}}>
        <div>
            <h2>Admin-Settings</h2>
            <button style={{padding:"5px 10px",border:"none" ,borderRadius:'5px',marginTop:"-25px",float:"right",backgroundColor:"orange"}} onClick={()=>navigate('/admin-dash')}>X</button>
        </div>  
        welcome to settings , only Admin can access these..
    </div>
  )
}

export default Settings
