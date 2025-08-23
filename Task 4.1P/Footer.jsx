import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-columns">
        <div>
          <h4>Explore</h4>
          <p>Home</p>
          <p>Questions</p>
          <p>Articles</p>
          <p>Tutorials</p>
        </div>
        <div>
          <h4>Support</h4>
          <p>FAQs</p>
          <p>Help</p>
          <p>Contact Us</p>
        </div>
        <div>
          <h4>Stay connected</h4>
          <div className="socials">
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />
          </div>
        </div>
      </div>
      <p className="footer-bottom">DEV@Deakin 2022</p>
      <div className="footer-links">
        <p>Privacy Policy</p>
        <p>Terms</p>
        <p>Code of Conduct</p>
      </div>
    </footer>
  );
}

export default Footer;
