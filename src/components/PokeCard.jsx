import React from "react";
import PokeStatBox from "./PokeStatBox";

const PokeCard = (props) => {
  const {card} = props;
  
  return (
    <div className="card m-4" style={{width: "18rem"}}>

      <div className="card-body">
        <h2 className="card-title">{card.name} #{card.id}</h2>
      </div>

      <img src={card.image} alt="Image not available or loading" style={{maxHeight:"16rem"}} />

      <PokeStatBox stats={card.stats}/>
    </div>
  );
};

export default PokeCard;
