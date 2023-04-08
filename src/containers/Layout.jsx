import React, { useEffect, useState } from 'react';
import Header from '@components/Header';
import Footer from '@components/Footer';
import NoEncontrado from '@pages/NoEncontrado';

const Layout = ({ children }) => {
  const [paginaNoEncontrada, setPaginaNoEncontrada] = useState(false);

  useEffect(() => {
    
    setPaginaNoEncontrada(window.location.pathname.includes('/404'));
  }, []);

  return (
    <div className='Layout'>
      {!paginaNoEncontrada && <Header />}
      {children}
      {!paginaNoEncontrada && <Footer />}
    </div>
  );
};

export default Layout;