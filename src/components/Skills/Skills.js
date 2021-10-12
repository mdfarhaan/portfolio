import React from "react";
import "./Skills.css";
import SkillsChart from "./SkillsChart";
import Gradient from "rgt";

function Skills() {
  const chartData = [
    {
      title: "Python",
      data: 60,
      bgcolor: "rgba(255, 232, 115, 1)",
      borderColor: "rgba(255, 232, 115, 0.2)",
    },
    {
      title: "React",
      data: 70,
      bgcolor: "rgba(54, 162, 235, 1)",
      borderColor: "rgba(54, 162, 235, 0.2)",
    },
    {
      title: "ReactNative",
      data: 45,
      bgcolor: "rgba(97, 219, 251, 1)",
      borderColor: "rgba(97, 219, 251, 0.2)",
    },
    {
      title: "UI/UX",
      data: 50,
      bgcolor: "rgba(255, 99, 132, 1)",
      borderColor: "rgba(255, 99, 132, 0.2)",
    },
  ];

  return (
    <div className="skills_container" id="Skills-section">
      <center>
        <h1 className="skills_heading">
          <Gradient dir="left-to-right" from="#f857a6" to="#ff5858">
            Skills
          </Gradient>
        </h1>
        <div className="skills_charts-container">
          {chartData.map((item, index) => {
            return <SkillsChart data={item} key={index} />;
          })}
        </div>
      </center>
    </div>
  );
}

export default Skills;
