import React from 'react';
import { useState,useEffect } from "react";


const useFetch = () => {
    const [url , setUrl] = useState("");
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({});
    const [error , setError] = useState({});
    
    useEffect(() => {
        if (!url) return;
        
        const fetchData = async () => {
            setLoading(true);
            setData({});
            try{
                const response = await fetch(url);
                const data = await response.json();
                setData(data);
                setError({});
            } catch(err){
                setError({error:err});
            }
            setLoading(false);
        };
        fetchData();
    }, [url]);

    return { loading, data,error,setUrl };
};

export default useFetch;

