import React from 'react'
import Logo from "../assets/frontend_assets/logo.png"
import { NavLink } from 'react-router-dom'
const Footer = () => {
    return (
        <>
            <div className="flex flex-col md:flex-row px-10 py-16 bg-gray-100 text-gray-800 font-outfit gap-10">
                {/* 50%: Logo + Description */}
                <div className="w-full md:w-1/2">
                    <img src={Logo} alt="Logo" className="w-[166px] h-[47px]" />
                    <p className="mt-10 text-[18px] leading-[30px] text-[#595959]">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad, modi atque
                        ratione ipsum quas architecto distinctio veniam tempore, earum enim
                        tempora cumque sit necessitatibus autem? Est nisi, quia ea error officia
                        illum perferendis esse eius laudantium impedit dignissimos, neque harum
                        asperiores similique voluptatum facere amet! Facilis, optio totam. Sunt,
                        fuga.
                    </p>
                </div>

                {/* 25%: Company Links */}
                <div className="w-full md:w-1/4">
                    <p className="text-[22px] font-semibold leading-[30px] mb-4 text-[#5A5A5A]">Company</p>
                    <nav className="flex flex-col space-y-2 text-[18px] leading-[30px] text-[#595959]">
                        <NavLink to="/"> Home</NavLink>
                        <NavLink to="/about">About Us</NavLink>
                        <NavLink to="/delivery">Delivery</NavLink>
                        <NavLink to="/privacy">Privacy Policy</NavLink>
                    </nav>
                </div>

                {/* 25%: Contact Info */}
                <div className="w-full md:w-1/4">
                    <h4 className="text-[22px] font-semibold leading-[30px] mb-4 text-[#5A5A5A]">Get In Touch</h4>
                    <p className="text-[18px] leading-[30px] mb-2 text-[#595959]">+92-00980-12121</p>
                    <p className="text-[18px] leading-[30px] text-[#595959]">abcdef@example.com</p>
                </div>
            </div>
            <div className='mt-5'>
                <div className='container mx-auto'>
                    <div className='border-t border-[#BDBDBD] w-full'></div>
                    <p className='text-center mt-4 text-[#565656]'>Copyright 2024 © Forever.dev - All Right Reserved.</p>
                </div>
            </div>

        </>


    )
}

export default Footer