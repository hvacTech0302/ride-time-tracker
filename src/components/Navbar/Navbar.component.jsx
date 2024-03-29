import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";

import Dropdown from "../Dropdown/Dropdown.component";

import {
  disneyWorldMenuItems,
  disneylandMenuItems,
  universalOrlandoMenuItems,
} from "../../assets/data/MenuItems";

import "./Navbar.styles.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [disneyWorldDropdown, setDisneyWorldDropdown] = useState(false);
  const [disneylandDropdown, setDisneylandDropdown] = useState(false);
  const [universalOrlandoDropdown, setUniversalOrlandoDropdown] =
    useState(false);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          Ride Time Tracker
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"}>
            {click ? <FaTimes /> : <FaBars />}
          </i>
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li
            className="nav-item"
            onMouseEnter={() => {
              setDisneyWorldDropdown(true);
            }}
            onMouseLeave={() => {
              setDisneyWorldDropdown(false);
            }}
          >
            <Link
              to="/disney-world"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Disney World{" "}
              <i className="fas fa-caret-down">
                <FaCaretDown />
              </i>
            </Link>
            {disneyWorldDropdown && (
              <Dropdown itemsArray={disneyWorldMenuItems} />
            )}
          </li>
          <li
            className="nav-item"
            onMouseEnter={() => setDisneylandDropdown(true)}
            onMouseLeave={() => setDisneylandDropdown(false)}
          >
            <Link
              to="/disneyland"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Disneyland{" "}
              <i className="fas fa-caret-down">
                <FaCaretDown />
              </i>
            </Link>
            {disneylandDropdown && (
              <Dropdown itemsArray={disneylandMenuItems} />
            )}
          </li>
          <li
            className="nav-item"
            onMouseEnter={() => setUniversalOrlandoDropdown(true)}
            onMouseLeave={() => setUniversalOrlandoDropdown(false)}
          >
            <Link
              to="/universal-orlando"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Universal Studios Orlando{" "}
              <i className="fas fa-caret-down">
                <FaCaretDown />
              </i>
            </Link>
            {universalOrlandoDropdown && (
              <Dropdown itemsArray={universalOrlandoMenuItems} />
            )}
          </li>
          <li className="nav-item">
            <Link
              to="/universal-hollywood-park"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Universal Studios Hollywood
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
