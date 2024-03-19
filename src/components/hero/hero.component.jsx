import Navigation from "../navbar/navigation.component";
import "./hero.styles.css";
import heroVid from "../../assets/Hero/Site Video/main-site-hero-vid.mp4";

const Hero = () => {
  return (
    <section className="hero-container">
      <video className="hero-bg-vid" src={heroVid} autoPlay loop muted />
      <Navigation className="nav" />
      <div className="container-fluid heading-container d-none d-lg-block">
        <h1 className="hero-heading text-white">
          Select a Location to get started!
        </h1>
      </div>
    </section>
  );
};

export default Hero;
