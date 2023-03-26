/* eslint-disable no-lone-blocks */
/* eslint-disable no-unused-vars */
import "./Cart.scss";
import React, { useState } from 'react';
import { MdClose } from 'react-icons/md';
import { BsCartX } from 'react-icons/bs';
import { FaPlus, FaMinus, FaShoppingCart } from 'react-icons/fa';
import Singleproduct from '../../assets/products/headphone-prod-5.webp';

const Cart = ({ setShowCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const [number1, setNumber1] = useState(0);
  // const [number2, setNumber2] = useState(0);
  const [result, setResult] = useState(0);
  const quantity2 = 99;

  const handleNumber1Change = (event) => {
    number1(parseInt(event.target.value));
  };

  // const handleNumber2Change = (event) => {
  //   quantity(parseInt(event.target.value));
  // };

  const handleMultiply = () => {
    setResult(quantity * quantity2);
  };


  return (

    <>

      <div className="search-modal top-bottom   ">
        <div className="content-a">

          <div className="form-field-cart ">
            <div className="Cart-product-heading d-flex  align-items-center">SHOPPING CART</div>
            <MdClose className='pointer cart-close' onClick={() => setShowCart(false)} />
          </div>
          <div className='cart-products pointer '>
            <div className="container">
              <div className="row">
                <div className="col-12 d-flex gap-2 align-items-center my-3">
                  <div className="">
                    <img src={Singleproduct} width={100} style={{ backgroundColor: '#eff4ee' }} alt="" />
                  </div>
                  <div className="my-0">
                    <div>
                      <span style={{ fontSize: '18px' }}> <b> Boat Rockerz 450 DC edition </b>    </span>
                    </div>
                    <div className="product my-2 " >
                      <div className="quantity-wrapper" >
                        <button className="quantity-btn minus " value={number1} onChange={handleNumber1Change} onClick={function() { handleDecrement(); handleMultiply(); }} >
                          <FaMinus style={{ fontSize: '10px' }} />
                        </button>
                        <span className="quantity px-4">{quantity}</span>
                        <button className="quantity-btn plus" value={number1} onChange={handleNumber1Change} onClick={function() { handleIncrement(); handleMultiply(); }} >
                          <FaPlus style={{ fontSize: '10px' }} />
                        </button>
                      </div>
                    </div>
                    <span style={{ fontSize: '18px' }} > <b> {quantity} x <span style={{ color: '#872ce1' }}>  ${quantity2}  </span></b> </span>
                  </div>
                </div>
              </div>
              <hr className='m-0' />
            </div>
          </div>
          <div className='cart-products pointer'>
            <div className="container">
              <div className="row">
                <div className="col-12 d-flex gap-2 align-items-center my-3">
                  <div className="">
                    <img src={Singleproduct} width={100} style={{ backgroundColor: '#eff4ee' }} alt="" />
                  </div>
                  <div className="my-0">
                    <div>
                      <span style={{ fontSize: '18px' }}> <b> Boat Rockerz 450 DC edition </b>    </span>
                    </div>
                    <span style={{ fontSize: '16px' }}> Boat Rockerz 450 DC edition     </span>
                  </div>
                </div>
              </div>
              <hr />

            </div>
          </div>

        </div>



        <div className="content-b">
          <div className="d-flex align-items-center p-2  justify-content-between m-0">
            <span style={{ fontSize: '20px' }}> <b> SUBTOTAL: </b> </span>
            <span style={{ fontSize: '18px', color: '#872ce1' }}  > <b>  ${result} </b> </span>
          </div>
          <hr className="m-0" />
          <div className="p-1 text-center d-flex" >
            <button className="Filled-purple-Button " style={{ margin: 'auto', textAlign: 'center', width: '100%' }}  >CHECKOUT</button>
          </div>
        </div>
      </div >




    </>
  );
}

export default Cart;


{/* <div className="Empty-cart">
  <BsCartX />
  <span>No product in the Cart</span>
  <button className="Filled-purple-Button">RETURN TO SHOP</button>
</div> */}