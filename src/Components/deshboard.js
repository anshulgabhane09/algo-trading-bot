/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";



const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [

  ];
  return (
    <nav className="dashboard-container">
      <div className="dashboard-logo-container">
        <a href="/">
          <h1 className="heading-home">Algo TradeX</h1>
        </a>
      </div>

      <div className="navbar-links-container">
        <a href="">Home</a>
        <a href="">Work</a>
        <a href="">Contact</a>
        <a href="/">
          <button className="register-button">Logout</button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
