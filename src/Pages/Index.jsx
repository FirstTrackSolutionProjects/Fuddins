import React,{useState} from "react";
import SearchBar from "../Components/SearchBar";
import ImageSlider from "../Components/ImageSlider";
import { sliderImg } from "../Constants/sliderImg";
import BannerSlider from "../Components/BannerSlider";
import { BiCart } from "react-icons/bi";
import { BsFillCartFill } from "react-icons/bs";

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

    <ImageSlider images={sliderImg} />
    <BannerSlider/>
    <div>
    <div className="text-4xl text-black font-domine w-full py-16 items-center">
                <div className="text-center font-semibold">Explore By Categories</div>
                <img src="images/leaf2.png" className="mx-auto mt-5"></img>
            </div>
           
            <div className="top-1/2 -mt-5"><img src="images/leaf.png" alt="no image" className="mx-auto w-32"></img></div>
            <div className="bg-beige bg-opacity-40 py-20 -mt-7">
              <div className="grid grid-cols-5 gap-2">
                <div className="mx-auto">
                  <img src="images/categories/cosmetics.jpg" className=" p-2 h-52 rounded-xl mx-auto"></img>
                  <div className="text-center my-3 text-lg text-gray-600">Beauty & Cosmetics</div>
                </div>
                <div className="mx-auto">
                  <img src="images/categories/garments.jpg" className=" p-2 h-52 rounded-xl mx-auto"></img>
                  <div className="text-center my-3 text-lg text-gray-600">Garments</div>
                </div>
                <div className="mx-auto">
                  <img src="images/categories/babycare.jpg" className=" p-2 h-52 rounded-xl mx-auto"></img>
                  <div className="text-center my-3 text-lg text-gray-600">Baby Care</div>
                </div>
                <div className="mx-auto">
                  <img src="images/categories/mobile.jpg" className=" p-2 h-52 rounded-xl mx-auto"></img>
                  <div className="text-center my-3 text-lg text-gray-600">Mobile  Accesories</div>
                </div>
                <div className="mx-auto">
                  <img src="images/categories/flower.jpg" className=" p-2 h-52 rounded-xl mx-auto"></img>
                  <div className="text-center my-3 text-lg text-gray-600">Flower</div>
                </div>
              </div>

            </div>
            <div className="flex gap-20 bg-black text-white p-14">
              <div className="font-domine text-4xl">Get Guaranteed Cashbacks & Coupons!</div>
              <div className="flex items-center gap-2 bg-lime-500 text-white w-fit px-4 py-2 rounded-sm"><BsFillCartFill className="h-4 w-4"/> SHOP NOW</div>
            </div>
    </div>
        </div>
    )
}

export default Index;