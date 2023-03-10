/* eslint-disable jsx-a11y/alt-text */
import "./Product.scss";
import "../Products.scss";
import Image from '../../../assets/products/headphone-prod-2.webp'
const Product = () => {
    return (
        <div className="col-lg-3 col-md-4 col-sm-6 col-6 py-3 Parent-Col-Hover ">
            <div class="Parent-product-Image-Hover ">
                <img src={Image} />
            </div>
            <div className="my-2 product-description">
                <span>  Boat Rockerz 450 DC edition | Wireless Headphones  </span> <br />
                <span className="my-2" style={{ fontSize: '20px' }} > <b> $99 </b> </span>
            </div>
        </div>
    );
};

export default Product;
