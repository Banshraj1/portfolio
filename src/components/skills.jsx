import React from "react";
import { SkillLogo } from "./index.jsx";
import { logos } from "../constants.js";
// import { Container } from './styles';

function Skills() {
  return (
    <>
      <div className="line"></div>
      <div className="grid-container">
        <SkillLogo input={{ skill: "HTML5", logos: logos.html }} />
        <SkillLogo input={{ skill: "CSS3", logos: logos.css }} />
        <SkillLogo input={{ skill: "JavaScript", logos: logos.javascript }} />
        <SkillLogo input={{ skill: "React", logos: logos.react }} />
        <SkillLogo input={{ skill: "Node js", logos: logos.nodejs }} />
        <SkillLogo input={{ skill: "Git & Github", logos: logos.git }} />
      </div>
    </>
  );
}

export default Skills;
