import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../../../components/Header/Header.component";
import headerImage from "../../../assets/images/Hero/Universal Florida/IoA-Hero.jpg";
import LandsSection from "../../../components/LandsSection/LandsSection.component";
import "./islandsOfAdventure.styles.css";

const IslandsOfAdventure = () => {
  const disneyPark = false; // Set for styling
  const universalPark = true; // Set for styling
  const parkId = 64; // Set to appropriate Park ID.

  const [lands, setLands] = useState([]);

  useEffect(() => {
    const url =
      "https://corsproxy.io/?" +
      encodeURIComponent(
        `https://queue-times.com/parks/${parkId}/queue_times.json`
      );
    axios
      .get(url)
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

export default IslandsOfAdventure;
