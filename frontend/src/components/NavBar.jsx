import React, { useState, useContext } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import AppContext from '../../contexts/AppContext'
import logo from "../assets/frontend_assets/logo.png"
import search_icon from "../assets/frontend_assets/search_icon.png"
import profile_icon from "../assets/frontend_assets/profile_icon.png"
import cart_icon from "../assets/frontend_assets/cart_icon.png"
import menu from "../assets/frontend_assets/menu_icon.png"

const NavBar = () => {
    const navigate = useNavigate();
    const { showSearchBar, setShowSearchBar, currState, cartCount } = useContext(AppContext);
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className='w-full bg-white shadow-md'>
            {/* Top Nav */}
            <div className='flex justify-between items-center px-6 py-4'>
                {/* Logo */}
                <Link to="/">
                    <img src={logo} alt="Logo" className='w-36 object-contain' />
                </Link>

                {/* Desktop Links */}
                <div className='hidden md:flex gap-8 items-center'>
                    <NavLink className={({ isActive }) => isActive ? "border-b-2 border-gray-700" : "text-gray-600 hover:text-black"} to='/'>Home</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "border-b-2 border-gray-700" : "text-gray-600 hover:text-black"} to='/collection'>Collection</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "border-b-2 border-gray-700" : "text-gray-600 hover:text-black"} to='/about'>About</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "border-b-2 border-gray-700" : "text-gray-600 hover:text-black"} to='/contact'>Contact</NavLink>
                </div>

                {/* Right Icons */}
                <div className='flex items-center gap-4'>
                    <img
                        src={search_icon}
                        alt="Search"
                        className='w-6 h-6 cursor-pointer'
                        onClick={() => navigate("/collection", { state: { showSearchBar: true } })}
                    />
                    <img
                        src={profile_icon}
                        alt="Profile"
                        className='w-5 h-6 cursor-pointer'
                        onClick={() => {
                            currState === "Login" ? navigate('/login') : navigate("/sign-up")
                        }}
                    />
                    <div className="relative cursor-pointer" onClick={() => navigate("/cart")}>
                        <img src={cart_icon} alt="Cart" className="w-6 h-6" />
                        {cartCount > 0 && (
                            <div className="absolute bottom-0 right-0 translate-x-1 translate-y-1 min-w-[16px] h-[16px] px-[2px] bg-black rounded-full border-2 border-white text-[10px] text-white flex items-center justify-center leading-none">
                                {cartCount}
                            </div>
                        )}
                    </div>

                    {/* Mobile Menu Icon */}
                    <img
                        src={menu}
                        alt="Menu"
                        className='w-6 h-6 md:hidden cursor-pointer'
                        onClick={() => setMenuOpen(!menuOpen)}
                    />
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {menuOpen && (
                <div className='flex flex-col items-center gap-4 pb-4 md:hidden'>
                    <NavLink onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? "border-b-2 border-gray-700" : "text-gray-600 hover:text-black"} to='/'>Home</NavLink>
                    <NavLink onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? "border-b-2 border-gray-700" : "text-gray-600 hover:text-black"} to='/collection'>Collection</NavLink>
                    <NavLink onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? "border-b-2 border-gray-700" : "text-gray-600 hover:text-black"} to='/about'>About</NavLink>
                    <NavLink onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? "border-b-2 border-gray-700" : "text-gray-600 hover:text-black"} to='/contact'>Contact</NavLink>
                </div>
            )}
        </div>
    )
}

export default NavBar;
