import React from 'react'
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import AppContext from '../../contexts/AppContext';

const ProductCard = ({ product }) => {
    const navigate = useNavigate();
    const { Base_Url } = useContext(AppContext);

    const handleClick = () => {
        navigate(`/product/${product._id}`);
    };

    return (
        <div
            onClick={handleClick}
            className="cursor-pointer border rounded-md shadow-sm p-2 sm:p-3 flex flex-col transition-transform duration-300 hover:scale-105 hover:shadow-lg bg-white max-w-[200px] mx-auto"
        >
            {/* Responsive Image with Slightly Taller Ratio */}
            <div className="w-full aspect-[5/4]">
                <img
                    src={`${Base_Url}/images/${product.images}`}
                    alt={product.name}
                    className="w-full h-full object-contain rounded-md"
                />
            </div>

            {/* Product Info */}
            <div className="mt-2">
                <h3 className="text-sm font-semibold line-clamp-2 text-gray-800">
                    {product.name}
                </h3>
                <p className="text-sm text-gray-700">${product.price}</p>
            </div>
        </div>
    );
};

export default ProductCard;
