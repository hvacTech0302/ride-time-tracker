import MainHeaderVideo from "../../assets/images/Hero/Site Video/main-site-hero-vid.mp4";
import "./mainHeader.styles.css";

const MainHeader = () => {
  return (
    <section className="container main-header-container">
      <video src={MainHeaderVideo} muted autoPlay loop></video>
      <div className="main-heading-container">
        <h1 className="main-heading">Select a Location to get started!</h1>
      </div>
    </section>
  );
};

export default MainHeader;
