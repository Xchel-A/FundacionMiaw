import { useState } from 'react';

const estadoInicial = {
  favoritos: [],
};

const useEstadoInicial = () => {
  const [state, setState] = useState(estadoInicial);

  const agregarFavoritos = (payload) => {
    setState({
      ...state,
      favoritos: [...state.favoritos, payload],
    });
  };

  const eliminarAnimal = (IdAnimal) => {
    const newFavoritos = state.favoritos.filter((animal) => animal.IdAnimal !== IdAnimal);
    setState({
      ...state,
      favoritos: newFavoritos,
    });
  };
  

  return {
    state,
    agregarFavoritos,
    eliminarAnimal,
  };
};

export default useEstadoInicial;
