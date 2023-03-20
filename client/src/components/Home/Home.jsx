/* eslint-disable no-lone-blocks */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
import { useEffect, useState, useContext } from 'react';
import fetchDataFromApi from '../../utils/api'
import { Context } from '../../utils/AppContext';
import axios from "axios";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Products from "../Products/Products";
import Newsletter from "../Footer/Newsletter/Newsletter";
import Footer from "../Footer/Footer";
import "./Home.scss";
import Apirender from '../apirender'

const Home = () => {

    //Full stack video
    const {categories, setCategories , products, setProducts} = useContext(Context);

    useEffect(() => {
        getCategories();
        getProducts();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getCategories = () => {
        fetchDataFromApi("/api/categories?populate=*").then((res) => {
            console.log("categories", res.data);
            setCategories(res.data);
        });
    };
    const getProducts = () => {
        fetchDataFromApi("/api/products?populate=*").then((res) => {
            console.log("Products", res.data);
            setProducts(res.data);
        });
    };

    return (
        <div>
            <Banner />
            <Category categories={categories} />
            <Products products={products} ProductHeading={"Popular Products"} />
            <Newsletter />
            <Footer />
        </div>
    );
};

export default Home;



//Strapi Crash Course video

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const data = await axios.get(
    //                 process.env.REACT_APP_API_URL + "/categories?populate=*", {
    //                 header: { Authorization: "bearer" + process.env.REACT_APP_API_TOKEN, },
    //             });
    //             console.log(data);
    //         } catch (err) {
    //             console.log(err);
    //         }
    //     };
    //     fetchData();

    // }, [])