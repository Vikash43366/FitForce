import React from 'react';
import { Link } from 'react-router-dom';

interface GymClass {
  id: number;
  name: string;
  description: string;
  schedule: string;
  image: string;
}

const classesData: GymClass[] = [
  {
    id: 1,
    name: 'Strength Training',
    description: 'Build muscle and increase your strength with our comprehensive strength training program.',
    schedule: 'Mon, Wed, Fri: 6PM - 7PM',
    image: 'https://th.bing.com/th/id/OIP.F9g2wj-IqcHvrtIBXh9TXQHaE8?rs=1&pid=ImgDetMain'
  },
  {
    id: 2,
    name: 'Cardio Blast',
    description: 'Improve your cardiovascular health and burn calories with our high-energy cardio classes.',
    schedule: 'Tue, Thu: 5PM - 6PM',
    image: 'https://th.bing.com/th/id/OIP.tADHNUm0pr5Iyx5Wd3SCWQHaE8?w=1200&h=800&rs=1&pid=ImgDetMain'
  },
  {
    id: 3,
    name: 'Power Yoga',
    description: 'Enhance flexibility, balance, and mental clarity with our power yoga sessions.',
    schedule: 'Mon, Wed, Fri: 8AM - 9AM',
    image: 'https://wallpapercave.com/wp/wp3157195.jpg'
  }
];

const Classes: React.FC = () => {
  return (
    <section id="classes" className="py-5 bg-darker">
      <div className="container">
        <div className="section-title text-center mb-5">
          <h2>
            OUR <span className="text-danger">CLASSES</span>
          </h2>
          <p className="lead">
            Choose from a variety of classes designed to help you reach your fitness goals
          </p>
        </div>
        <div className="row">
          {classesData.map((gymClass) => (
            <div key={gymClass.id} className="col-md-4 mb-4">
              <div className="class-card">
                <img
                  src={gymClass.image}
                  alt={gymClass.name}
                  className="img-fluid"
                />
                <div className="class-info">
                  <h4>{gymClass.name}</h4>
                  <p>{gymClass.description}</p>
                  <div className="schedule">
                    <p>
                      <i className="far fa-clock me-2"></i>
                      {gymClass.schedule}
                    </p>
                    <Link to="/#contact" className="btn btn-outline-danger btn-sm">
                      Join Class
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Classes; 