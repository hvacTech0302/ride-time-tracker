import CardsContainer from "../CardsContainer/CardsContainer.component";
import "./parksSection.styles.css";

const ParksSection = () => {
  return (
    <section className="container parks-section-container">
      <div className="parks-section-heading">
        <h2>Walt Disney World</h2>
        <h4>Please Choose A Park Below To View Live Ride & Attraction Times</h4>
      </div>

      <div className="parks-cards-container">
        <CardsContainer />
      </div>
    </section>
  );
};

export default ParksSection;
