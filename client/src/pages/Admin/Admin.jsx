import React, { useState, useEffect } from "react";
import { get } from '../../services/ApiEndpoint';
import { toast } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
import "./Admin.css";

const Admin = () => {
  const Navigate = useNavigate()
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", role: "" });
  const [users, setUsers] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const request = await get('/api/admin/getuser');
        if (request.status === 200) {
          setUsers(request.data.users);
        }
      } catch (error) {
        console.error(error);
        toast.error('Failed to fetch users.');
      }
    };
    fetchUsers();
  }, []);

  const toggleForm = () => {
    setShowForm(!showForm);
    setFormData({ name: "", email: "", role: "" });
    setEditingIndex(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingIndex !== null) {

      const updatedUsers = users.map((user, index) =>
        index === editingIndex ? formData : user
      );
      setUsers(updatedUsers);
      toast.success("User updated successfully!");
    } else {

      setUsers([...users, formData]);
      toast.success("User added successfully!");
    }

    setShowForm(false);
    setFormData({ name: "", email: "", role: "" });
    setEditingIndex(null);
  };


  const handleEdit = (index) => {
    setFormData(users[index]);
    setEditingIndex(index);
    setShowForm(true);
  };


  const handleDelete = (index) => {
    const updatedUsers = users.filter((_, i) => i !== index);
    setUsers(updatedUsers);
    toast.success("User deleted successfully!");
  };

  return (
    <div className="user-management">
      <h2>User Management</h2>
      <button className="adminbtn" onClick={() => Navigate('/')}>X</button>
      <button onClick={toggleForm} className="add-user-btn">
        {!showForm ? "Add User":"Back"}
      </button>
      {showForm && (
        <form onSubmit={handleSubmit} className="user-form">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Name"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email"
            required
          />
          <select
            name="role"
            value={formData.role}
            onChange={handleInputChange}
            required
          >
            <option value="admin">Admin</option>
            <option value="user">User</option>
            <option value="cashier">Cashier</option>
          </select>

          <button type="submit">{editingIndex !== null ? "Update" : "Submit"}</button>
        </form>
      )}

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <button className="edit" onClick={() => handleEdit(index)}>
                  Edit
                </button>
                <button className="delete" onClick={() => handleDelete(index)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Admin;
























































// import React, { useEffect, useState } from 'react';
// import { deleteUser, get, post } from '../../services/ApiEndpoint';
// import { toast } from 'react-hot-toast';
// import { useNavigate } from 'react-router-dom';

// export default function Admin() {
//   const [users, setUsers] = useState([]);
//   const [showPopup, setShowPopup] = useState(false);
//   const [newUser, setNewUser] = useState({
//     name: '',
//     email: '',
//     role: '',
//     password: '',
//   });

//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const request = await get('/api/admin/getuser');
//         if (request.status === 200) {
//           setUsers(request.data.users);
//         }
//       } catch (error) {
//         console.error(error);
//         toast.error('Failed to fetch users.');
//       }
//     };
//     fetchUsers();
//   }, []);

//   const handleClose = () => {
//     navigate('/');
//   };

//   const handleDelete = async (id) => {
//     try {
//       const request = await deleteUser(`/api/admin/delete/${id}`);
//       if (request.status === 200) {
//         toast.success(request.data.message);
//         setUsers(users.filter((user) => user._id !== id));
//       }
//     } catch (error) {
//       if (error.response) {
//         toast.error(error.response.data.message);
//       }
//     }
//   };

//   const handleAddUser = async () => {
//     try {
//       const request = await post('/api/admin/adduser', newUser);
//       if (request.status === 201) {
//         toast.success(request.data.message);
//         setUsers([...users, request.data.user]);
//         setShowPopup(false);
//         setNewUser({ name: '', email: '', role: '', password: '' });
//       }
//     } catch (error) {
//       if (error.response) {
//         toast.error(error.response.data.message);
//       }
//     }
//   };

//   const handleChange = (e) => {
//     setNewUser({ ...newUser, [e.target.name]: e.target.value });
//   };

//   return (
//     <>
//       <div className='admin-container'>
//         <h2 style={{textAlign:"center"}}>Manage Users</h2>
//         <button style={{padding:"5px 10px",border:"none" ,borderRadius:'5px', float:"right",backgroundColor:"orange"}} onClick={()=>navigate('/admin-dash')}>X</button>
//         <button style={{backgroundColor:"orange",padding:"10px",border:"none",borderRadius:"4px",marginBottom:"5px"}} onClick={() => setShowPopup(true)}>Add New User</button>
//         <table>
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Email</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users.map((user) => (
//               <tr key={user._id}>
//                 <td>{user.name}</td>
//                 <td>{user.email}</td>
//                 <td>
//                   <button className='table-btn' onClick={() => handleDelete(user._id)}>Delete</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Popup Form for Adding New User */}
//       {showPopup && (
//         <div className='popup-form'>
//           <div className='form-container'>
//             <h3 >Add New User</h3>
//             <label>
//               Name:
//               <input
//                 type='text'
//                 name='name'
//                 value={newUser.name}
//                 onChange={handleChange}
//               />
//             </label>
//             <label>
//               Email:
//               <input
//                 type='email'
//                 name='email'
//                 value={newUser.email}
//                 onChange={handleChange}
//               />
//             </label>
//             <label>
//               Role:
//               <select name='role' value={newUser.role} onChange={handleChange}>
//                 <option value=''>Select Role</option>
//                 <option value='admin'>Admin</option>
//                 <option value='user'>User</option>
//                 <option value='cashier'>Cashier</option>
//               </select>
//             </label>
//             <label>
//               Password:
//               <input
//                 type='password'
//                 name='password'
//                 value={newUser.password}
//                 onChange={handleChange}
//               />
//             </label>
//             <button style={{backgroundColor:"orange",padding:"10px",border:"none",borderRadius:"4px"}} onClick={handleAddUser}>Add User</button>
//             <button onClick={() => setShowPopup(false)}>Cancel</button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }