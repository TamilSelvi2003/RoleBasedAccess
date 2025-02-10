import React from "react";
import { Link,useNavigate } from "react-router-dom";
 import './Admin.css'

const AdminDashboard = () => {
    const navigate = useNavigate()
    const gotoAdmin = () => {
        navigate('/admin');
      };
  return (
    <div className="sidebar">
      <h2>Admin  </h2>
      <button style={{padding:"5px 10px",border:"none" ,borderRadius:'5px',marginTop:"-40px",float:"right",backgroundColor:"orange"}} onClick={()=>navigate('/')}>X</button>
      <ul>
        
        <li>
          <Link to="/tasks">Tasks</Link>
        </li>
        <li>
          <Link to="/settings">Settings</Link>
        </li>
        <li>
        <button style={{textDecoration:"none",margin :"10px"}} className="admin-btn" onClick={gotoAdmin}>
                ViewUser
              </button>
        </li>
      </ul>
    </div>
  );
};

export default AdminDashboard;
