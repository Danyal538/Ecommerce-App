import React, { useContext, useEffect, useState } from 'react'
import AppContext from '../context/AppContext'
import axios from "axios"
import { toast } from "react-toastify"
import parcel from "../assets/admin_assets/parcel_icon.svg"

const Order = () => {
  const { Base_Url } = useContext(AppContext)
  const [orders, setOrders] = useState([]);

  // Fetch all orders
  const getOrders = async () => {
    const token = localStorage.getItem("token");
    try {
      const { data } = await axios.get(`${Base_Url}/api/order/list-order`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      if (data.success) {
        setOrders(data.data)
        toast.success("Orders fetched")
      } else toast.error("Error in fetching orders")
    } catch {
      toast.error("Error in order fetching")
    }
  }

  // Update order status
  const statusUpdate = async (orderId, status) => {
    const token = localStorage.getItem("token");
    try {
      const { data } = await axios.post(`${Base_Url}/api/order/update-status`, { orderId, status }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      if (data.success) {
        setOrders((prev) => prev.map((o) => o._id === data.updated._id ? data.updated : o));
        toast.success("Status updated")
      }
      else {
        toast.error("Error in status updation")
      }

    } catch (error) {
      toast.error("Error")
    }
  }

  useEffect(() => {
    getOrders()
  }, [])

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Heading */}
      <h1 className="font-semibold text-xl sm:text-2xl text-gray-800 uppercase mb-6">
        Orders
      </h1>

      {/* Order Cards */}
      {orders.map((order) => (
        <div
          key={order._id}
          className="relative bg-white border border-gray-300 rounded-lg p-4 sm:p-6 mb-6 shadow-sm"
        >
          {/* Status Dropdown at top-right */}
          <select
            className="absolute top-4 right-4 bg-white border border-gray-400 rounded px-3 py-1 text-sm focus:outline-none"
            defaultValue={order.status}
            onChange={(e) => statusUpdate(order._id, e.target.value)}
          >
            <option>Order Placed</option>
            <option>Out for delivery</option>
            <option>Delivered</option>
          </select>

          {/* User Info */}
          <div className="flex items-center gap-3 mb-3">
            <img src={parcel} alt="Parcel" className="w-10 h-10 sm:w-12 sm:h-12 object-contain" />
            <p className="text-base sm:text-lg font-medium text-gray-800">
              {order.address.firstName} {order.address.lastName}
            </p>
          </div>

          {/* Date */}
          <p className="text-sm text-gray-500 text-center mb-4">
            {new Date(order.date).toLocaleDateString()}
          </p>

          {/* Items List */}
          <div className="mb-4 space-y-2">
            {order.items.map((product, i) => (
              <div
                key={i}
                className="flex justify-between text-sm sm:text-base border-b border-gray-200 py-1 last:border-b-0"
              >
                <span className="text-gray-700">{product.name}</span>
                <span className="text-gray-600">Qty: {product.quantity}</span>
              </div>
            ))}
          </div>

          {/* Total & Address */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-gray-700 space-y-2 sm:space-y-0">
            <p className="text-indigo-600 font-medium text-sm sm:text-base">
              Total: ${order.amount}
            </p>
            <p className="text-sm text-gray-700 sm:text-right">
              {order.address.street}, {order.address.city}, {order.address.state}, {order.address.country}
              {order.address.zipcode && `, ${order.address.zipcode}`}
            </p>
          </div>

          {/* Payment Info */}
          <div className="mt-3 text-sm text-gray-700 space-y-1">
            <p>Payment Method: <span className="font-medium">{order.paymentMethod || "N/A"}</span></p>
            <p>
              Status:{" "}
              <span className={`font-medium ${order.payment ? "text-green-700" : "text-red-600"}`}>
                {order.payment ? "Paid" : "Not Paid"}
              </span>
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Order
