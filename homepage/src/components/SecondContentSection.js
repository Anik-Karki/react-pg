// SecondContentSection.js
import React from 'react';
import './SecondContentSection.css';

const SecondContentSection = () => {
  return (
    <div className="second-content-section">
      <div className="section-title">
        <h2>Helpful Topics</h2>
        <p>Click on the card or Learn more button to see more about the topic of your choice.</p>
      </div>

      <div className="image-tabs-container">
        <div className="image-tab">
          <img src="./image/bi1.png" alt="Image 1" />
        </div>
        <div className="image-tab">
          <img src="./image/bi2.png" alt="Image 2" />
        </div>
        <div className="image-tab">
          <img src="./image/bi3.png" alt="Image 3" />
        </div>
        <div className="image-tab">
          <img src="./image/bi4.png" alt="Image 4" />
        </div>
        <div className="image-tab">
          <img src="./image/bi5.png" alt="Image 5" />
        </div>
        
        <div className="image-tab">
          <img src="./image/bi6.png" alt="Image 6" />
        </div>
        <div className="image-tab">
          <img src="./image/bi7.png" alt="Image 6" />
        </div>
        <div className="image-tab">
          <img src="./image/bi8.png" alt="Image 6" />
        </div>
        <div className="image-tab">
          <img src="./image/bi9.png" alt="Image 6" />
        </div>
        <div className="image-tab">
          <img src="./image/bi10.png" alt="Image 6" />
        </div>
      </div>

        {/* Repeat the above block for a total of 10 blog posts */}
      
      
    </div>
  );
};

export default SecondContentSection;
