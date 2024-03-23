import Card from "../Card/Card.component";
import magicKingdomImg from "../../assets/images/Logos/Magic-Kingdom-logo.png";
import epcotImg from "../../assets/images/Logos/EPCOT-Center-logo.png";
import animalKingdomImg from "../../assets/images/Logos/Animal-Kingdom-logo.webp";
import hollywoodStudiosImg from "../../assets/images/Logos/Disneys-Hollywood-Studios-logo.png";
import "./cardsContainer.styles.css";

const CardsContainer = () => {
  return (
    <div className="cards-container">
      <Card
        name={"Magic Kingdom"}
        image={magicKingdomImg}
        link={"/disney-world/magic-kingdom"}
      />
      <Card name={"Epcot"} image={epcotImg} link={"disney-world/epcot"} />
      <Card
        name={"Animal Kingdom"}
        image={animalKingdomImg}
        link={"disney-world/animal-kingdom"}
      />
      <Card
        name={"Hollywood Studios"}
        image={hollywoodStudiosImg}
        link={"disney-world/hollywood-studios"}
      />
    </div>
  );
};

export default CardsContainer;
