import { Link } from "react-router-dom";
import "./logo.styles.css";

const Logo = ({ image, width, height }) => {
  return (
    <div className="container logo-container">
      <Link to="/">
        <img width={width} height={height} src={image} alt="Logo" />
      </Link>
    </div>
  );
};

export default Logo;
