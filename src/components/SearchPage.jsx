import SearchBox from "./SearchBox";

import { usePokemonSearchByName } from "../utilites/usePokemonSearch";
import PokeCard from "./PokeCard";
import Loading from "./Loading";


const SearchPage = () => {
    const {data ,error, loading , setName} = usePokemonSearchByName()

    return (  
        <div>
            { (Object.keys(error).length !==0) && 
            <div className="alert alert-secondary" role="alert">
                Pokemon Not found
            </div>}

        <div className='d-flex align-items-center justify-content-center'>
            <SearchBox setName={setName}/>
        </div>       

            {loading && <Loading/>}
            
            {(Object.keys(data).length !==0) && <PokeCard card={data}></PokeCard>}
        </div>
    );
}
 
export default SearchPage;