import React from 'react'
import contact from "../assets/frontend_assets/contact_img.png"
import Subscription from '../components/Subscription'

const ContactUs = () => {
  return (
    <>
      <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40">
        <div className="flex flex-col items-center mt-10 mb-8">
          <div className="flex items-center gap-2">
            <p className="text-[28px] sm:text-[35px] font-outfit font-bold uppercase text-center">
              <span className="text-gray-400">Contact</span> Us
            </p>
            <div className="w-[50px] h-[2px] bg-[#252525] rounded-[10px]"></div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-12 mt-6 mb-20">
          <img
            src={contact}
            alt="Contact"
            className="w-full max-w-[400px] h-auto object-cover rounded-md"
          />

          <div className="flex flex-col gap-6 max-w-xl text-center lg:text-left">
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

            <button className="mt-2 px-6 py-2 bg-black text-white rounded-lg mx-auto lg:mx-0 hover:bg-gray-800 transition">
              Explore Jobs
            </button>
          </div>
        </div>
      </div>

      <Subscription className="mt-20 sm:mb-10" />
    </>
  )
}

export default ContactUs
