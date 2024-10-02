import React from "react";
import KeyboardImage from "../Images/Keyboard.png";
import MouseImage from "../Images/mouse.png";

function DesktopHome() {
  return (
    <div id="home" className="section">
      {/* Mobile Section */}
      <div id="mobile-home" className="mobile-section">
        <h1 style={{ margin: '0', padding: '10px' }}>Integrated Masters Student Leanna</h1>
      </div>

      {/* Image container for desktop */}
      <div className="image-container">
        <div className="background-table">

          {/* Keyboard and Mouse inside a flex container */}
          <div className="input-device-container">
            {/* Keyboard */}
            <div className="keyboard-container">
              <img src={KeyboardImage} className="keyboard-image" alt="Keyboard" />
            </div>

            {/* Mouse */}
            <div className="mouse-container">
              <img src={MouseImage} className="mouse-image" alt="Mouse" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DesktopHome;
