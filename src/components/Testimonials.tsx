import React from 'react';

interface Testimonial {
  id: number;
  content: string;
  author: string;
  duration: string;
  image: string;
}

const testimonialData: Testimonial[] = [
  {
    id: 1,
    content: 'FitForce Gym completely transformed my fitness journey. The trainers are knowledgeable and the equipment is top-notch. I\'ve lost 30 pounds in just 6 months!',
    author: 'Amanda K.',
    duration: 'Member for 1 year',
    image: 'https://placehold.co/100x100/111/f00?text=A'
  },
  {
    id: 2,
    content: 'The personal training sessions have been a game-changer for me. My trainer understands my goals and pushes me to achieve them. Best gym experience ever!',
    author: 'Robert M.',
    duration: 'Member for 2 years',
    image: 'https://placehold.co/100x100/111/f00?text=R'
  },
  {
    id: 3,
    content: 'I love the variety of classes offered at FitForce. The instructors are motivating and the community is so supportive. I\'ve found my fitness home!',
    author: 'Jennifer L.',
    duration: 'Member for 6 months',
    image: 'https://placehold.co/100x100/111/f00?text=J'
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-5">
      <div className="container">
        <div className="section-title text-center mb-5">
          <h2>
            CLIENT <span className="text-danger">TESTIMONIALS</span>
          </h2>
          <p className="lead">What our members say about us</p>
        </div>
        <div className="row">
          {testimonialData.map((testimonial) => (
            <div key={testimonial.id} className="col-md-4 mb-4">
              <div className="testimonial-card">
                <div className="testimonial-content">
                  <p>{testimonial.content}</p>
                </div>
                <div className="testimonial-author">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="rounded-circle"
                  />
                  <div>
                    <h5>{testimonial.author}</h5>
                    <p>{testimonial.duration}</p>
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

export default Testimonials; 