import React from 'react'
import about from '../assets/frontend_assets/about_img.png'
import Subscription from '../components/Subscription'

const AboutUs = () => {
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 mt-5">

      <div className="flex flex-col items-center mt-10 mb-8">
        <div className="flex items-center gap-2">
          <p className="text-[28px] sm:text-[35px] font-outfit font-normal uppercase leading-[100%] text-center">
            <span className="text-gray-400">About</span> Us
          </p>
          <div className="w-[50px] h-[2px] bg-[#252525] rounded-[10px]"></div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-10 items-center lg:items-start">
        <img
          src={about}
          alt="About Us"
          className="w-full max-w-[400px] h-auto object-cover"
        />

        <div className="flex-1">
          <p className="mb-4 text-[#6D6D6D]">
            Forever was born out of a passion for innovation and a desire to revolutionize the way people shop online. Our journey began with a simple idea: to provide a platform where customers can easily discover, explore, and purchase a wide range of products from the comfort of their homes.
          </p>
          <p className="mb-4 text-[#6D6D6D]">
            Since our inception, we've worked tirelessly to curate a diverse selection of high-quality products that cater to every taste and preference. From fashion and beauty to electronics and home essentials, we offer an extensive collection sourced from trusted brands and suppliers.
          </p>
          <p className="text-xl mb-2 text-[#6D6D6D]">Our Mission</p>
          <p className="mb-4 text-[#6D6D6D]">
            Our mission at Forever is to empower customers with choice, convenience, and confidence. We're dedicated to providing a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery and beyond.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-start mt-16 mb-8">
        <div className="flex items-center gap-2">
          <p className="text-[28px] sm:text-[35px] font-outfit font-bold uppercase">
            <span className="text-gray-400">WHY</span> CHOOSE US
          </p>
          <div className="w-[50px] h-[2px] bg-[#252525] rounded-[10px]"></div>
        </div>
      </div>

      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x border border-[#ABABAB] rounded-lg overflow-hidden">
          <div className="p-6 sm:p-10">
            <p className="font-outfit font-semibold text-[18px] uppercase mb-4">Quality Assurance:</p>
            <p className="font-outfit text-[16px] text-[#6D6D6D]">We meticulously select and vet each product...</p>
          </div>
          <div className="p-6 sm:p-10">
            <p className="font-outfit font-semibold text-[18px] uppercase mb-4">Convenience:</p>
            <p className="font-outfit text-[16px] text-[#6D6D6D]">With our user-friendly interface and hassle-free ordering...</p>
          </div>
          <div className="p-6 sm:p-10">
            <p className="font-outfit font-semibold text-[18px] uppercase mb-4">Exceptional Customer Service:</p>
            <p className="font-outfit text-[16px] text-[#6D6D6D]">Our team of dedicated professionals is here to assist you...</p>
          </div>
        </div>
      </div>

      <Subscription className="mt-20 sm:mb-10" />
    </div>
  )
}

export default AboutUs
