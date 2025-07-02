import React from 'react'
import upload from "../assets/admin_assets/upload_area.png"
import axios from "axios"
import { useState } from 'react'
import { toast } from "react-toastify"
import { useContext } from 'react'
import AppContext from '../context/AppContext'


const Add = () => {

  const { Base_Url } = useContext(AppContext);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState();
  const [subCategory, setSubCategory] = useState();
  const [price, setPrice] = useState("");
  const [bestSeller, setBestSeller] = useState(false);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [images, setImages] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);

  const addProduct = async () => {
    const token = localStorage.getItem("token");

    const formData = new FormData();

    formData.append("name", name);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("subCategory", subCategory);
    formData.append("price", price);
    formData.append("bestSeller", bestSeller);
    selectedSizes.forEach((size) => formData.append("sizes[]", size))

    images.forEach((image) => {
      formData.append("image", image)
    })

    try {
      if (!name || !description || !category || !subCategory || !price || selectedSizes.length === 0 || images.length === 0) {
        toast.error("All fields are required");
        return;
      }
      const response = await axios.post(`${Base_Url}/api/product/add`, formData, {
        headers: { "Content-Type": "multipart/form-data", "Authorization": `Bearer ${token}` },

      })
      if (response.data.success) {
        toast.success("Product Added");
      }
      else {
        toast.error("Error in adding product")
      }
    } catch (error) {
      toast.error("Error in Product adding")
    }

  }

  const toggleSize = (size) => {
    if (selectedSizes.includes(size)) {
      setSelectedSizes(prev => prev.filter(s => s !== size));
    }
    else {
      setSelectedSizes(prev => [...prev, size])
    }
  }
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">

      <div className="mb-4">
        <p className="text-xl font-semibold text-gray-700 mb-3">Upload Images</p>
        <div className="grid grid-cols-4 gap-4 items-center">
          {[0, 1, 2, 3].map((index) => (
            <label key={index} htmlFor={`imageUpload-${index}`} className="cursor-pointer relative group">
              <img
                src={imagePreviews[index] || upload}
                alt={`upload-preview-${index}`}
                className="w-full h-28 object-contain rounded-md hover:shadow"
              />

              <input
                type="file"
                id={`imageUpload-${index}`}
                accept="image/*"
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (!file) return;

                  const updatedImages = [...images];
                  updatedImages[index] = file;
                  setImages(updatedImages);

                  const updatedPreviews = [...imagePreviews];
                  updatedPreviews[index] = URL.createObjectURL(file);
                  setImagePreviews(updatedPreviews);
                }}
              />
            </label>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <p className="text-lg font-medium text-gray-700 mb-2">Product Name</p>
        <input
          type="text"
          placeholder="Type here"
          className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-black"
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="mb-6">
        <p className="text-lg font-medium text-gray-700 mb-2">Product Description</p>
        <textarea
          rows="4"
          placeholder="Write content here"
          className="w-full border border-gray-300 rounded-md p-3 resize-none focus:outline-none focus:ring-2 focus:ring-black"
          onChange={(e) => setDescription(e.target.value)}

        />
      </div>

      <div className="grid grid-cols-3 gap-6 mb-6">
        <div>
          <p className="text-lg font-medium text-gray-700 mb-2">Product Category</p>
          <select className="w-full border border-gray-300 p-3 rounded-md text-gray-700" onChange={(e) => setCategory(e.target.value)}>
            <option value="" className='text-gray-700'>Select Category</option>
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
          </select>
        </div>
        <div>
          <p className="text-lg font-medium text-gray-700 mb-2 ">Product Subcategory</p>
          <select className="w-full border border-gray-300 p-3 rounded-md text-gray-700" onChange={(e) => setSubCategory(e.target.value)}>
            <option value="" className='text-gray-700'>Select Subcategory</option>
            <option value="TopWear">TopWear</option>
            <option value="BottomWear">BottomWear</option>
            <option value="WinterWear">WinterWear</option>
          </select>
        </div>
        <div>
          <p className="text-lg font-medium text-gray-700 mb-2 ">Product Price (PKR)</p>
          <input
            type="number"
            placeholder="Enter price"
            className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
      </div>


      <div className="mb-6">
        <p className="text-lg font-medium text-gray-700 mb-3">Product Sizes</p>
        <div className="flex gap-4 flex-wrap">
          {['S', 'M', 'L', 'XL', 'XXL'].map((size) => {
            const isSelected = selectedSizes.includes(size);
            return (
              <div
                key={size}
                className={`px-4 py-2 border rounded-md cursor-pointer transition ${isSelected
                  ? "bg-black text-white border-black"
                  : "border-gray-400 text-gray-700 hover:bg-gray-100"
                  }`}
                onClick={() => toggleSize(size)}
              >
                {size}
              </div>
            );
          })}
        </div>
      </div>

      <div className="mb-6 flex items-center gap-2">
        <input type="checkbox" id="bestseller" className="w-4 h-4" onChange={(e) => setBestSeller(e.target.checked)} />
        <label htmlFor="bestseller" className="text-gray-700">Add to Bestseller</label>
      </div>

      <button className="w-[200px] bg-black text-white py-3 rounded-md text-lg hover:bg-gray-800 transition" onClick={addProduct}>
        Add Product
      </button>
    </div>
  )
}

export default Add
