import React, { useState, useEffect } from "react";
import ReviewCard from "../ReviewCard/ReviewCard";

const ReviewSection = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://still-ocean-48985.herokuapp.com/review")
      .then((response) => response.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className="mx-5">
      <h3 className="my-5 text-center">
        Client <span className="text-success">Feedback</span>
      </h3>
      <div className="d-flex flex-wrap justify-content-center align-items-center">
        {!reviews.length ? (
          <div class="d-flex justify-content-center text-info">
            <div class="spinner-border" role="status">
              <span class="sr-only">Loading...</span>
            </div>
          </div>
        ) : (
          reviews
            .slice(-3)
            .map((review) => <ReviewCard key={review._id} info={review} />)
        )}
      </div>
    </div>
  );
};

export default ReviewSection;
