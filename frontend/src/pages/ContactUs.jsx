import React from 'react'
import contact from "../assets/frontend_assets/contact_img.png"
import Subscription from '../components/Subscription'
const ContactUs = () => {
  return (
    <>
      <div>
        {/* Top Border */}
        <div className="w-full h-[1px] border-t border-[#ADADAD]"></div>

        {/* Heading */}
        <div className="flex flex-col items-center mt-16 mb-8">
          <div className="flex items-center">
            <p className="text-[35px] font-outfit font-bold uppercase leading-[100%] text-center w-[309px] h-[80px] rounded-[10px]">
              <span className="text-gray-400 font-bold">CONTACT</span> US
            </p>
            <div className="w-[50.81px] h-[2px] bg-[#252525] rounded-[10px] mb-10 -ml-8"></div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex items-start justify-center gap-16 mt-6 mb-20 px-10">
          {/* Image */}
          <img
            src={contact}
            alt="Contact"
            className="w-[400px] h-[400px] object-cover rounded-md"
          />

          {/* Text Content */}
          <div className="flex flex-col gap-6 max-w-md">
            <div>
              <p className="text-lg font-semibold uppercase">Our Store</p>
              <p className="text-base text-gray-700">
                54709 Willms Station<br />
                Suite 350, Washington, USA
              </p>
            </div>

            <div>
              <p className="text-lg font-semibold">Tel: <span className="font-normal">(415) 555-1132</span></p>
              <p className="text-lg font-semibold">Email: <span className="font-normal">example@gmail.com</span></p>
            </div>

            <div>
              <p className="text-lg font-semibold">Careers at Forever</p>
              <p className="text-base text-gray-700">Learn more about our teams and job openings.</p>
            </div>

            <button className="mt-2 px-6 py-2 bg-black text-white rounded-lg w-fit hover:bg-gray-800 transition">
              Explore Jobs
            </button>
          </div>
        </div>
      </div>
      <Subscription className='mt-20' />
    </>


  )
}

export default ContactUs