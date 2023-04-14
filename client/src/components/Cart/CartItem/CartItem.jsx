/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
import "./CartItem.scss";
import "../Cart.scss";
import { BsCartX } from 'react-icons/bs';
import React, { useState } from 'react';
import { FaPlus, FaMinus, FaShoppingCart } from 'react-icons/fa';
import Singleproduct from '../../../assets/products/headphone-prod-5.webp';
import { MdClose } from 'react-icons/md';
import { useContext } from 'react'
import { Context } from "../../../utils/AppContext";
const CartItem = () => {
    const { cartItems, handleCartProductQuantity, handleRemoveFromCart } = useContext(Context);


    return (
        <>
                <div className=' scrollable-div '>
                    {cartItems.map((item) => (
                        <div key={item.id} className="container-fluid text-cart cart-products ">
                            <div className="row">
                                <div className="col-12 d-flex gap-2 align-items-center my-3">
                                    <div className="">
                                        <img src={process.env.REACT_APP_API_URL + item.attributes.img.data[0].attributes.url} width={100} style={{ backgroundColor: '#eff4ee' }} alt="" />
                                    </div>
                                    <div className="my-0 width">
                                        <div className="close-flex ">
                                            <div className="a para-dots" >
                                                <span style={{ fontSize: '18px' }} > <b> {item.attributes.title} </b></span>
                                            </div>
                                            <div className="b">
                                                <MdClose className="pointer cart-close-inner" onClick={() => handleRemoveFromCart(item)} />
                                            </div>
                                        </div>
                                        <div className="product my-2 " >
                                            <div className="quantity-wrapper" >
                                                <button className="quantity-btn minus " onClick={function () { handleCartProductQuantity('dec', item); }} >
                                                    <FaMinus style={{ fontSize: '10px' }} />
                                                </button>

                                                <span className="quantity px-4">{item.attributes.quantity}</span>

                                                <button className="quantity-btn plus" onClick={function () { handleCartProductQuantity('inc', item); }} >
                                                    <FaPlus style={{ fontSize: '10px' }} />
                                                </button>
                                            </div>
                                        </div>
                                        <span style={{ fontSize: '18px' }} > <b> {item.attributes.quantity} x  ${item.attributes.price} = <span style={{ color: '#872ce1' }}>  ${item.attributes.price * item.attributes.quantity}  </span></b> </span>
                                    </div>
                                </div>
                            </div>
                            <hr className='m-0' />
                        </div>
                    ))}

                </div>


        </>

    );
};
export default CartItem;
