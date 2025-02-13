import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { post } from '../../services/ApiEndpoint'
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux'
import { SetUser } from '../../redux/AuthSlice';
import './login.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export default function Login() {
  const user = useSelector((state) => state.Auth)
  console.log(user)
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const navigate = useNavigate()
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);
    try {
      const request = await post('/api/auth/login', { email, password });
      const response = request.data;

      if (request.status === 200) {
        if (response.user.role === 'admin' || response.user.role === 'user' || response.user.role === 'cashier') {
          navigate('/');
        }
        toast.success(response.message);
        dispatch(SetUser(response.user));
      }
    } catch (error) {
      console.log(error);
      if (error.response && error.response.status === 401) {
        toast.error('Incorrect email or password. Please try again.');
      } else {
        toast.error('Password is Invalid. Please try again later.');
      }
    }
  };


  return (
    <div className='login-container'>
      <h2>Login</h2>
      <button className='loginbtn' onClick={() => navigate('/header')}>X</button>
      <form onSubmit={handleSubmit}>
        <div className='input-group'>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className='input-group password-group'>
          <label htmlFor="password">Password</label>
          <div className='password-container'>
            <input type={showPassword ? 'text' : 'password'} id="password" onChange={(e) => setPassword(e.target.value)} />
            <span className='password-icon' onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
        </div>
        <button className='log-btn' type='submit'>Login</button>
        <p className='register-link'>
          Not registered? <Link to={'/register'}>Register here</Link>
        </p>
      </form>
    </div>
  )
}