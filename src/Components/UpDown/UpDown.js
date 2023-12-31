import React from "react";
import "./UpDown.css";
import LeftBar from "../LeftBar/LeftBar";
import MiddlePart from "../MiddlePart/MiddlePart";
import RightBar from "../RightBar/RightBar";
import Navbar from "../Navbar/Navbar";
const Viewgame = () => {
  return (
    <>
      <Navbar />
      <div className="main-div">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "37px",
          }}
        >
          <div>
            <LeftBar />
          </div>
          <div>
            <MiddlePart />
          </div>

          <div>
            <RightBar />
          </div>
        </div>
      </div>
    </>
  );
};

export default Viewgame;
