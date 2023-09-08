import React from "react";
import "./UpDown.css";

import LeftBar from "../LeftBar/LeftBar";
import MiddlePart from "../MiddlePart/MiddlePart";
import RightBar from "../RightBar/RightBar";
const Viewgame = () => {
  return (
    <div className="main-div">
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "85%",
        }}
      >
        <div style={{ width: "25%" }}>
          <LeftBar />
        </div>
        <div style={{ width: "50%", marginLeft: "5rem" }}>
          <MiddlePart />
        </div>

        <div style={{ width: "25%" }}>
          <RightBar />
        </div>
      </div>
    </div>
  );
};

export default Viewgame;
