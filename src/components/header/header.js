import React from "react";
import "./header.css";
import Logo from "./logo.png";
function Header() {
  return (
    <header className="container">
      <div className="logo_wrapper">
        <img src={Logo} alt="logo" />
        <h1>STATISTIC</h1>
      </div>
    </header>
  );
}

export default Header;
