import React from "react";

const PerdidaItem = ({ pet }) => {
  return (
    <div className="card petCard">
      <img src={pet.photo} alt={pet.name} />
      <h1>{pet.name}</h1>
      <p>{pet.description}</p>
      
      <p>Última vez visto: {pet.lastSeen +' en: '+pet.colonia}</p>
    </div>
  );
};

export default PerdidaItem;
