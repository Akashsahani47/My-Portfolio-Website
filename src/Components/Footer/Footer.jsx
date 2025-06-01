import React from 'react';
import './Footer.css';
import footer_logo from '../../assets/footer_logo.svg';
import user_icon from '../../assets/user_icon.svg';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
          <h1
            style={{
              background: "linear-gradient(267deg, #DA7C25 50%, #B923E1 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontSize: "3rem",
              fontWeight: "bold",
              fontFamily: "Helvetica, Arial, sans-serif",
              letterSpacing: "2px",
            }}
          >
            Akash
          </h1>
         <p> I'm Akash — a full-stack developer with six months of experience and a passion for turning ideas into reality. Let's create something awesome together!</p>

        </div>

        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="User icon" />
            <input
              type="email"
              placeholder="Enter your email"
              aria-label="Enter your email"
            />
          </div>
          <div className="footer-subscribe">
            Subscribe
          </div>
        </div>
      </div>

      <hr />

      <div className="footer-bottom">
        <p className="footer-bottom-left">&copy; {new Date().getFullYear()} Akash. All rights reserved.</p>
        <div className="footer-bottom-right">
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
