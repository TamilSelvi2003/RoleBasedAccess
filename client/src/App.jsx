import React, { useEffect } from 'react'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/login/Login';
import Register from './pages/login/Register';
import Admin from './pages/Admin/Admin';
import  { Toaster } from 'react-hot-toast';
import AdminLaouts from './Layouts/AdminLaouts'
import UserLayout from './Layouts/UserLayout'
import CashierLayouts from './Layouts/CashierLayouts'
import PublicLayouts from './Layouts/PublicLayouts'
import { useDispatch,useSelector } from 'react-redux'
import { updateUser } from './redux/AuthSlice'
import User from './pages/User/User'
import Settings from './pages/Admin/Settings'
import AdminDashboard from './pages/Admin/AdminDashboard'
import Task from './pages/Admin/Task'
import Cashier from './pages/Cashier/Cashier'
import CashierDashboard from './pages/Cashier/CashierDashboard'
import Accounts from './pages/Cashier/Accounts'
import About from './pages/User/About'
import Header from './pages/Header'


export default function App() {
  const user=useSelector((state)=>state.Auth.user)
const disptch=useDispatch()
  useEffect(()=>{
         
        disptch(updateUser())
  },[user])

  return (
    <>
          <BrowserRouter>
        <Toaster />
       
        <Routes>
          <Route path="/" element={<UserLayout />}>
            <Route index element={<Home />} />
           
          </Route>
          <Route path="/" element={<AdminLaouts />}>
            <Route index element={<Home />} />
          </Route>
          <Route path="/" element={<CashierLayouts />}>
            <Route index element={<Home />} />
          </Route>

          <Route path="/" element={<PublicLayouts />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="header" element={<Header />} />
          </Route>
          <Route path='/user' element={<User/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/settings' element={<Settings/>} />
          <Route path='/tasks' element={<Task/>} />
          <Route path='/admin-dash'  element={<AdminDashboard />} />
          <Route path='/Cashier'  element={<CashierDashboard />} />
          <Route path='/cash'  element={<Cashier />} />
          <Route path='/accounts'  element={<Accounts />} />
          <Route path='/header'  element={<Header />} />
          <Route path='/admin' element={<Admin/>}/>
        </Routes>
      </BrowserRouter>



    </>
  )
}
