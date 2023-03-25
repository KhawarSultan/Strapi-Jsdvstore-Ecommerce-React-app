import "./Category.scss";
import {useEffect} from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../../Hooks/useFetch'
import Products from '../Products/Products';
import Newsletter from '../Footer/Newsletter/Newsletter';
import Footer from '../Footer/Footer'

const Category = () => {
    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, []);
    const { id } = useParams();
    const { data } = useFetch(`/api/products?populate=*&[filters][categories][id]=${id}`);
    console.log("Data from category id ",id);
    console.log("Data from category id ",data);

    return (
        <>

            <div className="container">
                <div className="py-4">
                    <span className="sec-heading text-capitalize"> <b>{data?.data?.data?.[0]?.attributes?.categories?.data?.[0]?.attributes?.title}</b>
                    </span>
                </div>
                <div className="row ">
                    <Products innerpage={true} products={data?.data} />
                </div>
            </div>
            <Newsletter />
            <Footer />
        </>
    );
};

export default Category;
