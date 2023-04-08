import React from "react";


const AnimalFavorito = ({ animal, handleRemoveItem }) => {
  return (
    <div className="ProductoC">
      <div className="ProductoC-info">
        <div className="card">
          <div className="card-img">
            <img src={animal.Foto} alt={animal.NombreAnimal} />
          </div>
          <div className="card-body">
            <h3 className="card-title">{animal.NombreAnimal}</h3>
            <p>{`Raza: ${animal.Caracteristicas}`}</p>
            <button onClick={() => handleRemoveItem(animal.IdAnimal)}>
              x
            </button>
          </div>
          <div className="card-price">
            <span className="card-currency">Edad: </span>
            <span className="card-amount">{animal.Edad}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimalFavorito;
