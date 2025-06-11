import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/Collection'
import Product from './pages/Product'
import Cart from './pages/Cart'
import DeliveryAndPayment from './pages/DeliveryAndPayment'
import MyOrder from './pages/MyOrder'
import ContactUs from './pages/ContactUs'
import AboutUs from './pages/AboutUs'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/collection' element={<Collection />} />
        <Route path='/products' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/payment' element={<DeliveryAndPayment />} />
        <Route path='/my-orders' element={<MyOrder />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/my-orders' element={<MyOrder />} />

      </Routes>
      {/* <Footer /> */}
    </div>
  )
}

export default App