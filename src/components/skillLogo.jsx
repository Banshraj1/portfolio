import React from "react";
// import { logos } from "../constants.js";
// import { Container } from './styles';

function SkillLogo(input) {
  console.log(input.input.logos);

  return (
    <>
      <div className="item">
        <img src={input.input.logos} alt="" />
        <h3>{input.input.skill}</h3>
      </div>
    </>
  );
}

export default SkillLogo;
