import React from "react";
import Header from "./components/Header/Header";
import Home from './components/Home/Home';
import Category from "./components/Category/Category";
import Products from "./components/Products/Products";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
    <Header />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="products" element={<Products/>} />
          <Route path="category" element={<Category/>} />
        </Routes>
      </div>

      

    </>
  );
}

export default App;

