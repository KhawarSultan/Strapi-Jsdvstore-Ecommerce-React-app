import "./Products.scss";
import Product from './Product/Product'
const Products = () => {
    return (

        <div className="container">
            <div className="py-4">
                <span className="sec-heading"> <b>popular products</b>
                </span>
            </div>
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
