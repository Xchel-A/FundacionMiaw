import React, { useState, useEffect } from "react";
import axios from 'axios';

const useGetAnimal = (API) => {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios(API);
      setAnimals(response.data);
    }
    fetchData();
  }, [API]);

  return animals;
}

export default useGetAnimal; 
