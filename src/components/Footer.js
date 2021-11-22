import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Footer.css';

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join the Adventure newsletter to receive our best vacation deals
        </p>
        <p className="footer-subscription-text">
          You can unsubscribe at any time.
        </p>
        <div className="input-areas">
          <form>
            <input
              type="email"
              placeholder="Yor Email"
              name="email"
              className="footer-input"
            />
          </form>
          <Button buttonStyle="btn--outline">Subscribe</Button>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to="/sign-up">How it works</Link>
            <Link to="/sign-up">Testimonials</Link>
            <Link to="/sign-up">Career</Link>
            <Link to="/sign-up">Invertors</Link>
            <Link to="/sign-up">Terms of service</Link>
          </div>
          <div className="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/sign-up">How it works</Link>
            <Link to="/sign-up">Testimonials</Link>
            <Link to="/sign-up">Career</Link>
            <Link to="/sign-up">Invertors</Link>
            <Link to="/sign-up">Terms of service</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Videos</h2>
            <Link to="/sign-up">How it works</Link>
            <Link to="/sign-up">Testimonials</Link>
            <Link to="/sign-up">Career</Link>
            <Link to="/sign-up">Invertors</Link>
            <Link to="/sign-up">Terms of service</Link>
          </div>
          <div className="footer-link-items">
            <h2>Social Media</h2>
            <Link to="/sign-up">How it works</Link>
            <Link to="/sign-up">Testimonials</Link>
            <Link to="/sign-up">Career</Link>
            <Link to="/sign-up">Invertors</Link>
            <Link to="/sign-up">Terms of service</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
