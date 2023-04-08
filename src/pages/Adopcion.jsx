import React,{useState, useEffect} from 'react';
import AnimalList from '@containers/AnimalList';
import InicioHead from '@components/InicioHead';

import '@styles/AdopcionList.scss'
const Home = () => {
  const [pageTitle, setPageTitle] = useState('Adopcion');
  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);
  
  return (
   
        <AnimalList />

       
      
  )
}

export default Home;