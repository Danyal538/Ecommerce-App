import React, { useState, useContext, useEffect, useRef } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import AppContext from '../../contexts/AppContext'
import logo from "../assets/frontend_assets/logo.png"
import search_icon from "../assets/frontend_assets/search_icon.png"
import profile_icon from "../assets/frontend_assets/profile_icon.png"
import cart_icon from "../assets/frontend_assets/cart_icon.png"
import menu from "../assets/frontend_assets/menu_icon.png"
import axios from 'axios'
import { toast } from 'react-toastify'

const NavBar = () => {
    const navigate = useNavigate();
    const { isLoggedIn, setIsLoggedIn, cartCount, Base_Url } = useContext(AppContext);
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const adminUrl = "https://ecommerce-app-admin-panel.vercel.app"
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutSide = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutSide);
        return () => {
            document.removeEventListener("mousedown", handleClickOutSide);
        };
    }, [])
    const handleLogout = async () => {
        try {
            const response = await axios.post(`${Base_Url}/api/user/logout`);
            if (response.data.success) toast.success("Logged Out Successfully");
            else {
                toast.error("Error")
            }
        } catch (error) {
            toast.error("Error in Logging out");
        }
    }

    return (
        <div className='w-full bg-white shadow-md'>
            <div className='flex justify-between items-center px-6 py-4'>
                <Link to="/">
                    <img src={logo} alt="Logo" className='w-36 object-contain' />
                </Link>

                <div className='hidden md:flex gap-8 items-center'>
                    <NavLink className={({ isActive }) => isActive ? "border-b-2 border-gray-700" : "text-gray-600 hover:text-black"} to='/'>Home</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "border-b-2 border-gray-700" : "text-gray-600 hover:text-black"} to='/collection'>Collection</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "border-b-2 border-gray-700" : "text-gray-600 hover:text-black"} to='/about'>About</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "border-b-2 border-gray-700" : "text-gray-600 hover:text-black"} to='/contact'>Contact</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "border-b-2 border-gray-700 hidden sm:inline" : "text-gray-600 hover:text-black hidden sm:inline"} to={adminUrl}>Admin Panel</NavLink>
                </div>

                <div className='flex items-center gap-4'>
                    <img
                        src={search_icon}
                        alt="Search"
                        className='w-6 h-6 cursor-pointer'
                        onClick={() => navigate("/collection", { state: { showSearchBar: true } })}
                    />
                    <div className="relative" ref={dropdownRef}>
                        <img
                            src={profile_icon}
                            alt="Profile"
                            className="w-5 h-6 cursor-pointer"
                            onClick={() => {
                                if (!isLoggedIn) navigate("/sign-up");
                                else setDropdownOpen(prev => !prev);
                            }}
                        />
                        {isLoggedIn && dropdownOpen && (
                            <div className="absolute right-0 mt-2 w-32 bg-white border rounded shadow-md z-10">
                                <button onClick={() => { navigate("/my-orders"); setDropdownOpen(false); }} className="block w-full px-4 py-2 text-left hover:bg-gray-100">My Orders</button>
                                <button onClick={() => { setIsLoggedIn(false); setDropdownOpen(false); navigate("/"); handleLogout() }} className="block w-full px-4 py-2 text-left hover:bg-gray-100">Logout</button>
                            </div>
                        )}
                    </div>

                    <div className="relative cursor-pointer" onClick={() => navigate("/cart")}>
                        <img src={cart_icon} alt="Cart" className="w-6 h-6" />
                        {cartCount > 0 && (
                            <div className="absolute bottom-0 right-0 translate-x-1 translate-y-1 min-w-[16px] h-[16px] px-[2px] bg-black rounded-full border-2 border-white text-[10px] text-white flex items-center justify-center leading-none">
                                {cartCount}
                            </div>
                        )}
                    </div>

                    <img
                        src={menu}
                        alt="Menu"
                        className='w-6 h-6 md:hidden cursor-pointer'
                        onClick={() => setMenuOpen(!menuOpen)}
                    />
                </div>
            </div>

            {
                menuOpen && (
                    <div className='flex flex-col items-center gap-4 pb-4 md:hidden'>
                        <NavLink onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? "border-b-2 border-gray-700" : "text-gray-600 hover:text-black"} to='/'>Home</NavLink>
                        <NavLink onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? "border-b-2 border-gray-700" : "text-gray-600 hover:text-black"} to='/collection'>Collection</NavLink>
                        <NavLink onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? "border-b-2 border-gray-700" : "text-gray-600 hover:text-black"} to='/about'>About</NavLink>
                        <NavLink onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? "border-b-2 border-gray-700" : "text-gray-600 hover:text-black"} to='/contact'>Contact</NavLink>
                        <NavLink onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? "border-b-2 border-gray-700" : "text-gray-600 hover:text-black"} to={adminUrl}>Admin Panel</NavLink>
                    </div>
                )
            }
        </div >
    )
}

export default NavBar;
