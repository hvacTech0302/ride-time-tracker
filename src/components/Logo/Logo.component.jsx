import "./logo.styles.css";

const Logo = ({ image, width, height }) => {
  return (
    <div className="container logo-container">
      <img width={width} height={height} src={image} alt="Logo" />
    </div>
  );
};

export default Logo;
