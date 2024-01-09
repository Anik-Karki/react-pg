// Header.js
import React, { useState } from 'react';
import './Header.css'; // Create a CSS file for styling


const Header = () => {
  const [activeNavItem, setActiveNavItem] = useState('Home');

  const handleNavClick = (item) => {
    setActiveNavItem(item);
  };

  return (
    <div className="header-container">
      <div className="logo-container">
        {/* Add your logo image or text here */}
        <img src="./image/logo.png" alt="Logo" width="161" height="53" />
      </div>

      <div className="navigation-container">
        <nav>
          {['Home', 'About us', 'Learning Content', 'Resources', 'Service', 'Contact us'].map((item) => (
            <div
              key={item}
              className={`nav-item ${activeNavItem === item ? 'active' : ''}`}
              onClick={() => handleNavClick(item)}
            >
              {item}
            </div>
          ))}
        </nav>
      </div>

      <div className="search-container">
        {/* Add your search icon or input field here */}
        <span>🔍</span>
      </div>
    </div>
  );
};

export default Header;
