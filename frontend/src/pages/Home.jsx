import React from 'react'
import NavBar from '../components/NavBar'
import Banner from '../components/Banner'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import WhyChooseUs from '../components/WhyChooseUs'
import Subscription from '../components/Subscription'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Banner />
      <LatestCollection />
      <BestSeller />
      <WhyChooseUs />
      <Subscription />
    </div>
  )
}

export default Home