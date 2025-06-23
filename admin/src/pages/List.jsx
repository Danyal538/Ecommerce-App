import React from 'react'
import { products } from "../../../frontend/src/assets/frontend_assets/assets"

const List = () => {
    return (
        <div className="p-4">
            {/* ---------- Title ---------- */}
            <p className='text-gray-700 text-xl font-semibold mb-4'>All Products List</p>

            {/* ---------- Header Row ---------- */}
            <div className='grid grid-cols-5 gap-4 px-4 py-2 bg-gray-100 border border-gray-300 rounded'>
                <p className='font-bold text-gray-700'>Image</p>
                <p className='font-bold text-gray-700'>Name</p>
                <p className='font-bold text-gray-700'>Category</p>
                <p className='font-bold text-gray-700'>Price</p>
                <p className='font-bold text-gray-700'>Action</p>
            </div>

            {/* ---------- Product Rows ---------- */}
            <div className="mt-3 flex flex-col gap-2">
                {products.map((product, index) => (
                    <div
                        key={index}
                        className='grid grid-cols-5 gap-4 px-4 py-2 border border-gray-200 rounded items-center hover:bg-gray-50 transition'
                    >
                        <img src={product.image} alt={product.name} className="w-14 h-14 object-contain" />
                        <p className='text-gray-600'>{product.name}</p>
                        <p className='text-gray-600'>{product.category}</p>
                        <p className='text-gray-600'>${product.price}</p>
                        <p className="text-black hover:underline">X</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default List
