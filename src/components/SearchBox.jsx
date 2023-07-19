import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'; 

const SearchBox = (props) => {

    const {setName} = props;
    const [searchBox , setSearchBox] = useState("");
    
    const handleOnSubmit = (e)=>{
        e.preventDefault();
        setName(searchBox);
    }

    return ( 
        <form onSubmit={handleOnSubmit} className='d-flex m-5'>
        <div className="input-group">
            <input type="text" className="form-control" 
            placeholder="Search Pokemon" 
            aria-label="Recipient's username" aria-describedby="basic-addon2"
            onChange={(e)=>setSearchBox(e.target.value)}
            />
            <button type='submit' className='btn btn-primary'>
            <FontAwesomeIcon icon={faMagnifyingGlass}/>
            </button>
        </div>
        </form>
     );
}
 
export default SearchBox;