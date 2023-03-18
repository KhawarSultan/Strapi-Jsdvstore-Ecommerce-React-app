import "./Products.scss";
import Product from './Product/Product'

const Products = ({ innerpage, ProductHeading }) => {
   

    return (
        <>
           

            <div  className="container">
                {!innerpage && <div className="py-4">
                    <span className="sec-heading text-capitalize"> <b>{ProductHeading}</b></span>
                </div>}
                <div className="row">
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                </div>
            </div>


        </>

    );
};

export default Products;
