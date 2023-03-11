import "./Products.scss";
import Product from './Product/Product'
const Products = (innerpage) => {
    return (

        <div className="container">
            {!innerpage && <div className="py-4">
                  <span className="sec-heading"> <b>popular products</b></span>
            </div>}
            <div className="row ">
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
            </div>
        </div>



    );
};

export default Products;
