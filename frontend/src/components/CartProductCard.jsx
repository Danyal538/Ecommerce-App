import React, { useContext, useState } from 'react'
import AppContext from '../../contexts/AppContext'
import { useParams } from 'react-router-dom';
import bin from "../assets/frontend_assets/bin_icon.png"

const CartProductCard = () => {
  const { cartItems, removeFromCart, Base_Url } = useContext(AppContext);


  return (
    <div className='w-full'>
      {cartItems.map((item, index) => (
        <div key={index} className="flex items-center justify-between gap-6 p-4 border-1 border-[#D1D1D1]">

          <div className="flex items-start gap-4">
            <img src={`${Base_Url}/images/${item.images[0]}`} alt={item.name} className="w-[115px] h-[130px] object-cover rounded" />

            <div className="flex flex-col justify-between">
              <p className="text-[#494949] font-[22px]">{item.name}</p>
              <div className="flex gap-6 text-gray-600 text-sm mt-2">
                <p className='text-[#494949]'>${item.price}</p>
                <p className='text-[#1D1D1D]'>{item.size}</p>
              </div>
            </div>
          </div>

          <p className="text-sm text-gray-700"> {item.quantity}</p>

          <img
            src={bin}
            alt="Delete"
            className="w-[22px] h-[22px] cursor-pointer"
            onClick={() => removeFromCart(item, item.size)}
          />
        </div>
      ))}
    </div>

  )
}

export default CartProductCard