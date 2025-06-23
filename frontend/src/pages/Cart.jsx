import React, { useContext } from 'react';
import AppContext from '../../contexts/AppContext';
import CartProductCard from "../components/CartProductCard";
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
  const { cartItems, totalPrice } = useContext(AppContext);
  const shippingCost = cartItems.length > 0 ? 10 : 0;
  const navigate = useNavigate();

  return (
    <div className="flex flex-col px-6 py-10 min-h-screen">
      {/* Heading */}
      <div className="flex items-center mb-8">
        <p className="font-outfit font-semibold text-[30px] uppercase leading-[100%]">
          <span className="text-[#707070]">Your</span> Cart
        </p>
        <div className="ml-2 h-[2px] bg-[#252525] rounded-[10px] w-[30px]"></div>
      </div>

      {/* Cart Items + Totals */}
      <div className="flex flex-col lg:flex-row justify-between gap-10">
        {/* Cart Items */}
        <div className="flex-1">
          {cartItems.length > 0 ? (
            <CartProductCard />

          ) : (
            <p className="text-gray-500 mt-10">Your cart is empty.</p>
          )}
        </div>

        {/* Cart Totals */}
        <div className="w-full lg:w-[320px] flex-shrink-0 border p-6 rounded-md shadow-md bg-white self-start">
          <div className="flex items-center mb-4">
            <p className="font-outfit font-semibold text-[24px] uppercase">
              <span className="text-[#707070]">Cart</span> Totals
            </p>
            <div className="ml-2 h-[2px] bg-[#252525] rounded-[10px] w-[30px]"></div>
          </div>
          <p className="text-md mb-1">Subtotal: <strong>${totalPrice}</strong></p>
          <p className="text-md mb-1">Shipping: <strong>${shippingCost}</strong></p>
          <p className="text-md font-semibold mt-2">Total: <strong>${totalPrice + shippingCost}</strong></p>
          <button className='bg-black text-white p-2 mt-5 ml-8 hover:bg-gray-500 cursor-pointer' onClick={() => navigate('/payment')}>PROCEED TO CHECKOUT</button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
