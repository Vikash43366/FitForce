import React from 'react';
import { Link } from 'react-router-dom';

interface PricingPlan {
  id: number;
  name: string;
  price: number;
  features: {
    text: string;
    included: boolean;
  }[];
  featured?: boolean;
}

const pricingData: PricingPlan[] = [
  {
    id: 1,
    name: 'Basic',
    price: 29,
    features: [
      { text: 'Gym access (6AM - 10PM)', included: true },
      { text: 'Basic equipment usage', included: true },
      { text: '2 group classes per week', included: true },
      { text: 'Personal trainer sessions', included: false },
      { text: 'Nutrition planning', included: false },
      { text: 'Access to premium areas', included: false }
    ]
  },
  {
    id: 2,
    name: 'Premium',
    price: 59,
    featured: true,
    features: [
      { text: '24/7 gym access', included: true },
      { text: 'Full equipment usage', included: true },
      { text: 'Unlimited group classes', included: true },
      { text: '2 personal trainer sessions/month', included: true },
      { text: 'Basic nutrition planning', included: true },
      { text: 'Access to premium areas', included: false }
    ]
  },
  {
    id: 3,
    name: 'Elite',
    price: 99,
    features: [
      { text: '24/7 gym access', included: true },
      { text: 'Full equipment usage', included: true },
      { text: 'Unlimited group classes', included: true },
      { text: '4 personal trainer sessions/month', included: true },
      { text: 'Advanced nutrition planning', included: true },
      { text: 'Access to premium areas', included: true }
    ]
  }
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-5 bg-darker">
      <div className="container">
        <div className="section-title text-center mb-5">
          <h2>
            MEMBERSHIP <span className="text-danger">PLANS</span>
          </h2>
          <p className="lead">Choose the perfect plan for your fitness journey</p>
        </div>
        <div className="row">
          {pricingData.map((plan) => (
            <div key={plan.id} className="col-md-4 mb-4">
              <div className={`pricing-card ${plan.featured ? 'featured' : ''}`}>
                <div className="pricing-header">
                  <h3>{plan.name}</h3>
                  <h1 className="price">
                    ${plan.price}<span>/month</span>
                  </h1>
                </div>
                <div className="pricing-features">
                  <ul>
                    {plan.features.map((feature, index) => (
                      <li key={index}>
                        <i
                          className={`fas ${
                            feature.included ? 'fa-check text-danger' : 'fa-times text-muted'
                          } me-2`}
                        ></i>
                        {feature.text}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pricing-footer">
                  <Link
                    to="/#contact"
                    className={`btn btn-lg w-100 ${
                      plan.featured ? 'btn-danger' : 'btn-outline-danger'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing; 