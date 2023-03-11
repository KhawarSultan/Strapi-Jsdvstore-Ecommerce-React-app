import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Products from "../Products/Products";
import Newsletter from "../Footer/Newsletter/Newsletter";
import Footer from "../Footer/Footer";

import "./Home.scss";
const Home = () => {
    return (
        <div>
            <Banner />
            <Category/>
            <Products />
            <Newsletter/>
            <Footer/>
            
        </div>
    );
};

export default Home;
