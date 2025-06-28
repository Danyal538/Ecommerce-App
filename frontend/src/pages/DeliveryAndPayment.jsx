import React, { useContext, useState } from 'react';
import AppContext from '../../contexts/AppContext';
import { useNavigate } from 'react-router-dom';
import { assets } from '../assets/frontend_assets/assets';
import { toast } from 'react-toastify';
import axios from 'axios';
import { use } from 'react';

const DeliveryAndPayment = () => {
  const { cartItems, totalPrice, selectedPayment, setSelectedPayment, user, Base_Url } = useContext(AppContext);
  const navigate = useNavigate();
  const shippingCost = 10;
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipcode, setZipCode] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");

  console.log(user._id);
  const paymentMethods = [
    { id: "stripe", name: "Stripe", logo: assets.stripe_logo },
    { id: "razorpay", name: "Razorpay", logo: assets.razorpay_logo },
    { id: "cod", name: "Cash on Delivery", text: true },
  ];

  const placeOrder = async () => {
    if (!selectedPayment) {
      toast.error("Please select a payment method");
      return;
    }
    const address = { firstName, lastName, street, city, state, country, zipcode }
    console.log("Sending data to backend:", {
      amount: totalPrice + shippingCost,
      items: cartItems,
      userId: user._id,
      address,
    });
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(`${Base_Url}/api/order/place-order`,
        {
          amount: totalPrice + shippingCost,
          items: cartItems,
          userId: user._id,
          address,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      if (response.data.success) {
        if (selectedPayment === "stripe") {
          window.location.replace(response.data.session);
        }
        else {
          toast.success("Order Placed");
          navigate("/my-orders")
        }
      }
      else {
        toast.error("Error in order placing");
      }
      console.log(response.data)
    } catch (error) {
      toast.error("Error in order placement")
    }
  }

  return (
    <div className="p-4 sm:p-6 md:p-10 max-w-6xl mx-auto bg-[#f9f9f9] min-h-screen">
      {/* Heading */}
      <div className="flex items-center gap-2 mt-6 sm:mt-10 mb-4 sm:mb-6">
        <p className="font-outfit font-normal text-[22px] sm:text-[25px] uppercase">
          <span className="text-[#707070]">Delivery</span> Information
        </p>
        <div className="w-[40px] sm:w-[50px] h-[2px] bg-[#252525] rounded-[10px]"></div>
      </div>

      {/* Main Layout */}
      <div className="flex flex-col lg:flex-row gap-6 sm:gap-10">
        {/* Left: Form */}
        <form className="flex flex-col gap-4 w-full lg:w-2/3">
          <div className="flex flex-col sm:flex-row gap-4">
            <input onChange={(e) => setFirstName(e.target.value)} type="text" placeholder="First name" className="flex-1 px-4 py-2 border border-gray-300 rounded-md" />
            <input onChange={(e) => setLastName(e.target.value)} type="text" placeholder="Last name" className="flex-1 px-4 py-2 border border-gray-300 rounded-md" />
          </div>

          <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email Address" className="w-full px-4 py-2 border border-gray-300 rounded-md" />
          <input onChange={(e) => setStreet(e.target.value)} type="text" placeholder="Street" className="w-full px-4 py-2 border border-gray-300 rounded-md" />

          <div className="flex flex-col sm:flex-row gap-4">
            <input onChange={(e) => setCity(e.target.value)} type="text" placeholder="City" className="flex-1 px-4 py-2 border border-gray-300 rounded-md" />
            <input onChange={(e) => setState(e.target.value)} type="text" placeholder="State" className="flex-1 px-4 py-2 border border-gray-300 rounded-md" />
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <input onChange={(e) => setZipCode(e.target.value)} type="number" placeholder="Zip code" className="flex-1 px-4 py-2 border border-gray-300 rounded-md" />
            <input onChange={(e) => setCountry(e.target.value)} type="text" placeholder="Country" className="flex-1 px-4 py-2 border border-gray-300 rounded-md" />
          </div>

          <input onChange={(e) => setPhone(e.target.value)} type="number" placeholder="Phone" className="w-full px-4 py-2 border border-gray-300 rounded-md" />
        </form>

        {/* Right: Totals + Payment */}
        <div className="w-full lg:w-1/3 p-5 sm:p-6 rounded-md shadow-md bg-white border space-y-6 h-fit">
          {/* Cart Totals */}
          <div>
            <div className="flex items-center mb-4">
              <p className="font-outfit font-semibold text-[20px] sm:text-[24px] uppercase">
                <span className="text-[#707070]">Cart</span> Totals
              </p>
              <div className="ml-2 h-[2px] bg-[#252525] rounded-[10px] w-[30px]"></div>
            </div>
            <p className="text-sm sm:text-md mb-1">Subtotal: <strong>${totalPrice}</strong></p>
            <p className="text-sm sm:text-md mb-1">Shipping: <strong>${shippingCost}</strong></p>
            <p className="text-sm sm:text-md font-semibold mt-2">Total: <strong>${totalPrice + shippingCost}</strong></p>
          </div>

          {/* Payment Section */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <p className="font-outfit font-normal text-[18px] sm:text-[20px] uppercase">
                <span className="text-[#707070]">Payment</span> Method
              </p>
              <div className="w-[30px] h-[2px] bg-[#252525] rounded-[10px]"></div>
            </div>

            <div className="space-y-3">
              {paymentMethods.map((method) => (
                <div
                  key={method.id}
                  onClick={() => setSelectedPayment(method.id)}
                  className={`flex items-center gap-3 p-3 border rounded-md cursor-pointer transition 
                    ${selectedPayment === method.id ? 'border-[#635BFF] bg-[#f5f5ff]' : 'border-[#D0D0D0] bg-white'}`}
                >
                  {/* Radio Circle */}
                  <div
                    className={`w-4 h-4 rounded-full border-2 flex items-center justify-center 
                      ${selectedPayment === method.id ? 'border-[#635BFF]' : 'border-gray-400'}`}
                  >
                    {selectedPayment === method.id && <div className="w-2 h-2 bg-[#635BFF] rounded-full" />}
                  </div>

                  {/* Logo or Text */}
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

              <button
                className='bg-black text-white text-sm sm:text-base py-2 px-4 w-full hover:bg-gray-700 transition-all duration-300'
                onClick={placeOrder}
              >
                PLACE ORDER
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryAndPayment;
