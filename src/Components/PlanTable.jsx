import { QuestionMarkCircleIcon } from "@heroicons/react/outline";
import React from "react";

const PlanTable = () => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full">
        <tbody>
          {/* Row 1 */}
          <tr className="text-center">
            <td className="border-none p-2"></td>
            <td className="border border-gray-300 p-2 bg-gray-700 text-white text-xl">FREE PLAN</td>
            <td className="border border-gray-300 p-2 bg-gray-700 text-white text-xl">SILVER INSTA</td>
            <td className="border border-gray-300 p-2 bg-gray-700 text-white text-xl">GOLD INSTA</td>
            <td className="border border-gray-300 p-2 bg-gray-700 text-white text-xl">DIAMOND INSTA</td>
            <td className="border border-gray-300 p-2 bg-gray-700 text-white text-xl">PLATINUM INSTA</td>
            <td className="border border-gray-300 p-2 bg-gray-700 text-white text-xl">BRONZE INSTA</td>
          </tr>

          {/* Row 2 */}
          <tr className="text-center">
            <td className="border-none p-2"></td>
            <td className="w-44 border border-gray-300 p-2 bg-lime-600 text-white items-center my-auto">
                <div>
                    <div className="text-lg border-2 border-white rounded-full p-3 w-24 h-24 items-center mx-auto text-center py-7">₹ 0.00</div>
                    <div className="text-xs my-3">No payment required</div>
                </div>
            </td>
            <td className="w-44 border border-gray-300 p-2 bg-lime-600 text-white items-center my-auto">
                <div>
                    <div className="text-lg border-2 border-white rounded-full p-3 w-24 h-24 items-center mx-auto text-center">₹ 799.00</div>
                    <div className="text-xs my-3">for each 3 Month(s)</div>
                </div>
            </td>
            <td className="w-44 border border-gray-300 p-2 bg-lime-600 text-white items-center my-auto">
                <div>
                    <div className="text-lg border-2 border-white rounded-full p-3 w-24 h-24 items-center mx-auto text-center">₹ 999.00</div>
                    <div className="text-xs my-3">for each 3 Month(s)</div>
                </div>
            </td>
            <td className="w-44 border border-gray-300 p-2 bg-lime-600 text-white items-center my-auto">
                <div>
                    <div className="text-lg border-2 border-white rounded-full p-3 w-24 h-24 items-center mx-auto text-center">₹ 1,499.00</div>
                    <div className="text-xs my-3">for each 3 Month(s)</div>
                </div>
            </td>
            <td className="w-44 border border-gray-300 p-2 bg-lime-600 text-white items-center my-auto">
                <div>
                    <div className="text-lg border-2 border-white rounded-full p-3 w-24 h-24 items-center mx-auto text-center">₹ 1,999.00</div>
                    <div className="text-xs my-3">for each 3 Month(s)</div>
                </div>
            </td>
            <td className="w-44 border border-gray-300 p-2 bg-lime-600 text-white items-center my-auto">
                <div>
                    <div className="text-lg border-2 border-white rounded-full p-3 w-24 h-24 items-center mx-auto text-center">₹ 499.00</div>
                    <div className="text-xs my-3">for each 3 Month(s)</div>
                </div>
            </td>
          </tr>

          {/* Row 2 */}
          <tr className="text-center">
            <td className="border border-gray-300 p-2">Admin Comission</td>
            <td className="border border-gray-300 p-2">5 %</td>
            <td className="border border-gray-300 p-2">10 %</td>
            <td className="border border-gray-300 p-2">20 %</td>
            <td className="border border-gray-300 p-2">18 %</td>
            <td className="border border-gray-300 p-2">15 %</td>
            <td className="border border-gray-300 p-2">5 %</td>
          </tr>

          {/* Row 3 */}
          <tr className="text-center">
            <td className="border border-gray-300 p-2">Category<QuestionMarkCircleIcon className="h-5 w-5 mx-2"/></td>
            <td className="border border-gray-300 p-2">All</td>
            <td className="border border-gray-300 p-2">Grocery, Vegetables, Fruits, Pharma, Baby Care, Flower, Footwear, Snacks</td>
            <td className="border border-gray-300 p-2">Restaurants, Hotels, Foods, Deserts, bakery, Garments, Mobile Accessories, Sports Stuff</td>
            <td className="border border-gray-300 p-2">Restaurants, Hotels, Foodstalls, Deserts, Bakery, Garments, Sports Stuff</td>
            <td className="border border-gray-300 p-2">Restaurants, Hotels, Streetfoods, Deserts, Bakery, Garments, Sports stuff</td>
            <td className="border border-gray-300 p-2">Dairy</td>
          </tr>

          {/* Row 4 */}
          <tr className="text-center">
            <td className="border border-gray-300 p-2">Subscription Renewal</td>
            <td className="border border-gray-300 p-2">X</td>
            <td className="border border-gray-300 p-2">Every 3 Months</td>
            <td className="border border-gray-300 p-2">Every 3 Months</td>
            <td className="border border-gray-300 p-2">Every 3 Months</td>
            <td className="border border-gray-300 p-2">Every 3 Months</td>
            <td className="border border-gray-300 p-2">Every 3 Months</td>
          </tr>

          

          {/* Row 6 */}
          <tr className="text-center">
            <td className=" p-2"></td>
            <td className="border border-gray-300 p-2 "><div className="bg-myGreen mx-auto text-white p-2 w-32">Choose Plan</div></td>
            <td className="border border-gray-300 p-2"><div className="bg-myGreen mx-auto text-white p-2 w-32">Choose Plan</div></td>
            <td className="border border-gray-300 p-2"><div className="bg-myGreen mx-auto text-white p-2 w-32">Choose Plan</div></td>
            <td className="border border-gray-300 p-2"><div className="bg-myGreen mx-auto text-white p-2 w-32">Choose Plan</div></td>
            <td className="border border-gray-300 p-2"><div className="bg-myGreen mx-auto text-white p-2 w-32">Choose Plan</div></td>
            <td className="border border-gray-300 p-2"><div className="bg-myGreen mx-auto text-white p-2 w-32">Choose Plan</div></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PlanTable;
