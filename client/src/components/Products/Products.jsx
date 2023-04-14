import "./Products.scss";
import Product from './Product/Product'

const Products = ({ innerpage, ProductHeading, products , PaddingX }) => {
    console.log('Products component Data:', products)

    return (
        <>

            <div className={`container ${PaddingX}`}  >
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
