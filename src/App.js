import React from "react";
import Header from "./components/Header/Header";
import Home from './components/Home/Home';
import Category from "./components/Category/Category";
import Products from "./components/Products/Products";
import { Route, Routes } from "react-router-dom";
import AppContext from './utils/AppContext'
function App() {
  return (
    <AppContext>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="category" element={<Category />} />
        </Routes>
      </div>
    </AppContext>
  );
}

export default App;

