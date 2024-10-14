import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { mockBarbers, mockAppointments } from './mockData';

const BookingPage = () => {
  const { barberId } = useParams();
  const navigate = useNavigate();
  const [appointmentDate, setAppointmentDate] = useState('');
  const [appointmentTime, setAppointmentTime] = useState('');

  const barber = mockBarbers.find(b => b.id === parseInt(barberId));

  const handleSubmit = (e) => {
    e.preventDefault();
    const newAppointment = {
      id: mockAppointments.length + 1,
      barberId: parseInt(barberId),
      date: appointmentDate,
      time: appointmentTime
    };
    mockAppointments.push(newAppointment);
    alert('Appointment booked successfully!');
    navigate('/');
  };

  if (!barber) return <div>Barber not found</div>;

  return (
    <div className="booking-page">
      <h1>Book an Appointment with {barber.name}</h1>
      <p>Speciality: {barber.speciality}</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            value={appointmentDate}
            onChange={(e) => setAppointmentDate(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="time">Time:</label>
          <input
            type="time"
            id="time"
            value={appointmentTime}
            onChange={(e) => setAppointmentTime(e.target.value)}
            required
          />
        </div>
        <button type="submit">Book Appointment</button>
      </form>
    </div>
  );
};

export default BookingPage;
