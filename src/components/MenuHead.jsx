import React from 'react';
//import '@styles/MenuHead.scss';


const MenuHead = ({ active }) => {
  return (
    <ul className={`menu ${active ? 'menu--active' : ''}`}>
      <li className="menu__item">
        <a href="/" className="menu__link">
          Inicio
        </a>
      </li>
      <li className="menu__item">
        <a href="/acerca-de" className="menu__link">
          Acerca de
        </a>
      </li>
      <li className="menu__item">
        <a href="/contacto" className="menu__link">
          Contacto
        </a>
      </li>
    </ul>
  );
};

export default MenuHead;
