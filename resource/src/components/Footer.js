// Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="left-row">
        <img src="./image/logo.png" alt="Logo" className="logo" />
        <p className="footer-text">
          Empowering through knowledge, our disability information platform bridges understanding and support.
        </p>
        <div className="social-icons">
          {/* Add social media icons here */}
          <img src="./image/FacebookLogo.png" alt="Facebook" />
          <img src="./image/TwitterLogo.png" alt="Twitter" />
          <img src="./image/InstagramLogo.png" alt="Instagram" />
        </div>
      </div>
      <div className="center-row">
        <p className="header-text">Navigations</p>
        <div className="navigation-links">
          <p>Home</p>
          <p>About us</p>
          <p>Learning Content</p>
          <p>Resources</p>
          <p>Services</p>
          <p>Contact us</p>
        </div>
      </div>
      {/* Add right row here */}

      <div className="right-row">
        <div className="thick-border"></div>
        <p className="contact-info-header">
          Contact Information
        </p>
        <div className="contact-info">
          <div className="contact-icon">
          <img src="./image/House.png" alt="Facebook" />

            {/* Add address logo here */}

          </div>
          <p className="contact-text">
            {/* Add address here */}
            New Baneshwor, Kathmandu
          </p>
        </div>
        <div className="contact-info">
          <div className="contact-icon">
          <img src="./image/Phone.png" alt="Facebook" />
            {/* Add phone logo here */}
          </div>
          <p className="contact-text">
            {/* Add phone number here */}
            +977 9818202020
          </p>
        </div>
        <div className="contact-info">
          <div className="contact-icon">
          <img src="./image/mail.png" alt="Facebook" />
            {/* Add mail logo here */}
          </div>
          <p className="contact-text">
            {/* Add mail address here */}
            info@dip.com.np
          </p>
        </div>
      </div>


    </footer>
  );
};

export default Footer;
