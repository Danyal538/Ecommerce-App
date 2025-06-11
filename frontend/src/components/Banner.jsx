import React from 'react'
import banner from "../assets/frontend_assets/hero_img.png"

const Banner = () => {
    return (
        <div className="flex items-center justify-between px-6 py-4 border border-gray-300 mr-20 ml-20">
            {/* Left Half - Text Content */}
            <div className="w-1/2 flex flex-col space-y-4">
                {/* Our BestSellers Line + Text */}
                <div className="flex items-center">
                    <div className="w-[36px] h-[2px] bg-[#484848] mr-2"></div>
                    <p className="font-medium text-[16px] leading-[100%] uppercase font-outfit">Our BestSellers</p>
                </div>

                {/* Latest Arrivals Heading */}
                <p className="font-normal text-[48px] leading-[110%] capitalize font-prata text-[#1e1e1e]">
                    Latest Arrivals
                </p>

                {/* Shop Now Line + Text */}
                <div className="flex items-center">
                    <p className="font-semibold text-[16px] leading-[100%] uppercase font-outfit text-[#414141]">
                        SHOP NOW
                    </p>
                    <div className="w-[36px] h-[2px] bg-[#484848] ml-2"></div>
                </div>
            </div>

            {/* Right Half - Image */}
            <div className="w-1/2 flex justify-center">
                <img src={banner} alt="Banner" className="w-[600px] h-[480px] object-cover" />
            </div>
        </div>


    )
}

export default Banner