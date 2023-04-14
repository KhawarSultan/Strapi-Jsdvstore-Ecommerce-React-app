/* eslint-disable no-lone-blocks */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line react-hooks/exhaustive-deps
import { useEffect, useState, useContext } from 'react';
import fetchDataFromApi from '../../utils/api'
import { Context } from '../../utils/AppContext';
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Products from "../Products/Products";
import Newsletter from "../Footer/Newsletter/Newsletter";
import Footer from "../Footer/Footer";
import App from '../../App';
import "./Home.scss";
const Home = () => {


    //Full stack video
    const { categories, setCategories } = useContext(Context);
    const { products, setProducts } = useContext(Context);
    useEffect(() => {
        getProducts();
        getCategories();
    }, []);

    const getCategories = () => {
        fetchDataFromApi("/api/categories?populate=*").then((res) => {
            console.log("Home component categories response", res.data);
            setCategories(res.data);
           
        });
    };
    const getProducts = () => {
        fetchDataFromApi("/api/products?populate=*").then((res) => {
            console.log("Home component Products reponse", res.data);
            setProducts(res.data);
        });
    };

    return (
        <div>
            <Banner />
            <Category categories={categories} />
            <Products ProductHeading={"Popular Products"} products={products}  />
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