import { React, useEffect, useContext } from "react";
import Header from "./components/Header/Header";
import Home from './components/Home/Home';

import Category from "./components/Category/Category";

// import Category from './components/Home/Category/Category'
import Products from "./components/Products/Products";
import { Route, Routes } from "react-router-dom";
import AppContext from './utils/AppContext'
import SingleProduct from "./components/SingleProduct/SingleProduct";
import Cart from './components/Cart/Cart'
import fetchDataFromApi from './utils/api'
import { Context } from './utils/AppContext';
function App() {

  return (

    <AppContext>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="products" element={<Products ProductHeading={"Popular Products"} />} />
          <Route path="category/:id" element={<Category />} />
          <Route path="Single-Product/:id" element={<SingleProduct />} />
          <Route path="cart" element={<Cart />} />
        </Routes>
      </div>
    </AppContext>
  );
}

export default App;

