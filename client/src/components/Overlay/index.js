import React, { useState } from "react";
import { Image } from "react-bootstrap";
import "./styles.css";

function Overlay(props){
  // state for overlay
  const [showOverlay, setshowOverlay] = useState(false);
  // functions to open/close overlay
  const openOverlay = () => setshowOverlay(true);
  const closeOverlay = () => setshowOverlay(false); 
  
  return (
    // image tile
    <>
      <div className="Overlay-tile" onClick={openOverlay}>
        <div className="Overlay-tile-img">
          <Image rounded src={props.src} alt="something" />
        </div>
      </div>

      {/* conditional to show overlay */}
      {
        showOverlay
        ?
          <div className="Overlay" onClick={closeOverlay}>
            <span className="Overlay-close" onClick={closeOverlay}>Close X</span>
            <div className="Overlay-div">
              <img src={props.src} alt="milkshake" className="Overlay-img" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
            </div> 
          </div>
        : 
          null
      }
    </>  
  );
}

export default Overlay;

