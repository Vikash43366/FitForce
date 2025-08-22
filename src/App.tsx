import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Classes from './components/Classes';
import Trainers from './components/Trainers';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import BMICalculator from './components/BMICalculator';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Import Bootstrap and FontAwesome
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
// Import our custom styles
import './styles/global.css';

function App() {
  useEffect(() => {
    // Import Bootstrap JS
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Classes />
          <Trainers />
          <Pricing />
          <Testimonials />
          <BMICalculator />
          <Contact />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
