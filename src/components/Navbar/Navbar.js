import React from "react";
import "./Navbar.css";
import { Link } from "react-scroll";

function Navbar() {
  const routes = ["Home", "About Me", "Skills", "Projects", "Contact"];
  return (
    <div className="navbar_container">
      <Link
        activeClass="active"
        to="Home-section"
        spy={true}
        smooth={true}
        offset={-70}
        duration={700}
        className="navbar_heading"
      >
        MdFarhaan
      </Link>
      <div className="navbar_routes-container">
        {routes.map((route, index) => {
          return (
            <Link
              activeClass="active"
              onClick={() => console.log("rr")}
              to={route + "-section"}
              spy={true}
              smooth={true}
              offset={-70}
              duration={700}
              className="navbar_routes"
              key={index}
            >
              {route}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Navbar;
