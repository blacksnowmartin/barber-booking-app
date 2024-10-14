import React from 'react';
import { Link } from 'react-router-dom';
import { mockBarbers } from './mockData';

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Welcome to our Barber Booking App!</h1>
      <p>Find your perfect barber and schedule an appointment.</p>
      
      <section className="featured-barbers">
        <h2>Featured Barbers</h2>
        <div className="barber-list">
          {mockBarbers.map(barber => (
            <div key={barber.id} className="barber-card">
              <h3>{barber.name}</h3>
              <p>Speciality: {barber.speciality}</p>
              <Link to={`/barber/${barber.id}`}>View Details</Link>
              <Link to={`/booking/${barber.id}`}>Book Now</Link>
            </div>
          ))}
        </div>
      </section>
      <section className="cta-section">
        <h2>Ready for a fresh look?</h2>
        <Link to="/booking" className="cta-button">Book an Appointment</Link>
      </section>
    </div>
  );
};

export default HomePage;
