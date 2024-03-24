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
      {createCards.map((card, index) => {
        const linkTo = `/${card.name.replaceAll(" ", "-")}`;
        const imageLink = `../../assets/images/logos/${card.name.replaceAll(
          " ",
          "-"
        )}-${card.id}.png`.toLowerCase();
        return (
          <Card
            key={index}
            name={card.name}
            imageLink={imageLink}
            linkTo={linkTo}
          />
        );
      })}
    </div>
  );
};

export default CardsContainer;
