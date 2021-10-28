import React from "react";
import "./About.css";
import Gradient from "rgt";

function Home() {
  return (
    <div className="about_container" id="About Me-section">
      <center>
        <h1 className="about_heading">
          /* Title */ 
          <Gradient dir="left-to-right" from="#02AAB0" to="#00CDAC">
            About
          </Gradient>
        </h1>
        /* Description */ 
        <p className="about_subheading">
          I'm Mohammed Farhaan from Chennai, currently pursuing first year
          B-Tech Computer Science Engineering from SRMIST, Kattankulathur with
          interest in programming, web development and graphic design. I am very
          passionate about technology and want to learn more. One word to
          describe myself would be curious. My hobbies include reading books,
          riding and binge watching.
        </p>
      </center>
    </div>
  );
}

export default Home;
