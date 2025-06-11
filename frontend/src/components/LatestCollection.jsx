import React, { useEffect, useState } from 'react'
import { products } from '../assets/frontend_assets/assets';
import ProductCard from './ProductCard';

const LatestCollection = () => {
    return (
        <div>
            <div className="w-fit mx-auto text-center mt-20">
                <p className="text-[35px] font-semibold leading-[100%] uppercase font-outfit flex items-center justify-center">
                    <span className="text-gray-500 mr-1">Latest</span>
                    <span className="text-black">Collection</span>
                    <div className="w-[44px] h-[2px] bg-[#484848] ml-2"></div>
                </p>
                <p className="w-[805px] h-[23px] mx-auto text-center text-[18px] leading-[100%] font-outfit font-normal mt-2 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, possimus?</p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 p-6'>
                {products.slice(0, 10).map((product) => (
                <ProductCard key={product._id} product={product} />
            ))}
            </div>
        </div>




    )
}

export default LatestCollection