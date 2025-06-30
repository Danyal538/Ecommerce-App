import React, { useContext } from 'react';
import AppContext from '../../contexts/AppContext';
import CartProductCard from "../components/CartProductCard";
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
  const { cartItems, totalPrice } = useContext(AppContext);
  const shippingCost = cartItems.length > 0 ? 10 : 0;
  const navigate = useNavigate();

  return (
    <div className="flex flex-col px-4 sm:px-6 md:px-10 py-6 sm:py-10 min-h-screen bg-[#f9f9f9]">
      <div className="flex items-center mb-6 sm:mb-8">
        <p className="font-outfit font-semibold text-[24px] sm:text-[30px] uppercase leading-tight">
          <span className="text-[#707070]">Your</span> Cart
        </p>
        <div className="ml-2 h-[2px] bg-[#252525] rounded-[10px] w-[30px]"></div>
      </div>

      <div className="flex flex-col lg:flex-row justify-between gap-6 md:gap-10">
        <div className="flex-1">
          {cartItems.length > 0 ? (
            <CartProductCard />
          ) : (
            <p className="text-gray-500 mt-6 sm:mt-10 text-center text-sm sm:text-base">Your cart is empty.</p>
          )}
        </div>

        <div className="w-full lg:w-[320px] flex-shrink-0 border p-4 sm:p-6 rounded-md shadow-md bg-white self-start">
          <div className="flex items-center mb-4">
            <p className="font-outfit font-semibold text-[20px] sm:text-[24px] uppercase">
              <span className="text-[#707070]">Cart</span> Totals
            </p>
            <div className="ml-2 h-[2px] bg-[#252525] rounded-[10px] w-[30px]"></div>
          </div>
          <p className="text-sm sm:text-md mb-1">Subtotal: <strong>${totalPrice}</strong></p>
          <p className="text-sm sm:text-md mb-1">Shipping: <strong>${shippingCost}</strong></p>
          <p className="text-sm sm:text-md font-semibold mt-2">Total: <strong>${totalPrice + shippingCost}</strong></p>

          <button
            className='bg-black text-white text-sm sm:text-base py-2 px-4 w-full mt-5 hover:bg-gray-700 transition-all duration-300'
            onClick={() => navigate('/payment')}
          >
            PROCEED TO CHECKOUT
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
