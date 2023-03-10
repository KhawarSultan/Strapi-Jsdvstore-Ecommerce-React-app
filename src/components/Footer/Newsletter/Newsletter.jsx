import "./Newsletter.scss";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
const Newsletter = () => {
    return (
        <div className="Newsletter-bg py-5 my-5">
            <div className="container py-5">
                <div className="row ">
                    <div className="col">
                        <h6 > <b> NEWSLETTER </b> </h6>
                        <h3 style={{ letterSpacing: '-1px' }}> <b> SIGN UP FOR LATEST UPDATES AND OFFERS </b> </h3>
                        <p> We respects your privacy and is committed to protecting any personal information given </p>
                        <div class="input-container my-3">
                            <input type="text" placeholder="Email Address" />
                            <button className="Filled-purple-Button">Submit</button>
                        </div>
                        <div >
                            <FaFacebook className=" mx-2 newletter-icon" />
                            <FaTwitter className=" mx-2 newletter-icon" />
                            <FaInstagram className=" mx-2 newletter-icon "/>
                            <FaLinkedin className=" mx-2 newletter-icon "/>
                        </div>










                    </div>
                </div>
            </div>
        </div>


    );
};

export default Newsletter;
