import useFetch from '../../../Hooks/useFetch';
import Products from '../../Products/Products'
const RelatedProducts = ({ ProductId, CategoryId }) => {
    // const { data } = useFetch`/api/products?populate=*&[filters][id][$ne]=${ProductId}&[filters][categories][id]=${CategoryId}&pagination[start]=0&pagination[limit]=4`;
    const { data } = useFetch(`/api/products?populate=*&[filters][id][$ne]=${ProductId}&[filters][categories][id]=${CategoryId}&pagination[start]=0&pagination[limit]=4`);
    console.log("Single-item : " , data);
    return (

        <div>
            <Products ProductHeading={"Related Products"} products={data?.data} PaddingX={'px-0'} />
        </div>
    );
};

export default RelatedProducts;
