import React, { useRef } from 'react';
import '@styles/Footer.scss'
import whats from '@assets/whatsapp.png'
import face from '@assets/facebook.png'
import insta from '@assets/instagram.png'


const Footer = () => {
    const emailRef = useRef();
  
    const handleSubmit = (event) => {
      event.preventDefault();
      const email = emailRef.current.value;
      console.log(`Correo electrónico ingresado: ${email}`);
      // Aquí podrías enviar el correo electrónico a un servidor o hacer cualquier otra cosa que necesites con él
    };
  return(
    <footer>
      <div className="footer-container">
        <div className="left-section">
          <h3>Información de contacto</h3>
          <p>+1 (555) 123-4567</p>
          <p>1234 Calle de la Fundación, Ciudad, Estado, Código Postal</p>
        </div>
        <div className="right-section">
          <h3>Síguenos en las redes sociales</h3>
          <ul>
            <li><img height="30px" src={face} alt="" /></li>
            <li><img height="30px" src={insta} alt="" /></li>
            <li><img height="30px" src={whats} alt="" /></li>
          </ul>
          ¿Quieres que nos pongamos en contacto?
            <form onSubmit={handleSubmit}>
                <input className='inpEmail' type="email" placeholder="Correo electrónico" ref={emailRef} required />
                <button className='btnFoot' type="submit">Enviar</button>
            </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
