import React, { useState } from 'react';
import Swal from 'sweetalert2';

function Review() {
  const [formData, setFormData] = useState({
    name: '',
    rating: '',
    comment: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple form validation
    if (!formData.name || !formData.rating || !formData.comment) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please fill out all the fields!',
      });
      return;
    }

    // Show success alert
    Swal.fire({
      icon: 'success',
      title: 'Thank you for your review!',
      text: `Your review has been submitted successfully.`,
    });

    // Reset form
    setFormData({
      name: '',
      rating: '',
      comment: '',
    });
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Leave a Review</h2>
      <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: '600px' }}>
        {/* Name Field */}
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
        </div>

        {/* Rating Field */}
        <div className="mb-3">
          <label htmlFor="rating" className="form-label">
            Rating (1 to 5)
          </label>
          <select
            className="form-select"
            id="rating"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
          >
            <option value="">Select Rating</option>
            <option value="1">1 - Poor</option>
            <option value="2">2 - Fair</option>
            <option value="3">3 - Good</option>
            <option value="4">4 - Very Good</option>
            <option value="5">5 - Excellent</option>
          </select>
        </div>

        {/* Comment Field */}
        <div className="mb-3">
          <label htmlFor="comment" className="form-label">
            Comment
          </label>
          <textarea
            className="form-control"
            id="comment"
            name="comment"
            rows="5"
            value={formData.comment}
            onChange={handleChange}
            placeholder="Write your review here"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary w-100">
          Submit Review
        </button>
      </form>
    </div>
  );
}

export default Review;
