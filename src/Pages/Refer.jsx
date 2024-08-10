import React, { useState,useEffect } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import RegisterForm from '../Components/RegisterForm';
import Login from '../Components/Login';

const Refer=()=>{
  useEffect(() => {
    document.title = "Refer & Earn - Fuddins";
}, []);

    

    return(
        <div className="md:grid md:grid-cols-2 bg-beige bg-opacity-30 ">
              <div className=''>
                <div className="text-2xl p-5 font-bold text-center font-domine">Login</div>
                <Login/>
              </div>
                
                <div>
                  <div className=" justify-center items-center min-h-screen ">
                    <div className="text-2xl font-bold p-5 text-center font-domine">Register</div>
                    <RegisterForm/>
                  </div>
                </div>

            </div>
    )
}

export default Refer;