// ImgContent.jsx

import React from 'react';
import './ImgContent.css'; // Import the CSS file for styling

const ImgContent = () => {
  return (
    <div className="image-container1">
      <img src="./image/imgc.png" alt="Background1" className="background-image1" />
      <div className="blimg">
        {/* Add your logo image here */}
        <img src="./image/Content.png" alt="blimg" width="509px" height="426px" />
      </div>
    </div>
  );
};

export default ImgContent;
