import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { post } from '../services/ApiEndpoint';
import { Logout } from '../redux/AuthSlice';
 

export default function Home() {
  const user = useSelector((state) => state.Auth.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      const request = await post('/api/auth/logout');
      if (request.status === 200) {
        dispatch(Logout());
        navigate('login');
      }
    } catch (error) {
      console.error('Logout Error:', error.response?.data || error.message);
    }
  };

  const navbarStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    // backgroundColor: '#282c34',
    color: 'white',
  };

  const buttonStyle = {
    padding: '8px 12px',
    marginLeft: '10px',
    backgroundColor: '#61dafb',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    color: '#282c34',
  };

  const linkStyle = {
    textDecoration: 'none',
    color: '#f2f2f2',
    padding: '8px',
    borderRadius: '4px',
    marginRight: '15px',
    cursor: 'pointer',
  };

  return (
    <div className='div' style={navbarStyle}>
      <h2 style={{ color: 'white', margin: '20px 0' }}>Home</h2>
      <nav>
        {user && user.role === 'user' ? (
          <>
            <Link to="/user" style={linkStyle}>
              User Profile
            </Link>
            <Link to="/about" style={linkStyle}>
              About 
            </Link>
            <button style={buttonStyle} onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : user?.role === 'admin' ? (
          <>
            <button
              style={{ ...buttonStyle, backgroundColor: 'orange' }}
              onClick={() => navigate('/admin-dash')}
            >
              Go To Admin Dashboard
            </button>
            <button style={buttonStyle} onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : user?.role === 'cashier' ? (
          <>
            <Link to="/cashier" style={linkStyle}>
               CashierDashboard
            </Link>
            <button style={buttonStyle} onClick={handleLogout}>
              Logout
            </button>
          
          </>
        ) : null && (
         
          <>
           <Link to ='/header'>Header</Link>
          

          </>
        )}
      </nav>
    </div>
  );
}
