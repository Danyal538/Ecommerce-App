import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from "../assets/admin_assets/logo.png"

const Navbar = () => {
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem("token")
    navigate("/login")
  }

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center gap-3 px-4 sm:px-6 py-3 bg-white shadow border-b">
      <img src={logo} alt="Logo" className="h-10 w-auto" />
      <button
        onClick={handleLogout}
        className="bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700 text-sm sm:text-base"
      >
        Logout
      </button>
    </div>
  )
}

export default Navbar
