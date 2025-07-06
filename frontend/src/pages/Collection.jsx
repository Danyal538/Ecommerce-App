import React, { useContext, useEffect, useState, useRef } from 'react'
import SideBar from '../components/SideBar'
import ProductCard from '../components/ProductCard'
import cross from "../assets/frontend_assets/cross_icon.png"
import AppContext from '../../contexts/AppContext'
import { data, useLocation } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'

const Collection = () => {
  const location = useLocation();
  const [isDropdownOpen, setIsDropdownOpen] = useState("closed");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const dropDownRef = useRef();
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("Relevant");
  const [allProducts, setAllProducts] = useState([]);

  const { showSearchBar, setShowSearchBar, Base_Url } = useContext(AppContext);
  const fetchedProducts = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(`${Base_Url}/api/product/list`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      const productsArray = response.data?.data;
      if (response.data.success && Array.isArray(productsArray)) {
        setAllProducts(productsArray);
      }
      else {
        toast.error("Error in fetching products")
      }
    } catch (error) {
      toast.error("Error in fetching products list ")
    }
  };

  const handleDropDown = () => {
    setIsDropdownOpen((prev) => (prev === "closed" ? "open" : "closed"));
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
        setIsDropdownOpen("closed");
      }
    };
    if (isDropdownOpen === "open") {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  useEffect(() => {
    if (location.state?.showSearchBar) {
      setShowSearchBar(true);
    } else {
      setShowSearchBar(false);
    }
  }, [location.state, setShowSearchBar]);

  useEffect(() => {
    fetchedProducts();
  }, [])



  const filteredProducts = allProducts.filter(
    (p) =>
      (selectedCategories.includes(p.category) || selectedCategories.length === 0) &&
      (selectedTypes.includes(p.subCategory) || selectedTypes.length === 0) &&
      (searchTerm === "" || p.name.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === "High to low") return b.price - a.price;
    if (sortOption === "Low to High") return a.price - b.price;
    return 0;
  });

  return (
    <div className="px-4 sm:px-6 md:px-10 max-w-screen-xl mx-auto">
      <div className="w-full h-[1px] border-t border-[#ADADAD] mt-6"></div>

      {showSearchBar && (
        <div className="mt-8 flex justify-center items-center mb-10 gap-3 flex-wrap">
          <input
            onChange={(e) => setSearchTerm(e.target.value)}
            type="text"
            placeholder="Search"
            className="p-3 text-gray-600 border rounded-full w-[90vw] max-w-[700px]"
          />
          <img src={cross} alt="Close" className="h-[15px] cursor-pointer" onClick={() => setShowSearchBar(false)} />
        </div>
      )}

      <div className="flex flex-col lg:flex-row lg:items-start gap-6 mt-4 w-full">
        <div className="w-full lg:w-[220px] flex-shrink-0">
          <SideBar
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
            selectedTypes={selectedTypes}
            setSelectedTypes={setSelectedTypes}
          />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-3">
            <div className="flex items-center gap-3">
              <p className="font-outfit text-[30px] sm:text-[35px] leading-[100%] uppercase">
                <span className="text-gray-400">ALL</span> COLLECTIONS
              </p>
              <div className="w-[40px] h-[2px] bg-[#252525] rounded-[10px] hidden sm:block"></div>
            </div>

            <div className="relative w-full max-w-[200px]" ref={dropDownRef}>
              <button
                onClick={handleDropDown}
                className="flex items-center justify-between w-full gap-1 border px-3 py-2 rounded-md text-sm hover:bg-gray-100 bg-white"
              >
                Sort by: {sortOption} <span className="text-xs">▼</span>
              </button>

              {isDropdownOpen === "open" && (
                <div
                  className="absolute mt-1 w-full sm:w-[180px] bg-white border rounded shadow-md text-sm z-10 overflow-hidden"
                >
                  <div
                    className="px-3 py-2 hover:bg-blue-600 hover:text-white cursor-pointer"
                    onClick={() => setSortOption("Relevant")}
                  >
                    Sort by: Relevant
                  </div>
                  <div
                    className="px-3 py-2 hover:bg-blue-600 hover:text-white cursor-pointer"
                    onClick={() => setSortOption("High to low")}
                  >
                    Sort by: High to Low
                  </div>
                  <div
                    className="px-3 py-2 hover:bg-blue-600 hover:text-white cursor-pointer"
                    onClick={() => setSortOption("Low to High")}
                  >
                    Sort by: Low to High
                  </div>
                </div>
              )}
            </div>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:mb-5">
            {sortedProducts.map((product) => (
              <ProductCard product={product} key={product._id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
