import React, { useState } from "react";
import "./Admin.css";
import RouteManager from "./RouteManager";
import Sidebar from "./Sidebar";

const AdminDashboard = () => {
  const [selectedRole, setSelectedRole] = useState("admin");

  const handleRoleChange = (newRole) => {
    setSelectedRole(newRole);
  };

  return (
    <>
      <Sidebar selectedRole={selectedRole} onRoleChange={handleRoleChange} />
      <RouteManager selectedRole={selectedRole} />
    </>
  );
};

export default AdminDashboard;