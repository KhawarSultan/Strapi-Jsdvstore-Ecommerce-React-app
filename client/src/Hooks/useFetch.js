/* eslint-disable no-unreachable */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import fetchDataFromApi from '../utils/api';

const useFetch = (change) => {
    const [data, setData] = useState()



    // useEffect( async ()=>{
    //     makeApiCall()
    // },[change])

    // const makeApiCall = async  () => {
    //    const res = await fetchDataFromApi(change)
    //     setData(res);
    // };
    useEffect(() => {
        async function fetchData() {
            const response = await fetchDataFromApi(change);
            setData(response);
        }
        fetchData();
    }, [change]);
    return {data};





}
export default useFetch;