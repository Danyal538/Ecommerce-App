import React from 'react'
import ProductCard from './ProductCard'
import { useContext } from 'react'
import AppProvider from '../../contexts/AppProvider'
import { useState } from 'react'
import axios from 'axios'
import AppContext from '../../contexts/AppContext'
import { useEffect } from 'react'

const BestSeller = () => {
    const [allProducts, setAllProducts] = useState([]);
    const { Base_Url } = useContext(AppContext);

    const getProduct = async () => {
        try {
            const token = localStorage.getItem("token")
            const response = await axios.get(`${Base_Url}/api/product/list`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            if (response.data.success) {
                setAllProducts(response.data.data);
                console.log(response.data)
            }
            else {
                console.log("Error");
            }
        } catch (error) {
            console.log("Error", error);

        }
    }

    useEffect(() => {
        getProduct();
    }, [])
    return (
        <div className="w-full px-4 md:px-8 mt-20">
            <div className="text-center">
                <p className="text-[30px] sm:text-[35px] font-semibold leading-[100%] uppercase font-outfit flex justify-center items-center">
                    <span className="text-gray-500 mr-1">BEST</span>
                    <span className="text-black">SELLERS</span>
                    <div className="w-[40px] h-[2px] bg-[#484848] ml-2"></div>
                </p>

                <p className="max-w-2xl mx-auto text-center text-[16px] sm:text-[18px] leading-snug font-outfit font-normal mt-2 text-gray-600">
                    Discover our Best Sellers – loved by customers, trusted for quality.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-8">
                {allProducts
                    .filter(product => product.bestSeller === true)
                    .slice(0, 5)
                    .map((product) => (
                        <ProductCard key={product._id} product={product} />
                    ))}
            </div>
        </div>
    )
}

export default BestSeller
