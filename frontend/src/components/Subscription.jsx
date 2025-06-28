import React from 'react'

const Subscription = () => {
    return (
        <div className="mt-20 py-10 px-4 bg-gray-100 text-center">
            {/* Heading */}
            <p className="font-outfit font-medium text-[28px] sm:text-[34px] leading-[100%] mb-4 text-black">
                Subscribe now & get 20% off
            </p>

            {/* Subheading */}
            <p className="font-outfit font-normal text-[16px] sm:text-[18px] leading-[150%] text-gray-600 mb-6 max-w-xl mx-auto">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, pariatur?
            </p>

            {/* Input + Button */}
            <div className="flex flex-col sm:flex-row justify-center items-center">
                <input
                    type="text"
                    placeholder="Enter Your Email ID"
                    className="font-outfit font-normal text-[14px] px-4 py-3 w-full max-w-xs border border-gray-300 rounded mb-4 sm:mb-0 sm:mr-4"
                />
                <button
                    className="bg-black text-white font-outfit text-[16px] px-6 py-3 rounded hover:bg-gray-700 transition"
                >
                    Subscribe
                </button>
            </div>
        </div>
    )
}

export default Subscription
