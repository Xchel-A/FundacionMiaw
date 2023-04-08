import React, { useState } from "react";
import PerdidaItem from "@components/PerdidaItem";

const PerdidasList = ({ pets }) => {
  const [currentPetIndex, setCurrentPetIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentPetIndex((currentPetIndex - 1 + pets.length) % pets.length);
  };

  const handleNextClick = () => {
    setCurrentPetIndex((currentPetIndex + 1) % pets.length);
  };

  return (
    <div>
        <div className="button-row">
        <div>
            <button className="btnperdi" onClick={handlePrevClick}>{'<'}</button>
            <button  className="btnperdi"onClick={handleNextClick}>{'>'}</button>
        </div>
      </div>
      <div className="perdidasList">
        <PerdidaItem pet={pets[currentPetIndex]} />
      </div>
     
    </div>
  );
};

export default PerdidasList;
