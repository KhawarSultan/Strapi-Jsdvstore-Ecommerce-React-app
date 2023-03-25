/* eslint-disable no-unused-vars */
/* eslint-disable no-lone-blocks */
/* eslint-disable jsx-a11y/alt-text */

import "./Category.scss";
import { useNavigate } from "react-router-dom";

const Category = ({ categories }) => {

    // console.log(categories)
    const Navigate = useNavigate();
    
    return (

        <>

            <div className="container">
                <div className="py-4">
                    <span className="sec-heading text-capitalize"> <b>Categories</b>
                    </span>
                </div>
                <div className="row">
                    {categories?.data?.map((item) => (
                        <div key={item.id} className="col-lg-3 col-md-4 col-sm-6 col-12 py-3 " onClick={() => Navigate(`category/${item.id}`)} >
                            <div class="Parent-category-Image-Hover bottom-top">
                                <img src={process.env.REACT_APP_API_URL + item.attributes.img.data.attributes.url || 'Item not found'} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};
export default Category;



// {categories.data.map((item) => (
//     <div key={item.id} className="col-lg-3 col-md-4 col-sm-6 col-12 py-3 ">
//         <div class="Parent-category-Image-Hover bottom-top">
//             <img src={process.env.REACT_APP_API_URL + item.attributes.img.data.attributes.url} />
//         </div>
//     </div>
// ))}





{/* 
                    <div className="col-lg-3 col-md-4 col-sm-6 col-12 py-3">
                        <div class="Parent-category-Image-Hover bottom-top">
                            <img src={Speakers} />
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 col-12 py-3">
                        <div class="Parent-category-Image-Hover bottom-top">
                            <img src={Smartwatch} />
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 col-12 py-3">
                        <div class="Parent-category-Image-Hover bottom-top">
                            <img src={Earbuds} />
                        </div>
                    </div> 
*/}