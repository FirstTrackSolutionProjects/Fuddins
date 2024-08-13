import React from "react";
import Product from "./Product";

const EachCategory =()=>{
    return(
        <div className="md:p-5 p-3 bg-beige bg-opacity-30">
            <div className="py-10">
            <div className="text-center text-4xl font-domine font-semibold my-2">Category Name</div>
            <div><img src="images/leaf2.png" className="mx-auto"></img></div>
            </div>
            <div className="grid md:grid-cols-4 grid-cols-1 gap-2 md:gap-3 p-3">
            <Product/>
            <Product/>
            <Product/>
            </div>
            
        </div>
    )
}

export default EachCategory;
 