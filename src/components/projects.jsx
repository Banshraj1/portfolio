import Project from "./project";
import { img_uri } from "../constants.js";
function Projects() {
  return (
    <>
      {/* <div className="line"></div> */}
      <div className="project-container">
        <Project
          data={{
            heading: "Weather App",
            message:
              "A web application that displays live weather information for any location using external weather APIs.",
            tech: ["HTML", "CSS", "JavaScript","React","Node.js"],
            img: {
              img_uri:
                "https://res.cloudinary.com/dklt6d0zk/image/upload/v1768153636/realistic-weather-widget_1284-4092_iaytbp.jpg",
              alt: "weather app",
            },
          }}
        />

        <Project
          data={{
            heading: "Currency Converter",
            message:
              "A React-powered currency converter web app with live exchange rates via API integration.",
            tech: ["HTML", "CSS", "JavaScript","Api calls","React"],
            img: { img_uri:"https://res.cloudinary.com/dklt6d0zk/image/upload/v1768154059/media_17dfe0a633b19e8abd7da45d6c9462be6eb1b8c49_xtqaib.jpg", alt: "E-commerce Website" },
          }}
        />

        <Project
          data={{
            heading: "Blog Web Application",
            message:
              "Building a scalable blog web application in React, with API integration under development.",
            tech: ["HTML", "CSS", "JavaScript","react","Node.js","third-party libraries"],
            img: { img_uri:"https://res.cloudinary.com/dklt6d0zk/image/upload/v1768156126/images_u19rol.png", alt: "E-commerce Website" },
          }}
        />

        {/* <Project
          data={{
            heading: "E-commerce Website",
            message:
              "A responsive e-commerce platform built with React and Node.js.",
            tech: ["HTML", "CSS", "JavaScript"],
            img: { img_uri, alt: "E-commerce Website" },
          }}
        /> */}
      </div>
    </>
  );
}

export default Projects;
