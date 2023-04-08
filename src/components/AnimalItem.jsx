import React, { useContext, useState } from "react";
import '@styles/AnimalItem.scss'


import AppContext from '../context/AppContext';
import Corazon from '@assets/like.png'
const AnimalItem = ({ animal }) => {


  //Variable que resive dos parametros
  // 1- valor inicial, 2-Funcion actualiza


  const { agregarFavoritos } = useContext(AppContext);

  const [fav, setFav] = useState('');

  const handleClick = (item) => {
    agregarFavoritos(item);
    //console.log(item);
  };

  const handleCart = () => {

    setCart('Hola');

  }

  return (
    <div>
      <div className="ProductItem">
        <img src={animal.Foto} alt={animal.NombreAnimal} className="ProductItem-img" />
        <div className="product-info">
          <div>
            <p>{animal.NombreAnimal}</p>
            <p>Edad:{animal.Edad}     </p>
            <p> Raza:{animal.Caracteristicas}</p>
            <p>{animal.Descripcion}</p>
          </div>
          <figure className='botton' onClick={() => handleClick(animal)}>
            <img height="20px" src={Corazon} alt="" />
          </figure>
        </div>
      </div>
    </div>

  );
};

export default AnimalItem;