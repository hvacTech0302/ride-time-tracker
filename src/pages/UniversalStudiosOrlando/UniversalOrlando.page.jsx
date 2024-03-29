import { useState, useEffect } from "react";
import universalOrlandoImage from "../../assets/images/Hero/Universal Florida/Universal-Studios-Hero.jpg";
import Header from "./../../components/Header/Header.component";
import ParksSection from "./../../components/ParksSection/ParksSection.component";
import "./universalOrlando.styles.css";

const UniversalOrlando = () => {
  // Situational Variables (Set for each new page)
  const disneyPark = false;
  const universalPark = true;
  const headerImage = universalOrlandoImage;
  const includeParks = [64, 65];

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

export default UniversalOrlando;
