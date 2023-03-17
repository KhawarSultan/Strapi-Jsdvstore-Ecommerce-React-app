import "./Newsletter.scss";
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
                      
                        <div className="social-links ">
                            <a href="#"><i className="fab fa-facebook-f " style={{fontSize:'18px'}}></i></a>
                            <a href="#"><i className="fab fa-twitter "style={{fontSize:'18px'}}></i></a>
                            <a href="#"><i className="fab fa-instagram "style={{fontSize:'18px'}}></i></a>
                            <a href="#"><i className="fab fa-linkedin-in "style={{fontSize:'18px'}}></i></a>
                            <a href="#"><i className="fab fa-pinterest"style={{fontSize:'18px'}}></i></a>
                        </div>









                    </div>
                </div>
            </div>
        </div>


    );
};

export default Newsletter;
