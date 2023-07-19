import React, { useEffect, useState } from 'react';
import useFetch from './useFetch'

const usePokemonSearchByName = ()=>{

    const [name , setName] = useState("");
    const {data,error,loading,setUrl} = useFetch();
    
    useEffect(()=>{
        const url = `${process.env.REACT_APP_DATA_API}/pokemon/${name.toLowerCase()}`;
        setUrl(url);
        
    },[name]);

    const result = convertDataToCard(data);
    return {data:result, loading:loading, error , setName};
}



const convertDataToCard = (data)=>{
    let result = {};

    if(data.id){
        
        result.id = data.id;
        result.name = data.name;
        result.base_experience = data.base_experience;
        result.height = data.height;
        result.weight = data.weight;
        result.types = data.types.map(e=>e.type.name);
        result.stats = data.stats.map(e=>({name:e.stat.name , value:e.base_stat}));
        result.image = process.env.REACT_APP_IMAGE_API+`/${data.id}.svg`;
        
    }
    return result;
}



const usePokemonSearchById = ()=>{

    const [id , setId] = useState('');
    const {data,loading,setUrl} = useFetch();
    
    useEffect(()=>{
        const url = `${process.env.REACT_APP_DATA_API}/pokemon/${id}`;
        setUrl(url);
        
    },[id]);

    const result = convertDataToCard(data);
    
    return {data:[result] , loading , setId};
}

const useSearchPokemonIdRange = (start=1 , end=10)=>{
    const [range , setRange] = useState({start:start,end:end});
    const [loading , setLoading] = useState(false);
    const [data , setData] = useState([]);

    useEffect(()=>{
        const fetchData = async ()=>{
            let result = [];
            setLoading(true);
            for(let id = range.start;id<=range.end;id++){
                const url = `${process.env.REACT_APP_DATA_API}/pokemon/${id}`;
                const response = await fetch(url);
                result.push(convertDataToCard(await response.json()));
            }
            setLoading(false);
            setData(result);
        }

        fetchData();
            
    }, [range]);

    return {loading , data, setRange };

    
}




export {usePokemonSearchByName , usePokemonSearchById , useSearchPokemonIdRange};