// FourthContentSection.js
import React from 'react';
import './FourthContentSection.css';

const FourthContentSection = () => {
  return (
    <div className="fourth-content-section">
      <div className="section-title">
        <h2>Popular Resources</h2>
        <p>Click on the card to see more about the topic of your choice.</p>
        <a href="#" className="view-all-link2">View All</a>
      </div>

      <div className="content">
        {/* First Tab */}
        <div className="tab-box">
          <img src="./image/pr1.png" alt="Image 1" />
        </div>

        {/* Second Tab */}
        <div className="tab-box">
          <img src="./image/pr2.png" alt="Image 2" />
        </div>

        {/* Third Tab */}
        <div className="tab-box">
          <img src="./image/pr3.png" alt="Image 3" />
        </div>
      </div>
    </div>
  );
};

export default FourthContentSection;
