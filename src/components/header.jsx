import React from "react";
import "../index.css";
// import { Container } from './styles';
import { Link, NavLink } from "react-router-dom";
function Header() {
  return (
    <>
      <div id="navigation">
        <nav>
          <Link to="/#about">About</Link>
          <Link to="/#skills">Skills</Link>
          <Link to="/#education">Education</Link>
          <Link to="/#My-Projects">My-Projects</Link>
        </nav>
      </div>
    </>
  );
}

export default Header;
