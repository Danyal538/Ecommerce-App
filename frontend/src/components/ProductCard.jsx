import React from 'react'
import ProductDescription from '../pages/ProductDescription'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({ product }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/product/${product._id}`);
    };
    return (
        <div onClick={handleClick} className='border rounded-lg shadow-md p-4 h-[350px] w-full flex flex-col justify-between overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-lg'>
            <img src={product.image} alt="" className='w-full h-[250px] object-center object-cover rounded-md' />
            <div>
                <h3 className='text-lg font-semibold mt-2 line-clamp-2'>{product.name}</h3>
                <p className='text-[16px] text-gray-700'>${product.price}</p>
            </div>
        </div>

    )
}


export default ProductCard