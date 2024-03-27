import { Link } from "react-router-dom";
import "./logo.styles.css";

const Logo = ({ width, height }) => {
  return (
    <div className="container logo-container">
      <Link to="/">
        <img
          width={width}
          height={height}
          src="../../assets/images/logos/site-logo.png"
          alt="Logo"
        />
      </Link>
    </div>
  );
};

export default Logo;
