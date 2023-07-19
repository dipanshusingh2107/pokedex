import React, { useEffect, useState } from 'react';
import DisplayPokeCards from './DisplayPokeCards';
import {useSearchPokemonIdRange} from '../utilites/usePokemonSearch';
import PaginationButtons from './PaginationButtons';
import totalPagesAndCount from '../utilites/totalPagesAndCount';
import Loading from './Loading';
import { useSearchParams } from 'react-router-dom';

const Pokedex = () => {

    const [searchParams, ] = useSearchParams();


    const generateInitialPage = ()=>{

        function isValidPage(value) {
            return /^\d+$/.test(value);//only for +ve whole numbers
        }

        const initialPage = {
            totalCount:1281,
            totalPages:0,
            currentPage: 1,
            currentOffset:0, // (currentPage-1)*limit
            limit:10
        }
        
        let pageParam = searchParams.get('page');
        if(isValidPage(pageParam) && pageParam>0 && pageParam <= 129){
            pageParam = parseInt(pageParam);
            initialPage.currentPage = pageParam;
            initialPage.currentOffset = (pageParam-1)*initialPage.limit;
        }

        return initialPage;

    }


    const [page , setPage] = useState(generateInitialPage());


    const {data , loading,setRange} = useSearchPokemonIdRange((page.currentPage-1) * page.limit + 1, page.currentPage*page.limit);
    

    

    useEffect(()=>{
        setRange({start:page.currentOffset+1 , end:page.currentOffset+page.limit});
        window.scrollTo(0,0);
    } , [page.currentPage])

    useEffect(()=>{

        const setter = async ()=>{
            const updatedPage = {...page};
            const {totalPages , totalCount} = await totalPagesAndCount(page.limit);
            updatedPage.totalPages = totalPages;
            updatedPage.totalCount = totalCount;
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
    }


    const handlePrevious = ()=>{
        if(page.currentPage === 1)
            return;

        const update = {...page} 
        update.currentPage = page.currentPage-1;
        update.currentOffset = page.currentOffset-page.limit;
        
        setPage(update);
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