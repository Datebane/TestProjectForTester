import React from "react";
import "./style.css";

const Footer = () => {
  return (
    <div className="footer_wrapper">
      <div className="centered-container">
        <div className="splash-ocean">
          <div className="centered-text">
            <span className="splash-ocean-footer-item">
              <b>UNDR</b>
            </span>
            <span className="splash-ocean-footer-item">
              <b>SEA</b>
            </span>
          </div>
        </div>
      </div>
      <div className="footer-items">
        <p className="first-footer-item">Корисні посилання</p>
        <p className="second-footer-item">Головне</p>
        <p className="third-footer-item">Морські жителі</p>
        <p className="fourth-footer-item">Корали</p>
      </div>
    </div>
  );
};

export default Footer;
