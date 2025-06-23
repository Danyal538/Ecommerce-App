import React from 'react'
import { products } from '../assets/frontend_assets/assets'
import ProductCard from './ProductCard'

const BestSeller = () => {
    return (
        <div className='w-fit mx-auto text-center mt-20'>
            <div className='flex justify-center items-center'>
                <p className='text-[35px] font-semibold leading-[100%] uppercase font-outfit flex items-center justify-center '>
                    <span className="text-gray-500 mr-1">BEST</span>
                    <span className="text-black">SELLERS</span>
                    <div className="w-[44px] h-[2px] bg-[#484848] ml-2"></div>
                </p>
            </div>
            <div className='flex justify-center items-center'>
                <p className="w-[805px] h-[23px] mx-auto text-center text-[18px] leading-[100%] font-outfit font-normal mt-2 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, possimus?</p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 p-6 '>
                {products.filter(product => product.bestseller === true).slice(0, 5).map((product) => {
                    return <ProductCard key={product._id} product={product} />
                })}
            </div>
        </div>
    )
}

export default BestSeller