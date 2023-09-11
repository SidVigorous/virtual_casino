import React from "react";
import "./LeftBar.css";
import marquee1 from "../../Assets/Images/marquee1.jpg";
import marquee2 from "../../Assets/Images/marquee2.jpg";
import { Link } from "react-router-dom";

const LeftBar = () => {
  return (
    <div className="slider">
      <div className="menu_logos-wrapper">
        <div className="menu__logos-wrapper">
          <div className="menu_logo"></div>
          <Link to="/Lobby">
            <div className="menu_lobby"></div>
          </Link>
        </div>
      </div>
      <marquee direction="down" className="marquee-main">
        <div className="marquee-picture">
          <img
            src={marquee1}
            alt=""
            style={{ width: "150px", borderRadius: "10px" }}
          />
          <img
            src={marquee2}
            alt=""
            style={{ width: "150px", borderRadius: "10px" }}
          />
        </div>
        <div className="marquee-picture">
          <img
            src={marquee1}
            alt=""
            style={{ width: "150px", borderRadius: "10px" }}
          />
          <img
            src={marquee2}
            alt=""
            style={{ width: "150px", borderRadius: "10px" }}
          />
        </div>
        <div className="marquee-picture">
          <img
            src={marquee1}
            alt=""
            style={{ width: "150px", borderRadius: "10px" }}
          />
          <img
            src={marquee2}
            alt=""
            style={{ width: "150px", borderRadius: "10px" }}
          />
        </div>
        <div className="marquee-picture">
          <img
            src={marquee1}
            alt=""
            style={{ width: "150px", borderRadius: "10px" }}
          />
          <img
            src={marquee2}
            alt=""
            style={{ width: "150px", borderRadius: "10px" }}
          />
        </div>
        <div className="marquee-picture">
          <img
            src={marquee1}
            alt=""
            style={{ width: "150px", borderRadius: "10px" }}
          />
          <img
            src={marquee2}
            alt=""
            style={{ width: "150px", borderRadius: "10px" }}
          />
        </div>
        <div className="marquee-picture">
          <img
            src={marquee1}
            alt=""
            style={{ width: "150px", borderRadius: "10px" }}
          />
          <img
            src={marquee2}
            alt=""
            style={{ width: "150px", borderRadius: "10px" }}
          />
        </div>
        <div className="marquee-picture">
          <img
            src={marquee1}
            alt=""
            style={{ width: "150px", borderRadius: "10px" }}
          />
          <img
            src={marquee2}
            alt=""
            style={{ width: "150px", borderRadius: "10px" }}
          />
        </div>
        <div className="marquee-picture">
          <img
            src={marquee1}
            alt=""
            style={{ width: "150px", borderRadius: "10px" }}
          />
          <img
            src={marquee2}
            alt=""
            style={{ width: "150px", borderRadius: "10px" }}
          />
        </div>
      </marquee>
    </div>
  );
};

export default LeftBar;
