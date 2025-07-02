import React from 'react'
import { NavLink } from 'react-router-dom'
import add from "../assets/admin_assets/add_icon.png"
import list from "../assets/admin_assets/parcel_icon.svg"
import order from "../assets/admin_assets/order_icon.png"

const Sidebar = ({ onClose }) => {
  const linkClasses = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-2 rounded-md border text-sm border-gray-300 
     ${isActive ? "bg-gray-200 font-semibold" : "hover:bg-gray-100"}`

  return (
    <div className="flex flex-col gap-3 p-4 h-full w-full">
      <NavLink to="add" className={linkClasses} onClick={onClose}>
        <img src={add} className="w-5 h-5" /> <p>Add Items</p>
      </NavLink>
      <NavLink to="list" className={linkClasses} onClick={onClose}>
        <img src={list} className="w-5 h-5" /> <p>List</p>
      </NavLink>
      <NavLink to="order" className={linkClasses} onClick={onClose}>
        <img src={order} className="w-5 h-5" /> <p>Order</p>
      </NavLink>

      <button onClick={onClose} className="md:hidden text-blue-600 underline mt-6">
        Close
      </button>
    </div>
  )
}

export default Sidebar
