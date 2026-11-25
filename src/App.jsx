import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import Login from './pages/login'
import Registration from './pages/registration'
import Landing from './pages/landing'
function App() {
  
  return (
      <BrowserRouter>
         <Routes>
           <Route path="/login" element={<Login/>}/>
           <Route path="/registration" element={<Registration/>}/>
           <Route path="/" element={<Landing/>}/>
         </Routes>
      </BrowserRouter>
  )
}
export default App