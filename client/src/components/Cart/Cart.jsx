/* eslint-disable no-unused-vars */
import "./Cart.scss";
import React, { useState } from 'react';
import { MdClose } from 'react-icons/md';
import { BsCartX } from 'react-icons/bs';
import { FaPlus, FaMinus, FaShoppingCart } from 'react-icons/fa';
import Singleproduct from '../../assets/products/headphone-prod-5.webp';

const Cart = ({setShowCart}) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <div className="cart-panel">
      <div className="opac-layer">
        <div className="cart-content ">

          <div className="content-a">

            <div className="d-flex align-items-center p-3  justify-content-between m-0">
              <span style={{ fontSize: '20px' }}> <b> SHOPPING CART </b> </span>
              <span className="close-button" onClick={()=> setShowCart(false)} > <MdClose size={20} />    </span>
            </div>

            <hr className="m-0" />
            <div className=" d-flex gap-2 align-items-center cart-products py-2">
              <div className="">
                <img src={Singleproduct} width={100} style={{ backgroundColor: '#eff4ee' }} alt="" />
              </div>
              <div className="my-0">
                <div>
                  <span style={{ fontSize: '17px' }}> <b> Boat Rockerz 450 DC edition </b>    </span>
                </div>
                <div className="product my-2 " >
                  <div className="quantity-wrapper" >
                    <button className="quantity-btn minus " onClick={handleDecrement}>
                      <FaMinus style={{ fontSize: '10px' }} />
                    </button>
                    <span className="quantity px-4">{quantity}</span>
                    <button className="quantity-btn plus" onClick={handleIncrement}>
                      <FaPlus style={{ fontSize: '10px' }} />
                    </button>
                  </div>
                </div>
                <span style={{ fontSize: '18px' }} > <b> 1 x <span style={{ color: '#872ce1' }}>  $99  </span></b> </span>
              </div>
            </div>
          </div>

          <div className="content-b">

            <hr className="m-0" />
            <div className="d-flex align-items-center p-2  justify-content-between m-0">
              <span style={{ fontSize: '20px' }}> <b> SUBTOTAL: </b> </span>
              <span style={{ fontSize: '18px', color: '#872ce1' }}  > <b>  $99 </b> </span>
            </div>
            <hr className="m-0" />
            <div className="p-1 text-center d-flex" >
              <button className="Filled-purple-Button " style={{ margin: 'auto', textAlign: 'center', width: '100%' }}  >CHECKOUT</button>
            </div>
          </div>

        </div>



        {/* <div className="Empty-cart">
            <BsCartX />
            <span>No product in the Cart</span>
            <button className="Filled-purple-Button">RETURN TO SHOP</button>
          </div> */}


      </div>
    </div>
  );
}

export default Cart;