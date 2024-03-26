import axios from "axios";
import { useState, useEffect } from "react";
import Header from "../../../components/Header/Header.component";
import LandsSection from "./../../../components/LandsSection/LandsSection.component";
import magicKingdomImage from "../../../assets/images/Hero/Disney World/magic-kingdom-hero.jpg";
import "./magicKingdom.styles.css";

const headerImage = magicKingdomImage;

const MagicKingdom = () => {
  const disneyPark = true; // Set for styling
  const universalPark = false; // Set for styling
  const parkId = 6; // Set to appropriate Park ID.

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

export default MagicKingdom;
