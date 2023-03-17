/* eslint-disable no-unused-vars */
/* eslint-disable no-lone-blocks */
import { Link } from "react-router-dom";
import { FiShoppingCart } from 'react-icons/fi';
import { TbSearch, TbHeart } from "react-icons/tb";
import React, { useState } from 'react';
import Cart from '../Cart/Cart'
import "./Header.scss";
import Search from './Search/Search'
const Header = () => {

    const [ShowCart, setShowCart] = useState(false);
    const [ShowSearch, setShowSearch] = useState(false);

    return (
        <>
            
            <div className="main-header px-3" >

                <div className="container py-3 text-white main-header-child ">
                    <div className=" links ">
                        <span className=" list-unstyled gap-3 d-flex  ">
                            <li > <Link className="text-decoration-none text-white" to="/">Home</Link> </li>
                            <li > <Link className="text-decoration-none text-white" to="products">Products</Link> </li>
                            <li > <Link className="text-decoration-none text-white " to="category">Category</Link> </li>
                            <li > <Link className="text-decoration-none text-white " to="Single-Product">Single Product</Link> </li>
                        </span>
                    </div>
                    <div className="list-unstyled  ">
                        <li > <Link className="text-decoration-none text-white" to="/"><span className="center"> <b> JSDVSTORE.</b> </span></Link> </li>
                    </div>
                    <div className="  ">
                        <span className="d-flex list-unstyled gap-4 " >

                            <li className="bold">
                                <TbSearch className="icon pointer" onClick={() => setShowSearch(true)} />
                            </li>
                            <li>
                                <TbHeart className="icon" />
                            </li>
                            <li className=" position-relative pointer"  onClick={() => setShowCart(true)}>
                                <FiShoppingCart className="cart-icon" />
                                <span className="cart-popup">5</span>
                            </li>
                        </span>
                    </div>
                </div>
            </div>
            {ShowCart && <Cart setShowCart={setShowCart} />}
            {ShowSearch && <Search setShowSearch={setShowSearch} />}
        </>



    );
};

export default Header;
