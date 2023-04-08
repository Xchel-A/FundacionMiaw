import React from "react";
import "@styles/MenuF.scss";
import AnimalesFavoritosItem from "@components/AnimalesFavoritosItem";

const AnimalesFavoritos = ({ favoritos, eliminarAnimal }) => {
  const animales = favoritos.reduce((acc, favorito) => {
    if (acc[favorito.IdAnimal]) {
      acc[favorito.IdAnimal].cantidad += 1;
    } else {
      acc[favorito.IdAnimal] = {
        ...favorito,
        cantidad: 1,
      };
    }
    return acc;
  }, {});

 

  const handleRemoveItem = (Id) => {
    eliminarAnimal(Id);
  };

  return (
    <div className="MenuF">
      <li>
        {Object.values(animales).map((animal) => (
          <AnimalesFavoritosItem
            key={animal.IdAnimal}
            animal={animal}
            handleRemoveItem={handleRemoveItem}
          />
        ))}
       
      </li>
    </div>
  );
};

export default AnimalesFavoritos;
