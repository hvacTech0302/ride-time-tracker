import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./navigation.styles.css";
import logo from "../../assets/Logos/site-logo.png";

const Navigation = () => {
  return (
    <Navbar expand="lg" sticky="top" className="navbar navbar-dark ">
      <Navbar.Brand className="brand" href="#home">
        <img
          className="logo d-inline-block align-center"
          width={"80px"}
          height={"auto"}
          src={logo}
        />{" "}
        <span>Ride Time Tracker</span>
      </Navbar.Brand>
      <span className="sub-heading d-none d-sm-block d-lg-none">
        Select a Location to get started
      </span>
      {/* TODO: Fix hamburger styling on collapse. */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="link-container" id="basic-navbar-nav">
        <Nav className="nav-links">
          <Nav.Link className="link" href="#walt-disney-world">
            Disney World
          </Nav.Link>
          <Nav.Link className="link" href="#disneyland">
            Disneyland
          </Nav.Link>
          <Nav.Link className="link" href="#universal-florida">
            Universal Studios Florida
          </Nav.Link>
          <Nav.Link className="link" href="#universal-hollywood">
            Universal Studios Hollywood
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
