import { useEffect, useState } from "react";
import Card from "../Card/Card.component";

import "./cardsContainer.styles.css";

const CardsContainer = ({ parksArray, includeParks }) => {
  let includedParks = [];

  const cardCreator = (numOfCards) => {
    parksArray.forEach((park) => {
      if (includeParks.includes(park.id)) {
        includedParks.push(park);
      }
    });

    return includedParks;
  };

  const createCards = cardCreator(includeParks.length);

  return (
    <div className="cards-container">
      {/* pass name, image, and link to each Card with for loop */}
    </div>
  );
};

export default CardsContainer;
