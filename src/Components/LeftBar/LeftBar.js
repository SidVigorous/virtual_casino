import React from "react";
import "./LeftBar.css";
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
      <marquee direction="down" className="marquee-main">
        <div className="marquee-picture">
          <img src={marquee1} alt="" style={{ width: "150px" ,borderRadius:"10px"}} />
          <img src={marquee2} alt="" style={{ width: "150px" ,borderRadius:"10px"}} />
        </div>
        <div className="marquee-picture">
          <img src={marquee1} alt="" style={{ width: "150px",borderRadius:"10px" }} />
          <img src={marquee2} alt="" style={{ width: "150px" ,borderRadius:"10px"}} />
        </div>
        <div className="marquee-picture">
          <img src={marquee1} alt="" style={{ width: "150px",borderRadius:"10px" }} />
          <img src={marquee2} alt="" style={{ width: "150px" ,borderRadius:"10px"}} />
        </div>
        <div className="marquee-picture">
          <img src={marquee1} alt="" style={{ width: "150px" ,borderRadius:"10px"}} />
          <img src={marquee2} alt="" style={{ width: "150px" ,borderRadius:"10px"}} />
        </div>
        <div className="marquee-picture">
          <img src={marquee1} alt="" style={{ width: "150px",borderRadius:"10px" }} />
          <img src={marquee2} alt="" style={{ width: "150px" ,borderRadius:"10px"}} />
        </div>
        <div className="marquee-picture">
          <img src={marquee1} alt="" style={{ width: "150px" ,borderRadius:"10px"}} />
          <img src={marquee2} alt="" style={{ width: "150px",borderRadius:"10px" }} />
        </div>
        <div className="marquee-picture">
          <img src={marquee1} alt="" style={{ width: "150px",borderRadius:"10px" }} />
          <img src={marquee2} alt="" style={{ width: "150px",borderRadius:"10px" }} />
        </div>
        <div className="marquee-picture">
          <img src={marquee1} alt="" style={{ width: "150px" ,borderRadius:"10px"}} />
          <img src={marquee2} alt="" style={{ width: "150px" ,borderRadius:"10px"}} />
        </div>
      </marquee>
    </div>
  );
};

export default LeftBar;
