import React, { useState } from 'react'

const SideBar = ({ selectedCategories, setSelectedCategories, selectedTypes, setSelectedTypes }) => {
    const categoryOptions = ['Men', "Women", "Kids"];
    const typeOptions = ['Topwear', 'Bottomwear', "Winterwear"];

    const handleCategoryChange = (option) => {
        setSelectedCategories(prev => prev.includes(option) ? prev.filter(item => item !== option) : [...prev, option]);
    };

    const handleTypeChange = (option) => {
        setSelectedTypes(prev => prev.includes(option) ? prev.filter(item => item !== option) : [...prev, option]);
    };

    return (
        <div className="w-64 p-4 ml-4 space-y-4">
            {/* Categories Box */}
            <div className="border border-gray-300 rounded-lg p-4">
                <h3 className="font-semibold text-lg mb-2">Categories</h3>
                {categoryOptions.map(option => (
                    <label key={option} className="flex items-center mb-1" >
                        <input
                            type="checkbox"
                            checked={selectedCategories.includes(option)}
                            onChange={() => handleCategoryChange(option)}
                            className="mr-2"
                        />
                        {console.log("Selected Category", selectedCategories)}
                        {option}
                    </label>
                ))}
            </div>

            {/* Types Box */}
            <div className="border border-gray-300 rounded-lg p-4">
                <h3 className="font-semibold text-lg mb-2">Types</h3>
                {typeOptions.map(option => (
                    <label key={option} className="flex items-center mb-1">
                        <input
                            type="checkbox"
                            checked={selectedTypes.includes(option)}
                            onChange={() => handleTypeChange(option)}
                            className="mr-2"

                        />
                        {console.log("SelectedType", selectedTypes)}
                        {option}
                    </label>
                ))}
            </div>
        </div>


    )
}

export default SideBar