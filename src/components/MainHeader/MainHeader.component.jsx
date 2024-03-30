import MainHeaderVideo from "../../assets/images/Hero/Site Video/main-site-hero-vid.mp4";
import "./mainHeader.styles.css";

const MainHeader = () => {
  return (
    <section className="container main-header-container">
      <video
        src={MainHeaderVideo}
        type={"video/mp4"}
        preload={"yes"}
        playsInline
        muted
        autoPlay
        loop
      ></video>
    </section>
  );
};

export default MainHeader;
