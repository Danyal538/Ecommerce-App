import React, { useContext } from 'react'
import { Route, Routes, useParams } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify"
import Home from './pages/Home'
import Collection from './pages/Collection'
import Cart from './pages/Cart'
import DeliveryAndPayment from './pages/DeliveryAndPayment'
import MyOrder from './pages/MyOrder'
import ContactUs from './pages/ContactUs'
import AboutUs from './pages/AboutUs'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import AppContext from '../contexts/AppContext'
import ProductDescription from './pages/ProductDescription'
import ScrollToTop from './components/ScrollToTop'


const App = () => {

  return (
    <div>
      <NavBar />
      <ToastContainer  />
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path="/product/:id" element={<ProductDescription />} />
        <Route path='/login' element={<Login />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/collection' element={<Collection />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/payment' element={<DeliveryAndPayment />} />
        <Route path='/my-orders' element={<MyOrder />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/my-orders' element={<MyOrder />} />

      </Routes>
      <Footer />
    </div>
  )
}

export default App