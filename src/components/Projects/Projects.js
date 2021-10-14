import React from "react";
import "./Projects.css";
import Gradient from "rgt";
import Section from "./Section";
function Projects() {
  const color = {
    React: "rgba(54, 162, 235, 1)",
    ReactNative: "rgba(97, 219, 251, 1)",
    Python: "rgba(255, 232, 115, 1)",
    NextJs: "rgba(255, 99, 132, 1)",
    Firebase: "rgba(255, 203, 43, 1)",
    Django: "rgba(103, 222, 171, 1)",
  };

  const projectsData = [
    {
      heading: "Crypto Portfolio Tracker",
      para: "Crypto Portfolio Tracker using the WazirX API. Manage your Profits, Losses, Valuation, Transaction and Assets all at one place.",
      tags: [
        {
          tag: "NextJs",
          color: color.NextJs,
        },
        {
          tag: "Firebase",
          color: color.Firebase,
        },
      ],

      link: "https://github.com/mdfarhaan/cryptoflash-web",
    },
    {
      heading: "Expense Tracker",
      para: "Expense Tracker app using Django for the backend and React Native for the frontend",
      tags: [
        {
          tag: "ReactNative",
          color: color.ReactNative,
        },
        {
          tag: "Django",
          color: color.Django,
        },
      ],

      link: "https://github.com/mdfarhaan/expense-tracker-app",
    },
    {
      heading: "Instagram Bot",
      para: "Instagram hashtag liking bot in Python without the Instagram Api",
      tags: [
        {
          tag: "Python",
          color: color.Python,
        },
      ],

      link: "https://github.com/mdfarhaan/instagram-bot",
    },
    {
      heading: "Tweet",
      para: "A simple forum like web app using Django for the backend and React for the frontend.",
      tags: [
        {
          tag: "React",
          color: color.React,
        },
        {
          tag: "Django",
          color: color.Django,
        },
      ],

      link: "https://github.com/mdfarhaan/tweet-django-react",
    },
  ];

  return (
    <div className="projects_container" id="Projects-section">
      <center>
        <h1 className="projects_heading">
          <Gradient dir="left-to-right" from="#FF5F6D" to="#FFC371">
            Projects
          </Gradient>
        </h1>
        <div className="projects_section">
          {projectsData.map((item, index) => {
            return <Section project={item} key={index} />;
          })}
        </div>
      </center>
    </div>
  );
}

export default Projects;
