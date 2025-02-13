import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Logout } from "../redux/AuthSlice";
import { post } from '../services/ApiEndpoint';
import Swal from "sweetalert2";
import { AiOutlineLogout, AiOutlineMenu } from "react-icons/ai";
import './Header.css';

export default function Home() {
  const user = useSelector((state) => state.Auth.user);
  const routesByRole = useSelector((state) => state.Route.routesByRole);
  const loading = useSelector((state) => state.Auth.loading);
  
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const roleRoutes = user ? routesByRole[user.role] || [] : [];

  useEffect(() => {
    if (!loading && !user) {
      navigate("/header");
    }
  }, [user, loading, navigate]);

  const handleLogout = async () => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "orange",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, logout!",
    });
  
    if (result.isConfirmed) {
      try {
        await post('/api/auth/logout');
        dispatch(Logout());
        localStorage.removeItem("token");
        navigate('/login');
        Swal.fire("Logged out!", "You have been successfully logged out.", "success");
      } catch (error) {
        console.error('Logout Error:', error.message);
        Swal.fire("Error", "Something went wrong during logout!", "error");
      }
    }
  };
  
  const defaultRoutes = {
    user: ["User", "About"],
    cashier: ["Cashier", "Accounts"],
    admin: ["Tasks", "ManageUsers", "Settings"],
  };

  return (
    <div className="home">
      {user?.role === "admin" && (
        <button onClick={() => navigate("/admin-dash")} className="menubtn">
          <AiOutlineMenu size={21} /> 
        </button>
      )}
      <nav>
        {(roleRoutes.length > 0 ? roleRoutes : defaultRoutes[user?.role || "user"]).map((route) => (
          <Link className="homelink" to={`/${route.toLowerCase().replace(/\s+/g, "-")}`} key={route}>
            {route}
          </Link>
        ))}
        {user && (
          <button onClick={handleLogout} className="homebtn">
            <AiOutlineLogout size={13} /> Logout
          </button>
        )}
      </nav>
    </div>
  );
}
