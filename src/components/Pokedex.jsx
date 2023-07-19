import React, { useEffect, useState } from 'react';
import DisplayPokeCards from './DisplayPokeCards';
import {useSearchPokemonIdRange} from '../utilites/usePokemonSearch';
import PaginationButtons from './PaginationButtons';
import totalPagesAndCount from '../utilites/totalPagesAndCount';
import Loading from './Loading';
import { useSearchParams } from 'react-router-dom';

const Pokedex = () => {

    const [page , setPage] = useState({
        totalCount:1281,
        totalPages:0,
        currentPage:1,
        currentOffset:0, // (currentPage-1)*limit
        limit:10
    });


    const {data , loading,setRange} = useSearchPokemonIdRange(1,page.limit);
    const [searchParams, ] = useSearchParams();

    function isValidPage(value) {
        if(value==0)
        return false;
        return /^\d+$/.test(value);//only for +ve whole numbers
    }



    useEffect(()=>{

        const setter = async ()=>{
            const updatedPage = {...page};
            const {totalPages , totalCount} = await totalPagesAndCount(page.limit);
            updatedPage.totalPages = totalPages;
            updatedPage.totalCount = totalCount;

            
            const pageParam = searchParams.get('page');
            if(pageParam <= totalPages){
                updatedPage.currentPage = pageParam;
                updatedPage.currentOffset = (pageParam-1)*page.limit;
                setRange({start:updatedPage.currentOffset+1 , end:updatedPage.currentOffset+updatedPage.limit});
            }
            setPage(updatedPage);
        }
        setter();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    } , [])


    
    const handleNext = ()=>{

        if(page.currentPage === page.totalPages)
            return;
        
        const update = {...page} 
        update.currentPage = page.currentPage+1;
        update.currentOffset = page.currentOffset+page.limit;
        
        setPage(update);
        setRange({start:update.currentOffset+1,end:update.currentOffset+update.limit});
    }


    const handlePrevious = ()=>{
        if(page.currentPage === 1)
            return;

        const update = {...page} 
        update.currentPage = page.currentPage-1;
        update.currentOffset = page.currentOffset-page.limit;
        
        setPage(update);
        setRange({start:update.currentOffset+1,end:update.currentOffset+update.limit});
    }
    
    return ( 
        <div className='container'>
            <div className="row align-items-start">
                {loading ? <Loading/> :<DisplayPokeCards data={data}/>}
            </div>
            <div className="row align-items-end">
                <PaginationButtons page = {page} handleNext={handleNext} handlePrevious={handlePrevious}/>
            </div>

        </div>
    );
}



export default Pokedex;