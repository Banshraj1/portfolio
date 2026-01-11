import React from "react";
import { SkillLogo } from "./index.jsx";
import { logos } from "../constants.js";
// import { Container } from './styles';

function Skills() {
  return (
    <>
      {/* <div className="line"></div> */}
      <div className="grid-container">
        <SkillLogo input={{ skill: "html", logos: logos.html }} />
        <SkillLogo input={{ skill: "css", logos: logos.css }} />
        <SkillLogo input={{ skill: "javascript", logos: logos.javascript }} />
        <SkillLogo input={{ skill: "react", logos: logos.react }} />
        <SkillLogo input={{ skill: "node", logos: logos.nodejs }} />
        <SkillLogo input={{ skill: "cpp", logos: logos.cpp }} />
        <SkillLogo input={{ skill: "git", logos: logos.git }} />
        {/* <SkillLogo input={{ skill: "git", logos: logos.git }} /> */}
      </div>
    </>
  );
}

export default Skills;
