// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// // import "./Sidebar.css";

// const Sidebar = () => {
//   const navigate = useNavigate();

//   const gotoAdmin = () => {
//     navigate('/admin/viewuser');
//   };

//   return (
//     <div className="sidebar">
//       <h2>Admin Dashboard</h2>
//       <button style={{padding:"5px 10px",border:"none" ,borderRadius:'5px',marginTop:"-25px",float:"right",backgroundColor:"orange"}} onClick={()=>navigate('/admin-dash')}>X</button>
//       <ul>
//         <li>
//           <Link to="/admin/tasks">Tasks</Link>
//         </li>
//         <li>
//           <Link to="/admin/settings">Settings</Link>
//         </li>
//         <li>
//           <button
//             style={{ textDecoration: "none", margin: "10px" }}
//             className="admin-btn"
//             onClick={gotoAdmin}
//           >
//             ViewUser
//           </button>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;
