import React from 'react';
import '../styles/footer.css'

export default function Footer({ formUrl }) {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div>
          <h3 className="footer-logo">JOGURTMAN</h3>
          <p className="footer-text">YOGURT MADE WITH LOVE </p>
        </div>
        <div>
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-links">
            <li><a href="#menu">Our Menu</a></li>
            <li><a href="#how-to-order">How to Order</a></li>
            <li><a href={formUrl} target="_blank" rel="noopener noreferrer">Google Order Form</a></li>
          </ul>
        </div>
        <div>
          <h4 className="footer-heading">Contact & Hours</h4>
          <p className="footer-text">MONDAY TO FRIDAY </p>
          <p className="footer-text">by request</p>
          <p className="footer-text" style={{ marginTop: '0.5rem' }}>jogurtbusiness@gmail.com</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} JOGURTMAN. All rights reserved.</p>
      </div>
    </footer>
  );
}