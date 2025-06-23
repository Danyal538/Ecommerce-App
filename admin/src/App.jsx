import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from "react-router-dom"
import Add from './pages/Add'
import Home from './pages/Home'
import List from './pages/List'
import Order from './pages/Order'
import DashboardLayout from './components/DashBoardLayout'

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<DashboardLayout />}>
          <Route path='add' element={<Add />} />
          <Route path='list' element={<List />} />
          <Route path='order' element={<Order />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
