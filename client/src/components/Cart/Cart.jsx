/* eslint-disable no-lone-blocks */
/* eslint-disable no-unused-vars */
import "./Cart.scss";
import React, { useState } from 'react';
import { MdClose } from 'react-icons/md';
import { BsCartX } from 'react-icons/bs';
import { FaPlus, FaMinus, FaShoppingCart } from 'react-icons/fa';
import Singleproduct from '../../assets/products/headphone-prod-5.webp';
import CartItem from "./CartItem/CartItem";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from 'react'
import { Context } from "../../utils/AppContext";
const Cart = ({ setShowCart }) => {


  const { cartItems, cartSubTotal } = useContext(Context);
  const Navigate = useNavigate();


  return (

    <>
      <div className="search-modal top-bottom   ">

        <div className="content-a">
          <div className="form-field-cart ">
            <div className="Cart-product-heading d-flex  align-items-center">SHOPPING CART</div>
            <MdClose className='pointer cart-close' onClick={() => setShowCart(false)} />
          </div>

          {!cartItems?.length && <div className="Empty-cart">
            <BsCartX />
            <span>No product in the Cart</span>
            <button className="Filled-purple-Button" onClick={() => setShowCart(false)} >RETURN TO SHOP</button>
          </div>}

          {!!cartItems?.length && <CartItem />}

        </div>
        {!!cartItems?.length && <div className="content-b">
          <div className="d-flex align-items-center p-2  justify-content-between m-0">
            <span style={{ fontSize: '20px' }}> <b> SUBTOTAL: </b> </span>
            <span style={{ fontSize: '18px', color: '#872ce1' }}  > <b>  ${cartSubTotal} </b> </span>
          </div>
          <hr className="m-0" />
          <div className="p-1 text-center d-flex" >
            <button className="Filled-purple-Button "  style={{ margin: 'auto', textAlign: 'center', width: '100%' }}  >CHECKOUT</button>
          </div>
        </div>}


      </div >




    </>
  );
}

export default Cart;
