import axios from "axios";
const fetchDataFromApi = async (url) => {
    try {
        const data = await axios.get(
            process.env.REACT_APP_API_URL + url, {
            headers: { Authorization: "bearer" + process.env.REACT_APP_API_TOKEN, },
        });
        // console.log(data);
        return data;
    } catch (err) {
        console.log(err);
    }
};
export default fetchDataFromApi;


// const params = {
//     headers: {
//         Authorization: "bearer" + process.env.REACT_APP_API_TOKEN,
//     },
// };

// export const fetchDataFromApi = async (url) => {
//     try {
//         const { data } = await axios.get(
//             process.env.REACT_APP_API_URL + url,
//             params
//         );
//         // return data;
//         console.log(data)
//     } catch (error) {
//         console.log("Strapi connection fails !!")
//     }
// };
