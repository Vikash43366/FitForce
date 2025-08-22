import React from 'react';

interface Trainer {
  id: number;
  name: string;
  role: string;
  description: string;
  image: string;
  socialLinks: {
    facebook: string;
    twitter: string;
    instagram: string;
  };
}

const trainersData: Trainer[] = [
  {
    id: 1,
    name: 'John Smith',
    role: 'Strength Specialist',
    description: 'With 10+ years of experience, John specializes in strength training and muscle building.',
    image: 'https://thumbs.dreamstime.com/b/portrait-personal-trainer-sports-outfit-fitness-center-gym-standing-strong-arms-crossed-portrait-personal-trainer-198135296.jpg',
    socialLinks: {
      facebook: '#',
      twitter: '#',
      instagram: '#'
    }
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    role: 'Cardio Expert',
    description: 'Sarah is our cardio specialist with expertise in HIIT and endurance training.',
    image: 'https://i.pinimg.com/736x/2b/fc/91/2bfc91c920c6488d2dffbf8fe4de33e9--cardiff-portrait.jpg',
    socialLinks: {
      facebook: '#',
      twitter: '#',
      instagram: '#'
    }
  },
  {
    id: 3,
    name: 'Mike Williams',
    role: 'Yoga Instructor',
    description: 'Mike brings 8 years of experience in yoga and mindfulness practices.',
    image: 'https://th.bing.com/th/id/OIP.k-A4dE1DJOavtyd0hSKc4wHaLH?rs=1&pid=ImgDetMain',
    socialLinks: {
      facebook: '#',
      twitter: '#',
      instagram: '#'
    }
  }
];

const Trainers: React.FC = () => {
  return (
    <section id="trainers" className="py-5">
      <div className="container">
        <div className="section-title text-center mb-5">
          <h2>
            OUR <span className="text-danger">TRAINERS</span>
          </h2>
          <p className="lead">Meet our team of expert fitness professionals</p>
        </div>
        <div className="row">
          {trainersData.map((trainer) => (
            <div key={trainer.id} className="col-md-4 mb-4">
              <div className="trainer-card">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="img-fluid"
                />
                <div className="trainer-info">
                  <h4>{trainer.name}</h4>
                  <p className="text-danger">{trainer.role}</p>
                  <p>{trainer.description}</p>
                  <div className="social-icons">
                    <a href={trainer.socialLinks.facebook}>
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href={trainer.socialLinks.twitter}>
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href={trainer.socialLinks.instagram}>
                      <i className="fab fa-instagram"></i>
                    </a>
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

export default Trainers; 