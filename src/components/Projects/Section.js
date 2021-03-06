import React from "react";
import { motion } from "framer-motion";
import "./Section.css";
import { IoLogoGithub } from "react-icons/io";

function Section(props) {
  return (
    <motion.div whileHover={{ scale: 1.04 }}>
      <div style={{ paddingBottom: 50 }}>
        <div className="section_container">
          <div className="section_top">
            <h1 className="section_heading">{props.project.heading}</h1>
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
          </div>
          <div className="section_bottom">
            <p className="section_para">{props.project.para}</p>
            <div className="section_links-container">
              <IoLogoGithub
                size={60}
                onClick={() => window.open(props.project.link)}
                className="section_link-logo"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Section;
