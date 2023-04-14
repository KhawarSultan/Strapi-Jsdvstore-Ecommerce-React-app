/* eslint-disable no-unused-vars */
import { MdClose } from 'react-icons/md';
import "./Search.scss";
import Singleproduct from '../../../assets/products/headphone-prod-5.webp';
import { FaPlus, FaMinus, FaShoppingCart } from 'react-icons/fa';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import useFetch from '../../../Hooks/useFetch';
const Search = ({ setShowSearch }) => {

    const [query, setQuery] = useState("");
    const Navigate = useNavigate();
    const onChange = (e) => {
        setQuery(e.target.value);
    };
    let { data } = useFetch(`/api/products?populate=*&filters[title][$contains]=${query}`);
    console.log("Search Data . . . : ", data)
    if (!query.length) {
        data = null;
    }



    return (

        <div className="search-modal ">
            <div className="form-field">
                <input type="text" autoFocus placeholder="Search Products" value={query} onChange={onChange} />
                <MdClose className='pointer' onClick={() => setShowSearch(false)} />
            </div>
            <div className='pointer scrollable-div'>
                {/* scrollable-div */}
                {data?.data?.data?.map((item) => (
                    <div className='container-fluid cart-products '>
                        <div className="container ">
                            <div className="row ">
                                <div key={item.id} className="col-12 d-flex gap-2 align-items-center my-3 " onClick={() => {
                                    Navigate('/Single-Product/' + item.id);
                                    setShowSearch(false);
                                }}>
                                    <div className="">
                                        <img src={process.env.REACT_APP_API_URL + item.attributes.img.data[0].attributes.url} width={100} style={{ backgroundColor: '#eff4ee' }} alt="" />
                                    </div>
                                    <div className="my-0 ">
                                        <div className='para-dots-desc'>
                                            <span style={{ fontSize: '18px' }}> <b>  {item.attributes.title}  </b>    </span>
                                        </div>
                                        <div className='para-dots-desc'>
                                            <span style={{ fontSize: '16px' }}> {item.attributes.description}    </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr className='m-0' />
                        </div>
                    </div>

                ))}


            </div>

        </div>



    );
};

export default Search;
