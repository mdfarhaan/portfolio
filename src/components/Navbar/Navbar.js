import React from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import { useMediaQuery } from "react-responsive";
import { HiOutlineMenuAlt2 } from "react-icons/hi";

function Navbar() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  const routes = ["Home", "About Me", "Skills", "Projects", "Contact"];
  return (
    <>
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
        {isDesktopOrLaptop && (
          <div className="navbar_routes-container">
            {routes.map((route, index) => {
              return (
                <Link
                  activeClass="active"
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
        )}
        {isTabletOrMobile && <HiOutlineMenuAlt2 color="red" />}
      </div>
    </>
  );
}

export default Navbar;
