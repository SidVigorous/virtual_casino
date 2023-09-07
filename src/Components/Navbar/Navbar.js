import React from "react";
import logo from "../../Assets/Images/logo.png";
import depositicon from "../../Assets/Images/deposit-icon.png";
import withdrawal from "../../Assets/Images/withdrawal-icon.png";
import "./Navbar.css";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="left-nav">
        <Link to="/">
          <img src={logo} alt="" className="main-logo" />
        </Link>

        <input type="search" className="search-here" />
        <AiOutlineSearch />
        <button className="deposit-btn">
          {" "}
          <img src={depositicon} alt="" className="deposit-img" />
          DEPOSIT
        </button>
        <button className="withdrawal-btn">
          {" "}
          <img src={withdrawal} alt="" className="withdrawal-img" />
          WITHDRAWAL
        </button>

        <div className="bal-exp">
          <span>Bal 0</span>
          &nbsp;
          <span>Exp 0</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
