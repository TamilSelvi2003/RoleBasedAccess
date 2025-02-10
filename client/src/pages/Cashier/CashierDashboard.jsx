import React from "react";
import { Link,useNavigate } from "react-router-dom";
// import "./Sidebar.css";

const CashierDashboard = () => {
    const navigate = useNavigate()
     
  return (
    <div className="sidebar">
      <h2 style={{color:"orange",marginLeftLeft:"-10px"}}>Cashier</h2>
      <button style={{backgroundColor:"orange",border:"none",padding:"5px 10px",borderRadius:"5px",float:"right",marginTop:"-45px"}} onClick={()=>navigate('/ ')}>X</button>
      <ul>
        
        <li>
          <Link to="/accounts">Accounts</Link>
        </li>
        <li>
          <Link to="/cash">CashierProfile</Link>
        </li>
        <li>
        <button style={{textDecoration:"none",margin :"10px"}} className="admin-btn" onClick={gotoCashier}>
                ViewUser
              </button>
        </li>
      </ul>
    </div>
  );
};

export default CashierDashboard;
