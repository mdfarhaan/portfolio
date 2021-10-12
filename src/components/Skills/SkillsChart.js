import React from "react";
import { Doughnut } from "react-chartjs-2";
import "./Skills.css";
import { motion } from "framer-motion";

function SkillsChart(props) {
  const data = {
    labels: [props.data.title],

    datasets: [
      {
        data: [props.data.data, 100 - props.data.data],
        backgroundColor: [props.data.bgcolor, "rgba(54, 162, 235, 0.2)"],
        borderColor: [props.data.borderColor, "rgba(54, 162, 235, 0.2)"],
        borderWidth: 1,
      },
    ],
  };
  const options = {
    events: [],
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  return (
    <motion.div whileHover={{ scale: 1.1 }}>
      <div style={{ paddingLeft: 40 }}>
        <div className="chart_container">
          <p className="chart_title">{props.data.title}</p>
          <Doughnut data={data} options={options} />
        </div>
      </div>
    </motion.div>
  );
}

export default SkillsChart;
