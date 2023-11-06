import React from "react";
import "./style.css";

const Header = () => {
  return (
    <div className="transparent-header">
      <p className="first-item">Головна</p>
      <div className="header-splash-ocean">
        <div className="header-centered-content">
          <span className="header-splash-ocean-span">
            <b>UNDR</b>
          </span>
          <span className="header-splash-ocean-span">
            <b>SEA</b>
          </span>
        </div>
      </div>
      <p className="second-item">Морські жителі</p>
      <p className="third-item">Корали</p>
    </div>
  );
};

export default Header;
