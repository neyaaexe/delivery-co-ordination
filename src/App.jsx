import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import Login from './pages/login'
import Registration from './pages/registration'
import Landing from './pages/landing'
import User from './pages/user/userlayout'
import UserDashboard from './pages/user/dashboard'
import UserSettings from './pages/user/settings'
import UserMessage from './pages/user/message'
import UserDeliveryStatus from './pages/user/deliverystatus'

function App() {
  
  return (
      <BrowserRouter>
         <Routes>
           <Route path="/login" element={<Login/>}/>
           <Route path="/registration" element={<Registration/>}/>
           <Route path="/" element={<Landing/>}/>
           <Route path="/user" element={<User/>}>
              <Route path="dashboard" element={<UserDashboard/>}/>
              <Route path="settings" element={<UserSettings/>}/>
              <Route path="message" element={<UserMessage/>}/>
              <Route path="deliverydetails" element={<UserDeliveryStatus/>}/>
          </Route>
         </Routes>
      </BrowserRouter>
  )
}
export default App