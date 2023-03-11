import "./Category.scss";
import Product from '../Products/Products';

const Category = () => {
    return (
        <div className="container">
            <div className="py-4">
                <span className="sec-heading text-capitalize"> <b>Category Title</b>
                </span>
            </div>
            <div className="row ">
                <Product innerpage={true}/>
            </div>
        </div>
    );
};

export default Category;
