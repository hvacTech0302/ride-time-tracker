import "./header.styles.css";

const Header = ({ image }) => {
  return (
    <section className="container header-container">
      <img src={image} alt={"header"}></img>
    </section>
  );
};

export default Header;
