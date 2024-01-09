// ThirdContentSection.js
import React from 'react';
import './ThirdContentSection.css';

const ThirdContentSection = () => {
  return (
    <div className="third-content-section">
      <div className="section-title">
        <h2>Resources Category</h2>
        <p>Click on the card to see the topics related to the selected category.</p>
        <a href="#" className="view-all-link1">View All</a>
      </div>

      <div className="content">
        {/* First Tab */}
        <div className="tab-box1">
          <img src="./image/rs1.png" alt="Image 1" />
        </div>

        {/* Second Tab */}
        <div className="tab-box1">
          <img src="./image/rs2.png" alt="Image 2" />
        </div>

        {/* Third Tab */}
        <div className="tab-box1">
          <img src="./image/rs1.png" alt="Image 3" />
        </div>

        {/* Fourth Tab */}
        <div className="tab-box1">
          <img src="./image/rs2.png" alt="Image 4" />
        </div>
      </div>
    </div>
  );
};

export default ThirdContentSection;
