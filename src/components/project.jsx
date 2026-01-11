import React from "react";
function Project(input) {
  console.log(input.data);

  return (
    <>
      <div className="project">
        <img src={input.data.img.img_uri} alt={input.data.img.alt} />
        <div className="card">
          <h3>{input.data.heading}</h3>
          <p>{input.data.message}</p>
          {input.data.tech.map((techItem) => (
            <span key={techItem}>{techItem}</span>
          ))}
        </div>
      </div>
    </>
  );
}

export default Project;
