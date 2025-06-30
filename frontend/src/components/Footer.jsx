import React from 'react';
import Logo from "../assets/frontend_assets/logo.png";
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-100 text-gray-800 font-outfit">
            <div className="container mx-auto px-6 md:px-10 py-12 flex flex-col md:flex-row gap-10">

                <div className="md:w-1/2">
                    <img src={Logo} alt="Logo" className="w-[140px] md:w-[166px] h-auto" />
                    <p className="mt-6 text-[16px] leading-[28px] text-[#595959]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est nisi, quia ea error officia
                        illum perferendis esse eius laudantium impedit dignissimos, neque harum similique.
                    </p>
                </div>


                <div className="md:w-1/4">
                    <p className="text-[20px] font-semibold mb-4 text-[#5A5A5A]">Company</p>
                    <nav className="flex flex-col gap-2 text-[16px] text-[#595959]">
                        <NavLink to="/" className="hover:text-black transition">Home</NavLink>
                        <NavLink to="/about" className="hover:text-black transition">About Us</NavLink>
                        <NavLink to="/delivery" className="hover:text-black transition">Delivery</NavLink>
                        <NavLink to="/privacy" className="hover:text-black transition">Privacy Policy</NavLink>
                    </nav>
                </div>

                <div className="md:w-1/4">
                    <p className="text-[20px] font-semibold mb-4 text-[#5A5A5A]">Get In Touch</p>
                    <p className="text-[16px] text-[#595959] mb-1">+92-00980-12121</p>
                    <p className="text-[16px] text-[#595959]">abcdef@example.com</p>
                </div>
            </div>

            <div className="border-t border-[#BDBDBD] mt-4 py-4">
                <p className="text-center text-[14px] text-[#565656]">
                    © 2024 Forever.dev — All Rights Reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
