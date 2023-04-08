import React,{useEffect, useState}from 'react';
import '@styles/HistoriasExito.scss'

const HistoriasExito = () => {
  const successStories = [
    {
      id: 1,
      title: "La historia de Max",
      description: "Max fue adoptado hace 2 años y ahora es un perro feliz y saludable. Le encanta jugar y dar largas caminatas en el parque.",
      image: "https://i0.wp.com/thehappening.com/wp-content/uploads/2017/10/dancc83ados.jpg?resize=680%2C460&ssl=1"
    },
    {
      id: 2,
      title: "La historia de Luna",
      description: "Luna fue encontrada en la calle y fue llevada a nuestro refugio. Fue adoptada por una familia amorosa y ahora vive en una casa grande con un gran jardín para jugar.",
      image: "https://i0.wp.com/thehappening.com/wp-content/uploads/2017/10/desnutridos.jpg?resize=680%2C460&ssl=1"
    },
    {
        id: 3,
        title: "La historia de Laika",
        description: "Laika fue rescatada de la calle en una situacion muy grave, hace una año una pareja la adopto y ahora es la mas consentida del hogar.",
        image: "https://i0.wp.com/thehappening.com/wp-content/uploads/2017/10/maltratados.jpg?resize=680%2C460&ssl=1"
      },
    // Agrega más historias de éxito aquí
  ];
  const [pageTitle, setPageTitle] = useState('Historias de exito');
  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);
  

  return (
    <div>
        <div className='titHistorias'>
      <h2>Historias de éxito</h2>
      <p>Aquí encontrarás algunas historias de éxito de nuestras adopciones anteriores.</p>
      </div>
      <div className="success-stories">
        {successStories.map((story) => (
          <div key={story.id} className="success-story">
            <h3>{story.title}</h3>
            <img src={story.image} alt={story.title} />
            <p>{story.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HistoriasExito;
