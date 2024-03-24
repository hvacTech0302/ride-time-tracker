import "./header.styles.css";

const Header = ({ image }) => {
  return (
    <section className="container header-container">
      <img src={image} alt={"header"}></img>
      <div className="heading-container">
        <h1 className="heading">Scroll Down To Select A Park!</h1>
      </div>
    </section>
  );
};

export default Header;
