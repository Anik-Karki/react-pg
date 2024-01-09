// ContentSection.js
import React from 'react';
import './ContentSection.css';

const ContentSection = () => {
  return (
    <div className="image-container">
      <img src="./image/imb.png" alt="Background" className="background-image" />

      {/* Title */}
      <h1 className="title">
        Unbreakable Threads Navigating Life's Challenges with Grace
      </h1>

      {/* Text */}
      <p className="text">
        Memoir of triumph over adversity, but a call to action for a more inclusive society. It challenges preconceived notions, celebrates diversity.
      </p>

      {/* Watch Now Button */}
      <button className="watch-now-button">
        Watch Now
        <span role="img" aria-label="play" className="play-icon">
          ▶️
        </span>
      </button>
      <div className="access">
        {/* Add your logo image here */}
        <img src="./image/accessible.png" alt="access" width="48px" height="48.01px" />
      </div>
    
    </div>
  );
};

export default ContentSection;
