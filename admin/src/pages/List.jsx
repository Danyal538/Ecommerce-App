import React, { useEffect, useState, useContext } from 'react'
import axios from "axios"
import { toast } from "react-toastify"
import AppContext from '../context/AppContext'

const List = () => {
    const { Base_Url } = useContext(AppContext)
    const token = localStorage.getItem("token")
    const [allProducts, setAllProducts] = useState([])

    // Fetch all products
    const fetchProducts = async () => {
        try {
            const response = await axios.get(`${Base_Url}/api/product/list`, {
                headers: { "Authorization": `Bearer ${token}` }
            })
            if (response.data.success) {
                setAllProducts(response.data.data)
            } else {
                toast.error("Error in fetching products")
            }
        } catch (error) {
            toast.error("Error fetching products")
        }
    }

    // Delete a product by ID
    const deleteProduct = async (productId) => {
        try {
            const response = await axios.post(`${Base_Url}/api/product/remove`, { productId }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            if (response.data.success) {
                toast.success("Product deleted")
                fetchProducts() // Re-fetch after deletion
            } else {
                toast.error("Error in deleting product")
            }
        } catch (error) {
            toast.error("Error in deleting product")
        }
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <div className="p-4">
            <p className="text-gray-700 text-xl font-semibold mb-4">All Products List</p>

            {/* Desktop Table Header */}
            <div className="hidden sm:grid grid-cols-5 gap-4 px-4 py-2 bg-gray-100 border border-gray-300 rounded">
                <p className="font-bold text-gray-700">Image</p>
                <p className="font-bold text-gray-700">Name</p>
                <p className="font-bold text-gray-700">Category</p>
                <p className="font-bold text-gray-700">Price</p>
                <p className="font-bold text-gray-700">Action</p>
            </div>

            {/* Desktop + Mobile Product List */}
            <div className="mt-3 flex flex-col gap-3">
                {allProducts.map((product, index) => (
                    <div
                        key={index}
                        className="border border-gray-200 rounded px-4 py-3 transition hover:bg-gray-50"
                    >
                        {/* Mobile View: Card Layout */}
                        <div className="sm:hidden">
                            <div className="flex gap-3 items-center mb-2">
                                <img
                                    src={`${Base_Url}/images/${product.images[0]}`}
                                    alt={product.name}
                                    className="w-14 h-14 object-contain"
                                />
                                <p className="text-gray-700 font-medium">{product.name}</p>
                            </div>
                            <p className="text-gray-600 text-sm">Category: {product.category}</p>
                            <p className="text-gray-600 text-sm">Price: ${product.price}</p>
                            <button
                                onClick={() => deleteProduct(product._id)}
                                className="text-red-600 text-sm mt-2 underline"
                            >
                                Delete
                            </button>
                        </div>

                        {/* Desktop View: Grid Row */}
                        <div className="hidden sm:grid sm:grid-cols-5 items-center gap-4">
                            <img
                                src={`${Base_Url}/images/${product.images[0]}`}
                                alt={product.name}
                                className="w-14 h-14 object-contain"
                            />
                            <p className="text-gray-600">{product.name}</p>
                            <p className="text-gray-600">{product.category}</p>
                            <p className="text-gray-600">${product.price}</p>
                            <p
                                onClick={() => deleteProduct(product._id)}
                                className="text-red-600 hover:underline cursor-pointer"
                            >
                                Delete
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default List
