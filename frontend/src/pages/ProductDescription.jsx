import React, { useState, useRef, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from "../components/ProductCard"
import { useContext } from 'react'
import AppContext from '../../contexts/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'

const ProductDescription = () => {
    const { id } = useParams();
    const hasAdded = useRef(false);
    const [selectedSize, setSelectedSize] = useState(null);
    const [product, setProduct] = useState(null);
    const [allProducts, setAllProducts] = useState([]);
    const [mainImage, setMainImage] = useState("");


    const { addToCart, Base_Url } = useContext(AppContext);

    const fetchProducts = async () => {
        try {
            const response = await axios.get(`${Base_Url}/api/product/getProduct/${id}`)
            if (response.data.success) {
                setProduct(response.data.data);
                setMainImage(response.data.data.images[0])
            }
            else { toast.error("Error in Product finding") }
        } catch (error) {
            toast.error("Error in Product finding")

        }
    }

    const fetchAllProducts = async () => {
        try {
            const response = await axios.get(`${Base_Url}/api/product/list`);
            if (response.data.data) {
                setAllProducts(response.data.data);
            }
            else {
                console.log("Error in fetching product list")
            }
        } catch (error) {
            console.log("Error in fetching product list")

        }
    }


    const relatedProducts = product
        ? allProducts.filter((p) =>
            p.category === product.category &&
            p.subCategory === product.subCategory &&
            p._id !== product._id
        )
        : [];
    const limitedRelatedProducts = relatedProducts.slice(0, 5);

    useEffect(() => {
        hasAdded.current = false;
    }, [selectedSize, product?._id]);

    useEffect(() => {
        fetchProducts();
        fetchAllProducts();
    }, [id])

    if (!product) {
        return <div className="p-10 text-center text-gray-500 text-lg">Loading product...</div>;
    }


    return (
        <>
            <div className="flex flex-col lg:flex-row gap-6 p-6">
                <div className="flex lg:flex-col gap-4">
                    {(product?.images?.length ? product.images : [product.image]).map((img, index) => (
                        <img
                            key={index}
                            src={`${Base_Url}/images/${img}`}
                            onClick={() => setMainImage(img)}

                            alt={`Thumbnail ${index + 1}`}
                            className={`w-20 h-20 object-cover rounded-md border cursor-pointer ${mainImage === img ? "ring-2 ring-orange-400" : ""
                                }`}
                        />
                    ))}

                </div>

                <div className="flex-1 flex justify-center items-center">
                    {product && <img
                        src={`${Base_Url}/images/${mainImage}`}
                        alt={product.name}
                        className="w-full max-w-md object-cover rounded-lg shadow-md"
                    />}
                </div>

                <div className="flex-1 space-y-4">
                    <p className="text-2xl font-semibold">{product.name}</p>
                    <p className="font-outfit font-medium text-[32px] leading-[100%] align-middle tracking-[0%] text-[#2A2A2A]">${product.price}</p>

                    <div className="flex items-center gap-4">
                        <p className="text-yellow-500">⭐⭐⭐⭐</p>
                        <p className="text-gray-600">(70)</p>
                    </div>

                    <p className="text-[#555555]">{product.description}</p>

                    <div>
                        <p className="font-semibold mb-2">Select Size:</p>
                        <div className="flex gap-x-2">
                            {product.sizes?.map((size, index) => (
                                <p
                                    key={index}
                                    className={`border px-3 py-1 rounded cursor-pointer hover:bg-gray-100 ${selectedSize === size ? "border-orange-500 bg-orange-100" : "border-gray-600"
                                        }`}
                                    onClick={() => setSelectedSize(size)}
                                >
                                    {size}
                                </p>
                            ))}
                        </div>
                    </div>


                    <button
                        className="bg-black text-white p-2 cursor-pointer hover:bg-gray-500"
                        onClick={() => {
                            if (!selectedSize) {
                                alert("Please select a size first!");
                                return;
                            }

                            if (!hasAdded.current) {
                                hasAdded.current = true;
                                addToCart(product, selectedSize);
                                console.log("🛒 Add To Cart Clicked for", product.name);
                            }
                        }}
                    >
                        Add To Cart
                    </button>


                    <div className="w-[500px] h-[2px] bg-[#ADADAD] mt-10 rounded-[10px] mb-10"></div>
                    <div>
                        <p className='text-[#555555]'>100% Original product.</p>
                        <p className='text-[#555555]'>Cash on delivery is available on this product.</p>
                        <p className='text-[#555555]'>Easy return and exchange policy within 7 days.</p>
                    </div>
                </div>
            </div >
            <div className='flex gap-2 border-1 border-[#D0D0D0] w-[250px] p-2 ml-10 mt-10 sm:mb-5'>
                <p className='font-semibold'>Description</p>
                <p className='text-[#898989]'>Reviews: ({product.numReviews})</p>
            </div>
            <div className='w-full max-w-[1200px] mx-auto px-4 border border-[#D0D0D0] text-[#898989] font-outfit space-y-4 p-2'>
                <p>An e-commerce website is an online platform that facilitates the buying and selling of products or services over the internet. It serves as a virtual marketplace where businesses and individuals can showcase their products, interact with customers, and conduct transactions without the need for a physical presence. E-commerce websites have gained immense popularity due to their convenience, accessibility, and the global reach they offer.</p>
                <p className='mt-2'>E-commerce websites typically display products or services along with detailed descriptions, images, prices, and any available variations (e.g., sizes, colors). Each product usually has its own dedicated page with relevant information.</p>
            </div>
            <div className="flex items-center justify-center gap-4 mt-16 mb-8 sm:ml-5">
                <p className="text-[35px] font-outfit font-bold uppercase leading-[100%]">
                    <span className="text-gray-400 font-bold">Related</span> Products
                </p>
                <div className="w-[50px] h-[2px] bg-[#252525] rounded-[10px] sm:hidden"></div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 p-6 mb-20'>
                {limitedRelatedProducts.map((product) => <ProductCard product={product} key={product._id} />)}

            </div>

        </>
    )
}

export default ProductDescription