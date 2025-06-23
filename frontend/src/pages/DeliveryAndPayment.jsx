import React, { useContext, useState } from 'react';
import AppContext from '../../contexts/AppContext';
import { useNavigate } from 'react-router-dom';
import { assets } from '../assets/frontend_assets/assets';

const DeliveryAndPayment = () => {
  const { cartItems, totalPrice } = useContext(AppContext);
  const navigate = useNavigate();
  const shippingCost = 10;
  const { selectedPayment, setSelectedPayment } = useContext(AppContext);

  const paymentMethods = [
    { id: "stripe", name: "Stripe", logo: assets.stripe_logo },
    { id: "razorpay", name: "Razorpay", logo: assets.razorpay_logo },
    { id: "cod", name: "Cash on Delivery", text: true },
  ];

  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* Heading */}
      <div className="flex items-center gap-2 mt-10 mb-6">
        <p className="font-outfit font-normal text-[25px] uppercase leading-[100%] tracking-[0%] align-middle">
          <span className="text-[#707070]">Delivery</span> Information
        </p>
        <div className="w-[50px] h-[2px] bg-[#252525] rounded-[10px]"></div>
      </div>

      {/* Layout Split: Left Form | Right Cart Summary */}
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left: Delivery Form */}
        <form className="flex flex-col gap-4 w-full lg:w-2/3">
          <div className="flex gap-4">
            <input type="text" placeholder="First name" className="flex-1 px-4 py-2 border border-gray-300 rounded-md" />
            <input type="text" placeholder="Last name" className="flex-1 px-4 py-2 border border-gray-300 rounded-md" />
          </div>

          <input type="email" placeholder="Email Address" className="w-full px-4 py-2 border border-gray-300 rounded-md" />
          <input type="text" placeholder="Street" className="w-full px-4 py-2 border border-gray-300 rounded-md" />

          <div className="flex gap-4">
            <input type="text" placeholder="City" className="flex-1 px-4 py-2 border border-gray-300 rounded-md" />
            <input type="text" placeholder="State" className="flex-1 px-4 py-2 border border-gray-300 rounded-md" />
          </div>

          <div className="flex gap-4">
            <input type="number" placeholder="Zip code" className="flex-1 px-4 py-2 border border-gray-300 rounded-md" />
            <input type="text" placeholder="Country" className="flex-1 px-4 py-2 border border-gray-300 rounded-md" />
          </div>

          <input type="number" placeholder="Phone" className="w-full px-4 py-2 border border-gray-300 rounded-md" />
        </form>

        {/* Right: Cart Totals + Payment Method */}
        <div className="w-full lg:w-1/3 flex-shrink-0 p-6 rounded-md shadow-md bg-white h-fit border space-y-6">
          {/* Cart Totals */}
          <div>
            <div className="flex items-center mb-4">
              <p className="font-outfit font-semibold text-[24px] uppercase">
                <span className="text-[#707070]">Cart</span> Totals
              </p>
              <div className="ml-2 h-[2px] bg-[#252525] rounded-[10px] w-[30px]"></div>
            </div>
            <p className="text-md mb-1">Subtotal: <strong>${totalPrice}</strong></p>
            <p className="text-md mb-1">Shipping: <strong>${shippingCost}</strong></p>
            <p className="text-md font-semibold mt-2">Total: <strong>${totalPrice + shippingCost}</strong></p>
          </div>

          {/* Payment Method Heading */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <p className="font-outfit font-normal text-[20px] uppercase">
                <span className="text-[#707070]">Payment</span> Method
              </p>
              <div className="w-[30px] h-[2px] bg-[#252525] rounded-[10px]"></div>
            </div>

            {/* Payment Options */}
            <div className="space-y-3">
              {paymentMethods.map((method) => (
                <div
                  key={method.id}
                  onClick={() => setSelectedPayment(method.id)}
                  className={`flex items-center gap-3 p-3 border rounded-md cursor-pointer transition 
                  ${selectedPayment === method.id ? 'border-[#635BFF] bg-[#f5f5ff]' : 'border-[#D0D0D0] bg-white'}`}
                >
                  {/* Circle */}
                  <div
                    className={`w-4 h-4 rounded-full border-2 flex items-center justify-center 
                    ${selectedPayment === method.id ? 'border-[#635BFF]' : 'border-gray-400'}`}
                  >
                    {selectedPayment === method.id && <div className="w-2 h-2 bg-[#635BFF] rounded-full" />}
                  </div>

                  {/* Logo/Text */}
                  {method.text ? (
                    <p className="text-[#A6A6A6] text-sm">{method.name}</p>
                  ) : (
                    <img
                      src={method.logo}
                      alt={method.name}
                      className={`h-[25px] ${method.id === 'stripe' ? 'w-[70px]' : 'w-[100px]'}`}
                    />
                  )}
                </div>
              ))}
              <button className='bg-black text-white p-2 flex justify-center items-center hover:bg-gray-400 cursor-pointer' onClick={() => navigate('/my-orders')}>PLACE ORDER</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryAndPayment;
