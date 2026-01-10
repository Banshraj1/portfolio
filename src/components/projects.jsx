import React from "react";
import Project from "./project";
import { img_uri } from "../constants.js";
// import { Container } from './styles';

function Projects() {
  return (
    <>
      <div className="line"></div>
      <div className="project-container">
        <Project
          data={{
            heading: "E-commerce Website",
            message:
              "A responsive e-commerce platform built with React and Node.js.",
            tech: ["HTML", "CSS", "JavaScript"],
            img: { img_uri, alt: "E-commerce Website" },
          }}
        />

        <Project
          data={{
            heading: "E-commerce Website",
            message:
              "A responsive e-commerce platform built with React and Node.js.",
            tech: ["HTML", "CSS", "JavaScript"],
            img: { img_uri, alt: "E-commerce Website" },
          }}
        />

        <Project
          data={{
            heading: "E-commerce Website",
            message:
              "A responsive e-commerce platform built with React and Node.js.",
            tech: ["HTML", "CSS", "JavaScript"],
            img: { img_uri, alt: "E-commerce Website" },
          }}
        />

        <Project
          data={{
            heading: "E-commerce Website",
            message:
              "A responsive e-commerce platform built with React and Node.js.",
            tech: ["HTML", "CSS", "JavaScript"],
            img: { img_uri, alt: "E-commerce Website" },
          }}
        />
      </div>
    </>
  );
}

export default Projects;
