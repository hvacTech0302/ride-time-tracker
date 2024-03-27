import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../../../components/Header/Header.component";
import animalKingdomImage from "../../../assets/images/Hero/Disney World/animal-kingdom-hero.jpg";
import LandsSection from "../../../components/LandsSection/LandsSection.component";
import "./animalKingdom.styles.css";

const headerImage = animalKingdomImage;

const AnimalKingdom = () => {
  const disneyPark = true; // Set for styling
  const universalPark = false; // Set for styling
  const parkId = 8; // Set to appropriate Park ID.

  const [lands, setLands] = useState([]);

  useEffect(() => {
    axios
      .get(`https://queue-times.com/parks/${parkId}/queue_times.json`)
      .then((res) => res.data)
      .then((data) => {
        return setLands(data.lands);
      });
  }, []);

  return (
    <>
      <Header image={headerImage} />
      <LandsSection
        lands={lands}
        parkId={parkId}
        disneyPark={disneyPark}
        universalPark={universalPark}
      />
    </>
  );
};

export default AnimalKingdom;
