import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Admin.css'

const Task = () => {
  const navigate = useNavigate()
  return (
    <div className='task-page' >
      <div>
        <h2>Task</h2>
        <button className='taskbtn' onClick={() => navigate('/admin-dash')}>Back</button>
      </div> <br />
      welcome to Task Page..
    </div>
  )
}

export default Task
