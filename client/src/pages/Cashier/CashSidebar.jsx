import React from "react";
import { Link, useNavigate } from "react-router-dom";
// import "./Sidebar.css";

const CashSidebar = () => {
  const navigate = useNavigate();
 

  return (
    <div className="sidebar">
      <h2>Cashier Dashboard</h2>
      <button onClick={() => navigate('/ ')}>X</button>
      <ul>
        <li>
          <Link to="/accounts">Accounts</Link>
        </li>
        <li>
          <Link to="/cash">CashierProfile</Link>
        </li>
        
      </ul>
    </div>
  );
};

export default CashSidebar;
