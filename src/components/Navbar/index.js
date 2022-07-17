import React from "react";

import { Link } from "react-router-dom";

import Image from "../../assets/icons/responsive.png";
import "./style.css";

export default function Navbar() {
  return (
    <div className="navbar-container">
      <div className="navbar-left-side">
        <Link className="navbar-Link" to="/">
          <img src={Image} alt="logo" />
        </Link>
      </div>
      <div className="navbar-right-side">
        <Link className="navbar-Link" to="/product/create">
          <h3 className="border">Create Product</h3>
        </Link>
      </div>
    </div>
  );
}
