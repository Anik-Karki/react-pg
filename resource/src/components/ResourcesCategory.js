// ResourcesCategory.js

import React from 'react';
import './ResourcesCategory.css'; // Import the CSS file for styling

const ResourcesCategory = () => {
  return (
    <div className="resources-category1">
      <h2 className="title1">Resources Category</h2>
      <p className="description1">Filter the resources by category.</p>
    
    <div className="category-column">
    <h3 className="category-title">Category</h3>
    <p className="category-text">Mental Health</p>
    <p className="category-text">Sexual and Reproductive Health and Rights</p>
    <p className="category-text">Contraception</p>
    <p className="category-text">Pregnancy</p>
    <p className="category-text">Safe Abortion</p>
    <p className="category-text">Gender Based Violence</p>
    <p className="category-text">HIV and STIs</p>
    <p className="category-text">Harmful Practices</p>
    <p className="category-text">Laws in SHRH in Nepal</p>
    <p className="category-text">Referral Services</p>
    <p className="category-text">Gender Based Violence</p>
    <p className="category-text">HIV and STIs</p>
    <p className="category-text">Harmful Practices</p>
    <p className="category-text">Laws in SHRH in Nepal</p>
    <p className="category-text">Referral Services</p>
    <p className="category-text">Referral Services</p>
    {/* Add more text items as needed */}
    </div>
    <div className="box-section">
          {/* First Box */}
          <div className="article-post">
            <div className="article-image">
            <img src="./image/ari.png" alt="article-image"></img>
              {/* First Image */}
              {/* Add content or background-image styling */}
            </div>
            <div className="article-details">
            <img src="./image/ar1.png" alt="article-details"></img>
              {/* Second Image */}
              {/* Add content or background-image styling */}
            </div>
          </div>


          <div className="article-post">
            <div className="article-image">
            <img src="./image/ari2.png" alt="article-image"></img>
              {/* First Image */}
              {/* Add content or background-image styling */}
            </div>
            <div className="article-details">
            <img src="./image/ar2.png" alt="article-details"></img>
              {/* Second Image */}
              {/* Add content or background-image styling */}
            </div>
          </div>

          <div className="article-post">
            <div className="article-image">
            <img src="./image/ari3.png" alt="article-image"></img>
              {/* First Image */}
              {/* Add content or background-image styling */}
            </div>
            <div className="article-details">
            <img src="./image/ar3.png" alt="article-details"></img>
              {/* Second Image */}
              {/* Add content or background-image styling */}
            </div>
          </div>

          <div className="article-post">
            <div className="article-image">
            <img src="./image/ari4.png" alt="article-image"></img>
              {/* First Image */}
              {/* Add content or background-image styling */}
            </div>
            <div className="article-details">
            <img src="./image/ar4.png" alt="article-details"></img>
              {/* Second Image */}
              {/* Add content or background-image styling */}
            </div>
          </div>
         
          <div className="pagination">
        <button className="nav-button">{'<<'}</button>
        <button className="nav-button">{'<'}</button>

        {[1, 2, 3, '...', 10].map((pageNumber, index) => (
          <button key={index} className="page-button">
            {pageNumber}
          </button>
        ))}

        <button className="nav-button">{'>'}</button>
        <button className="nav-button">{'>>'}</button>
      </div>

         

          {/* Add more boxes as needed */}
        </div>
      </div>
    

    
  

);
};

export default ResourcesCategory;