import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import { useMediaQuery } from "react-responsive";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

function Navbar() {
  const [showMenu, setShowMenu] = useState("None");

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
                  offset={-50}
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
        {isTabletOrMobile && (
          <>
            <div>
              {showMenu === "None" ? (
                <button
                  className="navbar_menu-btn"
                  onClick={() => setShowMenu("")}
                >
                  <HiOutlineMenuAlt3 size={50} color="white" />
                </button>
              ) : (
                <button
                  className="navbar_close-btn"
                  onClick={() => setShowMenu("None")}
                >
                  <AiOutlineClose size={50} color="white" />
                </button>
              )}

              <div
                className="navbar_routes-container"
                style={{ display: showMenu }}
              >
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
                      onClick={() => {
                        setShowMenu("None");
                      }}
                    >
                      {route}
                    </Link>
                  );
                })}
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Navbar;
