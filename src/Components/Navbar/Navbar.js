import React from "react";
import logo from "../../Assets/Images/logo.png";
import "./Navbar.css";

import { Link } from "react-router-dom";
import { IoMdSettings } from "react-icons/io";
import { AiOutlineUser } from "react-icons/ai";

const Navbar = () => {
  return (
    <div>
      <div className="left-nav">
        <Link to="/">
          <img src={logo} alt="" className="main-logo" />
        </Link>

        <input type="search" className="search-here" />

        <div className="bal-exp">
          <span>Bal 0</span>
          &nbsp;
          <span>Exp 0</span>
        </div>
      </div>
      <div className="navigation-bar">
        <div>
          <button className="navigation-btn">Home</button>
          <button className="navigation-btn">in-play</button>
          <button className="navigation-btn">Football</button>
          <button className="navigation-btn">Tennis</button>
          <button className="nav-btn-casino">Casino</button>
          <button className="navigation-btn">Horse racing</button>
          <button className="navigation-btn">Greyhound racing</button>
          <button className="navigation-btn">kabaddi</button>
          <button className="navigation-btn">politics</button>
          <button className="nav-btn-new">
            Sport book<em>New</em>
          </button>
          <button className="nav-btn-casino">int Casino</button>
          <button className="navigation-btn">
            Binary<em>New</em>
          </button>{" "}
        </div>
        <div style={{ display: "flex" }}>
          <button className="navigation-btn">Multi Market</button>
          <div className="nav-setting">
            setting <IoMdSettings />
          </div>
        </div>
      </div>
      <div className="last-navbar">
        <div>
          <Link to="/Lobby">
            <button
              style={{
                border: "none",
                marginLeft: "10px",
                borderRadius: "5px",
              }}
            >
              Back
            </button>
          </Link>
          <span style={{ marginLeft: "5px", color: "white" }}>
            Teenpatti Test
          </span>
        </div>
        <div>
          <AiOutlineUser style={{ marginRight: "100px" }} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
