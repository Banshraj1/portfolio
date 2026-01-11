import React from "react";
// import "./"
function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <div className="profile">
          {/* <!--image--> */}
          <img
            src="https://res.cloudinary.com/dklt6d0zk/image/upload/v1768143686/myimage_bgxsx4.jpg"
            alt="myimage.jpg"
            className="myimage"
          />
          <h4>Banshraj Prajapati</h4>
          <p>Full Stack Developer</p>
        </div>

        {/* <!--contact--> */}
        <div className="contact flex">
          <div className="email">
            <h3 className="label">Email</h3>
            <a href="mailto:prajapatibanshraj57@gmail.com" className="value">
              prajapatibanshraj57@gmail.com
            </a>
          </div>
          <div className="phone">
            <h3 className="label">Phone</h3>
            <a href="tel:9219657572">9219657572</a>
          </div>

          <div>
            <h3 className="label">Location</h3>
            <a
              href="https://www.google.com/maps/place/Mau,"
              className="value"
              target="blank"
            >
              Mau, (U.P.)
            </a>
          </div>

          <div className="social">
            <a href="https://x.com/Banshraj9219" target="blank">
              <img src="https://simpleicons.org/icons/x.svg" alt="" />
            </a>
            <a href="https://github.com/banshraj1" target="blank">
              <img src="https://simpleicons.org/icons/github.svg" alt="" />
            </a>
            <a
              href="https://www.linkedin.com/in/banshraj-prajapati/"
              className="linkedin"
              target="blank"
              style={{ textDecoration: "none" }}
            >
              <h1 className="label " style={{ fontSize: "1.4rem" }}>
                in
              </h1>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
