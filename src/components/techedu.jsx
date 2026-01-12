import React from "react";

// import { Container } from './styles';

function TechEdu(inputs) {
  return (
    <>
      <div className="edfirst">
        <h3 className="degree">
          {inputs.input.degree} <div className="year">{inputs.input.year}</div>
        </h3>
        <p className="college">{inputs.input.college}</p>
        <p className="work">{inputs.input.work}</p>
        <div className="goal"></div>
      </div>
    </>
  );
}

export default TechEdu;
