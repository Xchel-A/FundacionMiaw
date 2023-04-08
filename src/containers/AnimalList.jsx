import React, { useEffect, useState } from 'react';
import axios from 'axios'
import AnimalItem from '@components/AnimalItem';
import '@styles/AdopcionList.scss'
import '@styles/AnimalItem.scss'
import useGetAnimal from '../hooks/useGetAnimal';
import Cargando from '@components/Cargando'
const AnimalList = () => {

    const API = 'https://dendenmushi.com.mx/Mascotas/Adopcion/Inicio'

    const [loading, setLoading] = useState(true);
    const animales = useGetAnimal(API)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, [animales]);
    

    return (
        <section className="main-container-product">
            {loading && <Cargando />}
            {!loading && (
                <div className="cards-container-product">
                    {animales.map(animal => {
                        return <AnimalItem animal={animal} key={animal.IdAnimal} />
                    })}
                </div>
            )}
        </section>
    );
}

export default AnimalList;
