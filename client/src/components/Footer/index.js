import React from "react";
import footerLogo from "../../assets/images/footerLogo.png";
import "./styles.css";

function Footer(){
  return (
    <footer className="Footer">
      <div className="Footer-col">
        <h6 className="Footer-section-header">About</h6>
        <ul className="Footer-section-ul">
          <li><a href="#">lorem ispum</a></li>
          <li><a href="#">dolor sit amet</a></li>
          <li><a href="#">consectetur</a></li>
          <li><a href="#">magna aliqua</a></li>
          <li><a href="#">reprehenderit</a></li>
        </ul>
      </div>

      <div className="Footer-col">
        <h6 className="Footer-section-header">Discover</h6>
        <ul className="Footer-section-ul">
          <li><a href="#">lorem ispum</a></li>
          <li><a href="#">dolor sit amet</a></li>
          <li><a href="#">consectetur</a></li>
          <li><a href="#">magna aliqua</a></li>
          <li><a href="#">reprehenderit</a></li>
        </ul>
      </div>
      
      <img src={footerLogo} alt="Footer logo" />
    </footer>
  );
}

export default Footer;
