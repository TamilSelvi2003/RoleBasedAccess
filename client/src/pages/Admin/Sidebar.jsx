import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Admin.css";

const Sidebar = ({ selectedRole, onRoleChange }) => {
  const navigate = useNavigate();

  const handleRoleChange = (event) => {
    const newRole = event.target.value;
    onRoleChange(newRole);
  };

  return (
    <div className="sidebar">
      <h2>Admin</h2>
      <button
        className="sidebtn"
        onClick={() => navigate("/")}
      >
        X
      </button>
      <ul>
        <li>
          <Link to="/tasks">Tasks</Link>
        </li>
        <li>
          <Link to="/settings">Settings</Link>
        </li>
        <li>
          <Link to="/admin">Manage User</Link>
        </li>
        <li>
          <label
            htmlFor="role-select"
           className="sidelabel"
          >
            Select Role:
          </label>
          <select
            id="role-select"
            value={selectedRole}
            onChange={handleRoleChange}
           
          >
            <option value="admin">Admin</option>
            <option value="user">User</option>
            <option value="cashier">Cashier</option>
          </select>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;