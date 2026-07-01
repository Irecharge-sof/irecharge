import { useState } from 'react'
import Navbar from './composants/Navbar'
import { Routes, Route } from 'react-router-dom'
import  Acceuil  from './pages/Acceuil'
import  Activation  from './pages/Activation'
import  Remboursement  from './pages/Remboursement'
import Footers from './composants/Footers'



import './App.css'

function App() {
  return (
    <section>
    
    
      <Navbar />
      <Routes>
        <Route path="/" element={<Acceuil />} />
        <Route path="/Activation" element={<Activation />} />
        <Route path="/Remboursement" element={<Remboursement />} />
      </Routes>
      
    
    
      <Footers/>
    
    </section> 
  )
}

export default App
