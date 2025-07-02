import React from 'react'
import logo from "../assets/admin_assets/logo.png"
import { useNavigate } from "react-router-dom"

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  }

  return (
    <div className="flex flex-wrap justify-between items-center px-4 sm:px-6 py-3 bg-white shadow-sm border-b border-gray-200">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <img
          src={logo}
          alt="Logo"
          className="w-24 h-auto object-contain"
        />
      </div>

      {/* Logout Button */}
      <button
        className="bg-gray-800 hover:bg-gray-700 text-white px-4 sm:px-5 py-2 rounded-full text-sm sm:text-base transition"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  )
}

export default Navbar
