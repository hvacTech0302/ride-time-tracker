import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../../../components/Header/Header.component";
import headerImage from "../../../assets/images/Hero/Universal Florida/Universal-Studios-Hero.jpg";
import LandsSection from "../../../components/LandsSection/LandsSection.component";
import "./universalOrlandoPark.styles.css";

const UniversalOrlandoPark = () => {
  const disneyPark = false; // Set for styling
  const universalPark = true; // Set for styling
  const parkId = 65; // Set to appropriate Park ID.

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

export default UniversalOrlandoPark;
