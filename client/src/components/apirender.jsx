// /* eslint-disable no-lone-blocks */
// /* eslint-disable jsx-a11y/alt-text */
// /* eslint-disable no-unused-vars */
// import { useEffect, useContext } from 'react';
// import fetchDataFromApi from '../utils/api';
// import { Context } from '../utils/AppContext';

// const apirender = () => {

//     const { categories, setCategories } = useContext(Context);
//     const { products, setProducts } = useContext(Context);


//     useEffect(() => {
//         getCategories();
//         getProducts();

//     }, []);
//     const getCategories = () => {
//         fetchDataFromApi("/api/categories?populate=*").then((res) => {
//             console.log(res);
//             setCategories(res);
//         });
//     };
//     const getProducts = () => {
//         fetchDataFromApi("/api/products?populate=*").then((res) => {
//             console.log(res);
//             setProducts(res);
//         });
//     };
  
//     return (
//         <div>
//             {categories ? (categories.data.map((item) => (
//                 <div className="col-12" key={item.id}>
//                     <h1>{item.data.attributes.title}</h1>
//                     <img src={item.data.attributes.img.data.attributes.url} />
//                 </div>
//             ))) : (
//                 <p>No categories found.</p>
//             )}


//         </div>
//     )
// }

// export default apirender