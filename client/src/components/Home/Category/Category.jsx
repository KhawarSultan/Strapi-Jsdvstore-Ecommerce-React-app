/* eslint-disable jsx-a11y/alt-text */
import "./Category.scss";
import Headphones from '../../../assets/category/cat-1.jpg'
import Speakers from '../../../assets/category/cat-2.jpg'
import Smartwatch from '../../../assets/category/cat-3.jpg'
import Earbuds from '../../../assets/category/cat-4.jpg'


const Category = () => {
    return (

        <div className="container">
            <div className="py-4">
                <span className="sec-heading text-capitalize"> <b>Category</b>
                </span>
            </div>

            <div className="row ">
                <div className="col-lg-3 col-md-4 col-sm-6 col-12 py-3 ">
                    <div class="Parent-category-Image-Hover bottom-top">
                        <img src={Headphones} />
                    </div>
                </div>
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
                </div>
            </div>

        </div>



    );
};

export default Category;
