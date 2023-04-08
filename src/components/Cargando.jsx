import React from 'react';
import '@styles/Cargando.scss'
const Cargando = () => {
  return (
    <div className="loading-container">
      <span>Cargando...</span>
      <div className="spinner"></div>
    </div>
  );
};

export default Cargando;
