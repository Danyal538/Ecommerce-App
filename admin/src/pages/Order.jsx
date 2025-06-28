import React, { useContext, useEffect, useState } from 'react'
import AppContext from '../context/AppContext'
import axios from "axios"
import { toast } from "react-toastify"
import parcel from "../assets/admin_assets/parcel_icon.svg"

const Order = () => {
  const { Base_Url } = useContext(AppContext)
  const [orders, setOrders] = useState([]);
  const [updateStatus, setUpdateStatus] = useState("Order Placed");

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

  const statusUpdate = async (orderId, status) => {
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
    <div className="container mx-auto p-4">
      <h1 className="font-outfit font-semibold text-2xl sm:text-3xl uppercase mb-6">
        Order Page
      </h1>

      {orders.map((order, idx) => (
        <div
          key={order._id}
          className="relative bg-white border border-gray-300 rounded-lg p-6 mb-6 shadow-sm"
        >
          {/* SELECT at top-right */}
          <select
            className="absolute top-4 right-4 bg-white border border-gray-400 rounded px-3 py-1 text-sm focus:outline-none"
            defaultValue={order.status}
            onChange={(e) => statusUpdate(order._id, e.target.value)}
          >
            <option>Order Placed</option>
            <option>Out for delivery</option>
            <option>Delivered</option>
          </select>

          {/* ICON & USER */}
          <div className="flex items-center gap-4 mb-4">
            <img
              src={parcel}
              alt="Parcel"
              className="w-12 h-12 flex-shrink-0"
            />
            <p className="text-lg font-medium text-gray-800">
              {order.address.firstName} {order.address.lastName}
            </p>
          </div>

          {/* DATE centered */}
          <p className="text-sm text-gray-500 text-center mb-4">
            {new Date(order.date).toLocaleDateString()}
          </p>

          {/* ITEM LIST */}
          <div className="mb-4">
            {order.items.map((product, i) => (
              <div
                key={i}
                className="flex justify-between py-1 border-b border-gray-200 last:border-b-0"
              >
                <span className="text-gray-700">{product.name}</span>
                <span className="text-gray-600">Qty: {product.quantity}</span>
              </div>
            ))}
          </div>

          {/* TOTAL & ADDRESS FOOTER */}
          <div className="flex flex-col sm:flex-row justify-between items-center text-gray-700">
            <p className="text-indigo-600 font-medium">Total: ${order.amount}</p>
            <p className="text-sm text-gray-700 text-center sm:text-left mt-2 sm:mt-0">
              {order.address.street}, {order.address.city}, {order.address.state}, {order.address.country}
              {order.address.zipcode && `, ${order.address.zipcode}`}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Order
