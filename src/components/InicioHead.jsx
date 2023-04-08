import React from "react";
import "@styles/Inicio.scss";
import Corazon from "@assets/like.png";
import Donaciones from "@assets/donacionesAlim.png";
import Gatito from "@assets/gatito.png";
import Refugio from "@assets/refugioAnim.png";

const InicioHead = () => {
  return (
    <div className="contInicio">
      <div className="contImg">
        <img
          className="imgHead"
          src="https://www.elsoldepuebla.com.mx/doble-via/gf373i-patitas-sin-rumbo-realizara-campana-de-adopcion-de-perros.jpg/alternates/LANDSCAPE_768/Patitas%20Sin%20Rumbo%20realizar%C3%A1%20campa%C3%B1a%20de%20adopci%C3%B3n%20de%20perros.jpg"
          alt=""
        />
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
      </div>
    </div>
  );
};

export default InicioHead;
