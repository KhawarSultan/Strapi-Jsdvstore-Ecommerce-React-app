/* eslint-disable no-unused-vars */
import "./SingleProduct.scss";
import useFetch from '../../Hooks/useFetch';
import { useParams } from 'react-router-dom'
import RelatedProducts from './RelatedProducts/RelatedProducts'
import { useState, useEffect, useContext } from 'react';
import { FaPlus, FaMinus, FaShoppingCart } from 'react-icons/fa';
import Newsletter from '../Footer/Newsletter/Newsletter';
import Footer from '../Footer/Footer';
import { FaFacebookCi, FaTwitterSquare, FaInstagramSquare, FaLinkedin, FaPinterestSquare } from 'react-icons/fa';
import { Context } from "../../utils/AppContext";
const SingleProduct = () => {
    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, []);
    const [quantity, setQuantity] = useState(1);

    const Increment = () => {
        setQuantity(quantity + 1);
    };

    const Decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };
    const {handleAddToCart} = useContext(Context);
    const { id } = useParams();
    const { data } = useFetch(`/api/products?populate=*&[filters][id]=${id}`);
    const Category_id = data?.data?.data?.[0]?.attributes?.categories?.data?.[0]?.id;

    console.log("Data from Single-Product id ", id);
    console.log("Data from Single-Product id ", data);
    console.log("Product id :", id);
    console.log("Category id :", data?.data?.data?.[0]?.attributes?.categories?.data?.[0]?.id);
    return (
        <>

            <div className="container">
                <div className="row py-sm-5 py-0" >
                    <div className="col-md-6 col-12  py-5 text-center " >
                        <img src={process.env.REACT_APP_API_URL + data?.data?.data?.[0]?.attributes?.img?.data?.[0]?.attributes?.url} className="Singleproduct-image " alt="" />

                    </div>
                    <div className="col-md-6 col-12 py-sm-5 py-0 ">
                        <h4  > <b>{data?.data?.data?.[0]?.attributes?.title} </b>    </h4>
                        <p className="my-4" style={{ fontSize: '26px' }} > <b> $ {data?.data?.data?.[0]?.attributes?.price} </b> </p>
                        <p style={{ fontSize: '18px' }}> {data?.data?.data?.[0]?.attributes?.description}  </p>


                        <div className="product gap-2 d-flex my-4">
                            <div className="quantity-wrapper">
                                <button className="quantity-btn minus " onClick={Decrement}>
                                    <FaMinus style={{ fontSize: '10px' }} />
                                </button>
                                <span className="quantity px-4">{quantity}</span>
                                <button className="quantity-btn plus" onClick={Increment}>
                                    <FaPlus style={{ fontSize: '10px' }} />
                                </button>

                            </div>
                            <button className="Filled-purple-Button rounded-pill gap-2 d-flex align-items-center" onClick={()=> {
                               console.log("call handleAddToCart")
                               handleAddToCart(data?.data?.data?.[0], quantity)
                               setQuantity(1);

                            }} >
                                <FaShoppingCart />
                                Add to Cart
                            </button>
                        </div>
                        <hr />
                        <div className="my-4">

                            <p> <b>Category: </b> {data?.data?.data?.[0]?.attributes?.categories?.data?.[0]?.attributes?.title} </p>
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
                
                 
                <RelatedProducts ProductId={id} CategoryId={Category_id}    />
            </div>


            <Newsletter />
            <Footer />
        </>
    );
};

export default SingleProduct;
