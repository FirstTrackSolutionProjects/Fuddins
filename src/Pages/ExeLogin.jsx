import React from "react";
import TimelineProcess from "../Components/TimelineProcess";
import TimelineProcess2 from "../Components/TimelineProcess2";
import { Link } from "react-router-dom";

const ExeLogin =()=>{
    return(
        <div className="text-center">
            <div className="md:flex items-center gap-10 justify-center">
                <img src="images/fudBusiness.png" className="md:w-32 w-24 md:mx-0 mx-auto"></img>
                <div className="text-lg md:text-4xl font-domine font-semibold">Welcome to Fuddins Partners App</div>
                <Link to="/onboarding"><div className="mx-auto my-2 bg-myGreen text-white font-semibold w-fit p-2 rounded-md">OnBoarding Enquiry</div></Link>
            </div>
            <TimelineProcess/>
        </div>
    )
}

export default ExeLogin;