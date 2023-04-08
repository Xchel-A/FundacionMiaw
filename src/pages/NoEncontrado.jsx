import React from 'react';
//import jeje from '@assets/jeje.gif'
import '@styles/NoEncontrado.scss'
import notfound from '@assets/404-error.png'

const NoEncontrado = () => {
    return (
        <div className='NoEnc'>
            <div className='container'>
            <div className="textNot">
                <img src={notfound} alt="" />
                <h2>PAGE NOT FOUND</h2>
                <h3>BACK TO HOME</h3>
                
            </div>
                
                
                
            </div>
        </div >

    );
}

export default NoEncontrado;