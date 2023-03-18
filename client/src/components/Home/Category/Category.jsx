/* eslint-disable jsx-a11y/alt-text */
import "./Category.scss";
import Headphones from '../../../assets/category/cat-1.jpg'
import Speakers from '../../../assets/category/cat-2.jpg'
import Smartwatch from '../../../assets/category/cat-3.jpg'
import Earbuds from '../../../assets/category/cat-4.jpg'
import useFetch from '../../../utils/useFetch'
import { useEffect, useState, useContext } from 'react';
import axios from "axios";

const Category = (categories) => {


    // {categories.data.map((item) => (
    //     <div key={item.id} className="col-lg-3 col-md-4 col-sm-6 col-12 py-3 ">
    //         <div class="Parent-category-Image-Hover bottom-top">
    //             <img src={process.env.REACT_APP_API_URL + item.attributes.img.data.attributes.url} />
    //         </div>
    //     </div>
    // ))}





    return (

        <>
            <div className="container">
                <div className="py-4">
                    <span className="sec-heading text-capitalize"> <b>Category</b>
                    </span>
                </div>
                <div className="row ">
                    {categories.data.map((item) => (
                        <div key={item.id} className="col-lg-3 col-md-4 col-sm-6 col-12 py-3 ">
                            <div class="Parent-category-Image-Hover bottom-top">
                                <img src={process.env.REACT_APP_API_URL + item.attributes.img.data.attributes.url} />
                            </div>
                        </div>
                    ))}

                    {/* 
                    <div className="col-lg-3 col-md-4 col-sm-6 col-12 py-3">
                        <div class="Parent-category-Image-Hover bottom-top">
                            <img src={Speakers} />
                        </div>
                    </div> <div className="col-lg-3 col-md-4 col-sm-6 col-12 py-3">
                        <div class="Parent-category-Image-Hover bottom-top">
                            <img src={Smartwatch} />
                        </div>
                    </div> <div className="col-lg-3 col-md-4 col-sm-6 col-12 py-3">
                        <div class="Parent-category-Image-Hover bottom-top">
                            <img src={Earbuds} />
                        </div>
                    </div> */}
                </div>

            </div>
        </>


    );
};

export default Category;
