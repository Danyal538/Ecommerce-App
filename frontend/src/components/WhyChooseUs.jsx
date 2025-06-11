import React from 'react'
import exhange from "../assets/frontend_assets/exchange_icon.png"
import support from "../assets/frontend_assets/support_img.png"
import quality from "../assets/frontend_assets/quality_icon.png"
const WhyChooseUs = () => {
    return (
        <div className='flex justify-around items-center mt-20 gap-x-10 container mx-auto'>
            <div className='flex flex-col items-center text-center space-y-2 max-w-[300px]'>
                <img src={exhange} alt="" className='w-[52px] h-[52px]' />
                <p className='font-outfit font-semibold text-[18px]'>Easy Exchange Policy</p>
                <p className='font-outfit font-normal text-[18px] text-gray-600'>We offer hassel free exchage policy</p>
            </div>
            <div className='flex flex-col items-center text-center space-y-2 max-w-[300px]'>
                <img src={quality} alt="" className='w-[52px] h-[52px]' />
                <p className='font-outfit font-semibold text-[18px]'>7 Days Return Policy</p>
                <p className='font-outfit font-normal text-[18px] text-gray-600'>We provide 7 days free return policy</p>
            </div>
            <div className='flex flex-col items-center text-center space-y-2 max-w-[300px]'>
                <img src={support} alt="" className='w-[52px] h-[52px]' />
                <p className='font-outfit font-semibold text-[18px]'>Best Customer Support</p>
                <p className='font-outfit font-normal text-[18px] text-gray-600'>We provide 24/7 customer support</p>
            </div>
        </div>
    )
}

export default WhyChooseUs