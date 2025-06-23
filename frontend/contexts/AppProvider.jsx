import React, { useState, useCallback } from 'react'
import AppContext from './AppContext';
import { products } from '../src/assets/frontend_assets/assets';

const AppProvider = ({ children }) => {
    const [showSearchBar, setShowSearchBar] = useState(false);
    const [currState, setCurrState] = useState("");
    const [quantity, setQuantity] = useState(0);
    const [cartItems, setCartItems] = useState([]);
    const [selectedPayment, setSelectedPayment] = useState("stripe");


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
    return (
        <AppContext.Provider value={{
            showSearchBar, setShowSearchBar, currState, setCurrState, addToCart, cartCount, cartItems, totalPrice, shippingCost, removeFromCart, selectedPayment, setSelectedPayment
        }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider