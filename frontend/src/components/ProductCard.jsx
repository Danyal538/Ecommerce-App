import React from 'react'

const ProductCard = ({ product }) => {
    return (
        <div className='border rounded-lg shadow-md p-4 transition duration-300 transform hover:scale-105 hover:shadow-lg'>
            <img src={product.image} alt="" className='w-full object-cover h-48 rounded-md' />
            <h3 className='text-lg font-semibold mt-2'>{product.name}</h3>
            <p className='text-[16px] text-gray-700'>${product.price}</p>
        </div>
    )
}

export default ProductCard