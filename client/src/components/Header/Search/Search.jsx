/* eslint-disable no-unused-vars */
import { MdClose } from 'react-icons/md';
import "./Search.scss";
import Singleproduct from '../../../assets/products/headphone-prod-5.webp';
import { FaPlus, FaMinus, FaShoppingCart } from 'react-icons/fa';

const Search = ({ setShowSearch }) => {
    return (

        <div className="search-modal ">
            <div className="form-field">
                <input type="text" autoFocus placeholder="Search Products" />
                <MdClose className='pointer' onClick={() => setShowSearch(false)} />
            </div>
            <div className='cart-products pointer'>
                <div className="container">
                    <div className="row">
                        <div className="col-12 d-flex gap-2 align-items-center my-3">
                            <div className="">
                                <img src={Singleproduct} width={100} style={{ backgroundColor: '#eff4ee' }} alt="" />
                            </div>
                            <div className="my-0">
                                <div>
                                    <span style={{ fontSize: '18px' }}> <b> Boat Rockerz 450 DC edition </b>    </span>
                                </div>
                                <span style={{ fontSize: '16px' }}> Boat Rockerz 450 DC edition     </span>
                            </div>
                        </div>
                    </div>
                    <hr className='m-0' />

                </div>
            </div>
            <div className='cart-products pointer'>
                <div className="container">
                    <div className="row">
                        <div className="col-12 d-flex gap-2 align-items-center my-3">
                            <div className="">
                                <img src={Singleproduct} width={100} style={{ backgroundColor: '#eff4ee' }} alt="" />
                            </div>
                            <div className="my-0">
                                <div>
                                    <span style={{ fontSize: '18px' }}> <b> Boat Rockerz 450 DC edition </b>    </span>
                                </div>
                                <span style={{ fontSize: '16px' }}> Boat Rockerz 450 DC edition     </span>
                            </div>
                        </div>
                    </div>
                    <hr />

                </div>
            </div>
        </div>



    );
};

export default Search;
