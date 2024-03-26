import Header from "../../../components/Header/Header.component";
import hollywoodStudiosImage from "../../../assets/images/Hero/Disney World/star wars.jpg";
import "./hollywoodStudios.styles.css";

const headerImage = hollywoodStudiosImage;
const parkId = 7;

const HollywoodStudios = () => {
  return <Header image={headerImage} />;
};

export default HollywoodStudios;
