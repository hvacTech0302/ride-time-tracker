import CardsContainer from "../CardsContainer/CardsContainer.component";

import magicKingdomImg from "../../assets/images/Logos/Magic-Kingdom-logo.png";
import epcotImg from "../../assets/images/Logos/EPCOT-Center-logo.png";
import animalKingdomImg from "../../assets/images/Logos/Animal-Kingdom-logo.webp";
import hollywoodStudiosImg from "../../assets/images/Logos/Disneys-Hollywood-Studios-logo.png";
import "./parksSection.styles.css";

const ParksSection = ({
  parksData,
  disneyPark,
  universalPark,
  includeParks,
}) => {
  let attractionName = "";
  const filterParksData = (parksData) => {
    let filteredArray = [];
    const attractionSelectors = [2, 12]; // Disney === 2 && Universal === 12 ( API constants )

    if (disneyPark) {
      parksData.forEach((park) => {
        if (park.id === attractionSelectors[0]) {
          filteredArray.push(park);
          attractionName = "Walt Disney Attractions";
        }
      });
    }

    if (universalPark) {
      parksData.forEach((park) => {
        if (park.id === attractionSelectors[1]) {
          filteredArray.push(park);
          attractionName = "Universal Studios Attractions";
        }
      });
    }
    return Object(filteredArray[0]);
  };

  const filteredParksData = filterParksData(parksData);

  return (
    <section className="container parks-section-container">
      <div className="parks-section-heading">
        <h2>{attractionName}</h2>
        <h4>Please Choose A Park Below To View Live Ride & Attraction Times</h4>
      </div>

      <div className="parks-cards-container">
        <CardsContainer
          parksArray={filteredParksData.parks}
          includeParks={includeParks}
        />
      </div>
    </section>
  );
};

export default ParksSection;
