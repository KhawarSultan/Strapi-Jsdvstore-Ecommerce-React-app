import { FaStoreAltSlash } from "react-icons/fa";
import "./Footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return (


        <div className="container">
            <div className="row">
                <div className="col-md-3 col-sm-4 col-12 py-3">
                    <h3> <b> About </b> </h3>
                    <p>JSDEVSTORE is a premier website that offers a wide range of electronic gadgets to meet all your technological needs. From the latest smartphones to cutting-edge Headphones and everything in between, we’ve got you covered.</p>
                </div>
                <div className="col-md-3 col-sm-4 col-12 py-3">
                    <h3> <b> Contact </b> </h3>
                    <div className="my-2">
                        <span style={{marginRight:'5px'}}> <FontAwesomeIcon icon={faMapMarkerAlt} /> </span>
                        <span>  7918 Liberty Ave.Wadsworth, OH 44281 </span>
                    </div>
                    <div className="my-2">
                        <span style={{marginRight:'5px'}}> <FontAwesomeIcon icon={faMapMarkerAlt} /> </span>
                        <span>  7918 Liberty Ave.Wadsworth, OH 44281 </span>
                    </div>
                    <div className="my-2">
                        <span style={{marginRight:'5px'}}> <FontAwesomeIcon icon={faMapMarkerAlt} /> </span>
                        <span>  7918 Liberty Ave.Wadsworth, OH 44281 </span>
                    </div>
                </div>
                <div className="col-md-3 col-sm-4 col-12 py-3">
                    <h3> <b> Categories </b> </h3>
                    <p>JSDEVSTORE is a premier website that offers a wide range of electronic gadgets to meet all your technological needs. From the latest smartphones to cutting-edge Headphones and everything in between, we’ve got you covered.</p>
                </div>  
                <div className="col-md-3 col-sm-4 col-12 py-3">
                    <h3> <b> Pages </b> </h3>
                    <p>JSDEVSTORE is a premier website that offers a wide range of electronic gadgets to meet all your technological needs. From the latest smartphones to cutting-edge Headphones and everything in between, we’ve got you covered.</p>
                </div>
            </div>
        </div>

    );
};

export default Footer;
