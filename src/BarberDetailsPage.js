import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { mockBarbers } from './mockData';

const BarberDetailsPage = () => {
  const { barberId } = useParams();
  const barber = mockBarbers.find(b => b.id === parseInt(barberId));

  if (!barber) return <div>Barber not found</div>;

  return (
    <div className="barber-details-page">
      <h1>{barber.name}</h1>
      <p>Speciality: {barber.speciality}</p>
      <Link to={`/booking/${barber.id}`}>Book an Appointment</Link>
    </div>
  );
};

export default BarberDetailsPage;
