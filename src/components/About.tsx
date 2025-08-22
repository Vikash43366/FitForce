import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <img
              src="https://th.bing.com/th/id/OIP.u84ZSv7Wh3knguaiGPHIJwHaLH?rs=1&pid=ImgDetMain"
              alt="About Us"
              className="img-fluid"
            />
          </div>
          <div className="col-lg-6">
            <div className="section-title">
              <h2>
                ABOUT <span className="text-danger">US</span>
              </h2>
            </div>
            <p>
              FitForce Gym is a premier fitness facility dedicated to helping you achieve
              your fitness goals. With over 10 years of experience, we've helped thousands
              of clients transform their bodies and lives.
            </p>
            <p>
              Our facility features the latest equipment, spacious workout areas, and
              expert trainers who are committed to your success.
            </p>
            <div className="row mt-4">
              <div className="col-md-6 mb-3">
                <div className="feature-box">
                  <i className="fas fa-dumbbell text-danger mb-2"></i>
                  <h5>Modern Equipment</h5>
                  <p>State-of-the-art machines for effective workouts</p>
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <div className="feature-box">
                  <i className="fas fa-users text-danger mb-2"></i>
                  <h5>Expert Trainers</h5>
                  <p>Certified professionals to guide your fitness journey</p>
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <div className="feature-box">
                  <i className="fas fa-clock text-danger mb-2"></i>
                  <h5>24/7 Access</h5>
                  <p>Train anytime that fits your schedule</p>
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <div className="feature-box">
                  <i className="fas fa-heart text-danger mb-2"></i>
                  <h5>Fitness Community</h5>
                  <p>Join a supportive community of fitness enthusiasts</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 