import React, { useContext, useEffect, useState } from 'react'
import SideBar from '../components/SideBar'
import { products } from '../assets/frontend_assets/assets'
import ProductCard from '../components/ProductCard'
import cross from "../assets/frontend_assets/cross_icon.png"
import AppContext from '../../contexts/AppContext'
import { useLocation } from 'react-router-dom'
import { useRef } from 'react'


const Collection = () => {
  const location = useLocation();
  const [isDropdownOpen, setIsDropdownOpen] = useState("closed");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const dropDownRef = useRef();
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("Relevant");

  const { showSearchBar, setShowSearchBar } = useContext(AppContext);


  const handleDropDown = () => {
    setIsDropdownOpen((prev) => (prev === "closed" ? "open" : "closed"));
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
        setIsDropdownOpen("closed");
      }
    }
    if (isDropdownOpen === "open") {
      document.addEventListener('mousedown', handleClickOutside);
    }
    else {
      document.removeEventListener('mousedown', handleClickOutside);

    }

    return (() => {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    )
  }, [isDropdownOpen]);


  useEffect(() => {
    if (location.state?.showSearchBar) {
      setShowSearchBar(true);
    }
    else {
      setShowSearchBar(false);
    }
  }, [location.state, setShowSearchBar]);

  const filteredProducts = products.filter((p) =>
    (selectedCategories.includes(p.category) || selectedCategories.length === 0) &&
    (selectedTypes.includes(p.subCategory) || selectedTypes.length === 0) && (searchTerm === "" || p.name.toLowerCase().includes(searchTerm.toLowerCase())));

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === "High to low") return b.price - a.price;
    if (sortOption === "Low to High") return a.price - b.price;
    return 0;
  })


  return (
    <>
      <div className="w-[1050px] h-[1px] border-t border-[#ADADAD] ml-[166px] mr-[166px] mt-[20px]"></div>
      {/* search bar */}
      {showSearchBar === true ? <div className='mt-10 flex justify-center items-center mb-10'>
        <div>
          <input onChange={(e) => setSearchTerm(e.target.value)} type="text" placeholder='Search' className='p-3 text-gray-400 border-1 rounded-full w-[800px]' />
        </div>
        <img src={cross} alt="" className='ml-2 h-[15px]' onClick={() => setShowSearchBar(false)} />
      </div>
        : null};
      <div className="flex gap-8 mt-4">

        {/* Sidebar - fixed width */}
        <div className="w-[200px] shrink-0">
          <SideBar
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
            selectedTypes={selectedTypes}
            setSelectedTypes={setSelectedTypes} />
        </div>
        {/* Product Grid - takes remaining width */}
        <div className='mr-5 ml-10 flex-col'>
          <div className='flex justify-between items-center'>
            <div className="flex items-center gap-2 mb-4">
              <p className="font-outfit font-normal text-[35px] leading-[100%] uppercase">
                <span className=' text-gray-400'>ALL</span> COLLECTIONS
              </p>
              <div className="w-[50px] h-[2px] bg-[#252525] rounded-[10px]"></div>
            </div>

            <div className="relative mr-5" ref={dropDownRef}>
              <button onClick={handleDropDown} className="flex items-center gap-1 border px-3 py-1 rounded-md text-sm" >Sort By <span>▼</span></button>
              {isDropdownOpen === "open"
                ? <div className="absolute right-0 mt-1 bg-white border rounded shadow-md text-sm w-[150px] z-10">
                  <div className="px-3 py-2 hover:bg-blue-600 cursor-pointer " onClick={() => setSortOption("Relevant")}>Sort by: Relevant</div>
                  <div className="px-3 py-2 hover:bg-blue-600 cursor-pointer" onClick={() => setSortOption("High to low")}>Sort by: High to Low</div>
                  <div className="px-3 py-2 hover:bg-blue-600 cursor-pointer" onClick={() => setSortOption("Low to High")}>Sort by: Low to High</div>
                </div>
                : null}


            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 ">
            {sortedProducts.map((product) => <ProductCard product={product} key={product._id} />)}
          </div>
        </div>
      </div>
    </>

  )
}

export default Collection;