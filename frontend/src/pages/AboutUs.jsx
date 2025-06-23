import React from 'react'
import about from '../assets/frontend_assets/about_img.png'
import Subscription from '../components/Subscription'

const AboutUs = () => {
  return (
    <div className="px-[166px] mt-5">
      {/* Top Border Line */}
      <div className="w-full h-[1px] border-t border-[#ADADAD]"></div>

      {/* Heading Centered Below Line */}
      <div className="flex flex-col items-center mt-10 mb-8">
        <div className="flex items-center gap-2">
          <p className="text-[35px] font-outfit font-normal uppercase leading-[100%] text-center">
            <span className="text-gray-400">About</span> Us
          </p>
          <div className="w-[50px] h-[2px] bg-[#252525] rounded-[10px]"></div>
        </div>
      </div>

      {/* About Image Aligned Left Slightly (adjust -ml- as needed) */}
      <div className="flex gap-10 -ml-20">
        {/* Image */}
        <img
          src={about}
          alt="About Us"
          className="w-[400px] h-[500px]"
        />

        {/* Text */}
        <div className="flex-1">
          <p className="mb-4 text-[#6D6D6D]">
            Forever was born out of a passion for innovation and a desire to revolutionize the way people shop online. Our journey began with a simple idea: to provide a platform where customers can easily discover, explore, and purchase a wide range of products from the comfort of their homes.
          </p>
          <p className="mb-4 text-[#6D6D6D]">
            Since our inception, we've worked tirelessly to curate a diverse selection of high-quality products that cater to every taste and preference. From fashion and beauty to electronics and home essentials, we offer an extensive collection sourced from trusted brands and suppliers.

          </p>
          <p className="text-xl mb-2 text-[#6D6D6D]">Our Mission</p>
          <p className='mb-4 text-[#6D6D6D]'>
            Our mission at Forever is to empower customers with choice, convenience, and confidence...
          </p>
        </div>
      </div>

      <div className="flex flex-col items-start mt-16 mb-8 -ml-30">
        <div className="flex items-center">
          <p className="text-[35px] font-outfit font-bold uppercase leading-[100%] text-center w-[309px] h-[80px] rounded-[10px]">
            <span className="text-gray-400 font-bold">WHY</span> CHOOSE US
          </p>
          <div className="w-[50.81px] h-[2px] bg-[#252525] rounded-[10px] mb-10"></div>
        </div>
      </div>

      <div className="w-full border-[#ABABAB]">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-x border border-[#ABABAB] max-w-[1800px] h-auto mx-auto">
          <div className="p-10 ">
            <p className="font-outfit font-semibold text-[18px] leading-[100%] align-middle uppercase mb-8">Quality Assurance:</p>
            <p className="font-outfit font-normal text-[18px] leading-[180%] align-middle capitalize text-[#6D6D6D]">We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
          </div>
          <div className="p-10">
            <p className="font-outfit font-semibold text-[18px] leading-[100%] align-middle uppercase mb-8">Convenience:</p>
            <p className="font-outfit font-normal text-[18px] leading-[180%] align-middle capitalize text-[#6D6D6D]">With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>
          </div>
          <div className="p-10">
            <p className="font-outfit font-semibold text-[18px] leading-[100%] align-middle uppercase mb-8">Exceptional Customer Service:</p>
            <p className="font-outfit font-normal text-[18px] leading-[180%] align-middle capitalize text-[#6D6D6D]">Our team of dedicated professionals is here to assist you, ensuring your satisfaction is our top priority.</p>
          </div>
        </div>
      </div>
      <Subscription className="mt-30" />

    </div>

  )
}

export default AboutUs