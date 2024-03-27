import { useState, useEffect } from "react";
import disneyWorldImage from "../../assets/images/Hero/Disney World/Disney-World-Hero.jpg";
import Header from "./../../components/Header/Header.component";
import ParksSection from "./../../components/ParksSection/ParksSection.component";
import "./disneyWorld.styles.css";

const DisneyWorld = () => {
  // Situational Variables (Set for each new page)
  const disneyPark = true;
  const universalPark = false;
  const headerImage = disneyWorldImage;
  const includeParks = [5, 6, 7, 8];

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

export default DisneyWorld;
