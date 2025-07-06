import { useLocation } from 'react-router-dom';
import React, { useContext, useEffect, useState } from 'react';
import AppContext from '../../contexts/AppContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useSearchParams } from 'react-router-dom';



const MyOrder = () => {
    const location = useLocation();
    const { Base_Url, user } = useContext(AppContext);
    const [orders, setOrders] = useState([]);
    const [searchParams] = useSearchParams();
    const success = searchParams.get("success");
    const orderId = searchParams.get("orderId");

    const getOrders = async (userId) => {
        const token = localStorage.getItem("token");
        try {
            const { data } = await axios.post(`${Base_Url}/api/order/user-order`, { userId }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            if (data.success) {
                setOrders(data.data);
            } else {
                toast.error("Could not fetch your orders");
            }
        } catch {
            toast.error("Error fetching orders");
        }
    };

    useEffect(() => {
        if (user && user?._id) {
            getOrders(user._id);
        }
    }, [user]);

    useEffect(() => {
        if (!success || !orderId) {
            return;
        }
        const verifyPayment = async () => {
            const token = localStorage.getItem("token");
            try {
                const { data } = await axios.post(`${Base_Url}/api/order/verify-order`, {
                    success,
                    orderId,
                }, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                if (data.success) {
                    toast.success("Payment verified!");
                } else {
                    toast.error("Payment verification failed!");
                }
            } catch (error) {
                toast.error("Error verifying payment");
            }
        };

        if (success && orderId) {
            verifyPayment();
        }
    }, [success, orderId]);


    return (
        <div className="px-4 sm:px-6 md:px-10 py-6 min-h-screen bg-[#f9f9f9]">
            <div className="flex items-center gap-2 mt-6 mb-6">
                <p className="font-outfit font-normal text-[22px] sm:text-[25px] uppercase">
                    <span className="text-[#707070]">My</span> Orders
                </p>
                <div className="w-[40px] h-[2px] bg-[#252525] rounded"></div>
            </div>

            <div className="space-y-6">
                {orders.map((order) => (
                    <div key={order._id} className="bg-white border border-[#D1D1D1] rounded-md p-6 flex flex-col gap-4">
                        <div className="flex justify-between items-center">
                            <p className="font-semibold">
                                Order on {new Date(order.date).toLocaleDateString()}
                            </p>
                            <p className="font-semibold text-indigo-600">
                                Total: ${order.amount}
                            </p>
                        </div>

                        <div className="space-y-2">
                            {order.items.map((prod, idx) => (
                                <div key={idx} className="flex justify-between border-b pb-2 last:border-none">
                                    <p className="text-gray-700">{prod.name}</p>
                                    <p className="text-gray-700">Qty: {prod.quantity} × ${prod.price}</p>
                                </div>
                            ))}
                        </div>

                        <div className="text-gray-600">
                            <p>Ship To:</p>
                            <p>
                                {order.address.firstName} {order.address.lastName}, {order.address.street}, {order.address.city}, {order.address.state}{order.address.zipcode && `, ${order.address.zipcode}`}
                            </p>
                        </div>

                        <p className={`font-semibold ${order.status === 'Delivered' ? 'text-green-700' : 'text-blue-700'}`}>
                            Status: {order.status}
                        </p>

                        <div className="text-right">
                            <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
                                Track Order
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyOrder;
