/* eslint-disable jsx-a11y/alt-text */
import { HiDevicePhoneMobile } from "react-icons/hi2";
import { BiMailSend } from "react-icons/bi";
import "./Footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Payments from "../../assets/payments.png";


const Footer = () => {
    return (

        <div>

            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-4 col-12 py-3">
                        <h3> <b> About </b> </h3>
                        <p>JSDEVSTORE is a premier website that offers a wide range of electronic gadgets to meet all your technological needs. From the latest smartphones to cutting-edge Headphones and everything in between, we’ve got you covered.</p>
                    </div>
                    <div className="col-md-3 col-sm-4 col-12 py-3">
                        <h3> <b> Contact </b> </h3>
                        <div className="my-2">
                            <span style={{ marginRight: '7px' }}> <FontAwesomeIcon icon={faMapMarkerAlt} /> </span>
                            <span>  7918 Liberty Ave.Wadsworth, OH 44281 </span>
                        </div>
                        <div className="my-2">
                            <span style={{ marginRight: '4px' }}> <HiDevicePhoneMobile /> </span>
                            <span>  Phone: 0471 272 0241 </span>
                        </div>
                        <div className="my-2">
                            <span style={{ marginRight: '4px' }}> <BiMailSend /> </span>
                            <span>  Email: store@jsdev.com </span>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-4 col-12 py-3">
                        <h3> <b> Categories </b> </h3>
                        <span className=" list-unstyled">
                            <li > <Link className="text-decoration-none text-black Footer-link" to="/">Headphone</Link> </li>
                            <li > <Link className="text-decoration-none text-black Footer-link" to="products">Bluetooth Speakers</Link> </li>
                            <li > <Link className="text-decoration-none text-black Footer-link" to="category">Smart watches</Link> </li>
                            <li > <Link className="text-decoration-none text-black Footer-link" to="category">Wireless Earbuds</Link> </li>
                        </span>
                    </div>
                    <div className="col-md-3 col-sm-4 col-12 py-3">
                        <h3> <b> Pages </b> </h3>
                        <span className=" list-unstyled">
                            <li > <Link className="text-decoration-none text-black Footer-link" to="/">Home</Link> </li>
                            <li > <Link className="text-decoration-none text-black Footer-link" to="products">Products</Link> </li>
                            <li > <Link className="text-decoration-none text-black Footer-link" to="category">Category</Link> </li>
                            <li > <Link className="text-decoration-none text-black Footer-link" to="Single-Product">Single Product</Link> </li>
                        </span>
                    </div>
                </div>

            </div>
            <hr />
            <div className="container ">
                <div className="row text-sm-start text-center  ">
                    <div className="col-sm-6 col-12   ">
                        <p> JSDVSTORE 2023 CREATED BY <b>KHAWAR SULTAN</b> </p>
                    </div>
                    <div className="col-sm-6 col-12 text-sm-end text-center   ">
                    <p> <img src={Payments} /> </p> 
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Footer;
