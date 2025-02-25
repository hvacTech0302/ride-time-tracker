import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../../components/Header/Header.component";
import headerImage from "../../assets/images/Hero/Universal Hollywood/hollywood-studios-hero.jpg";
import LandsSection from "../../components/LandsSection/LandsSection.component";
import "./universalHollywood.styles.css";

const UniversalHollywoodPark = () => {
  const disneyPark = false; // Set for styling
  const universalPark = true; // Set for styling
  const parkId = 66; // Set to appropriate Park ID.

  const [lands, setLands] = useState([]);

  useEffect(() => {
    const url =
      "https://corsproxy.io/?key=43c59a26&url=" +
      encodeURIComponent(
        `https://queue-times.com/parks/${parkId}/queue_times.json`
      );
    axios
      .get(url)
      .then((res) => res.data)
      .then((data) => {
        return setLands(data.rides);
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

export default UniversalHollywoodPark;
