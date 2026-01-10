import React from "react";
function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <div className="profile">
          {/* <!--image--> */}
          <h2>Banshraj Prajapati</h2>
          <p>Full Stack Developer</p>
        </div>

        {/* <!--contact--> */}
        <div className="contact">
          <div className="email">
            <h3 className="label">Email</h3>
            <a href="mailto:ujjwalpandey1621@gmail.com" className="value">
              prajapatibanshraj57@gmail.com
            </a>
          </div>
          <div className="phone">
            <h3 className="label">Phone</h3>
            <a href="tel:9219657572" className="value">
              9219657572
            </a>
          </div>
          <div className="location">
            <h3 className="label">Location</h3>
            <p className="value">Mau, (U.P.)</p>
          </div>
          <div class="social">
            <a href="">
              <img src="https://simpleicons.org/icons/x.svg" alt="" />
            </a>
            <a href="">
              <img src="https://simpleicons.org/icons/github.svg" alt="" />
            </a>
            <a href="">
              <img src="https://simpleicons.org/icons/instagram.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
