import React from "react";
import "./Home.css";
import avatar from "../assets/av1.png";
import Gradient from "rgt";
import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io";
import Typical from "react-typical";
function Home() {
  return (
    <div className="home_container" id="Home-section">
      <div className="home_content">
        <h1 className="home_heading">
          HI I'M{" "}
          <Gradient dir="left-to-right" from="#00DFD8" to="#007CF0">
            MOHAMMED FARHAAN
          </Gradient>
        </h1>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p className="home_subheading">
            I like to {""}
            <Typical
              loop={Infinity}
              wrapper="b"
              steps={[
                "Code",
                1000,
                "Develop",
                1000,
                "Design",
                1000,
                "Read",
                1000,
                "Ride",
                1000,
              ]}
            />
          </p>
          <div>
            <button
              className="contact_icon-btn "
              onClick={() => window.open("https://github.com/mdfarhaan")}
            >
              <IoLogoGithub size={60} />
            </button>
            <button
              className="contact_icon-btn "
              onClick={() =>
                window.open("https://www.linkedin.com/in/mdfarhaan/")
              }
            >
              <IoLogoLinkedin size={60} />
            </button>
          </div>
        </div>
      </div>
      {/* <img src={avatar} className="home_user-avatar" alt="User"></img> */}
    </div>
  );
}

export default Home;
