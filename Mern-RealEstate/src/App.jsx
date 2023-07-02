import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Properties from '../components/Properties'
import PropertyDetails from '../pages/PropertyDetails'
import { Link, NavLink, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'


function App() {
  

  return (
    <>
    <nav>
      <ul>
        <li>
          <NavLink style={({ isActive }) => {
            return isActive? {color: "black"} : {}
          }} to="/">Home</NavLink>
        </li>
        <li><NavLink style={({ isActive }) => {
            return isActive? {color: "black"} : {}
          }} to="/properties">Properties</NavLink></li>
      </ul>
    </nav>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='properties' element={<Properties />} />
      <Route path="properties/:id" element={<PropertyDetails />} />
    </Routes>
    
     
    </>
  )
}

export default App
