import React from "react";
import {TechEdu} from "./index.jsx";
function Education() {
  return (
    <>
      <div id="education ">
        <div className="edtech">
          <TechEdu input={{year: "2024-2028", degree: "Bachelor Of Technology",college:"National Institute of Technology Silchar", work: "Second-year Electronics and Instrumentation Engineering student with a CGPA of 8.25, building strong technical fundamentals and actively developing web development skills.", goal: ""}}/>
          
          <TechEdu input={{year: "2019-2023", degree: "Schooling", college: "RSB Inter college,Mau", work: "Completed 10th and 12th from my hometown with consistent academic performance.", goal: ""}}/>
          <div className="liner"></div>
        </div>
      </div>
    </>
  );
}

export default Education;
