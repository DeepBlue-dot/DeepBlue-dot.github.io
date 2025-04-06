import "./Navbar.css";
import { tabs } from "../../sources.js";
import { Link } from "react-scroll";
import Logo from "../../Commons/Logo/Logo.js";
import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { FaTimes } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import SocialHandles from "../../Commons/SocialHandles/SocialHandles.js";
import resume from "../../assets/Resume.pdf"

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
          <div key={index} onClick={() => setOpenSidebar(!openSidebar)}>
            <Link
              to={tab.id}
              smooth={true}
              spy={true}
              className="tab"
              activeClass="active"
            >
              {tab.name}
            </Link>
          </div>
        ))}
      </div>
      <SocialHandles />
      <div className="box flex-center buttons">
        <a href={resume} target="_blank" className="btn primary contact-btn flex-center" rel="noreferrer">
          <MdDownload />
          <span>Resume</span>
        </a>
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
