import React from "react";
import "./Home.css";
import avatar from "../assets/av1.png";
import Gradient from "rgt";

function Home() {
  return (
    <div className="home_container" id="Home-section">
      <div>
        <h1 className="home_heading">
          HI I'M{" "}
          <Gradient dir="left-to-right" from="#00DFD8" to="#007CF0">
            MOHAMMED FARHAAN
          </Gradient>
        </h1>

        <p className="home_subheading">My text here ityped here</p>
      </div>
      <img src={avatar} className="home_user-avatar" alt="User"></img>
    </div>
  );
}

export default Home;
