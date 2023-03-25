/* eslint-disable jsx-a11y/alt-text */
import {useNavigate} from 'react-router-dom'
import "./Product.scss";
import "../Products.scss";
import Image from '../../../assets/products/headphone-prod-2.webp'
const Product = ({ products }) => {
    console.log('Product Inner component Data:', products)
    const Navigate = useNavigate();

    return (
        <>
            {products?.data?.map((item) => (
                <div key={item.id} className="col-lg-3 col-md-4 col-sm-6 col-6 py-3 Parent-Col-Hover " onClick={()=> Navigate("Single-Product/" + item.id)}>
                    <div class="Parent-product-Image-Hover ">
                        <img  src={process.env.REACT_APP_API_URL + item.attributes.img.data[0].attributes.url} />
                    </div>
                    <div className="my-2 product-description">
                        <span >  {item.attributes.title}  </span> <br />
                        <span className="my-2" style={{ fontSize: '20px' }} > <b>{item.attributes.price} </b> </span>
                    </div>
                </div>
            ))}


        </>

    );
};

export default Product;
