import "./Navbar.css";
import { tabs } from "../../sources.jsx";
import { Link } from "react-scroll";
import Logo from "../../Commons/Logo/Logo.js";
import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { FaTimes } from "react-icons/fa";
import SocialHandles from "../../Commons/SocialHandles/SocialHandles.js";

function Navbar() {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <nav className="navbar flex">
      {openSidebar ? (
        <div
          className="overlay"
          onClick={() => setOpenSidebar(!openSidebar)}
        ></div>
      ) : (
        ""
      )}
      <Logo />
      <div
        className={`box flex-center tabs-group sidebar ${
          openSidebar ? "visible" : ""
        }`}
      >
        <div
          className="flex-center icon-wrapper cancel-btn"
          onClick={() => setOpenSidebar(!openSidebar)}
        >
          <FaTimes />
        </div>
        {tabs.map((tab, index) => (
          <div onClick={() => setOpenSidebar(!openSidebar)}>
            <Link
              to={tab.id}
              smooth={true}
              spy={true}
              className="tab"
              activeClass="active"
              key={index}
            >
              {tab.name}
            </Link>
          </div>
        ))}
      </div>
      <SocialHandles />
      <div className="box flex-center buttons">
        <Link to="contact" smooth={true} className="btn primary contact-btn">
          Hire me
        </Link>
        <div
          className="flex-center icon-wrapper menu-btn"
          onClick={() => setOpenSidebar(!openSidebar)}
        >
          <HiMenu />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
