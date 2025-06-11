import React from 'react'

const Subscription = () => {
    return (
        <div className="mt-20 py-10 bg-gray-100 text-center">
            <p className="font-outfit font-medium text-[34px] leading-[100%] mb-4 text-black text-bold">
                Subscribe now & get 20% off
            </p>
            <p className="font-outfit font-normal text-[18px] leading-[100%] text-gray-600 mb-6 max-w-[588px] mx-auto">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, pariatur?
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center">
                <input
                    type="text"
                    placeholder="Enter Your Email ID"
                    className="font-outfit font-normal text-[14px] px-4 py-2 w-[300px] border border-gray-300 rounded"
                />
                <button
                    className="bg-black text-white font-outfit text-[16px] px-6 py-3 rounded hover:bg-gray-600 transition"
                >
                    Subscribe
                </button>
            </div>
        </div>

    )
}

export default Subscription