import React, { useContext } from 'react'
import AppContext from '../../contexts/AppContext'

const MyOrder = () => {
    const { cartItems, selectedPayment, setSelectedPayment } = useContext(AppContext);
    return (
        <div>
            <div className="flex items-center gap-2 mt-10 mb-6 ml-20">
                <p className="font-outfit font-normal text-[25px] uppercase leading-[100%] tracking-[0%] align-middle">
                    <span className="text-[#707070]">MY</span> ORDERS
                </p>
                <div className="w-[50px] h-[2px] bg-[#252525] rounded-[10px]"></div>
            </div>
            <div>
                {cartItems.map((item, index) => {
                    return (
                        <div className="flex items-center justify-between gap-4 border border-[#D1D1D1] ml-24 mr-3 mb-2 p-4">

                            {/* Left – Image & Product Info */}
                            <div className="flex gap-4 items-center">
                                <img src={item.image} alt={item.name} className="w-[115px] h-[130px] object-cover rounded" />
                                <div className="flex flex-col gap-2">
                                    <p className="text-[#494949] font-[22px]">{item.name}</p>
                                    <div className="flex gap-6 text-gray-600 text-sm">
                                        <p className='text-[#494949]'>${item.price}</p>
                                        <p className='text-[#1D1D1D]'>Quantity: {item.quantity}</p>
                                        <p className='text-[#1D1D1D]'>Size: {item.size}</p>
                                    </div>
                                    <p className='text-black'>Date: <span className='text-gray-500'>{new Date().toDateString()}</span></p>
                                    <p className='text-black'>Payment: <span className='text-gray-500'>{selectedPayment}</span></p>
                                </div>
                            </div>

                            {/* Center – Status */}
                            <div className="flex items-center justify-center min-w-[150px]">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                    <p className="text-green-700 font-semibold text-sm">Order Placed</p>
                                </div>
                            </div>

                            {/* Right – Button */}
                            <div className="flex items-center">
                                <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition">
                                    Track Order
                                </button>
                            </div>
                        </div>
                    );
                })}

            </div>
            <div>
            </div>
        </div>
    )
}

export default MyOrder