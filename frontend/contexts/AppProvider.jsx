import React, { useState, useCallback } from 'react'
import AppContext from './AppContext';
import { useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const AppProvider = ({ children }) => {
    const [showSearchBar, setShowSearchBar] = useState(false);

    const [quantity, setQuantity] = useState(0);
    const [cartItems, setCartItems] = useState([]);
    const [selectedPayment, setSelectedPayment] = useState("stripe");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);
    const Base_Url = "https://ecommercebackend-production-ec6d.up.railway.app/"


    const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    const shippingCost = 10

    const addToCart = useCallback((product, selectedSize) => {
        setCartItems(prevCartItems => {
            const existingItem = prevCartItems.find(item => item._id === product._id && item.size === selectedSize);

            if (existingItem) {
                return prevCartItems.map(item =>
                    item._id === product._id && item.size === selectedSize
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                const newItem = {
                    ...product,
                    size: selectedSize,
                    quantity: 1,
                };
                return [...prevCartItems, newItem];
            }
        });
    }, []);


    const removeFromCart = (product, selectedSize) => {
        const existingItem = cartItems.find(item => item._id === product._id && item.size === selectedSize);
        if (existingItem.quantity > 1) {
            const updatedCart = cartItems.map(item => item._id === product._id && item.size === selectedSize
                ? { ...item, quantity: item.quantity - 1 }
                : item)
            setCartItems(updatedCart);
        }
        else {
            const filteredCart = cartItems.filter(
                item => !(item._id === product._id && item.size === selectedSize));
            setCartItems(filteredCart);
        }
    }
    const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            return
        }
        const checkAuth = async () => {
            try {
                const { data } = await axios.get(`${Base_Url}/api/user/profile`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                if (data.success) {
                    setUser(data.user)
                    setIsLoggedIn(true);
                    console.log("Auth success, user:", data.user);
                }
                else {
                    setIsLoggedIn(false)
                }
            } catch (error) {
                setIsLoggedIn(false);
            }
        }
        checkAuth()
    },
        [])
    return (
        <AppContext.Provider value={{
            showSearchBar, setShowSearchBar, addToCart, cartCount, cartItems, totalPrice, shippingCost, removeFromCart, selectedPayment, setSelectedPayment, Base_Url, isLoggedIn, setIsLoggedIn, user, setUser
        }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider