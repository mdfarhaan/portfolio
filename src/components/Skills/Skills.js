import React from "react";
import "./Skills.css";
import SkillsChart from "./SkillsChart";
import Gradient from "rgt";
import { useMediaQuery } from "react-responsive";

function Skills() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1684px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1684px)" });

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

  const rows = [...Array(Math.ceil(chartData.length / 4))];

  const productRows = rows.map((row, idx) =>
    chartData.slice(idx * 4, idx * 4 + 4)
  );

  const Mobilerows = [...Array(Math.ceil(chartData.length / 2))];

  const MobileproductRows = Mobilerows.map((row, idx) =>
    chartData.slice(idx * 2, idx * 2 + 2)
  );

  return (
    <div className="skills_container" id="Skills-section">
      <center>
        <h1 className="skills_heading">
          <Gradient dir="left-to-right" from="#f857a6" to="#ff5858">
            Skills
          </Gradient>
        </h1>
        {isTabletOrMobile &&
          MobileproductRows.map((row, index) => {
            return (
              <div className="skills_charts-container" key={index}>
                {row.map((item, index) => {
                  return <SkillsChart data={item} key={index} />;
                })}
              </div>
            );
          })}
        {isDesktopOrLaptop &&
          productRows.map((row, index) => {
            return (
              <div className="skills_charts-container" key={index}>
                {row.map((item, index) => {
                  return <SkillsChart data={item} key={index} />;
                })}
              </div>
            );
          })}
      </center>
    </div>
  );
}

export default Skills;
