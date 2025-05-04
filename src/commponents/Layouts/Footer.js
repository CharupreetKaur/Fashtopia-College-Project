import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <style>
        {`
          .footer {
            background: linear-gradient(135deg, #ff61a6, #ff9a8b, #ff7d00);
            padding: 30px 0;
            color: white;
            font-family: 'Comic Sans MS', cursive, sans-serif;
            text-align: center;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
            border-top: 3px solid #ff61a6;
          }

          .footer-title {
            font-size: 24px;
            font-weight: bold;
            text-transform: uppercase;
            letter-spacing: 2px;
            margin-bottom: 15px;
          }

          .footer-links {
            font-size: 18px;
            margin-top: 10px;
          }

          .footer-link {
            color: #fff;
            text-decoration: none;
            font-weight: bold;
            padding: 0 10px;
            transition: color 0.3s ease;
          }

          .footer-link:hover {
            color: #ff7d00;
            text-decoration: underline;
          }
        `}
      </style>

      <div className="footer">
        <h1 className="footer-title">All Rights Reserved &copy; FASHTOPIA</h1>
        <p className="footer-links">
          <Link to="/aboutus" className="footer-link">About</Link> | 
          <Link to="/contactus" className="footer-link">Contact</Link> | 
          <Link to="/policy" className="footer-link">Privacy Policy</Link>
        </p>
      </div>
    </>
  );
};

export default Footer;
