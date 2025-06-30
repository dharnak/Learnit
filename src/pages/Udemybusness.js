import React from 'react';
import '../css/UdemyBusiness.css';
import companyLogo from '../assets/log.svg'; 

function Udemybusness() {
  return (
    <div className="business-page">
      <section className="hero">
        <div className="hero-content">
          <h1>Upskill Your Team with Udemy Business</h1>
          <p>Train your employees with on-demand courses from top instructors. Stay competitive with industry-relevant skills.</p>
          <button className="cta-button">Get Started</button>
        </div>
      </section>

      <section className="features">
        <h2>Why Choose Udemy Business?</h2>
        <ul>
          <li>✅ Access to 10,000+ top-rated courses</li>
          <li>✅ Learn from industry experts</li>
          <li>✅ Flexible, self-paced learning</li>
          <li>✅ Track team progress and engagement</li>
        </ul>
      </section>

      <section className="trusted">
        <h2>Trusted by Leading Companies</h2>
        <div className="logo-row">
          <img src={companyLogo} alt="Company 1" />
          <img src={companyLogo} alt="Company 2" />
          <img src={companyLogo} alt="Company 3" />
          <img src={companyLogo} alt="Company 4" />
        </div>
      </section>
    </div>
  );
}

export default Udemybusness;
