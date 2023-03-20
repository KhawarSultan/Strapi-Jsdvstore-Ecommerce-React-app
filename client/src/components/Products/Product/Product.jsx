/* eslint-disable jsx-a11y/alt-text */
import "./Product.scss";
import "../Products.scss";
import Image from '../../../assets/products/headphone-prod-2.webp'
const Product = ({ products }) => {
    return (
        <>
            {products?.data?.map((item) => (
                <div key={item.id} className="col-lg-3 col-md-4 col-sm-6 col-6 py-3 Parent-Col-Hover ">
                    <div class="Parent-product-Image-Hover ">
                        <img src={Image} />
                        {/* <h1>{item.attributes.title}</h1> */}
                        {/* <img src={process.env.REACT_APP_API_URL + item.attributes.img.data.attributes.url} /> */}
                    </div>
                    <div className="my-2 product-description">
                        <span >  {item.attributes.title}  </span> <br />
                        <span className="my-2" style={{ fontSize: '20px' }} > <b> $99 </b> </span>
                    </div>
                </div>
            ))}


        </>

    );
};

export default Product;
