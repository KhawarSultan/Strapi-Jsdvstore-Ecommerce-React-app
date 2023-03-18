/* eslint-disable no-unused-vars */
import { useEffect, useState, useContext } from 'react';
import axios from "axios";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Products from "../Products/Products";
import Newsletter from "../Footer/Newsletter/Newsletter";
import Footer from "../Footer/Footer";
import fetchDataFromApi from '../../utils/api'
import "./Home.scss";
import { Context } from '../../utils/AppContext';




const Home = () => {



    
    //Full stack video

    const { categories, setCategories, products, setProducts } = useContext(Context);
    useEffect(() => {
        getCategories();
        getProducts();
        
    }, []);

    const getCategories = () => {
        fetchDataFromApi ("/categories?populate=*").then((response) => {
            console.log(response);
            setCategories(response);
        });
    };
    const getProducts = () => {
        fetchDataFromApi("/products?populate=*").then((response) => {
            console.log(response);
            setProducts(response);
        });
    };


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

    // useEffect(() => {
    //     getCategories()
    // }, [])
    // const getCategories = () => {
    //     fetchDataFromApi("/categories").then(response => console.log(response))
    // }