import React from 'react'
import axios from "axios"
import { useState } from 'react'
import { toast } from "react-toastify";
import { useEffect } from 'react';
import { useContext } from 'react';
import AppContext from '../context/AppContext';

const Base_Url = useContext(AppContext);
const List = () => {
    const token = localStorage.getItem("token");
    const [allProducts, setAllProducts] = useState([]);
    const fetchProducts = async () => {
        try {
            const response = await axios.get(`${Base_Url}/api/product/list`, { headers: { "Authorization": `Bearer ${token}` } });
            if (response.data.success) {
                setAllProducts(response.data.data);
                toast.success("Products fetched")
            }
            else {
                toast.error("Error in fetching products");
            }
        } catch (error) {
            toast.error("Error");
            console.log(error)
        }

    }

    const deleteProduct = async (productId) => {
        try {
            const response = await axios.post(`${Base_Url}/api/product/remove`, { productId }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            if (response.data.success) {
                toast.success("Product deleted")
                fetchProducts();
            }
            else {
                toast.error("Error in deleting product")
                console.log(response.data);

            }
        } catch (error) {
            toast.error("Error in deleting product")
            console.log(error);
        }
    }
    useEffect(() => {
        fetchProducts();
    }, [])
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
                {allProducts.map((product, index) => (
                    <div
                        key={index}
                        className='grid grid-cols-5 gap-4 px-4 py-2 border border-gray-200 rounded items-center hover:bg-gray-50 transition'
                    >
                        <img src={`${Base_Url}/images/${product.images[0]}`} alt={product.name} className="w-14 h-14 object-contain" />
                        <p className='text-gray-600'>{product.name}</p>
                        <p className='text-gray-600'>{product.category}</p>
                        <p className='text-gray-600'>${product.price}</p>
                        <p className="text-black hover:underline" onClick={() => deleteProduct(product._id)}>X</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default List
