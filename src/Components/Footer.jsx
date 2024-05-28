import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter  } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
   <>
   
   <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="footer-col">
              <h4>Company</h4>
              <ul>
                <li>
                  <Link to="/">About</Link>
                </li>
                <li>
                  <Link to="/">Contact</Link>
                </li>
                <li>
                  <Link to="/">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/">Services</Link>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Resources</h4>
              <ul>
                <li>
                  <Link to="/">FAQ</Link>
                </li>
                <li>
                  <Link to="/">Pivacy Policy</Link>
                </li>
                <li>
                  <Link to="/">Payment</Link>
                </li>
                <li>
                  <Link to="/">Terms and Services</Link>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Customer Services</h4>
              <ul>
                <li>
                  <Link to="/">Shipping</Link>
                </li>
                <li>
                  <Link to="/">Track your order</Link>
                </li>
                <li>
                  <Link to="/">Get help</Link>
                </li>
                <li>
                  <Link to="/">Our cards</Link>
                </li>
              
              </ul>
            </div>
            <div className="footer-col">
              <h4>Follow Us</h4>
              <div className="social-icons">
                <Link to="https://www.instagram.com">
                  <FaInstagram />
                </Link>
                <Link to="https://www.facebook.com">
                  <FaFacebook />
                </Link>
                <Link to="https://twitter.com">
                  <FaTwitter />
                </Link>
              
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="copyrights">
        <p>&copy;ALL RIGHTS ARE RESERVED</p>
      </div>
   

   
   
   </>
  )
}

export default Footer
