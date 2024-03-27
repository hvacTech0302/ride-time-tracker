import axios from "axios";
import { useState, useEffect } from "react";
import Header from "../../../components/Header/Header.component";
import hollywoodStudiosImage from "../../../assets/images/Hero/Disney World/star wars.jpg";
import LandsSection from "../../../components/LandsSection/LandsSection.component";
import "./hollywoodStudios.styles.css";

const headerImage = hollywoodStudiosImage;

const HollywoodStudios = () => {
  const disneyPark = true; // Set for styling
  const universalPark = false; // Set for styling
  const parkId = 7; // Set to appropriate Park ID.

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

export default HollywoodStudios;
