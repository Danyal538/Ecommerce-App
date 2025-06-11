import React from 'react'
import logo from "../assets/frontend_assets/logo.png"
import search_icon from "../assets/frontend_assets/search_icon.png"
import profile_icon from "../assets/frontend_assets/profile_icon.png"
import cart_icon from "../assets/frontend_assets/cart_icon.png"
import { Link, NavLink } from 'react-router-dom'


const NavBar = () => {
    return (
        <div className='flex justify-between items-center px-8 py-4'>
            <div className='flex justify-start items-center ml-4'>
                <Link to="/">
                    <img src={logo} alt="" className='w-[166px] top-[29px] h-[47px] left-[166px]' />
                </Link>
            </div>
            <div className='flex justify-between items-center'>
                <div className='w-[413px] h-[36px] top-[28px] left-[754px] rounded-[10px] flex items-center space-x-4'>
                    <NavLink className={({ isActive }) => isActive ? "border-b-2 border-gray-400" : "text-gray-600 hover:text-black"} to='/'>Home</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "border-b-2 border-gray-400" : "text-gray-600 hover:text-black"} to='/collection'>Collection</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "border-b-2 border-gray-400" : "text-gray-600 hover:text-black"} to='/about'>About</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "border-b-2 border-gray-400" : "text-gray-600 hover:text-black"} to='/contact'>Contact</NavLink>
                </div>
            </div>
            <div className='flex justify-between items-center space-x-4'>
                <img src={search_icon} alt="" className='w-[24px] h-[24px]' />
                <img src={profile_icon} alt="" className='w-[19.2px] h-[24px]' />
                <img src={cart_icon} alt="" className='w-[22px] h-[24px]' />
            </div>
        </div>
    )
}

export default NavBar