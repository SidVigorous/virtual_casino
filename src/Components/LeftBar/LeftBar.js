import React from 'react'
import "./LeftBar.css"
import Marquee from "react-fast-marquee";
import marquee1 from "../../Assets/Images/marquee1.jpg";
import marquee2 from "../../Assets/Images/marquee2.jpg";
const LeftBar = () => {
  return (
    <div className="slider">
    <span className="menu_logos-wrapper">
      <span className="menu__logos-wrapper">
        <span className="menu_logo"></span>
        <span className="menu_lobby"></span>
      </span>
    </span>

    <Marquee
      behavior="scroll"
      scrollamount="20"
      width="100%"
      height="50%"
      direction="down"
      style={{ width: "200px" }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          margin: "5px",
        }}
      >
        <img src={marquee1} alt="" style={{ width: "200px" }} />
        <img src={marquee2} alt="" style={{ width: "200px" }} />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          margin: "5px",
        }}
      >
        <img src={marquee1} alt="" style={{ width: "200px" }} />
        <img src={marquee2} alt="" style={{ width: "200px" }} />
      </div>
    </Marquee>
  </div>
  )
}

export default LeftBar
