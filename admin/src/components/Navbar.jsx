import React from 'react'
import logo from "../assets/admin_assets/logo.png"
import { useNavigate } from "react-router-dom"

const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token")
    navigate("/login")
  }
  return (
    <div className="flex justify-between items-center px-6 py-3 bg-white">
      <div className="flex items-center gap-3">
        <img src={logo} alt="Logo" className="w-30 h-30 object-contain -mb-8 -mt-4" />
      </div>
      <button className="bg-gray-800 hover:bg-gray-700 transition-colors duration-300 text-white px-5 py-2 rounded-full shadow-sm"
        onClick={handleLogout}>
        Logout
      </button>
    </div>
  )
}

export default Navbar
