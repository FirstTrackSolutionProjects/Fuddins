import React,{useState} from "react";
import SearchBar from "../Components/SearchBar";
import ImageSlider from "../Components/ImageSlider";
import ImageSlider2 from "../Components/ImageSlider2";
import { sliderImg } from "../Constants/sliderImg";
import { category } from "../Constants/sliderImg";
import BannerSlider from "../Components/BannerSlider";
import { BiCart } from "react-icons/bi";
import { BsFillCartFill } from "react-icons/bs";
import Product from "../Components/Product";
import Categories from "../Components/Categories";
import EachCategory from "../Components/EachCategory";
import Newsletter from "../Components/NewsLetter";

const Index =()=>{
    

    const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
    console.log('Search Query:', query);
  };
    return(
        <div>
            <div className="container mx-auto p-6">
      <SearchBar onSearch={handleSearch} />
      
      {/* Display search results or filtered content */}
      {/*<div className="mt-4">
        <p>Search Query: {searchQuery}</p>
      </div>*/}
    </div>
    <div>
      <div className="text-center text-2xl md:text-4xl font-poppins py-3"> Top Categories</div>
      <div className="flex justify-center py-2">
          <div className='w-3 h-1 rounded bg-lime-600 '></div>
          <div className='w-8 h-1 rounded bg-lime-600 mx-1'></div>
          <div className='w-3 h-1 rounded bg-lime-600 '></div>
      </div>
    <ImageSlider images={category}/>
    
    </div>
    <BannerSlider/>
    <div className="py-5 bg-beige bg-opacity-30">
      <div className="text-center text-2xl md:text-4xl font-poppins my-3 ">Popular Products</div>
      <div className="grid grid-col-2 md:grid-cols-4 gap-2 md:gap-4 p-4">
          <Product/>
          <Product/>
          <Product/>
      </div>
    </div>
   
    <div>
    {/*<div className="text-2xl md:text-4xl text-black font-domine w-full py-5 md:py-16 items-center">
                <div className="text-center font-semibold">Explore By Categories</div>
                <img src="images/leaf2.png" className="mx-auto mt-3 md:mb-5 mb-8"></img>
            </div>
           
            <div className="top-1/2 -mt-5"><img src="images/leaf.png" alt="no image" className="mx-auto w-28 md:w-32"></img></div>
            <div>
            
            </div>*/}
             </div>
            <div className="md:flex gap-20 bg-black text-white p-14">
              <div className="font-domine text-xl md:text-4xl my-5 md:my-0">Get Guaranteed Cashbacks & Coupons!</div>
              <div className="flex items-center gap-2 bg-lime-500 text-white w-fit px-4 py-2 rounded-sm"><BsFillCartFill className="h-4 w-4"/> SHOP NOW</div>
            </div>

            <div>
              <EachCategory/>
            </div>
            <div>
              <Newsletter/>
            </div>
   
        </div>
    )
}

export default Index;