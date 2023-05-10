import React, { useState } from "react";
import { HiOutlineBars3 } from "react-icons/hi2";

const Navbar = () => {
  const [setOpenMenu] = useState(false);

  return (
    <div>
      <div className="dashboard-nav">
        <div className="dashboard-nav-logo-container">
          <a href="/">
            <h1 className="heading-home">Algo TradeX</h1>
          </a>
        </div>

        <div className="dashboard-navbar-links-container">
          <a href="/strategies">Strategies</a>
          <a href="/performance">Performance</a>
          <a href="/account">Account</a>
          <a href="/">
            <button className="logout-button">Logout</button>
          </a>
        </div>
        <div className="dashboard-navbar-menu-container">
          <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
