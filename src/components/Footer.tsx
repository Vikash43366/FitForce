import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the newsletter subscription
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  return (
    <footer className="py-4 bg-darker">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-4 mb-lg-0">
            <h4 className="text-white">
              FitForce<span className="text-danger">Gym</span>
            </h4>
            <p>
              Your ultimate fitness destination with state-of-the-art equipment and expert
              trainers to help you achieve your fitness goals.
            </p>
            <div className="social-icons">
              <a href="https://facebook.com" aria-label="Visit our Facebook page"><i className="fab fa-facebook-f"></i></a>
              <a href="https://twitter.com" aria-label="Visit our Twitter page"><i className="fab fa-twitter"></i></a>
              <a href="https://instagram.com" aria-label="Visit our Instagram page"><i className="fab fa-instagram"></i></a>
              <a href="https://youtube.com" aria-label="Visit our YouTube channel"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 mb-4 mb-md-0">
            <h5 className="text-white mb-4">Quick Links</h5>
            <ul className="footer-links">
              <li><Link to="/#home">Home</Link></li>
              <li><Link to="/#about">About</Link></li>
              <li><Link to="/#classes">Classes</Link></li>
              <li><Link to="/#trainers">Trainers</Link></li>
              <li><Link to="/#pricing">Pricing</Link></li>
              <li><Link to="/#contact">Contact</Link></li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-4 mb-4 mb-md-0">
            <h5 className="text-white mb-4">Classes</h5>
            <ul className="footer-links">
              <li><Link to="/#classes/strength-training">Strength Training</Link></li>
              <li><Link to="/#classes/cardio-blast">Cardio Blast</Link></li>
              <li><Link to="/#classes/power-yoga">Power Yoga</Link></li>
              <li><Link to="/#classes/hiit-workout">HIIT Workout</Link></li>
              <li><Link to="/#classes/crossfit">CrossFit</Link></li>
              <li><Link to="/#classes/boxing">Boxing</Link></li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-4">
            <h5 className="text-white mb-4">Newsletter</h5>
            <p>Subscribe to our newsletter for the latest updates and offers.</p>
            <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
              <div className="input-group mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button className="btn btn-danger" type="submit">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
        <hr className="mt-4 mb-4 bg-secondary" />
        <div className="row">
          <div className="col-md-6 text-center text-md-start">
            <p className="mb-0">
              &copy; {new Date().getFullYear()} FitForce Gym. All rights reserved.
            </p>
          </div>
          <div className="col-md-6 text-center text-md-end"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 