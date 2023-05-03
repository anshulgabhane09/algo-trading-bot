
import React from "react";
import logo from "../Assets/download.jpg";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <img src={logo} alt="Logo" className="sidebar-logo" />
      </div>
      <div className="sidebar-item">
        <a href="/account">Account</a>
      </div>
      <div className="sidebar-item">
        <a href="/strategies">Strategies</a>
      </div>
      <div className="sidebar-item">
        <a href="/performance">Performance</a>
      </div>
      <div className="sidebar-item">
        <a href="/positions">Positions</a>
      </div>
    </div>
  );
}

export default Sidebar;
