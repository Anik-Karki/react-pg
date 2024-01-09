// SixthContentSection.js
import React from 'react';
import './SixthContentSection.css';

const SixthContentSection = () => {
  return (
    <div className="sixth-content-section">
      <div className="image-container">
        <img src="./image/bg1.png" alt="Solid Background" className="bg-image" />
        <div className="overlay-container">
          <img src="./image/bgim.png" alt="Overlay Image" className="overlay-image" />
          <div className="text-container">
            <h2>Get Disability Info Platform on Your Phone</h2>
            <p>
              Unlock a world of knowledge at your fingertips! Download our Resource Library app today and access a treasure trove of valuable information anytime, anywhere.
            </p><b></b>
            <button className="download-button">Download Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SixthContentSection;
