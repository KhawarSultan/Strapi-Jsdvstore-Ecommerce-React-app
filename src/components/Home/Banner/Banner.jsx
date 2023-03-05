import "./Banner.scss";
import Heroimage from "../../../assets/banner-img.png"
function Banner() {
    return (

        <div className="gradient" >
            <div className="container">
                <div className="row d-flex align-items-center ">
                    <div className="col-12 col-sm-6 text-white py-5 text-center text-sm-start ">
                        <span className="Banner-heading">SALES</span>
                        <p>An online store catering to all electronic gadget lovers.Our wide variety of products comes from top-notch brands and offers high quality at competitive prices, Order Now !! </p>
                        <div>
                            <button className="Holo-Button">READ MORE</button>
                            <button className="Filled-Button mt-2 mx-3">SHOP NOW</button>
                        </div>

                    </div>
                    <div className="col-12 col-sm-6 d-flex justify-content-center py-5">
                        <img src={Heroimage} className="Banner-img" alt="" />

                    </div>
                </div>
            </div>

        </div>


    );
};

export default Banner;
