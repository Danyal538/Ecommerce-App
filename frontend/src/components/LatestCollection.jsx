import React from 'react'
import ProductCard from './ProductCard';
import { useState } from 'react';
import { useContext } from 'react';
import AppContext from '../../contexts/AppContext';
import axios from "axios"
import { toast } from "react-toastify"
import { useEffect } from 'react';

const LatestCollection = () => {
    const [allProducts, setAllProducts] = useState([]);
    const { Base_Url } = useContext(AppContext);
    const getProducts = async () => {
        const token = localStorage.getItem("token")
        try {
            const response = await axios.get(`${Base_Url}/api/product/list`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            if (response.data.success) {
                setAllProducts(response.data.data);
                toast.success("Product Fetched");
            }
            else {
                toast.error("Error in fetching product");
            }
        } catch (error) {
            toast.error("Error in products fetching");
        }
    }

    useEffect(() => {
        getProducts();
    }, [])
    return (
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center mb-10">
                <p className="text-3xl sm:text-4xl font-semibold leading-tight uppercase font-outfit flex items-center justify-center flex-wrap">
                    <span className="text-gray-500 mr-2">Latest</span>
                    <span className="text-black">Collection</span>
                    <div className="w-10 h-[2px] bg-[#484848] ml-2 mt-1"></div>
                </p>

                <p className="max-w-xl mx-auto text-base sm:text-lg font-outfit font-normal mt-3 text-gray-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, possimus?
                </p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6'>
                {allProducts.slice(0, 10).map((product) => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </div>
        </div>
    )
}

export default LatestCollection
