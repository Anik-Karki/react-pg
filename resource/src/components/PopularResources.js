// PopularResources.js

import React from 'react';
import './PopularResources.css';

const PopularResources = () => {
  return (
    <div className="popular-resources">
      <h2 className="title1">Popular Resources</h2>
      <p className="subtitle">Click on the card to view the resources.</p>
      {/* Add your card components or content here */}

      <div className="image-tabs-container">
        <div className="image-tab">
          <img src="./image/pr1.png" alt="Image 1" />
        </div>
        <div className="image-tab">
          <img src="./image/pr1.png" alt="Image 2" />
        </div>
        <div className="image-tab">
          <img src="./image/pr1.png" alt="Image 3" />
        </div>
        <div className="image-tab">
          <img src="./image/pr1.png" alt="Image 4" />
        </div>
        <div className="image-tab">
          <img src="./image/pr1.png" alt="Image 5" />
        </div>
        <div className="image-tab">
          <img src="./image/pr1.png" alt="Image 6" />
        </div>
      </div>

      <button className="load-more-button">
        Load more
      </button>
    </div>
  );
};

export default PopularResources;
