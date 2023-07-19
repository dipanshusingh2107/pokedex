import React from 'react';
import PokeCard from './PokeCard';


const DisplayPokeCards = (props) => {
    const {data} = props;


    const display = ()=>{
        if(data){
            return data.map((card , idx)=>(<PokeCard card={card}key={idx}/>))
        }else{
            return "No card found";
        }
    }


    return ( 
        <div className='d-inline-flex flex-wrap justify-content-center'>
            {display()}
        </div>
    );
}
 
export default DisplayPokeCards;