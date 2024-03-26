import Header from "../../../components/Header/Header.component";
import animalKingdomImage from "../../../assets/images/Hero/Disney World/animal-kingdom-hero.jpg";
import "./animalKingdom.styles.css";

const headerImage = animalKingdomImage;
const parkId = 8;

const AnimalKingdom = () => {
  return <Header image={headerImage} />;
};

export default AnimalKingdom;
