import React from 'react'
import banner from "../assets/frontend_assets/hero_img.png"

const Banner = () => {
    return (
        <div className=" lg:w-[1150px] flex flex-col-reverse md:flex-row items-center justify-between px-4 md:px-12 py-8 border mt-3 mx-4 md:mx-20">
            {/* Left Half - Text Content */}
            <div className="w-full md:w-1/2 flex flex-col space-y-5 text-center md:text-left mt-6 md:mt-0">
                {/* Our BestSellers Line + Text */}
                <div className="flex items-center justify-center md:justify-start">
                    <div className="w-8 h-[2px] bg-[#484848] mr-2"></div>
                    <p className="font-medium text-sm uppercase font-outfit text-[#484848]">Our BestSellers</p>
                </div>

                {/* Latest Arrivals Heading */}
                <p className="font-prata text-3xl md:text-5xl leading-tight capitalize text-[#1e1e1e]">
                    Latest Arrivals
                </p>

                {/* Shop Now Line + Text */}
                <div className="flex items-center justify-center md:justify-start">
                    <p className="font-semibold text-sm md:text-base uppercase font-outfit text-[#414141]">
                        Shop Now
                    </p>
                    <div className="w-8 h-[2px] bg-[#484848] ml-2"></div>
                </div>
            </div>

            {/* Right Half - Image */}
            <div className="w-full md:w-1/2 flex justify-center">
                <img
                    src={banner}
                    alt="Banner"
                    className="w-full max-w-[500px] h-auto object-contain"
                />
            </div>
        </div>
    )
}

export default Banner
