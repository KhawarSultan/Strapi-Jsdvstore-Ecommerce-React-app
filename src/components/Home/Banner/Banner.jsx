import "./Banner.scss";
import Heroimage from "../../../assets/banner-img.png"
function Banner() {
    return (

        <div className="gradient" >
            <div className="container content">
                <div className="row d-flex align-items-center">
                    <div className="col-12 col-sm-6 text-white text-center text-sm-start py-5 left ">
                        <span className="Banner-heading">SALES</span>
                        <p>An online store catering to all electronic gadget lovers.Our wide variety of products comes from top-notch brands and offers high quality at competitive prices, Order Now !! </p>
                        <div className=" d-flex align-items-sm-start justify-content-sm-start  align-items-center justify-content-center gap-2">
                            <button className="Holo-Button">READ MORE</button>
                            <button className="Filled-Button ">SHOP NOW</button>
                        </div>

                    </div>
                    <div className="col-12 col-sm-6 d-flex justify-content-center  py-5 right">
                        <img src={Heroimage} className="Banner-img" alt="" />

                    </div>
                </div>
            </div>

        </div>


    );
};

export default Banner;
