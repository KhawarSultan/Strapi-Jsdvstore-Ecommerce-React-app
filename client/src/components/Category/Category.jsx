import "./Category.scss";
import Product from '../Products/Products';
import Newsletter from '../Footer/Newsletter/Newsletter';
import Footer from '../Footer/Footer'

const Category = () => {

    return (
        <>

           

           <div className="container">
                <div className="py-4">
                    <span className="sec-heading text-capitalize"> <b>Category Products</b>
                    </span>
                </div>
                <div className="row ">
                    <Product innerpage={true} />
                </div>
            </div>
            <Newsletter />
            <Footer /> 
        </>
    );
};

export default Category;
