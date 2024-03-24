import { Link } from "react-router-dom";
import "./card.styles.css";

const Card = ({ name, imageLink, linkTo }) => {
  return (
    <Link className="card" to={linkTo}>
      <img className="card-image" src={imageLink} alt={`${name} park`} />
      <div className="card-text">
        <h4>{name}</h4>
      </div>
    </Link>
  );
};

export default Card;
