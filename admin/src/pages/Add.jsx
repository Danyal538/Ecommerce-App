import React from 'react'
import upload from "../assets/admin_assets/upload_area.png"

const Add = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">

      {/* ---------- Upload Images Section ---------- */}
      <div className="mb-4">
        <p className="text-xl font-semibold text-gray-700 mb-3">Upload Images</p>
        <div className="grid grid-cols-8 gap-2">
          <img src={upload} alt="upload" className="w-full h-28 object-contain rounded-md cursor-pointer hover:shadow" />
          <img src={upload} alt="upload" className="w-full h-28 object-contain rounded-md cursor-pointer hover:shadow" />
          <img src={upload} alt="upload" className="w-full h-28 object-contain rounded-md cursor-pointer hover:shadow" />
          <img src={upload} alt="upload" className="w-full h-28 object-contain rounded-md cursor-pointer hover:shadow" />
        </div>
      </div>


      {/* ---------- Product Name Input ---------- */}
      <div className="mb-6">
        <p className="text-lg font-medium text-gray-700 mb-2">Product Name</p>
        <input
          type="text"
          placeholder="Type here"
          className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-black"
        />
      </div>

      {/* ---------- Product Description Input ---------- */}
      <div className="mb-6">
        <p className="text-lg font-medium text-gray-700 mb-2">Product Description</p>
        <textarea
          rows="4"
          placeholder="Write content here"
          className="w-full border border-gray-300 rounded-md p-3 resize-none focus:outline-none focus:ring-2 focus:ring-black"
        />
      </div>

      {/* ---------- Category & Subcategory Section ---------- */}
      {/* ---------- Category, Subcategory & Price Section ---------- */}
      <div className="grid grid-cols-3 gap-6 mb-6">
        <div>
          <p className="text-lg font-medium text-gray-700 mb-2">Product Category</p>
          <select className="w-full border border-gray-300 p-3 rounded-md text-gray-700">
            <option value="" className='text-gray-700'>Select Category</option>
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
          </select>
        </div>
        <div>
          <p className="text-lg font-medium text-gray-700 mb-2 ">Product Subcategory</p>
          <select className="w-full border border-gray-300 p-3 rounded-md text-gray-700">
            <option value="" className='text-gray-700'>Select Subcategory</option>
            <option value="TopWear">TopWear</option>
            <option value="BottomWear">BottomWear</option>
            <option value="Shoes">Shoes</option>
          </select>
        </div>
        <div>
          <p className="text-lg font-medium text-gray-700 mb-2 ">Product Price (PKR)</p>
          <input
            type="number"
            placeholder="Enter price"
            className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>
      </div>


      {/* ---------- Product Sizes ---------- */}
      <div className="mb-6">
        <p className="text-lg font-medium text-gray-700 mb-3">Product Sizes</p>
        <div className="flex gap-4">
          {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
            <div
              key={size}
              className="px-4 py-2 border border-gray-400 text-gray-700 rounded-md cursor-pointer hover:bg-gray-100"
            >
              {size}
            </div>
          ))}
        </div>
      </div>

      {/* ---------- Bestseller Checkbox ---------- */}
      <div className="mb-6 flex items-center gap-2">
        <input type="checkbox" id="bestseller" className="w-4 h-4" />
        <label htmlFor="bestseller" className="text-gray-700">Add to Bestseller</label>
      </div>

      {/* ---------- Submit Button ---------- */}
      <button className="w-[200px] bg-black text-white py-3 rounded-md text-lg hover:bg-gray-800 transition">
        Add Product
      </button>
    </div>
  )
}

export default Add
