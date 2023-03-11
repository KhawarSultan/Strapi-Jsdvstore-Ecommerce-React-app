import "./SingleProduct.scss";
import RelatedProducts from './RelatedProducts/RelatedProducts'
import { useState } from 'react';
import { FaPlus, FaMinus, FaShoppingCart } from 'react-icons/fa';
import Singleproduct from '../../assets/products/headphone-prod-5.webp'
import { FaFacebookCi, FaTwitterSquare, FaInstagramSquare, FaLinkedin, FaPinterestSquare } from 'react-icons/fa';
const SingleProduct = () => {
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
        <div className="container">
            <div className="row align-items-center py-sm-5 py-0">
                <div className="col-sm-6 col-12  py-5 text-center ">
                    <img src={Singleproduct} className="Singleproduct"   alt="" />
                </div>
                <div className="col-sm-6 col-12  py-sm-5 py-0 ">
                    <h4 > <b> Boat Rockerz 450 DC edition | Wireless Headphone with 40mm Dynamic Driver </b>    </h4>
                    <p className="my-4" style={{ fontSize: '26px' }} > <b> $99 </b> </p>
                    <p  style={{ fontSize: '18px' }}> There is no better justice to your playlist & binging than Rockerz 450 boAt DC edition. If low battery is your enemy, the 15HRS non-stop playback is here to rightfully combat that. Feel the power rising up in your veins as you indulge in your playlist with its 40mm dynamic drivers. Make adaptiveness your superpower just like the adaptive headband of Rockerz 450. Get ready to rule with Boat Rockerz </p>


                    <div className="product gap-4 d-flex my-4">
                        <div className="quantity-wrapper">
                            <button className="quantity-btn minus " onClick={handleDecrement}>
                                <FaMinus style={{ fontSize: '10px' }} />
                            </button>
                            <span className="quantity px-4">{quantity}</span>
                            <button className="quantity-btn plus" onClick={handleIncrement}>
                                <FaPlus style={{ fontSize: '10px' }} />
                            </button>

                        </div>
                        <button className="Filled-purple-Button gap-2 d-flex align-items-center" >
                            <FaShoppingCart />
                            Add to Cart
                        </button>
                    </div>
                    <hr />
                    <div className="my-4">

                        <p> <b>Category: </b> Headphones </p>
                        <div className="d-flex ">
                            <p className="a"> <b>Share:</b> </p>
                            <span className="social-links">
                                <a href="#"><i className="fab fa-facebook-f text-black"></i></a>
                                <a href="#"><i className="fab fa-twitter text-black"></i></a>
                                <a href="#"><i className="fab fa-instagram text-black"></i></a>
                                <a href="#"><i className="fab fa-linkedin-in text-black"></i></a>
                                <a href="#"><i className="fab fa-pinterest text-black"></i></a>
                            </span>
                        </div>

                    </div>
                </div>
            </div>
            <RelatedProducts/>
        </div>
    );
};

export default SingleProduct;
