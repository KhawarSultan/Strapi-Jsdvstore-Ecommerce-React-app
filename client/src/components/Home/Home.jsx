/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Products from "../Products/Products";
import Newsletter from "../Footer/Newsletter/Newsletter";
import Footer from "../Footer/Footer";
import { fetchDataFromApi } from '../../utils/api'
import "./Home.scss";
import axios from "axios";





const Home = () => {


    // const [products, setProducts] = useState([]);
    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const data = await axios.get(
    //                 process.env.REACT_APP_API_URL + "/categories", {
    //                 header: { Authorization: "bearer" + process.env.REACT_APP_API_TOKEN, },
    //             });
    //             console.log(data);
    //         } catch (err) {
    //             console.log(err);
    //         }
    //     };
    //     fetchData();

    // }, [])







    useEffect(() => {
        getCategories()
    }, [])
    const getCategories = () => {
        fetchDataFromApi("/categories").then(response => console.log(response))
    }




    return (
        <div>
            <Banner />
            <Category />
            <Products ProductHeading={"Popular Products"} />
            <Newsletter />
            <Footer />
        </div>
    );
};

export default Home;
