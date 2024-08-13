// App.js
import React from 'react';
import {Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Refer from './Pages/Refer';
import Index from './Pages/Index';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Career from './Pages/Career';
import Footer from './Components/Footer';
import Canc from './Pages/Canc';
import Shipp from './Pages/Shipp';
import Terms from './Pages/Terms';
import Privacy from './Pages/Privacy';
import LoginPage from './Pages/LoginPage';
import ShoppingCard from './Pages/ShoppingCard';
import ExeLogin from './Pages/ExeLogin';
import MenuUpload from './Pages/MenuUpload';
import Onboarding from './Pages/Onboarding';
import Partner from './Pages/Partner';
import Home from './Pages/Home';
import AllProducts from './Components/AllProducts';
import ProductDetail from './Components/ProductDetail';

function App() {
  return (
    <div>
      <Header/>

      <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/refer" element={<Refer/>}></Route>
      <Route path="/login" element={<LoginPage/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="/career" element={<Career/>}></Route>
      <Route path="/canc" element={<Canc/>}></Route>
      <Route path="/shipp" element={<Shipp/>}></Route>
      <Route path="/terms" element={<Terms/>}></Route>
      <Route path="/privacy" element={<Privacy/>}></Route>
      <Route path="/shopcard" element={<ShoppingCard/>}></Route>
      <Route path="/exelog" element={<ExeLogin/>}></Route>
      <Route path="/menuUpl" element={<MenuUpload/>}></Route>
      <Route path="/onboarding" element={<Onboarding/>}></Route>
      <Route path="/partner" element={<Partner/>}></Route>
      <Route path="/allprod" element={<AllProducts/>}></Route>
      <Route path="/detail" element={<ProductDetail/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
