import React,{useState, useContext} from 'react';
import '@styles/Header.scss';
import logo1 from '@assets/logo1.png';
import menu from '@assets/menu.png';
import shop from '@assets/perro.png';
import Menu2 from '@components/Menu2';
import Favoritos from '../containers/AnimalesFavoritos';
import AppContext from '../context/AppContext';

 

  const Header = () => {
  const[ShowMenu , setShowMenu]=useState(false);
  const[toggleF , setToggleF]=useState(false);
  const { eliminarAnimal } = useContext(AppContext);
  const handleFavorito =()=>{
    setToggleF(!toggleF);
    
  }

  const handleShowMenu =()=>{
    setShowMenu(!ShowMenu);
   
  }
  const { state } = useContext(AppContext);
  
  
  
  return (
    <nav>
      <title>Navbar</title>
      <img src={menu} alt="menu" className="menu" onClick={handleShowMenu} />
      <div>{ShowMenu && <Menu2 />}</div>
      <div className="navbar-izquierda">
        <a href="/">
          <img src={logo1} alt="logo1" className="logo1" />
          
        </a>
        <ul>
        <li><a href="/">Inicio</a></li>
          <li><a href="/Adopcion">Adopcion</a></li>
          
          <li><a href="/mascotasperdidas">Se busca</a></li>
          <li><a href="/historiasexito">Historas</a></li>
          <li><a href="/eventos">Eventos</a></li>
          
          
        </ul>
      </div>
      <div className="navbar-derecha">
        <ul>
          <li className="navbar-name"> <b>Fundación MiawGuau</b>
          <div>   {/*toggle && <Menu />*/}</div>
          </li>
          <li className="navbar-carrito"  onClick={handleFavorito} >
            <img src={shop} alt="carrito-compras" className="carrito" />
            <div className="carritoMenu">{toggleF && <Favoritos favoritos={state.favoritos} eliminarAnimal={eliminarAnimal} />
            }</div>

            {state.favoritos.length > 0 ? (
              <ul className='contadorCarrito'>{new Set(state.favoritos.map(favoritos => favoritos.IdAnimal)).size}</ul>
            ) : null}



          </li>
        </ul>
      </div>
     
      

    </nav>

  );
}

export default Header;