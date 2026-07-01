import { useState } from 'react'
import Navbar from './composants/Navbar'
import { Routes, Route } from 'react-router-dom'
import  Acceuil  from './pages/Acceuil'
import  Activation  from './pages/Activation'
import  Remboursement  from './pages/Remboursement'
import Footers from './composants/Footers'



import './App.css'

export default function App() {
  return (
    <div style={{
      color: "white",
      fontSize: "30px",
      padding: "50px"
    }}>
      APP OK 🚀
    </div>
  )
}