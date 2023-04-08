import React,{useEffect, useState} from 'react';
import '@styles/Eventos.scss'
const Eventos = () => {
    const upcomingEvents = [
      {
        id: 1,
        title: "Feria de Adopción de Verano",
        date: "Sábado, 31 de Agosto de 2023",
        description: "Ven a conocer a nuestros animales disponibles para adopción en nuestra feria de adopción de verano en el parque central de la ciudad. Habrá actividades para niños y adultos, ¡no te lo pierdas!",
        image: "https://traficozmg.com/wp-content/uploads/2019/08/WhatsApp-Image-2019-08-30-at-4.38.05-PM.jpeg"
      },
      {
        id: 2,
        title: "Cena de recaudación de fondos",
        date: "Viernes, 29 de Septiembre de 2023",
        description: "Únete a nosotros en nuestra cena de recaudación de fondos anual en el hotel X. Tendremos comida deliciosa, música en vivo y subastas silenciosas. Todo el dinero recaudado irá directamente a nuestros programas de bienestar animal.",
        image: "https://images.periodicocentral.mx/wp-content/uploads/2022/02/24173407/Ayuda-a-recaudar-media-tonelada-de-croquetas-para-perritos-de-la-calle.webp"
      },
      // Agrega más eventos aquí
    ];
    const [pageTitle, setPageTitle] = useState('Eventos');
    useEffect(() => {
      document.title = pageTitle;
    }, [pageTitle]);
    return (
      <div className="eventos-container">
        <h2>Próximos eventos</h2>
        <p>Aquí encontrarás información sobre nuestros próximos eventos y actividades.</p>
        <div className="upcoming-events">
          {upcomingEvents.map((event) => (
            <div key={event.id} className="upcoming-event">
              <h3>{event.title}</h3>
              <p><strong>Fecha:</strong> {event.date}</p>
              <img src={event.image} alt={event.title} />
              <p>{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default Eventos;