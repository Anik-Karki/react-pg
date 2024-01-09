// FifthContentSection.js
import React from 'react';
import './FifthContentSection.css';

const FifthContentSection = () => {
  return (
    <div className="fifth-content-section">
      <div className="section-title">
        <h2>Nearest Hospital</h2>
        <p>Click on the card to see more about the topic of your choice.</p>
      </div>

      <div className="content-container1">
        <div className="map-container">
          <img src="./image/map.png" alt="Map Image" />
          <p className="zoom-text">Click + to zoom in and - to zoom out.</p>
          <a href="#" className="view-all-link">
            View All
          </a>
        </div>

        <div className="hospital-info">
          {/* Repeat this block for each hospital */}
          <div className="hospital-box">
            <h3> Teaching Hospital </h3>
            <p>Maharajgunj Rd, Kathmandu 44600</p>
            <a href="#" className="get-location-link">
              Get Location
            </a>
          </div>
          <div className="hospital-box">
            <h3>Kanti Hospital </h3>
            <p>Maharajgunj Rd, Kathmandu 44600</p>
            <a href="#" className="get-location-link">
              Get Location
            </a>
          </div>

          <div className="hospital-box">
            <h3>Patan Hospital </h3>
            <p>Maharajgunj Rd, Kathmandu 44600</p>
            <a href="#" className="get-location-link">
              Get Location
            </a>
          </div>

          {/* Repeat the above block for additional hospitals */}
        </div>
      </div>
    </div>
  );
};

export default FifthContentSection;
