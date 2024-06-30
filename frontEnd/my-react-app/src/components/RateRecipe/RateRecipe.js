import axios from 'axios';
import React, { useState } from 'react';
import Rating from 'react-rating';
import './RateRecipe.css'; // Assuming you have a CSS file for styling

function RateRecipe({ recipeId, userId }) {
  const [rating, setRating] = useState(0);
  const [ratingSubmitted, setRatingSubmitted] = useState(false);

  const handleSubmit = () => {
    axios.post(`http://localhost:3001/api/recipes/${recipeId}/rate`, {
      rate: rating,
      recipeId: recipeId,
    })
    .then(response => {
      // Handle success response
      console.log('Rating submitted:', response.data);
      setRatingSubmitted(true); // Set state to indicate rating has been submitted
      // Optionally, you can handle any state update or notification here
      window.location.reload(); // Reload the page after submission
    })
    .catch(error => {
      // Handle error response
      console.error('Error submitting rating:', error);
    });
  };

  if (ratingSubmitted) {
    return null; // Render nothing if rating has been submitted
  }

  return (
    <div className="rate-recipe">
      <h3>Rate this Recipe</h3>
      <Rating
        initialRating={rating}
        onChange={(value) => setRating(value)}
        emptySymbol={<i className="far fa-star"></i>}
        fullSymbol={<i className="fas fa-star"></i>}
        fractions={2}
      />
      <div>{rating} Stars</div>
      <button onClick={handleSubmit} className="btn" style={{ backgroundColor: 'orange' }}>
        Submit Rating
      </button>
    </div>
  );
}

export default RateRecipe;
