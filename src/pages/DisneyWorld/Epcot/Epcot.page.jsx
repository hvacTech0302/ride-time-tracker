import Header from "../../../components/Header/Header.component";
import epcotCenterImage from "../../../assets/images/Hero/Disney World/epcot-hero.jpg";
import "./epcot.styles.css";

const headerImage = epcotCenterImage;
const parkId = 5;

const Epcot = () => {
  return <Header image={headerImage} />;
};

export default Epcot;
