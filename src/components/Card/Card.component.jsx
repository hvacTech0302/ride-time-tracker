import { Link } from "react-router-dom";
import "./card.styles.css";

const Card = ({ name, image, link }) => {
  return (
    <Link className="card" to={link}>
      <img className="card-image" src={image} alt={`${name} park`} />
      <div className="card-text">
        <h4>{name}</h4>
      </div>
    </Link>
  );
};

export default Card;
