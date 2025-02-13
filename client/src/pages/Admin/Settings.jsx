import React from 'react'
import './Admin.css'
import { useNavigate } from 'react-router-dom'

const Settings = () => {
    const navigate = useNavigate()
  return (
    <div className='settings' >
        <div>
            <h2>Admin-Settings</h2>
            <button className='setbtn' onClick={()=>navigate('/admin-dash')}>Back</button>
        </div>  
        welcome to settings Page...
    </div>
  )
}

export default Settings
