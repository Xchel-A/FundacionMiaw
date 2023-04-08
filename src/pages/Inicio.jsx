import React from 'react';
import InicioHead from '@components/InicioHead';
//import '@styles/MiOrden.scss'
//import '@styles/ProductList.scss'
import Corazon from "@assets/like.png";
import Donaciones from "@assets/donacionesAlim.png";
import Gatito from "@assets/gatito.png";
import Refugio from "@assets/refugioAnim.png";
import Voluntario from "@assets/voluntario.png";

const Inicio = () => {
  return (
      
        <div className="contInicio">
        <div className="contImg">
          <img
            className="imgHead"
            src="https://www.elsoldepuebla.com.mx/doble-via/gf373i-patitas-sin-rumbo-realizara-campana-de-adopcion-de-perros.jpg/alternates/LANDSCAPE_768/Patitas%20Sin%20Rumbo%20realizar%C3%A1%20campa%C3%B1a%20de%20adopci%C3%B3n%20de%20perros.jpg"
            alt=""
          />
        </div>
        <div className="quienes-somos">
        <h2>Quiénes somos</h2>
        <p>Somos una fundación sin fines de lucro dedicada al bienestar animal. Nuestro objetivo es rescatar, rehabilitar y encontrar hogares amorosos para los animales abandonados y maltratados.</p>
        <p>Desde nuestra fundación, hemos logrado ayudar a cientos de animales en situaciones de abandono y peligro. Gracias a nuestro equipo de voluntarios y donantes, podemos continuar haciendo una diferencia en la vida de estos animales.</p>
        <h3>¿Cómo puedes ayudar?</h3>
       
      </div>
        <div className="card-container">
          <div className="card">
            <img src={Donaciones} alt="Imagen 1" />
            <div className="description">
              <h2>Donaciones</h2>
              <p>Puedes realizar donaciones a nuestro refugio cariño animal.</p>
            </div>
          </div>
          <div className="card">
            <img src={Gatito} alt="Imagen 2" />
            <div className="description">
              <h2>Adopciones</h2>
              <p>En nuestro refugio hay cientos de animales buscando un hogar.</p>
            </div>
          </div>
          <div className="card">
            <img src={Refugio} alt="Imagen 3" />
            <div className="description">
              <h2>Refugio</h2>
              <p>En nuestro refugio aceptamos animales en situación de calle.</p>
            </div>
          </div>
          <div className="card">
            <img src={Voluntario} alt="Imagen 3" />
            <div className="description">
              <h2>Voluntariado</h2>
              <p>Las puertas del refugio estan abiertas para los amantes de los animales y quieran poner su granito de arena a la causa.</p>
            </div>
          </div>
        </div>
        
       
      </div>
        
      
      
  );
}

export default Inicio;