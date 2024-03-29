import { useState, useEffect } from "react";
import disneylandImage from "../../assets/images/Hero/Disneyland/Disneyland-Hero.jpg";
import Header from "./../../components/Header/Header.component";
import ParksSection from "./../../components/ParksSection/ParksSection.component";
import "./disneyland.styles.css";

const Disneyland = () => {
  // Situational Variables (Set for each new page)
  const disneyPark = true;
  const universalPark = false;
  const headerImage = disneylandImage;
  const includeParks = [16, 17];

  const [parksData, setParksData] = useState(
    require("../../assets/data/parksData.json")
  );

  useEffect(() => {
    const data = require("../../assets/data/parksData.json");

    setParksData(data);
  }, []);

  return (
    <>
      <Header image={headerImage} />
      <ParksSection
        parksData={parksData}
        disneyPark={disneyPark}
        universalPark={universalPark}
        includeParks={includeParks}
      />
    </>
  );
};

export default Disneyland;
