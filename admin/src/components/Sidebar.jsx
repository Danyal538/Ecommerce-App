import React from 'react'
import { NavLink } from 'react-router-dom'
import add from "../assets/admin_assets/add_icon.png"
import list from "../assets/admin_assets/parcel_icon.svg"
import order from "../assets/admin_assets/order_icon.png"

const Sidebar = () => {
  const linkClasses = ({ isActive }) =>
    `flex items-center gap-3 px-3 py-2 rounded-md text-sm cursor-pointer border border-gray-300 transition
     ${isActive ? 'bg-gray-200 font-semibold' : 'hover:bg-gray-100'}`

  return (
    <div className=" flex flex-col gap-3 w-full h-full md:h-auto">
      <NavLink to="add" className={linkClasses}>
        <img src={add} alt="Add" className="w-5 h-5" />
        <p>Add Items</p>
      </NavLink>

      <NavLink to="list" className={linkClasses}>
        <img src={list} alt="List" className="w-5 h-5" />
        <p>List</p>
      </NavLink>

      <NavLink to="order" className={linkClasses}>
        <img src={order} alt="Order" className="w-5 h-5" />
        <p>Order</p>
      </NavLink>
    </div >
  )
}

export default Sidebar
