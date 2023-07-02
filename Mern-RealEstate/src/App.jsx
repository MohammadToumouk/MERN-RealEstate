import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Properties from '../components/Properties'
import PropertyDetails from '../pages/PropertyDetails'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Nav from '../components/Nav'


function App() {
  

  return (
    <>
    
    <Nav />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='properties' element={<Properties />} />
      <Route path="properties/:id" element={<PropertyDetails />} />
    </Routes>
    
     
    </>
  )
}

export default App
