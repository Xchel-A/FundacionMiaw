import React, { useEffect, useState} from "react";
import PerdidasList from "../containers/PerdidasList";
import '@styles/MascotasPerdidas.scss'

import Cargando from '@components/Cargando'
const MascotasPerdidas = () => {
  const [pageTitle, setPageTitle] = useState('Perros perdidos');
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      document.title = pageTitle;
    }, [pageTitle]);

    useEffect(() => {
      setTimeout(() => {
          setLoading(false);
      }, 3000);
  }, [data]);
  
  const data = 
  [
    {
      "name": "Fido",
      "breed": "Golden Retriever",
      "description": "Perro dorado de tamaño mediano. Amigable y juguetón.",
      "lastSeen": "2 de abril de 2023",
      "colonia":"Queretaro",
      "photo": "https://static.nationalgeographic.es/files/styles/image_3200/public/01-stray-dogs-nationalgeographic_1927666.webp?w=1450&h=816"
    },
    {
      "name": "Luna",
      "breed": "Gato siamés",
      "description": "Gato siamés con ojos azules. Tiene una mancha blanca en el pecho.",
      "lastSeen": "4 de abril de 2023",
      "colonia":"Queretaro",
      "photo": "https://img.remediosdigitales.com/94c1d4/gato-siames-1/1366_2000.jpeg"
    },
    {
      "name": "Max",
      "breed": "Pastor alemán",
      "description": "Perro grande y atlético. Tiene una marca blanca en la cola.",
      "lastSeen": "5 de abril de 2023",
      "colonia":"Queretaro",
      "photo": "https://www.ngenespanol.com/wp-content/uploads/2022/11/razas-de-perros-mexicanos-cuales-son-y-que-las-hace-diferentes.jpg"
    }
  ];
    
    
  
  return (
        <div>
       {loading && <Cargando />}
            {!loading && (
          <div className="mascotasPerdidas">
          <h2>Mascotas Perdidas</h2>
          <PerdidasList pets={data} />
          </div>
            )}
      </div>
  );
};

export default MascotasPerdidas;
