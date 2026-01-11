import React from "react";
function SkillLogo(input) {
  console.log(input.input.logos);

  return (
    <>
      <div className="item">
        <img src={input.input.logos} alt="" />
        <a href={`https://devdocs.io/${input.input.skill}`} target="_blank" rel="noopener noreferrer">
          <p>{input.input.skill.toUpperCase()}</p>
        </a>
      </div>
    </>
  );
}

export default SkillLogo;
