import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setRoutesForRole } from "../../redux/RouteSlice";
import './Admin.css'

const RouteManager = ({ selectedRole }) => {
  const dispatch = useDispatch();
  const [routes] = useState([
    "User",
    "About",
    "Tasks",
    "Settings",
    "ManageUser",
    "Cashier",
    "Accounts",
    "Help",
  ]);
  const [selectedRoutes, setSelectedRoutes] = useState([]);

  const handleRouteToggle = (route) => {
    setSelectedRoutes((prevRoutes) =>
      prevRoutes.includes(route)
        ? prevRoutes.filter((r) => r !== route)
        : [...prevRoutes, route]
    );
  };

  const handleSaveRoutes = () => {
    dispatch(setRoutesForRole({ role: selectedRole, routes: selectedRoutes }));
    alert("Routes Saved");
  };

  return (
    <div className="dashboard-body">
      <h3>Dashboard for Role: {selectedRole}</h3>
      <div className="routes-container">
        {routes.map((route) => (
          <label key={route} >
            <input
              type="checkbox"
              checked={selectedRoutes.includes(route)}
              onChange={() => handleRouteToggle(route)}
            />
            {route}
          </label>
        ))}

      </div>
      <button className="routebtn" onClick={handleSaveRoutes}>Save Routes</button>
    </div>
  );
};

export default RouteManager;