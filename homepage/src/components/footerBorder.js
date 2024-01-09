import React from 'react';
import './footerBorder.css';

const FooterBorder = () => {
  return (
    <div className="footer-border">
      <hr className="line" />
      <div className="copyright">
        <p className="copyright-text">Copyright © 2023 Disability Info Platform. All Rights Reserved.</p>
        <p className="developed-by-text">Developed by Ikigai Tech</p>
      </div>
    </div>
  );
};

export default FooterBorder;
