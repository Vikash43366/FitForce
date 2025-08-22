import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero">
      <div className="container h-100">
        <div className="row h-100 align-items-center">
          <div className="col-md-6">
            <h1 className="display-4 fw-bold">
              BUILD YOUR <span className="text-danger">BODY</span>
            </h1>
            <h1 className="display-4 fw-bold">
              TRANSFORM YOUR <span className="text-danger">LIFE</span>
            </h1>
            <p className="lead my-4">
              Join our gym today and start your fitness journey with professional trainers
              and state-of-the-art equipment.
            </p>
            <Link to="/#pricing" className="btn btn-danger btn-lg">
              JOIN NOW
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 