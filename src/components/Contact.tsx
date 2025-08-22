import React, { useState } from 'react';

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-5">
      <div className="container">
        <div className="section-title text-center mb-5">
          <h2>
            CONTACT <span className="text-danger">US</span>
          </h2>
          <p className="lead">Get in touch with us for any inquiries</p>
        </div>
        <div className="row">
          <div className="col-md-6 mb-4 mb-md-0">
            <div className="contact-info">
              <div className="info-item">
                <i className="fas fa-map-marker-alt text-danger"></i>
                <div>
                  <h5>Location</h5>
                  <p>123 Fitness Street, Gym City, GC 12345</p>
                </div>
              </div>
              <div className="info-item">
                <i className="fas fa-phone text-danger"></i>
                <div>
                  <h5>Phone</h5>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="info-item">
                <i className="fas fa-envelope text-danger"></i>
                <div>
                  <h5>Email</h5>
                  <p>info@fitforcegym.com</p>
                </div>
              </div>
              <div className="info-item">
                <i className="fas fa-clock text-danger"></i>
                <div>
                  <h5>Working Hours</h5>
                  <p>
                    Monday - Friday: 5AM - 11PM
                    <br />
                    Saturday - Sunday: 7AM - 9PM
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="contact-form">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    required
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    className="form-control"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Your Message"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-danger btn-lg w-100">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 