import React from 'react';
import { BrowserRouter, Route, Routes,Navigate } from 'react-router-dom';
import '@styles/global.css'
import Layout from '../containers/Layout';
import Inicio from '../pages/Inicio';
import Adopcion from '@pages/Adopcion';
import HistoriasExito from '@pages/HistoriasExito';
import Eventos  from '../pages/Eventos';
import MascotasPerdidas  from '../pages/MascotasPerdidas';
import Noencontrado  from '../pages/NoEncontrado';
import AppContext from '../context/AppContext';
import useEstadoInicial from '../hooks/useEstadoInicial';

const App = () => {
  console.log('HolaJSX');
  const estadoInicial = useEstadoInicial();
  return (
    <AppContext.Provider value={estadoInicial}>
      <BrowserRouter> 
        <Layout>
          <Routes>
            <Route path='/' element={<Inicio />} />
            <Route path='/adopcion' element={<Adopcion />} />
            <Route path='/mascotasperdidas' element={<MascotasPerdidas />} />
            <Route path='/historiasexito' element={<HistoriasExito />} />
            <Route path='/eventos' element={<Eventos />} />
            <Route path='*' element={<Navigate to='/404' />} />
            <Route path='/404' element={<Noencontrado />} />
          </Routes>
        </Layout>
      </BrowserRouter> 
    </AppContext.Provider>
  );
}

export default App;
