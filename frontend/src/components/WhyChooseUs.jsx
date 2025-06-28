import React from 'react'
import exchange from "../assets/frontend_assets/exchange_icon.png"
import support from "../assets/frontend_assets/support_img.png"
import quality from "../assets/frontend_assets/quality_icon.png"

const WhyChooseUs = () => {
    return (
        <div className="container mx-auto px-4 mt-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
                {/* ----------- Exchange ----------- */}
                <div className="flex flex-col items-center space-y-2 max-w-xs mx-auto">
                    <img src={exchange} alt="Exchange" className="w-[52px] h-[52px]" />
                    <p className="font-outfit font-semibold text-[18px]">Easy Exchange Policy</p>
                    <p className="font-outfit font-normal text-[16px] text-gray-600">
                        We offer hassle-free exchange policy.
                    </p>
                </div>

                {/* ----------- Return Policy ----------- */}
                <div className="flex flex-col items-center space-y-2 max-w-xs mx-auto">
                    <img src={quality} alt="Return" className="w-[52px] h-[52px]" />
                    <p className="font-outfit font-semibold text-[18px]">7 Days Return Policy</p>
                    <p className="font-outfit font-normal text-[16px] text-gray-600">
                        We provide a 7-day free return policy.
                    </p>
                </div>

                {/* ----------- Support ----------- */}
                <div className="flex flex-col items-center space-y-2 max-w-xs mx-auto">
                    <img src={support} alt="Support" className="w-[52px] h-[52px]" />
                    <p className="font-outfit font-semibold text-[18px]">Best Customer Support</p>
                    <p className="font-outfit font-normal text-[16px] text-gray-600">
                        We provide 24/7 customer support.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;
