// ContentSection.js
import React from 'react';
import './ContentSection.css';

const ContentSection = () => {
  return (
    <div className="content-section">
      <div className="text-content">
        <h2>Sexual And Reproductive Health And Rights</h2>
        <p>Sexual and Reproductive Health and Rights (SRHR) encompass a fundamental set of human rights related to sexuality, reproduction, and well-being.</p>
        <div className="buttons-container">
          <button className="play-audio-button">Play Audio</button>
          <button className="learn-more-button">Learn more</button>
        </div>
      </div>

      <div className="image-content">
        {/* Add your image here */}
        <img src="./image/img1.png" alt="Image" width="442.62" height="329.07" />
      </div>
      <div className="access1">
        {/* Add your logo image here */}
        <img src="./image/acc.png" alt="access1" width="48px" height="48.01px" />
      </div>
    </div>
  );
};

export default ContentSection;
