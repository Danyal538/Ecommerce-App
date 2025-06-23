import React from 'react'
import { NavLink } from 'react-router-dom'
import add from "../assets/admin_assets/add_icon.png"
import list from "../assets/admin_assets/parcel_icon.svg"
import order from "../assets/admin_assets/order_icon.png"

const Sidebar = () => {
  const linkClasses = ({ isActive }) =>
    `flex items-center gap-3 p-3 rounded-md cursor-pointer border border-gray-300 transition ${isActive ? 'bg-gray-300 font-semibold' : 'hover:bg-gray-100'
    }`

  return (
    <div className="flex flex-col gap-4 p-4 h-full bg-white">
      <NavLink to="add" className={linkClasses}>
        <img src={add} alt="Add" className="w-6 h-6" />
        <p>Add Items</p>
      </NavLink>

      <NavLink to="list" className={linkClasses}>
        <img src={list} alt="List" className="w-6 h-6" />
        <p>List</p>
      </NavLink>

      <NavLink to="order" className={linkClasses}>
        <img src={order} alt="Order" className="w-6 h-6" />
        <p>Order</p>
      </NavLink>
    </div>
  )
}

export default Sidebar
