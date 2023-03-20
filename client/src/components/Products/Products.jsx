import "./Products.scss";
import Product from './Product/Product'

const Products = ({ innerpage, ProductHeading ,products }) => {
   

    return (
        <>
           

            <div  className="container">
                {!innerpage && <div className="py-4">
                    <span className="sec-heading text-capitalize"> <b>{ProductHeading}</b></span>
                </div>}
                <div className="row">
                    <Product products={products} />
                </div>
            </div>


        </>

    );
};

export default Products;
