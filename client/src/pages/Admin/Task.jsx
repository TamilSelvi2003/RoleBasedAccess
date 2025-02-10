import React from 'react'
import { useNavigate } from 'react-router-dom'

const Task = () => {
    const navigate = useNavigate()
  return (
    <div className='task-page' style={{width:"300px",backgroundColor:"#f2f2f2",height:"auto",padding:"10px",margin:"300px auto",borderRadius:"5px",boxShadow:'0 0 0 0.2'}}>
        <div>
            <h2>Task</h2>
            <button style={{padding:"5px 10px",border:"none" ,borderRadius:'5px',marginTop:"-25px",float:"right",backgroundColor:"orange"}} onClick={()=>navigate('/admin-dash')}>X</button>
        </div> <br />
        welcome to Task , only Admin can access these..
    </div>
  )
}

export default Task
 