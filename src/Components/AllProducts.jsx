import React,{useState} from "react";
import Product from "./Product";

const AllProducts =()=>{
    const products=5000;
    const currentPage=1;
    const totalPages=300;

    const [sortedProducts, setSortedProducts] = useState(products);
  const [selectedOption, setSelectedOption] = useState("");

  const handleSort = (option) => {
    let sortedArray = [...products];
    switch (option) {
      case "Price: Low to High":
        sortedArray.sort((a, b) => a.price - b.price);
        break;
      case "Price: High to Low":
        sortedArray.sort((a, b) => b.price - a.price);
        break;
      case "Rating: High to Low":
        sortedArray.sort((a, b) => b.rating - a.rating);
        break;
      case "Rating: Low to High":
        sortedArray.sort((a, b) => a.rating - b.rating);
        break;
      // Add more sorting options as needed
      default:
        sortedArray = products;
        break;
    }
    setSortedProducts(sortedArray);
    setSelectedOption(option);
  };

    return(
        <div>
            <div className="bg-beige bg-opacity-30 space-y-4 md:space-y-6 py-10 md:py-16 px-6">
                <div className="text-gray-500">Home / Shop </div>
                <div className="text-4xl md:text-5xl font-domine font-semibold text-lime-500">Shop</div>
                <div className="flex justify-between items-center mb-4">
        <div className="text-sm md:text-base">
          <span>
            Page <span className="text-gray-600">{currentPage}</span> of <span className="text-gray-600">{totalPages}</span> | Total Products: <span className="text-gray-600">{products}</span>
          </span>
        </div>

        {/* Sorting Dropdown */}
        <div className="relative">
          <select
            value={selectedOption}
            onChange={(e) => handleSort(e.target.value)}
            className="block w-full bg-transparent text-sm md:text-base  rounded  focus:outline-none "
          >
            <option value="">Default Sorting</option>
            <option value="Price: Low to High">Price: Low to High</option>
            <option value="Price: High to Low">Price: High to Low</option>
            <option value="Rating: High to Low">Rating: High to Low</option>
            <option value="Rating: Low to High">Rating: Low to High</option>
          </select>
        </div>
      </div>
      {/*product list*/}
      <div className="grid md:grid-cols-4 grid-cols-1 gap-3 py-5 ">
        <Product/>
        <Product/>
        <Product/>
      </div>
        
        </div>

        </div>
    )
}

export default AllProducts;