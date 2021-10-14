import React from "react";
import { motion } from "framer-motion";
import "./Section.css";
import GithubLogo from "../assets/github-logo.png";

function Section(props) {
  return (
    <motion.div whileHover={{ scale: 1.04 }}>
      <div style={{ paddingBottom: 50 }}>
        <div className="section_container">
          <div className="section_left">
            <h1 className="section_heading">{props.project.heading}</h1>
            <p className="section_para">{props.project.para}</p>
          </div>
          <div className="section_right">
            <div className="section_tags-container">
              {props.project.tags.map((item, index) => {
                return (
                  <div style={{ paddingRight: 35 }} key={index}>
                    <h1
                      className="section_tags"
                      style={{ backgroundColor: item.color }}
                    >
                      {item.tag}
                    </h1>
                  </div>
                );
              })}
            </div>
            <div className="section_links-container">
              <div className="section_link">
                <img
                  onClick={() => window.open(props.project.link)}
                  src={GithubLogo}
                  alt="GithubLogo"
                  className="section_link-logo"
                  style={{ paddingRight: 20 }}
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Section;
