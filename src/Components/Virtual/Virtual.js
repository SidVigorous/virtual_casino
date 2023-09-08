import React from "react";
import "./Virtual.css";
import Card from "react-bootstrap/Card";
import baccarat from "../../Assets/Images/Baccarat-_Virtual_.png";
import poker from "../../Assets/Images/Poker-20-20-_Virtual_.png";
import race from "../../Assets/Images/Race-20-20-_Virtual_.png";
import amar from "../../Assets/Images/Amar-Akbar-Anthony-_Virtual_.png";
import theenpati from "../../Assets/Images/Teenpatti-Open-_virtual_.png";
import muflis from "../../Assets/Images/Muflis Teenpatti (virtual).webp";
import casino from "../../Assets/Images/Casino War (Virtual).webp";
import teenpati from "../../Assets/Images/Teenpatti Test (virtual).webp";
import trio from "../../Assets/Images/Trio (virtual).webp";
import queen from "../../Assets/Images/Queen (virtual).webp";
import t20 from "../../Assets/Images/Teenpatti T20 (Virtual).webp";
import meter from "../../Assets/Images/Casino Meter (Virtual).webp";
import andar from "../../Assets/Images/Andar Bahar (Virtual).webp";
import up from "../../Assets/Images/7 up & Down (Virtual).webp";

import { Link } from "react-router-dom";

const Virtual = () => {
  return (
    <div className="games-main">
      <div className="games-card ">
        <Card style={{ width: "14rem", border: "none" }}>
          <Card.Img variant="top" src={baccarat} />
        </Card>
        <Card style={{ width: "14rem", border: "none" }}>
          <Card.Img variant="top" src={poker} />
        </Card>
        <Card style={{ width: "14rem", border: "none" }}>
          <Card.Img variant="top" src={race} />
        </Card>
        <Card style={{ width: "14rem", border: "none" }}>
          <Card.Img variant="top" src={amar} />
        </Card>
        <Card style={{ width: "14rem", border: "none" }}>
          <Card.Img variant="top" src={theenpati} />
        </Card>
        <Card style={{ width: "14rem", border: "none" }}>
          <Card.Img variant="top" src={muflis} />
        </Card>
        <Card style={{ width: "14rem", border: "none" }}>
          <Card.Img variant="top" src={casino} />
        </Card>
        <Card style={{ width: "14rem", border: "none" }}>
          <Card.Img variant="top" src={trio} />
        </Card>
        <Card style={{ width: "14rem", border: "none" }}>
          <Card.Img variant="top" src={queen} />
        </Card>
        <Card style={{ width: "14rem", border: "none" }}>
          <Card.Img variant="top" src={teenpati} />
        </Card>
        <Card style={{ width: "14rem", border: "none" }}>
          <Card.Img variant="top" src={t20} />
        </Card>
        <Card style={{ width: "14rem", border: "none" }}>
          <Card.Img variant="top" src={andar} />
        </Card>
        <Link to="/casino-details">
          <Card style={{ width: "14rem", border: "none" }}>
            <Card.Img variant="top" src={up} />
          </Card>
        </Link>

        <Card style={{ width: "14rem", border: "none" }}>
          <Card.Img variant="top" src={meter} />
        </Card>
        <Card style={{ width: "14rem", border: "none" }}>
          <Card.Img variant="top" src={queen} />
        </Card>
        <Card style={{ width: "14rem", border: "none" }}>
          <Card.Img variant="top" src={teenpati} />
        </Card>
        <Card style={{ width: "14rem", border: "none" }}>
          <Card.Img variant="top" src={theenpati} />
        </Card>
        <Card style={{ width: "14rem", border: "none" }}>
          <Card.Img variant="top" src={muflis} />
        </Card>
        <Card style={{ width: "14rem", border: "none" }}>
          <Card.Img variant="top" src={casino} />
        </Card>
        <Card style={{ width: "14rem", border: "none" }}>
          <Card.Img variant="top" src={trio} />
        </Card>
      </div>{" "}
    </div>
  );
};

export default Virtual;
