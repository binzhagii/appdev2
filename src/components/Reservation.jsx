import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Reservation.css';

const BreakfastReservation = () => {
  const [reservationDetails, setReservationDetails] = useState({
    fullName: '',
    contactNumber: '',
    emailAddress: '',
    reservationDate: '',
    reservationTime: '',
    numberOfGuests: '',
    eventType: '',
    specialRequests: '',
    paymentMethod: '',
    additionalComments: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReservationDetails({
      ...reservationDetails,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Reservation successfully submitted!');
    setReservationDetails({
      fullName: '',
      contactNumber: '',
      emailAddress: '',
      reservationDate: '',
      reservationTime: '',
      numberOfGuests: '',
      eventType: '',
      specialRequests: '',
      paymentMethod: '',
      additionalComments: '',
    });
  };

  return (
    <div>
      {/* Full-Width Carousel */}
      <div id="breakfastCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="src/images/buffet.jpg"
              className="d-block w-100"
              alt="Delicious Breakfast Buffet"
            />
          </div>
          <div className="carousel-item">
            <img
              src="src/images/buffet2.jpg"
              className="d-block w-100"
              alt="Ko-Co Cafe Interior"
            />
          </div>
          <div className="carousel-item">
            <img
              src="src/images/buffet3.jpg"
              className="d-block w-100"
              alt="Satisfied Customers"
            />
          </div>
          <div className="carousel-item">
            <img
              src="src/images/buffet4.jpg"
              className="d-block w-100"
              alt="Satisfied Customers"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#breakfastCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#breakfastCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Reservation Form */}
      <div className="reservation-form-container">
        <h2>Reserve Your Slot for the First Breakfast Buffet!</h2>
        <p>Join us for a delightful weekend breakfast! Fill out the form below to reserve your table.</p>
        <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="fullName" className="form-label">Full Name</label>
    <input
      type="text"
      className="form-control"
      id="fullName"
      name="fullName"
      value={reservationDetails.fullName}
      onChange={handleChange}
      required
    />
  </div>
  <div className="mb-3">
    <label htmlFor="contactNumber" className="form-label">Contact Number</label>
    <input
      type="tel"
      className="form-control"
      id="contactNumber"
      name="contactNumber"
      value={reservationDetails.contactNumber}
      onChange={handleChange}
      required
    />
  </div>
  <div className="mb-3">
    <label htmlFor="emailAddress" className="form-label">Email Address</label>
    <input
      type="email"
      className="form-control"
      id="emailAddress"
      name="emailAddress"
      value={reservationDetails.emailAddress}
      onChange={handleChange}
      required
    />
  </div>
  <div className="mb-3">
    <label htmlFor="reservationDate" className="form-label">Preferred Reservation Date</label>
    <input
      type="date"
      className="form-control"
      id="reservationDate"
      name="reservationDate"
      value={reservationDetails.reservationDate}
      onChange={handleChange}
      required
    />
  </div>
  <div className="mb-3">
    <label htmlFor="reservationTime" className="form-label">Preferred Reservation Time</label>
    <input
      type="time"
      className="form-control"
      id="reservationTime"
      name="reservationTime"
      value={reservationDetails.reservationTime}
      onChange={handleChange}
      required
    />
  </div>
  <div className="mb-3">
    <label htmlFor="numberOfGuests" className="form-label">Number of Guests</label>
    <input
      type="number"
      className="form-control"
      id="numberOfGuests"
      name="numberOfGuests"
      value={reservationDetails.numberOfGuests}
      onChange={handleChange}
      required
    />
  </div>
  <div className="mb-3">
    <label htmlFor="eventType" className="form-label">Type of Event</label>
    <input
      type="text"
      className="form-control"
      id="eventType"
      name="eventType"
      value={reservationDetails.eventType}
      onChange={handleChange}
    />
  </div>
  <div className="mb-3">
    <label htmlFor="specialRequests" className="form-label">Special Requests or Accommodations</label>
    <textarea
      className="form-control"
      id="specialRequests"
      name="specialRequests"
      rows="3"
      value={reservationDetails.specialRequests}
      onChange={handleChange}
    ></textarea>
  </div>
  <div className="mb-3">
    <label htmlFor="paymentMethod" className="form-label">Payment Method</label>
    <select
      className="form-control"
      id="paymentMethod"
      name="paymentMethod"
      value={reservationDetails.paymentMethod}
      onChange={handleChange}
      required
    >
      <option value="">Select Payment Method</option>
      <option value="creditCard">Credit Card</option>
      <option value="bankTransfer">Bank Transfer</option>
      <option value="paypal">PayPal</option>
      <option value="cashOnArrival">Cash on Arrival</option>
    </select>
  </div>
  <div className="mb-3">
    <label htmlFor="additionalComments" className="form-label">Additional Comments or Questions</label>
    <textarea
      className="form-control"
      id="additionalComments"
      name="additionalComments"
      rows="3"
      value={reservationDetails.additionalComments}
      onChange={handleChange}
    ></textarea>
  </div>
  <button type="submit" className="btn btn-primary w-100">Reserve Now</button>
</form>

      </div>
    </div>
  );
};

export default BreakfastReservation;
