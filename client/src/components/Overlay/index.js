import React, { useState } from "react";
import { Image } from "react-bootstrap";
import "./styles.css";

function Overlay(props){
  // state for overlay
  const [showOverlay, setshowOverlay] = useState(false);
  // functions to open/close overlay
  const openOverlay = () => setshowOverlay(true);
  const closeOverlay = () => setshowOverlay(false); 
  
  // extract data from props
  const { src, alt, description } = props;

  return (
    // image tile
    <>
      <div className="Overlay-tile" onClick={openOverlay}>
        <div className="Overlay-tile-img">
          <Image rounded src={src} alt={alt} />
        </div>
      </div>

      {/* conditional to show overlay */}
      {
        showOverlay
        ?
          <div className="Overlay" onClick={closeOverlay}>
            <span className="Overlay-close" onClick={closeOverlay}>Close X</span>
            <div className="Overlay-div">
              <img src={src} alt={alt} className="Overlay-img" />
              <p>{description}</p>
            </div> 
          </div>
        : 
          null
      }
    </>  
  );
}

export default Overlay;

